import express from "express";
import crypto from "crypto";
import bcrypt from "bcrypt";

import User from "../../modules/user.js";
import saveHistory from "../../utils/saveHistory.js";

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const {username, email, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const id = crypto.randomUUID();

        
        const user = new User({
            id,
            username,
            email,
            password: hashedPassword
        });

        console.log(user);
        await user.save();
        console.log('User registered successfully');
        res.status(201).json({ message: 'User registered successfully', userId: user.id })
    }
    catch (error) {
        console.error('Error saving user:', error); 
        const data = {
            status: 500,
            message: 'Internal server error',
            error,
        };
        saveHistory(data);

        res.status(500).json({ error: 'Internal server error' });
    }
})

export default router;