import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        lowercase: true,
        uniqe: true,
        required: true,
    },
    email:{
        type: String,
        lowercase: true,
        uniqe: true,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
},{timestamps:true})

export const user = mongoose.model('User',userSchema)