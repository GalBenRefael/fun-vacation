const { Order } = require('../models/Order');
const joi = require('joi');

module.exports = {
    add: async function (req, res, next) {
        try {
            const scheme = joi.object({
                vacation: joi.string().required(),
                email: joi.string().optional().allow(''),
                name: joi.string().required(),
                terms: joi.boolean().required(),
            });

            const { error, value } = scheme.validate(req.body);

            if (error) {
                console.log(error.details[0].message);
                res.status(400).json({ error: "invalid data" });
                return;
            }

            const newOrder = new Order(value);
            const result = await newOrder.save();

            res.json({
                ...value,
                _id: result._id
            });
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ error: "error add order" });
        }
    },
}