// src/components/WelcomeSection.js
import React from 'react';
// Correct the path as follows if `WelcomeSection.js` is also inside `homepage_components`
import { useTheme } from '../homepage_components/ThemeContext';
// import './Styles_Homepage/WelcomeSection.css';

function WelcomeSection() {
  const { theme, toggleTheme } = useTheme();

  return (
    <section className={`welcome-section ${theme}`}>
      
      {/* Header text */}
      <h1>Welcome to Suffolk University Computer Science Club!</h1>
      {/* Introductory text */}
      {/* Toggle button */}
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      <p>This is where you'll put some information about the club, its mission, or upcoming events.</p>
      {/* Placeholder for video or interactive element */}
      <div className="video-placeholder">
        <p>Video or Interactive Element Goes Here</p>
      </div>
    </section>
  );
}

export default WelcomeSection;
