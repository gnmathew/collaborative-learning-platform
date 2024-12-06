import React from "react";
import { Routes, Route } from "react-router-dom";
import ClientApp from "./client/ClientApp";
import AdminApp from "./admin/layouts/AdminApp";
import { Toaster } from "react-hot-toast";

const App = () => {
  const isClientDomain = window.location.hostname === "client.com";

  return (
    <>
      <Toaster/>
      <Routes>
        {isClientDomain ? (
          <Route path="/*" element={<ClientApp />} />
        ) : (
          <Route path="/*" element={<AdminApp />} />
        )}
      </Routes>
    </>
  );
};

export default App;