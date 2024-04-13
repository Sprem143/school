import { useState } from "react";
import Cookies from 'js-cookie';
import Form from 'react-bootstrap/Form';
import { ValidatorForm, TextValidator } from 'react-form-validator-core';
export default function TeacherSignup() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const[gender,setGender]= useState("");
    const [password, setPassword] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [address, setAddress] = useState("");
    const [subject, setSubject] = useState("");
    const [mobile, setMobile] = useState("");
    const [salary, setSalary] = useState("");
    const [qualification, setQualification] = useState("");
    const [image, setImage] = useState("");
    const convertToBase64=(e)=>{
         var render= new FileReader();
        
         render.readAsDataURL(e.target.files[0]);
         render.onload=()=>{
            setImage(render.result);
         };
         render.error=()=>{
            console.log(render.error);
         }
    }
    const handleSelectChange = (event) => {
        setQualification(event.target.value);
      };
    const handleRegistration = async () => {
    console.log(qualification,image,)
        if (Cookies.get('director')) {
            let newTeacher = await fetch('http://localhost:8050/director/addteacher', {
                method: "POST",
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ username,fatherName,email,mobile,gender,qualification,subject,salary,address, password})
            })
            newTeacher = await newTeacher.json();
            alert(newTeacher.message)
        }
    }
    return (
        <>
           <ValidatorForm >
            <TextValidator
                label="Email"
                // onChange={handleChange}
                name="email"
                // value={formData.email}
                validators={['required', 'isEmail']}
                errorMessages={['This field is required', 'Email is not valid']}
            />
            {/* <button type="submit">Submit</button>
            {submitted && <p>Form submitted successfully!</p>} */}
        </ValidatorForm>
            <div className="loginForm">


          



                <div className="form">
                    <h2 className="fw-bold">Add a new Teacher</h2>

                    <div className="formInput">
                        <label htmlFor="studentName">Enter Name</label>
                        <input type="text" id="studentName" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Name" />
                       
                        <label htmlFor="studentName">Gender</label>
                        <Form>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-1">
          <Form.Check
          value="Male" onClick={()=>setGender("Male")}
            inline 
            label="Male"
            name="group1"
            id="male" type={type}

          />
          <Form.Check
            value="Female" onClick={()=>setGender("Female")}
            inline
            label="Female"
            name="group1"
            id="female" type={type}
          />
        </div>
      ))}
    </Form>

                        <label htmlFor="fatherName">Father's Name</label>
                        <input type="text" id="fatherName" value={fatherName} onChange={(e) => setFatherName(e.target.value)} placeholder="Father's Name" />

                        <label htmlFor="mobileNumber">Mobile Number</label>
                        <input type="text" id="mobileNumber" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="9876543210" />

                        <label htmlFor="studentEmail">Enter Email</label>
                        <input type="text" id="studentEmail" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="abc@gmail.com" />

                        <label htmlFor="subject">Which subjects, you can teach</label>
                        <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Math,Physics" />


                        <label htmlFor="qualification">Qualification</label>
                        <select value={qualification} onChange={handleSelectChange}>                            <option value="">Select qualification</option>
                            <option value="Matric">Matric</option>
                            <option value="Intermediate" >Intermediate</option>
                            <option value="B.A">B.A</option>
                            <option value="B.Sc" >B.Sc</option>
                            <option value="B.com">B.com</option>
                            <option value="BCA">BCA</option>
                            <option value="Polytechnic">Polytechnic</option>
                            <option value="ITI" >ITI</option>
                            <option value="B.Tech">B.Tech</option>
                            <option value="B.ed">B.ed</option>
                            <option value="DELED">DELED</option>
                            <option value="Ph.D">Ph.D</option>
                       </select>

                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Hariraha, 09" />
                        
                        <label htmlFor="salary">Salary</label>
                        <input type="text" id="salary" value={salary} onChange={(e) => setSalary(e.target.value)} placeholder="15000" />

                        {/* <label htmlFor="image">Profile Pic</label> */}
                        {/* <input type="File" accept="image/*" id="image"  onChange={convertToBase64} /> */}
                        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                        <Form.Control
                            type="password"
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                            value={password} onChange={(e) => setPassword(e.target.value)}
                        />
                        <Form.Text id="passwordHelpBlock" muted>
                            Your password must be 8-20 characters long.
                        </Form.Text>
                        <input type="submit" value="Login" className="mt-3 btn btn-primary" onClick={handleRegistration} />
                    </div>
                </div>
            </div>
        </>
    )
}

export  {TextValidator};