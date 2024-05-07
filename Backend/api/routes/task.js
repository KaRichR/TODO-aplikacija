const express = require('express');
const mongoose = require('mongoose');
const uuidv4 = require('uuidv4');

const Task = require('../modules/task');

const router = express.Router();

router.post('/task/add', async(res, req) => {
    const user = req.user
    const data = req.data

    const db = Task.create({
        id:uuidv4(),
        title:data.title,
        description:data.description,
        status:data.status,
        priority:data.priority
    })

    await db.save();
})


module.exports = router;