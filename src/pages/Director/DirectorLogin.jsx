import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function DirectorLogin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError,setLoginError]=useState();
    
    const handleLogin = async () => {
        
        let result = await fetch("http://localhost:8050/director/signin", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        });
        result = await result.json();
        if(result.token){
            const value=result.token;
            const role="Director"
            const cookieValue = `${role}=${value};  path=/`;
            document.cookie = cookieValue;
            navigate('/director/profile');
        }else{
            setLoginError("Username or Password is wrong")
        }
        
       }

        return (
            <>
                <div className="loginForm">
                    <div className="form">
                        <h2 className="fw-bold">Login as Director</h2>

                        <div className="dfdc">
                            <label htmlFor="directorEmail">Enter Email</label>
                            <input type="text" id="directorEmail" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="abc@gmail.com" />
                            <label htmlFor="directorPassword">Enter Password</label>
                            <input type="text" id="directorPassword" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="********" />
                            <input type="submit" value="Login" className="mt-3 btn btn-primary" onClick={handleLogin} />
                            
                        </div>
                        {loginError? <span className="text-danger">{loginError}</span>:null }

                    </div>
                </div>

            </>
        )
    }