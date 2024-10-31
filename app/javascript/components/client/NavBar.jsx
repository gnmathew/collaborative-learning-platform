import React from "react";
import { Link } from 'react-router-dom';
import LogoutButton from "./authentication/LogoutButton"
import styled from "styled-components"

const NavBarBrand = styled.div`
  font-weight: 500;
  font-size: larger;

  @media (max-width: 768px) {
    display: none;
  }
`
const DashboardBtn = styled.div`
  @media (max-width: 768px) {
    margin-left: 86px;
  }

`

const NavBar = ({setIsLoggedIn}) => {
  const role = localStorage.getItem('role') == 'student' ? "Learner" : "Instructor"

  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <NavBarBrand>KODA Board</NavBarBrand>
        <DashboardBtn
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span>{ role }'s Dashboard</span>
        </DashboardBtn>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Options
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Homepage
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a  className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a  className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="">
                        <LogoutButton setIsLoggedIn={setIsLoggedIn}/>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
      </div>
    </nav>
  );
};

export default NavBar;