import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/koda-board/admin/login");

    } else {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp < currentTime) {

          localStorage.removeItem('token');
          navigate("/koda-board/admin/login");
        }
      } catch (error) {
        console.log('Invalid token');
        localStorage.removeItem('token');
        navigate("/koda-board/admin/login");
      }
    }
  }, [token, navigate]);

  return token ? children : null;
};

export default ProtectedRoute;