import React from 'react';
import Navbar from './Navbar'
import Sidebar from './Sidebar';

const AdminLayout = ({ children, setIsLoggedIn }) => (
  <>
    <Navbar setIsLoggedIn={setIsLoggedIn}/>
    <div id="layoutSidenav">
      <Sidebar />
      <div id="layoutSidenav_content">
        <main>{children}</main>
      </div>
    </div>
  </>
);

export default AdminLayout;