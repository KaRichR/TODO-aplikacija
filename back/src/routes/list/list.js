import express from 'express';

import User from '../../modules/user.js';
import saveHistory from '../../utils/saveHistory.js';

const router = express.Router();

router.get('/:listID', async (req, res) => {
    try {
        const userId = req.session.userID;
        const { listID } = req.params;
        
        const user = await User.findOne({ id: userId });    

        if (!user) {
            const data = {
                status: 404,
                message: 'User not found',
            }
            saveHistory(data);
            return res.status(404).json({ message: 'User not found' });
        }

        if (listID === "upcoming") {
            
            const sevenWeeksFromNow = new Date();
            sevenWeeksFromNow.setDate(sevenWeeksFromNow.getDate() + 7 * 7);

            const upcomingLists = user.lists.filter(task => {
                const dueDate = new Date(task.dueDate);
                return dueDate <= sevenWeeksFromNow;
            });

            return res.status(200).json({ lists: upcomingLists });
        }

        const list = user.lists.find(list => list.id === listID);

        if (!list) {
            const data = {
                status: 404,
                message: 'List not found',
            }
            saveHistory(data);
            return res.status(404).json({ message: 'List not found' });
        }
        res.status(200).json({ lists: list });
    }
    catch (error) {
        const data = {
            status: 500,
            message: 'Internal server error',
            error: error,
            userId: req.session.userID
        }
        saveHistory(data);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;