import React from "react";
import { useEffect, useState } from "react";
import AdminRoutes from '../routes/AdminRoutes';
import NavBar from "./NavBar"

const AdminApp = () => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token){
      setIsLoggedIn(true)
    }else{
      setIsLoggedIn(false)
    }
  },[token])

  return (
    <div>
      { isLoggedIn && <NavBar setIsLoggedIn={setIsLoggedIn}/> }
      <AdminRoutes setIsLoggedIn={setIsLoggedIn}/>
    </div>
  );
};

export default AdminApp;