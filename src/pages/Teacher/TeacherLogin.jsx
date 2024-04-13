import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function TeacherLogin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleLogin = async () => {
        
        let result = await fetch("http://localhost:8050/teacher/signin", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        });
        result = await result.json();
        setCookie('teacher', 'cookieValue', 1);
       }

        // Function to set a cookie
        const setCookie = (name, value, days) => {
            const expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + days);
            const cookieValue = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
            document.cookie = cookieValue;
            navigate('/teacher/profile');
            
          };
        return (
            <>
                <div className="loginForm">
                    <div className="form">
                        <h2 className="fw-bold">Login as Teacher</h2>

                        <div className="formInput">
                            <label htmlFor="directorEmail">Enter Email</label>
                            <input type="text" id="directorEmail" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="abc@gmail.com" />
                            <label htmlFor="directorPassword">Enter Password</label>
                            <input type="text" id="directorPassword" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="********" />
                            <input type="submit" value="Login" className="mt-3 btn btn-primary" onClick={handleLogin} />
                        </div>

                    </div>
                </div>

            </>
        )
    }