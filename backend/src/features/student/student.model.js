// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    mobile:{
        type:Number,
        require:true,
        unique:true
    },
    address:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        requried:true
    },
    fatherName:{
        type:String,
        require:true
    },
    class:{
        type:String,
        require:true
    },
    
    image:{
        type:String,
        require:true
    },
    
    password:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true
    },
    standard:{
        type:String,
        require:true
    },
    dob:{
        type:String,
        require:true
    },
   attendance:{
    type:[Object],
    default:[{}]
   }

},{timestamps: true});

module.exports = mongoose.model('Student', userSchema);
