import React,{useState} from 'react'

export default function GuestLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleLogin = () => {
        // Implement your login logic here
    };
  return (
    <div className="login-container">
            <div className="login-box">
                <h2>Guest Login</h2>
                <input
                    type="text"
                    placeholder="Full Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Mob. No."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="E-mail"
                    value={password}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleLogin}>Submit</button>
            </div>
        </div>
  )
}
