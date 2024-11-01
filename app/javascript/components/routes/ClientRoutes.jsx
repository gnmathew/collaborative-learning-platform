import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../client/Homepage/Home";
import Sessions from "../client/authentication/Sessions";
import ProtectedRoute from "../client/authentication/ProtectedRoute";

const ClientRoutes = ({setIsLoggedIn}) => {
    return (
      <Routes>
        <Route path="/koda-board/login" element={<Sessions setIsLoggedIn={setIsLoggedIn}/>} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
};

export default ClientRoutes;