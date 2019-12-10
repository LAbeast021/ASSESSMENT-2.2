var mongoose = require('mongoose');
var Schema = mongoose.Schema

var hobbieSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    caption:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Hobbie', hobbieSchema);