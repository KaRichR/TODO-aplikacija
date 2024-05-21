import express from "express";

import saveHistory from "../../utils/saveHistory.js";

const router = express.Router();

router.post('/', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            const data = {
                status: 500,
                message: 'Internal server error',
                error: err,
                userId: req.session.userId
            }
            saveHistory(data);

            res.status(500).json({ message: 'Internal server error' });
        } else {
            res.json({ message: 'Logout successful' });
        }
    });
});

export default router;
