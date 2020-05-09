const mongoose = require("mongoose");

const Book = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },

    author: {
        type: String,
        require: true
    },

    numberPages: {
        type: Number,
        require: false
    },

    publisher: {
        type: String,
        require: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Book", Book);