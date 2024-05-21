import express from "express";
import isAuthenticated from "../../utils/authStatus.js";

const router = express.Router();

router.get('/', isAuthenticated, (req, res) => {
    res.status(200).json({ authenticated: true, userID: req.session.userID });
});

export default router;
