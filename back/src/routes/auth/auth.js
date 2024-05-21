import express from 'express';

// @ Routes
import register from './register.js';
import login from './login.js';
import status from './status.js';
import logout from './logout.js';

const router = express.Router();



router.use('/register', register);
router.use('/', login);
router.use('/status', status);
router.use('/logout', logout);

export default router;