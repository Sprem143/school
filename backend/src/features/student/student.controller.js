const Student = require('./student.model');

exports.signin=async(req,res)=>{
const{email,password}= req.body;

try{
    const student =await Student.findOne({email});
    if(student){
        if(password==student.password){
            res.status(200).json(req.body);
        }else{
            res.json({message:"Incorrect password"})
        }
    }else{
        res.status(404).json({message:"Student not found"})
    }
}catch(err){

   }
}


// ------log out function---------
exports.logout = async(req,res)=>{
    try{
        req.session.destroy((err) => {
            if (err) {
                console.error('Error destroying session:', err);
                res.status(500).send('Internal Server Error');
            } else {
                res.send('Logged out successfully');
            }
        });
    }catch(err){
        res.status(201).json({message:"Error while loging out director"})
    }
}