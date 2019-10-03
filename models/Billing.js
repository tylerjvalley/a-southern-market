const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BillingSchema = new Schema({

    fullName: {
        type: String,
        require: true
    },

    cardNumber: {
        type: Number,
        require: true
    },

    expiration: {
        type: String,
        require: true
    },

    cvv: {
        type: Number,
        require: true
    },

    orderTotal: {
        type: Number,
        require: true
    },

    email: {
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

module.exports = Billing = mongoose.model('Billing', BillingSchema);