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

    vendor: {
        type: String,
        required: true
    },

    image: {
        type: String, 
        required: false
    },

    category: {
        type: String,
        required: false
    },

    date: {
        type: Date,
        default: Date.now
    }, 
})

module.exports = Item = mongoose.model('Item', ItemSchema);