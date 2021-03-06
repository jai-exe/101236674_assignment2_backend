const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    id: {
        type: Number,
        trim: true,
        required: [true, "ID is required"]
    },
    firstname: {
        type: String,
        trim: true,
        required: [true, "First Name is required"]
    },
    lastname: {
        type: String,
        trim: true,
        required: [true, "Last Name is required"]
    },
    emailid: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: "Email address is required",
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"]
    }
})

const employee = mongoose.model("employee", schema)

module.exports = employee
