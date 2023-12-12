const mongoose = require("mongoose")


const Note = new mongoose.Schema({
    Title: {
        type: String,
        required: [true, "the Title is required"],
        minLength: [3, "Title must be more than 3 characters"]
    },
    Content: {
        type: String,
        minLength: [10, "Content must be more than 10 characters"]
    },
    isImportant: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })


const NoteS = mongoose.model("NoteS", Note)

module.exports = NoteS