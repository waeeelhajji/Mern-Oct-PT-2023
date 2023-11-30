const mongoose = require("mongoose")


const Student = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "the first name is required"]
    },
    LastName: {
        type: String,
        required: [true, "the first name is required"]
    },
    age: {
        type: Number,
        required: [true, "Age is required"]
    }
}, { timestamps: true })


const StudentSchema = mongoose.model("StudentSchema", Student)

module.exports = StudentSchema