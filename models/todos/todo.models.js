import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    complete: {
        type: String,
        default: false,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, // to get the reference form other models we have to set "type" file like this
        ref: "User"
    },
    subtodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo"
        }
    ] // Array of sub-todos
},{timestamps: true})

export const Todo = mongoose.model('Todo',todoSchema)