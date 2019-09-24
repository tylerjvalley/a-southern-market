const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    vendor: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: false
    },

    itemImage: {
        type: String,
        required: false
    },

    date: {
        type: Date,
        default: Date.now
    }, 
})

module.exports = Item = mongoose.model('Item', ItemSchema);