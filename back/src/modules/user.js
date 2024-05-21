import mongoose from "mongoose";
import { listSchema } from "./list.js";

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    lists: [
        listSchema
    ]
})

const userModel = mongoose.model('User', userSchema);
export default userModel;