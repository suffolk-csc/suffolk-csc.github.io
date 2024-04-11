import React from 'react';
import { useTheme } from '../homepage_components/ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

function WelcomeSection() {
  const { setTheme } = useTheme();

  function setThemeMode(mode) {
    setTheme(mode);
  }

  function handleSubmitLightTheme(_event) {
    setThemeMode("light");
  }

  function handleSubmitDarkTheme(_event) {
    setThemeMode("dark");
  }

  return (
    <section className="text-center text-white bg-danger">
      <div className="text-start">
        <div className="btn-group btn-group-sm">
          <input id="light-theme"
                 className="btn-check"
                 type="radio"
                 name="radio"
                 onChange={handleSubmitLightTheme}></input>
          <label className="btn btn-primary rounded-0" htmlFor="light-theme">
            <i className="bi bi-sun"></i>
          </label>

          <input id="dark-theme"
                 className="btn-check"
                 type="radio"
                 name="radio"
                 onChange={handleSubmitDarkTheme}></input>
          {/* Kyle: TODO: Figure out how to only round the bottom end corner. */}
          <label className="btn btn-primary" htmlFor="dark-theme">
            <i className="bi bi-moon"></i>
          </label>
        </div>
      </div>
      <div className="container py-4">
        <h1>Welcome to Suffolk University Computer Science Club!</h1>
        <p>This is where you'll put some information about the club, its mission, or upcoming events.</p>
        <div className="video-placeholder">
          <video controls autoPlay muted width="250">
            {/* Kyle: TODO: Use a suitable video. */}
            <source src="..."></source>
          </video>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;
