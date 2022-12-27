const { User } = require("../models/model");
const bcrypt = require("bcrypt");

const authController = {
    //REGISTER
    registerUser: async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.userPassword, salt);

            //Create new user
            const newUser = await new User({
                userName: req.body.userName,
                userEmail: req.body.userEmail,
                userPassword: hashed,
            });

            //Save user to DB
            const user = await newUser.save();
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //LOGIN
    loginUser: async (req, res) => {
        try {
            const user = await User.findOne({ userEmail: req.body.userEmail });
            if (!user) {
                res.status(404).json("Incorrect user email");
            }
            const validPassword = await bcrypt.compare(
                req.body.userPassword,
                user.userPassword
            );
            if (!validPassword) {
                res.status(404).json("Incorrect password");
            }
            if (user && validPassword) {
                res.status(200).json(user);
            }
        } catch (err) {
            res.status(500).json(err);
        }
    }
};

module.exports = authController;