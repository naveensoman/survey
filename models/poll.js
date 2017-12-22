//Schema Poll Setup
var mongoose = require("mongoose");
var pollSchema = new mongoose.Schema({
    name: String,
    age: String,
    rating: {
        food: Number,
        service: Number,
        ambience: Number,
        pricing: Number
    },
    comments: String
});

module.exports = mongoose.model("Poll", pollSchema);