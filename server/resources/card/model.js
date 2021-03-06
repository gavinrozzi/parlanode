const mongoose = require('mongoose');

const schema = mongoose.Schema({

    dateTimeCreated : { type:Date, default:Date.now },
    name        : String,
    dataUrl     : { type:String, required:true},
    sourceType  : String,
    ejs         : String,
    group       : { type:String, index:true, required:true },
    method      : { type:String, index:true, required:true },
    uniquePath  : { type:String, required:true, unique:true },
    lastUpdate  : { type:Date, default:Date.now },
    type        : String,
    headerType  : { type:String, default:'poslanec' }

});


mongoose.model('Card', schema);