import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

const Register = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post('http://localhost:3005/create', { username: userName, email, password });
            console.log(result);
            navigate("/home");
            // Optionally handle successful registration here
        } catch (error) {
            console.error(error);
            window.alert("User already exists. Redirecting to Home...");
            navigate("/home");
        }
    };

    return (
        <>
        <div id='regi'>
            <h1 className="register-title">ENVIRONMENTAL CONSERVATION PLATFORM</h1>
        <div className="register-container">
            <form id="reg" className="register-form" onSubmit={submit}>
                <label htmlFor="username" className="register-label">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    className="register-input"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                />
                <label htmlFor="email" className="register-label">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="register-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="password" className="register-label">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="register-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <p className="register-info">Already have an account?</p>
                <button type="submit" className="register-button">Register</button>
            </form>
        </div>
        </div>
        </>
    );
};

export default Register;
