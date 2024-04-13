const mongoose = require('mongoose')
const teacherSchema = mongoose.Schema({
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
        required:true
    },
    salary:Number,
    subject:{
        type:String,
        require:true
    },
    // image:{
    //     type:String,
    //     require:true
    // },
    
    password:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true
    },
    qualification:{
        type:String,
        required:true
    },
    // creator: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Director',
    //     required: true
    // },

},{timestamps: true})
module.exports = mongoose.model('Teacher', teacherSchema);

 