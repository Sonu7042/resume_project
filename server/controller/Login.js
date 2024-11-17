const userModel = require('../Schma/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const serectKey = "dskfjsdkjf"


const Login = async (req, res) => {
    try {

        const { email, password } = req.body

        if (!email) {
            throw new Error("pls provide Email")
        }

        if (!password) {
            throw new Error("pls provide password")
        }


        const user = await userModel.findOne({ email })

        if (!user) {
            throw new Error("User not Found")
        }

        const checkPassword = await bcrypt.compare(password, user.password)

        if (!checkPassword) {
            throw new Error("Invailed credentials!")
        }

        const token = await jwt.sign({ _id: user._id }, serectKey, { expiresIn: 7 * 24 * 60 * 60 })

        res.status(200).json({
            message: "Login Successfully",
            success: true,
            error: false,
            token: token
        })




    }
    catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })

    }

}


module.exports = Login
