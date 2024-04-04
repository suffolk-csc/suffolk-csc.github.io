import React from 'react';
import { useTheme } from '../homepage_components/ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function WelcomeSection() {
    const { theme, toggleTheme } = useTheme();
  
    return (
      <section className={"text-center py-5  text-white bg-danger"}>
        <div className="container">
          <h1>Welcome to Suffolk University Computer Science Club!</h1>
          <button className={`btn ${theme === 'light' ? 'btn-dark' : 'btn-light'} my-3`} onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
          <p>This is where you'll put some information about the club, its mission, or upcoming events.</p>
          <div className="video-placeholder">
            <p>Video or Interactive Element Goes Here</p>
          </div>
        </div>
      </section>
    );
  }
  
export default WelcomeSection;
