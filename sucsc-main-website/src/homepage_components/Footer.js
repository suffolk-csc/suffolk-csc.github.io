import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

function Footer() {
  return (
    <footer className="bg-dark text-center text-white py-3">
      <div className="container">
        <img src="/path-to-your-logo.png" alt="Club Logo" className="mb-3" />
        <address>
          Suffolk University Computer Science Club<br />
          73 Tremont Street <p>5th Floor 5060</p><br />
          Boston, MA 02108
        </address>
        <p>Email: contact@csclub.suffolk.edu</p>
        {/* Social media icons */}
        <div className="social-media-links">
          {/* Instagram icon using Bootstrap Icons */}
          <a href="https://instagram.com/your-username" className="text-white mx-2">
            <i className="bi bi-instagram"></i>
          </a>
          {/* Other social media icons */}
          <a href="https://discord.com/your-invite-link" className="text-white mx-2">
            <img src="/photos/Discord-Logo.png" alt="Discord logo" className="mb-2" style={{ height: '1em' }} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
