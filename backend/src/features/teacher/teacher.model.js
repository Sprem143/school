const mongoose = require('mongoose')

const teacherSchema = mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true
    }
},{timestamps: true})
module.exports = mongoose.model('Teacher', teacherSchema);
 