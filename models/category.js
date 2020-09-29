var mongoose = require("mongoose");

var categorySchema = new mongoose.Schema({
    name:String,
    curr:{type:Number,
        default:0
    },
    questions:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"question"
        }
    ]
})

module.exports = mongoose.model("category",categorySchema);



