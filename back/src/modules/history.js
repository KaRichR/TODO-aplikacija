import mongoose from "mongoose";

const historySchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    status: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    error: {
        type: String,
    },
    userId: {
        type: String,
    }
})

const historyModel = mongoose.model('History', historySchema);
export default historyModel;