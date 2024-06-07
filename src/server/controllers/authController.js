const bcrypt = require("bcrypt");
const User = require("../models/User");
const authService = require("../services/authService");
const mongoose = require("mongoose");

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        const token = await authService.generateToken(user);

        res.status(200).json({
            user: {
                username: user.username,
                userId: user._id,
                email: user.email
            },
            token
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.register = async (data) => {
    const { email, password, username } = data;
    const user = await User.findOne({ email });
    if (user) {
        throw new Error("User already exists");
    }

    const userId = new mongoose.Types.ObjectId();

    const newUser = await User.create({ email, password, username, _id: userId });
    return newUser;
};
