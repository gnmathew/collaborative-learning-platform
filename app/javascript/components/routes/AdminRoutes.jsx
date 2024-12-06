import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../admin/layouts/AdminLayout";
import Index from "../admin/Dashboard/Index";
import ClientsTable from "../admin/Clients/Index/ClientsTable"
import Sessions from "../admin/authentication/Sessions";
import ProtectedRoute from "../admin/authentication/ProtectedRoute";
import BatchesContainerCard from "../admin/Batches/Index/BatchesContainerCard";
import { BatchesProvider } from "../admin/Batches/BatchesContext";
import { ClientsProvider } from "../admin/Clients/ClientsContext";

const AdminRoutes = ({setIsLoggedIn}) => {

  const wrapWithLayout = (component) => {
    const page = React.isValidElement(component) ? component : React.createElement(component)
    return <AdminLayout setIsLoggedIn={setIsLoggedIn}>{page}</AdminLayout>;
  }

  return (
    <Routes>
      <Route path="/koda-board/admin/login" element={<Sessions setIsLoggedIn={setIsLoggedIn}/>} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <ClientsProvider>
              <BatchesProvider>
                {wrapWithLayout(Index)}
              </BatchesProvider>
            </ClientsProvider>
          </ProtectedRoute>
        }
      />
      <Route
        path="/koda-board/admin/clients"
        element={
          <ProtectedRoute>
            {wrapWithLayout(
              <ClientsProvider>
                <ClientsTable />
              </ClientsProvider>
            )}
          </ProtectedRoute>
        }
      />
      <Route
        path="/koda-board/admin/batches"
        element={
          <ProtectedRoute>
            {wrapWithLayout(
              <BatchesProvider>
                <BatchesContainerCard />
              </BatchesProvider>
            )}
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AdminRoutes;