import express from 'express';

import User from '../../modules/user.js';
import saveHistory from '../../utils/saveHistory.js';

const router = express.Router();

router.get('/:taskID', async (req, res) => {
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

        user.lists.forEach(list => {
            list.tasks.forEach(task => {
                if (task.id === taskID) {
                    return res.status(200).json({ task });
                }
            });
        });
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