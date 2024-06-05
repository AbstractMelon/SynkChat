const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/constants");

exports.register = async (data) => {
    const { email, password } = data;
    const user = await User.findOne({ email });
    if (user) {
        throw new Error("User already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ email, password: hashedPassword });
    return newUser;
};

exports.login = async (data) => {
    const { email, password } = data;
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("User not found");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Invalid credentials");
    }
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
        expiresIn: "1h",
    });
    return token;
};
