import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">
            EMPLOY <span className="text-primary">DETAILS</span>
          </span>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon bg-white"></span>
          </button>
          <div
            className="collapse navbar-collapse  justify-content-end "
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav  ">
              <Link
                to="/home"
                className="nav-link text-white fs-5 text-dark"
                aria-current="page"
              >
                Home
              </Link>
              <Link to="/person" className="nav-link text-white fs-5 text-dark">
                Persondetails
              </Link>
              <Link to="/login" className="nav-link text-white fs-5 text-dark">
                Login
              </Link>
              <Link
                to="/signup"
                className="nav-link text-white fs-5 text-dark"
                tabindex="-1"
                aria-disabled="true"
              >
                Signup
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
