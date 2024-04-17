const Notice = require('./notice.model');

exports.getnotice=async(req,res)=>{
    try{
        let result= await Notice.find();
        res.status(200).json(result);
    }catch(err){
      res.status(201).json({message:"Error while fetching notice"})
    }
}

exports.addnotice=async(req,res)=>{
    try{
     const notice= req.body;
     const newNotice = new Notice(notice);
     let result= await newNotice.save();
     res.status(200).json(result)
    }catch(err){
     res.status(201).json({message:"Error while adding new notice"})
     console.log(err);
    }
}

exports.deletenotice=async()=>{
    try{
      
    }catch(err){

    }
}