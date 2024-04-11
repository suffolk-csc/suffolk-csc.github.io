import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <header className="bg-dark text-white py-3">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <span><img src="/public/photos/suffolklogo.png" alt="Club Logo" className="nav-img"/></span>
          {/* Team Member #1: Add the logo image here */}
          <a className="navbar-brand" href="/">Suffolk CSC</a>
          {/* Team Member #2: Create the navigation bar here */}
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/gallery">Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/calender">Calender</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact Us!</a>
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
