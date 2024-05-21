import express from 'express';

import User from '../../modules/user.js';
import saveHistory from '../../utils/saveHistory.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { listID } = req.body;
        const userId = req.session.userID;

        console.log(userId);

        const user = await User.findOne({ id: userId });

        if (!user) {
            const data = {
                status: 404,
                message: 'User not found',
            }
            saveHistory(data);
            return res.status(404).json({ message: 'User not found' });
        }

        const listIndex = user.lists.findIndex(list => list.id === listID);

        if (listIndex === -1) {
            const data = {
                status: 404,
                message: 'List not found',
                userId: req.session.userId
            }
            saveHistory(data);
            return res.status(404).json({ message: 'List not found' });
        }

        user.lists.splice(listIndex, 1);

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
});

export default router;