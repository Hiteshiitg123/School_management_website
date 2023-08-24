const { guest } = require('../models/guests');
const jwt = require("jsonwebtoken");
const passport = require("passport");



const createGuest = async (req, res) => {
    try {
        const existingguest = await guest.findOne(req.body)
        if (existingguest) {
            const token = jwt.sign({ userId: existingguest._id }, 'secret', { expiresIn: '1h' });
            res.json({ token });
        }
        else {
            const newUser = new guest(req.body);
            await newUser.save();
            const exist = await guest.findOne(req.body)
            const token = jwt.sign({ userId:exist._id }, 'secret', { expiresIn: '1h' });
            res.json({token});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating user' });
    }
};

module.exports = { createGuest };