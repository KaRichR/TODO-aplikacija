import express from 'express';

// @ Routes
import addTask from './add.js';
import deleteTask from './delete.js';
import update from './update.js';
import upcoming from './upcoming.js';
import tasks from './tasks.js';

const router = express.Router();

router.use('/add', addTask);
router.use('/delete', deleteTask);
router.use('/update', update);
router.use('/upcoming', upcoming);
router.use('/', tasks);


export default router;