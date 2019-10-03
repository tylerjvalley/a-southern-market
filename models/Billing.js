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
    }

});

module.exports = Billing = mongoose.model('Billing', BillingSchema);