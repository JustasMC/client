const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true,
        trim:true,
        unique: 1
    },
    Age:{
        type:String,
        required:true,
        minlength: 6
    }
})

const User = mongoose.model('User',userSchema);
module.exports = { User }