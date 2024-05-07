const mongoose = require('mongoose');



const taskScheme = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    title: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:false
    },
    status: {
        type:String,
        required:true
    },
    priority: {
        type:String,
        required:true
    }
});

module.exports = taskModule = new mongoose.model('Task', taskScheme);