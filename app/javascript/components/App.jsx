import React from "react";
import { Routes, Route } from "react-router-dom";
import ClientApp from "./client/ClientApp";
import AdminApp from "./admin/AdminApp";

const App = () => {
  const isClientDomain = window.location.hostname === "client.com";

  return (
    <Routes>
      {isClientDomain ? (
        <Route path="/*" element={<ClientApp />} />
      ) : (
        <Route path="/*" element={<AdminApp />} />
      )}
    </Routes>
  );
};

export default App;