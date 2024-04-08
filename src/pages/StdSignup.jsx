import { useState } from "react"
export default function StdSignup(){
const [stdName,setStdName]= useState('');
const [stdEmail,setStdEmail]= useState('');
const [stdPassword, setStdPassword]= useState('')
const  collectData =async ()=>{
let std =await fetch('http://localhost:8000/student/signup',{
    method:'post',
    body:JSON.stringify({username:stdName,email:stdEmail,password:stdPassword}),
    headers:{'Content-Type':'application/json'},
});
std = await std.json();
console.log(std)
}
    return(
        <>  
       <input type="text" value={stdName} onChange={(e)=>setStdName(e.target.value)} placeholder="Student Name"/>
       <input type="text" value={stdEmail} onChange={(e)=>setStdEmail(e.target.value)} placeholder="Student Name"/>
       <input type="text" value={stdPassword} onChange={(e)=>setStdPassword(e.target.value)} placeholder="Student Name"/>
       <button type="submit" onClick={collectData}>sign up</button>
      <h2>{stdName}</h2>
      <h3>{stdEmail}</h3>
        </>
    )
}