import mongoose from "mongoose";

const orderitemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity:{
        type: Number,
        required: true
    }
})

const orderSchema = new mongoose.Schema({
    orderprice: {
        type: String,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderitems: {
       type: [orderitemSchema]
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["PENDING", "CANCELLED", "DELIVERED"],
        default: "PENDING"
    }
},{timestamps:true})

export const Order = mongoose.model('Order',orderSchema)