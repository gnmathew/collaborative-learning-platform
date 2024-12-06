import React from "react";
import { useEffect, useState } from "react";
import AdminRoutes from '../../routes/AdminRoutes';

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

  return (<AdminRoutes setIsLoggedIn={setIsLoggedIn}/>);
};

export default AdminApp;