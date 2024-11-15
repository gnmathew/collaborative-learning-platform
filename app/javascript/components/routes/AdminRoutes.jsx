import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../admin/Homepage/Home";
import ClientsTable from "../admin/Clients/Index/ClientsTable"
import Sessions from "../admin/authentication/Sessions";
import ProtectedRoute from "../admin/authentication/ProtectedRoute";
import BatchesContainerCard from "../admin/Batches/Index/BatchesContainerCard";

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
        <Route
          path="/koda-board/admin/clients"
          element={
            <ProtectedRoute>
              <ClientsTable />
            </ProtectedRoute>
          }
        />
        <Route
          path="/koda-board/admin/batches"
          element={
            <ProtectedRoute>
              <BatchesContainerCard />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
};

export default AdminRoutes;