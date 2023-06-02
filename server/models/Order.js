const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    vacation: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: false,
    },
    terms: {
        type: Boolean,
        required: true,
        default: false
    },
});

const Order = mongoose.model('order', orderSchema);

exports.Order = Order;