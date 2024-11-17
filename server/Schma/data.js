const mongoose = require('mongoose')


const dataSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    contact: Number,
    role: {
        type: String,
        required: true
    }

})


const dataModel = mongoose.model("data", dataSchema)
module.exports = dataModel