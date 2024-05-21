import express from 'express';
import crypto from 'crypto';

import Task from '../../modules/task.js';
import User from '../../modules/user.js';

import saveHistory from '../../utils/saveHistory.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { listID, title, description, dueDate, status, priority } = req.body;
        const userId = req.session.userID;

        const id = crypto.randomUUID();

        const task = new Task({
            id,
            title,
            description,
            dueDate,
            status,
            priority
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

        const list = user.lists.find(list => list.id === listID);
        if (!list) {
            const data = {
                status: 404,
                message: 'List not found',
                userID: req.session.userID
            }
            saveHistory(data);
            return res.status(404).json({ message: 'List not found' });
        }

        if(!title) {
            return res.status(400).json({ message: 'Title is required' });
        }
        else if(!description) {
            return res.status(400).json({ message: 'Description is required' });
        }

        list.tasks.push(task);

        await user.save();

        res.status(201).json({ message: 'Task added successfully' });
    }
    catch (error) {
        const data = {
            status: 500,
            message: 'Internal server error',
            error: error,
            userID: req.session.userID
        }
        saveHistory(data);
        res.status(500).json({ message: 'Internal server error' });
    }
})

export default router;