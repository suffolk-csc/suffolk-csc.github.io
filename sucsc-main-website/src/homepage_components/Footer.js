// src/components/Footer.js
import React from 'react';


function Footer() {
  return (
    <footer className="footer">
      {/* Club logo */}
      <img src="/path-to-your-logo.png" alt="Club Logo" />
      {/* Club information */}
      <address>
        Suffolk University Computer Science Club<br />
        123 College Street<br />
        Boston, MA 02108
      </address>
      {/* Team Member #8: Add social media and contact links here */}
      {/* Use placeholders for now which will be updated with real links */}
      <p>Email: contact@csclub.suffolk.edu</p>
      {/* Social media icons for Instagram, Discord, etc. */}
      <div className="social-media-links">
        {/* Placeholder icons for now */}
        <span>Instagram Icon</span>
        <span>Discord Icon</span>
        {/* More icons as needed */}
      </div>
    </footer>
  );
}

export default Footer;
