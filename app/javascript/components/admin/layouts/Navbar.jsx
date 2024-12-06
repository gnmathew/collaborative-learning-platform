import React, { useState, useEffect } from "react";
import LogoutButton from "../authentication/LogoutButton"

const Navbar = ({ setIsLoggedIn }) => {

  const [isSidebarToggled, setSidebarToggled] = useState(false);

  const toggleSidebar = () => {
    setSidebarToggled(!isSidebarToggled);
    document.body.classList.toggle("sb-sidenav-toggled", !isSidebarToggled);

    localStorage.setItem("sb|sidebar-toggle", !isSidebarToggled);
  };

  useEffect(() => {
    const isToggled = localStorage.getItem("sb|sidebar-toggle") === "true";
    if (isToggled) {
      setSidebarToggled(true);
      document.body.classList.add("sb-sidenav-toggled");
    }
  }, []);

  return (
    <nav className="sb-topnav navbar navbar-expand navbar-light bg-light">
      <a className="navbar-brand ps-3">
        Admin
      </a>
      <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" onClick={toggleSidebar} href="#!">
        <i className="fas fa-bars"></i>
      </button>
      <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
        <div className="input-group">
          <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
          <button className="btn btn-primary" id="btnNavbarSearch" type="button">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
      <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fas fa-user fa-fw"></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="#!">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Activity Log
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item">
                  <LogoutButton setIsLoggedIn={setIsLoggedIn}/>
                </a>
              </li>
            </ul>
          </li>
      </ul>
    </nav>
  );
};

export default Navbar;