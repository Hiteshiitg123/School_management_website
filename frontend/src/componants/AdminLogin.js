import React, { useState } from 'react'
import './loginPage.css'
import axios from 'axios';
import { set } from 'mongoose';

export default function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    

    const handleLogin = async () => {
        // Implement your login logic here
        try {
            // Send the user's input to the backend for authentication
            const response = await axios.post("http://localhost:5000/admin", {
                username,
                password,
            },{
                withCredentials: true,
            });

            // Process the response (e.g., store tokens, redirect, etc.)
            const token = response.data.token;
            localStorage.setItem("authToken", token);

        } catch (error) {
            console.error("Authentication failed:", error);
        }
        setUsername('');
        setPassword('');
        window.location.href = "/";
    };
    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Admin Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}
