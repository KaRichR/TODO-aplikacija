import mongoose from "mongoose";

export const taskSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
        maxLength: 128
    },
    description: {
        type: String,
        required: true,
        maxLength: 1024
    },
    dueDate: {
        type: Date,
    },
    status: {
        type: String,
        default: "To do"
    },
    priority: {
        type: String,
        default: "Low"
    }
})

const TaskModel = mongoose.model('Task', taskSchema);

export default TaskModel;