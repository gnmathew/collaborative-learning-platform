import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;

  .login-form {
    animation: ${fadeIn} 0.8s ease-in-out;
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
  const [idNumber, setIdNumber] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
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
      const response = await axios.post(`http://client.com:3000/api/v1/client/${role}/sessions`, {
        client: {
          id_number: idNumber,
          password
        }
      });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', response.data.client.role);
      setIsLoggedIn(true);
      navigate('/');

    } catch (error) {
      setError('Invalid ID number or password');
    }
  };

  const buttonClass = role === 'student' ? 'btn-success' : 'btn-secondary';

  return (
    <>
      {error && <div className="alert alert-danger" role="alert">{error}</div>}
      <Wrapper>
        <div className="login-form">
          <h2 className="mb-4 text-center">Koda Board Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="idNumber"
                placeholder="ID Number"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
              />
              <label htmlFor="idNumber">ID Number</label>
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
            <div className="mb-5">
              <select className="form-select form-select-sm" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>
            <button type="submit" className={`btn ${buttonClass} w-100`}>Login</button>
          </form>
        </div>
      </Wrapper>
    </>
  );
};

export default Sessions;
