import { useState } from "react";
import Cookies from 'js-cookie'
export default function TeacherSignup(){
    const [username,setUsername]= useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
      
        const handleRegistration= async()=>{

           if(Cookies.get('director')){
            let newTeacher= await fetch('http://localhost:8000/director/addteacher',{
                method:"POST",
                headers:{'Content-type':'application/json'},
                body:JSON.stringify({username,email,password})
            })
            newTeacher= await newTeacher.json();
            alert(newTeacher.message)
           }
         }
    return(
        <>
           <div className="loginForm">
                    <div className="form">
                        <h2 className="fw-bold">Add a new Teacher</h2>

                        <div className="formInput">
                            <label htmlFor="studentName">Enter Name</label>
                            <input type="text" id="studentName" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Prem Kumar" />

                            <label htmlFor="studentEmail">Enter Email</label>
                            <input type="text" id="studentEmail" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="abc@gmail.com" />
                            <label htmlFor="studentPassword">Enter Password</label>
                            <input type="text" id="studentPassword" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="********" />
                            <input type="submit" value="Login" className="mt-3 btn btn-primary" onClick={handleRegistration} />
                        </div>
                    </div>
                </div>
        </>
    )
}