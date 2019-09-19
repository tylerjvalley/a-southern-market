const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VendorSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    street: {
        type: String,
        required: true
    },

    state: {
        type: String,
        required: true
    },

    zipCode: {
        type: String,
        required: true
    },

    items: {
        type: Array,
        required: false
    },

    date: {
        type: Date,
        default: Date.now
    },

});

module.exports = Vendor = mongoose.model('vendors', VendorSchema);