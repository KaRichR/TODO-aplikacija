import express from 'express';

import User from '../../modules/user.js';
import saveHistory from '../../utils/saveHistory.js';

const router = express.Router();

router.patch('/', async (req, res) => {
    try {
        const { listID, title, color } = req.body;
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

        if(title) {
            user.lists[listIndex].title = title;
        }
        if(color) {
            user.lists[listIndex].color = color;
        }

        await user.save();

        console.log(title, color);

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