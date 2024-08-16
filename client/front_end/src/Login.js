import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('http://localhost:3005/login', { email, password });
      console.log(result.data);
      navigate('/home');
    } catch (err) {
      console.error(err.response);
      alert('Login failed: ' + (err.response?.data?.message || 'Unknown error'));
    }
  };

  return (
    <>
      <div id='logi'>
        <h1 className="login-title">ENVIRONMENTAL CONSERVATION PLATFORM</h1>
        <div className="login-container">
          <form id="login" className="login-form" onSubmit={submit}>
            <label htmlFor="email" className="login-label">Email:</label>
            <input
              type="email"
              id="email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="pw" className="login-label">Password:</label>
            <input
              type="password"
              id="pw"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
