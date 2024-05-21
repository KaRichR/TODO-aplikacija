import express from "express";
import bcrypt from "bcrypt";

import User from "../../modules/user.js";
import saveHistory from "../../utils/saveHistory.js";

const router = express.Router();

router.post('/', async (req, res) => {
    let userId;
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });

        if (!user) {
            const data = {
                status: 404,
                message: 'User not found',
                userId: null
            };
            saveHistory(data);
            return res.status(404).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            const data = {
                status: 401,
                message: 'Wrong password',
                userId: null
            };
            saveHistory(data);
            return res.status(401).json({ message: 'Wrong password' });
        }

        req.session.userID = user.id;
        req.session.save();
        res.status(200).json({ message: 'Login successful', userId: user.id });
        
    } catch (error) {
        const data = {
            status: 500,
            message: 'Internal server error',
            error,
            userId
        };
        saveHistory(data);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
