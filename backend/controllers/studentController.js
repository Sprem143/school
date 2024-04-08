const Student = require('../models/Student');
exports.signup = async (req, res) => {
  try {
    const {username,email,password} = req.body;
    const newUser = new Student({username:username,email:email,password:password});
    await newUser.save();
         res.status(201).json({ message: 'User created successfully'});
  } catch(error){
    console.error('Error signing up user', error);
    res.status(500).json({ message: 'Error signing up student' });
  }
};

exports.signin = async(req,res)=>{
  try{
    const{email,password}=req.body;
    const user = await Student.findOne({email});
    if(!user){
      res.send("user not found")
    }else{
      if(user.password==password){
        res.send("login successfully")

      }else{res.send("wrong Password")}
    }
  }catch(err){
    console.error('Error signing in user', err);
    res.status(500).json({ message: 'Error signing in student' });
  }
}
