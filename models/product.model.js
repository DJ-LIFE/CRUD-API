const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const ItemSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Enter your item here"],
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
            default: 0
        },
        image: {
            type: String,
            required: false
        },
    },
    {
        timestamps: true,
    },
);

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;