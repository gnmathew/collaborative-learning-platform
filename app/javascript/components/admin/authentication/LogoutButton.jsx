import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = ({setIsLoggedIn}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false)
    navigate('/koda-board/admin/login');
  };

  return (
    <button onClick={handleLogout} className="btn btn-secondary">
      Logout
    </button>
  );
};

export default LogoutButton;