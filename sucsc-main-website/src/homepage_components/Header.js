import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-dark text-white py-3">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <span><img src="/photos/suffolklogo.png" alt="Club Logo" className="mb-3 resize"/></span>
          {/* Team Member #1: Add the logo image here */}
          <a className="navbar-brand" href="/">Suffolk CSC</a>
          {/* Team Member #2: Create the navigation bar here */}
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gallery">Gallery</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/calender">Calender</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us!</Link>
              </li>
              {/* Add other navigation links */}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
