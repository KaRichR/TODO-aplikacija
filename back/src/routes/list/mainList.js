import express from 'express';

// @ Routes
import addList from './add.js';
import deleteList from './deleteList.js';
import updateList from './update.js';
import lists from './lists.js';
import list from './list.js';

const router = express.Router();

router.use('/add', addList);
router.use('/delete', deleteList);
router.use('/update', updateList);
router.use('/lists', lists);
router.use('/', list);

export default router;