import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../admin/Homepage/Home";
import Sessions from "../admin/authentication/Sessions";
import ProtectedRoute from "../admin/authentication/ProtectedRoute";

const AdminRoutes = ({setIsLoggedIn}) => {
    return (
      <Routes>
        <Route path="/koda-board/admin/login" element={<Sessions setIsLoggedIn={setIsLoggedIn}/>} />

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

export default AdminRoutes;