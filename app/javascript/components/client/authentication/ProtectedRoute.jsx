import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/koda-board/login");
    }
  }, [token, navigate]);

  return token ? children : null;
};

export default ProtectedRoute;