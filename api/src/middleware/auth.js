const jwt = require("jsonwebtoken");
const User = require("../models/user");

// inspired by - https://dev.to/mr_cea/remaining-stateless-jwt-cookies-in-node-js-3lle
const auth = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res
                .status(401)
                .json("Please login or register for an account!");
        }

        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({
            _id: decoded._id,
            "tokens.token": token
        });

        if (!user) {
            throw new Error();
        }

        req.token = token;
        req.user = user;

        next();
    } catch (e) {
        res.status(401).send({ error: "Please login" });
    }
};

module.exports = auth;
