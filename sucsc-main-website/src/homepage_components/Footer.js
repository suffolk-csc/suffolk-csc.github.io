import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; //import bootstrap icons

function Footer() {
  return (
    <footer className="bg-dark text-center text-white py-3">
      <div className="container">
        <img src="/suffolklogo.png" alt="Club Logo" className="mb-3"/>
        <address>
          Suffolk University Computer Science Club<br />
          73 Tremont Street <p>5th Floor 5060</p><br />
          Boston, MA 02108
        </address>
        <p>Email: contact@csclub.suffolk.edu</p>
        {/* Social media icons */}
        <div className="social-media-links">
          {/* Instagram icon using Bootstrap Icons */}
          <a href="https://www.instagram.com/suffolkcsclub/" className="text-white mx-2">
            <i className="bi bi-instagram"></i>
          </a>
          {/* Other social media icons */}
          <a href="https://discord.gg/GexwzVy7tC" className="text-white mx-2">
            <i class="bi bi-discord"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
