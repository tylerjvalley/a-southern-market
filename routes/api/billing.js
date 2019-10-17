const express = require('express');
const router = express.Router();


const Order = require('../../models/Billing');

//Order validation
const validateOrderInput = require('../../validation/billing');

router.post('/order', (req, res) => {
    // Form validation
    const { errors, isValid } = validateOrderInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    Order.findOne({ id: req.body._id }).then(order => {
        if (order) {
            return res.status(400).json({ order: "Order already placed" });
        } else {
            const newOrder = new Order({
                fullName: req.body.fullName,
                cardNumber: req.body.cardNumber,
                expiration: req.body.expiration,
                cvv: req.body.cvv,
                quantity: req.body.quantity,
                orderTotal: req.body.orderTotal,
                email: req.body.email,
                address1: req.body.address1,
                address2: req.body.address2,
                company: req.body.company,
                city: req.body.city,
                state: req.body.state,
                zip: req.body.zip,
                phone: req.body.phone,
                shipping: req.body.shipping
            });

            newOrder
                .save()
                .then(item => res.json(item))
                .catch(err => console.log(err));
        }
    });
});



module.exports = router;