const Director = require('./director.model');
const Student = require('../student/student.model');
const Teacher = require('../teacher/teacher.model');
const bcrypt = require('bcryptjs');
const session = require('express-session');

exports.signup = async(req,res)=>{
try{
    const director = new Director(req.body);
await director.save();
res.status(200).json(req.body);
}catch(err){
    res.status(201).json({message:"Error while signing up director"})
  }
}

// --------director sign in --------
exports.signin=async(req,res)=>{
    const{email,password}= req.body;
    try{
       
    let director = await Director.findOne({ email });
    if(director) {
        if (password == director.password){
            req.session.directorEmail = {
                email:email,
                password:password
            }
            res.status(200).json({message:"Login successfully", status:200});
        } else {
            res.status(404).json({ message: 'Incorrect password' });
        }
    } else {
        res.status(404).json({ message: 'Director not found' });
    }
} catch (err) {
    console.error('Error:', err);
    res.status(500).json({ message: 'Internal Server Error' });
}
    }
// ---------add a student ----------
exports.addstudent=async(req,res)=>{
    try{
        const newStudent = new Student(req.body);
        await newStudent.save();
        res.status(200).json({message:"Student added successfully"})

    }catch(err){
      res.status(201).json({message:"Error while adding student"})
    }
}

// --------add teacher------------
exports.addteacher=async(req,res)=>{
    try{
         const newTeacher = new Teacher(req.body);
         await newTeacher.save();
         res.status(200).json({message:"Teacher added successfully"})
    }catch(err){
        res.status(201).json({message:"Error while adding teacher"})
    }
}
// ----- log out ------------
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

// ------------ get all student list---------

exports.getallstudents=async(req,res)=>{
    try{
        let students=await Student.find();
       res.status(200).json(students)
    }catch(err){
        res.status(201).json({message:"Error while getting student list"})

    }
}

// ----------------get one student----------
exports.getonestudent=async(req,res)=>{
    const email = req.body.email;
    try{
        let student = await Student.findOne({email});
        res.status(200).json(student)
     }catch(err){
         res.status(201).json({message:"Error while getting student details"})
     }
}

// ----------remove a student------
exports.removestudent=async(req,res)=>{
    const email=req.body.email;
    console.log("dELETE")
 try{
   const status=await Student.deleteOne({email:email});
   if(status){
    console.log("deleted")
   }

 }catch(err){
    res.status(201).json({message:"Error while removing student"})
 }
}

//--------remove a teacher---------
exports.removeteacher=async(req,res)=>{
    try{
       let teacher =await Teacher.findOne(req.body);
       if(!teacher){
        return res.status(404).send("Teacher not found");
       }
       await Teacher.deleteOne(teacher);
       res.status(200).send("Teacher removed successfully");
   
    }catch(err){
       res.status(201).json({message:"Error while removing Teacher"})
    }
   } 

   exports.updatestudent=async(req,res)=>{
    const{email,stdName,stdEmail}=req.body;
    const filter={email:email};
    const update={username:stdName,email:stdEmail};
    console.log(filter, update)
    try{
        const doc = await Student.findOneAndUpdate(filter, update, {
            new: true
          });
                 console.log(doc);
    }catch(err){
        res.status(404).json({message:"Not found student"});
        console.log("not found")
    }
   }