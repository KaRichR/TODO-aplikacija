import express from 'express';
import crypto from 'crypto';

import List from '../../modules/list.js';
import User from '../../modules/user.js';

import saveHistory from '../../utils/saveHistory.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { title, color } = req.body;
        const userId = req.session.userID;

        const listID = crypto.randomUUID();

        const list = new List({
            id: listID,
            title,
            color,
        }, { _id : false });
        const user = await User.findOne({ id: userId });

        if (!user) {
            const data = {
                status: 404,
                message: 'User not found',
            }
            saveHistory(data);
            return res.status(404).json({ message: 'User not found' });
        }
        if(!title) {
            return res.status(400).json({ message: 'Title is required' });
        }

        user.lists.push(list);

        await user.save();

        res.status(201).json({ message: 'List added successfully' });
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

export default router;