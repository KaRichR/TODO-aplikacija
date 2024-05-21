import express from 'express';

import User from '../../modules/user.js';
import saveHistory from '../../utils/saveHistory.js';


const router = express.Router();

router.delete('/:taskID', async (req, res) => {
    try {
        const { taskID } = req.params;
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

        let taskFound = false;

        user.lists.forEach(list => {
            const initialLength = list.tasks.length;
            list.tasks = list.tasks.filter(task => task.id !== taskID);
            if (initialLength !== list.tasks.length) {
                taskFound = true;
            }
        });

        if (!taskFound) {
            const data = {
                status: 404,
                message: 'Task not found',
            };
            saveHistory(data);
            return res.status(404).json({ message: 'Task not found' });
        }

        // save the user after deleting the task
        await user.save();

        res.status(200).json({ message: 'List deleted successfully' });
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
})

export default router