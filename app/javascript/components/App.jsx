import React from "react";
import { Routes, Route } from "react-router-dom";
import ClientApp from "./client/ClientApp";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<ClientApp />} />
    </Routes>
  );
};

export default App;