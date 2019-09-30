const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    
    lastName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    wishList: {
        type: Array,
        required: false
    },

    cart: {
        type: Array,
        required: false
    },

    date: {
        type: Date,
        default: Date.now
    },

    isAdmin: {
        type: Boolean,
        default: false
    }
});

module.exports = User = mongoose.model('User', UserSchema);