import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; //import bootstrap icons
import './image.css';

function Footer() {
  return (
    <footer className="bg-dark text-center text-white py-3">
      <div className="container d-flex justify-content-between">
        <img src="/photos/suffolklogo.png" alt="Club Logo" className="mb-3 resize"/>
        <address>
          Suffolk University Computer Science Club<br />
          73 Tremont Street<br />
          5th Floor 5060<br />
          Boston, MA 02108
        </address>
        <p>Email: contact@csclub.suffolk.edu</p>
        {/* Social media icons */}
        <div className="social-media-links">
          {/* Instagram icon using Bootstrap Icons */}
          <a href="https://www.instagram.com/suffolkcsclub/" className="text-white mx-2">
            <i className="bi bi-instagram icon"></i>
          </a>
          {/* Other social media icons */}
          <a href="https://discord.gg/GexwzVy7tC" className="text-white mx-2">
            <i class="bi bi-discord icon"></i>
          </a>
          {/* contact@csclub.suffolk.edu */}
          <a href="contact@csclub.suffolk.edu" className="text-white mx-2">
            <i class="bi bi-envelope-fill icon"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
