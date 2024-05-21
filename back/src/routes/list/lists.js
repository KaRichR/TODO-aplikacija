import express from 'express';

import User from '../../modules/user.js';
import saveHistory from '../../utils/saveHistory.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const userId = req.session.userID;
        
        const user = await User.findOne({ id: userId });
        
        if (!user) {
            const data = {
                status: 404,
                message: 'User not found',
            }
            saveHistory(data);
            return res.status(404).json({ message: 'User not found' });
        }

        const today = new Date();
        const nextWeek = new Date(today);
        nextWeek.setDate(nextWeek.getDate() + 7);

        let upcomingTasks = [];

        user.lists.forEach(list => {
            list.tasks.forEach(task => {
                if (task.dueDate >= today && task.dueDate <= nextWeek) {
                    upcomingTasks.push(task);
                }
            });
        });

        const upcomingList = {
            id: 'upcoming',
            title: 'Upcoming',
            icon: 'tabler:calendar-exclamation',
            tasks: upcomingTasks
        };

        const listsWithUpcoming = [...user.lists, upcomingList];
        res.status(200).json({ lists: listsWithUpcoming });
    }
    catch (error) {
        const data = {
            status: 500,
            message: 'Internal server error',
            error: error,
            userId: req.session.userId
        }
        saveHistory(data);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;