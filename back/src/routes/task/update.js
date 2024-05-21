import express from 'express';

import User from '../../modules/user.js';
import saveHistory from '../../utils/saveHistory.js';

const router = express.Router();

router.patch('/', async (req, res) => {
    try {
        const { taskID, title, description, dueDate, status, priority } = req.body;
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

        user.lists.forEach(list => {
            const task = list.tasks.find(task => task.id === taskID);
            if (task) {
                if (title) {
                    task.title = title;
                    console.log(title);
                }
                if(description) {
                    task.description = description;
                    console.log(description);
                }
                if(dueDate) {
                    task.dueDate = dueDate;
                    console.log(dueDate);
                }
                if(status) {
                    task.status = status;
                    console.log(status);
                }
                if(priority) {
                    task.priority = priority;
                    console.log(priority);
                }
            }
        });

        await user.save();

        res.status(200).json({ message: 'List updated successfully' });
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