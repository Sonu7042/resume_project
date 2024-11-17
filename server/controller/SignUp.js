const userModel = require('../Schma/user'); // Correct path
const bcrypt = require('bcryptjs');

const SignUp = async (req, res) => {
    try {
        const { name, email, password, contact } = req.body;

        if (!name) {
            throw new Error("Please provide name");
        }

        if (!email) {
            throw new Error("Please provide email");
        }

        if (!password) {
            throw new Error("Please provide password");
        }

        if (!contact) {
            throw new Error("Please provide contact");
        }

        const user = await userModel.findOne({ email });
        if (user) {
            throw new Error("This user already signed up");
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const payload = {
            ...req.body,
            password: hashPassword
        };

        const userData = new userModel(payload);

        const saveData = await userData.save();

        res.status(200).json({
            message: "User signed up successfully",
            success: true,
            error: false,
            data: saveData
        });
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            success: false,
            error: true
        });
    }
};

module.exports = SignUp;
