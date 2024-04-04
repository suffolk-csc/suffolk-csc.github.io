import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-dark text-center text-white py-3">
      <div className="container">
        <img src="/path-to-your-logo.png" alt="Club Logo" className="mb-3" />
        <address>
          Suffolk University Computer Science Club<br />
          73 tremont street <br />
          Boston, MA 02108
        </address>
        <p>Email: contact@csclub.suffolk.edu</p>
        {/* Social media icons */}
        <div className="social-media-links">
          {/* Placeholder icons */}
          <span>Instagram Icon</span>
          <span>Discord Icon</span>
          {/* More icons as needed */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
