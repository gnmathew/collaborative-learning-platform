import React from "react";
import { useEffect, useState } from "react";
import ClientRoutes from './routes/ClientRoutes';
import NavBar from "./NavBar"

const ClientApp = () => {
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
      <ClientRoutes setIsLoggedIn={setIsLoggedIn}/>
    </div>
  );
};

export default ClientApp;