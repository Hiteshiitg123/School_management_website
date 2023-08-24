import React, { useState } from 'react'
import axios from 'axios';


export default function GuestLogin() {
    const [name, setname] = useState('');
    const [mobile, setmobile] = useState('');
    const [email, setEmail] = useState('');

    const handleLogin = async () => {
        // Implement your login logic here
        try {
            const response = await axios.post("http://localhost:5000/guests", {
                name,
                mobile,
                email,
            }, {
                withCredentials: true,
            });
            
            const token = response.data.token;;
            localStorage.setItem("authToken", token);
            if(token){
                localStorage.setItem("role", 3);
            }
            
        } catch (error) {
            console.error("Authentication failed:", error);
        }

        setname('');
        setmobile('');  
        setEmail('');
        window.location.href = "/";
    };
    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Guest Login</h2>
                <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Mob. No."
                    value={mobile}
                    onChange={(e) => setmobile(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleLogin}>Submit</button>
            </div>
        </div>
    )
}
