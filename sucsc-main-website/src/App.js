// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './homepage_components/Header';
import WelcomeSection from './homepage_components/WelcomeSection';
import UpcomingMeetings from './homepage_components/UpcomingMeetings';
import PreviousMeetings from './homepage_components/PreviousMeetings';
import Footer from './homepage_components/Footer';
import { ThemeProvider } from './homepage_components/ThemeContext';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Calender from './pages/Calender';
import Gallery from './pages/Gallery';


function App() {
  return (
    <Router>
 
    <div className="App">
      <Header />
      <main>
      <ThemeProvider>
        <Routes>
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <WelcomeSection />
        <UpcomingMeetings />
        <PreviousMeetings />
        </ThemeProvider>
      </main>
      <Footer />
    </div>

    </Router>

  );
}

export default App;
