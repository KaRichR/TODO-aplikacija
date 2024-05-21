import mongoose from "mongoose";
import { taskSchema } from "./task.js";

export const listSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    tasks: [
        taskSchema
    ]
})

const listModel = mongoose.model('List', listSchema);

export default listModel