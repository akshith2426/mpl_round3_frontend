var mongoose = require("mongoose");

var questionSchema = new mongoose.Schema({
    desc:String,
    points:Number,
})

module.exports = mongoose.model("question",questionSchema);
