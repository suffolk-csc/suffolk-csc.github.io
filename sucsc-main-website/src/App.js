// src/App.js
import React from 'react';
import Header from './homepage_components/Header';
import WelcomeSection from './homepage_components/WelcomeSection';
import UpcomingMeetings from './homepage_components/UpcomingMeetings';
import PreviousMeetings from './homepage_components/PreviousMeetings';
import Footer from './homepage_components/Footer';
import { ThemeProvider } from './homepage_components/ThemeContext';
import './App.css';

function App() {
  return (
 
    <div className="App">
      <Header />
      <main>
      <ThemeProvider>
        <WelcomeSection />
        <UpcomingMeetings />
        <PreviousMeetings />
        </ThemeProvider>
      </main>
      <Footer />
    </div>

  );
}

export default App;
