const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    offer: { type: Number },
    productImg: [
        { img: { type: String } }
    ],
    reviews: [{
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',

        },
        review: String
    }],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    updatedAt: Date,

}, { timeStamp: true });

module.exports = mongoose.model('Products', productSchema);