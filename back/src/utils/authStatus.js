import saveHistory from "./saveHistory.js";

export default function isAuthenticated(req, res, next) {
    if (req.session.userID) {
        next();
    } else {
        const data = {
            status: 401,
            message: 'Unauthorized',
        }
        saveHistory(data);
        res.status(401).json({ message: 'Unauthorized', authenticated: false, });
    }
}