const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({

    price: {
        type: Number,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    firstName: {
        type: String, 
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    address1: {
        type: String,
        required: true
    },

    address2: {
        type: String,
        required: false
    },

    company: {
        type: String,
        required: false
    },

    city: {
        type: String,
        required: true
    },

    state: {
        type: String,
        required: true
    },

    zip: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    shipping: {
        type: Number,
        required: true
    }


});

module.exports = Cart = mongoose.model('Cart', CartSchema);