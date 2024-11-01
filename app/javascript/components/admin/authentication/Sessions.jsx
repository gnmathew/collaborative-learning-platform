import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;

  .login-form {
    animation: ${zoomIn} 0.8s ease-in-out;
    max-width: 600px;
    width: 100%;

    @media (max-width: 768px) {
      max-width: 90%;
    }

    @media (max-width: 480px) {
      max-width: 100%;
      padding: 1.5rem;
    }
  }
`;

const Sessions = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://admin.com:3000/api/v1/admin/sessions`, {
        admin: {
          username,
          password
        }
      });

      localStorage.setItem('token', response.data.token);
      setIsLoggedIn(true);
      navigate('/');

    } catch (error) {
      setError('Invalid username or password');
    }
  };

  return (
    <>
      {error && <div className="alert alert-danger" role="alert">{error}</div>}
      <Wrapper>
        <div className="login-form">
          <h2 className="mb-4 text-center">Koda Board Admin</h2>
          <form onSubmit={handleLogin}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="username">Username</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">Password</label>
            </div>
            <button type="submit" className="btn btn-secondary w-100">Login</button>
          </form>
        </div>
      </Wrapper>
    </>
  );
};

export default Sessions;
