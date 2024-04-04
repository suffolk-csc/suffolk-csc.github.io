import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-dark text-center text-white py-3">
      <div className="container">
        <img src="/path-to-your-logo.png" alt="Club Logo" className="mb-3" />
        <address>
          Suffolk University Computer Science Club<br />
          73 tremont street <p>5th floor 5060</p><br />
          Boston, MA 02108
        </address>
        <p>Email: contact@csclub.suffolk.edu</p>
        {/* Social media icons */}
        <div className="social-media-links">
          {/* Placeholder icons */}
          <span><img src="/photos/transparent-instagram-logo.png" alt="Instagram logo image" className="mb-4"/></span>
          <span><img src="/photos/Discord-Logo.png" alt="Discord logo image" className="mb-5"/></span>
          {/* More icons as needed */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
