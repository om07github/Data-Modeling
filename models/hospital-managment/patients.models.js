import mongoose from "mongoose";

const patientsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    diaganosedWith:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    bloodGroup:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    bloodGroup:{
        type: String,
        enum: ["M","F","o"],
        required: true
    },
    admittedIn:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    },
},{timestamps:true})

export const Patients = mongoose.model("Patients",patientsSchema)