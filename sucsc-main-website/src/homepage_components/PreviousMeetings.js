// src/components/PreviousMeetings.js
import React from 'react';
//import './Styles_Homepage/PreviousMeetings.css';

function PreviousMeetings() {
  return (
    <section className="previous-meetings">
      {/* Team Member #7: Add a big header for the Previous Meetings section */}
      <h2>Past Meeting Archives</h2>
      {/* Add summaries or notes from previous meetings here */}
      {/* This could be an unordered list <ul> or a set of <div>s */}
      <ul>
        {/* Each <li> or <div> could be a meeting summary with a date, topic, etc. */}
        <li>Meeting Date: Topic - Summary of the meeting</li>
        {/* More list items will be added here */}
      </ul>
      {/* Placeholder for cool image #2 related to previous meetings */}
      <div className="image-placeholder">
        <p>Cool Image #2</p>
      </div>
    </section>
  );
}

export default PreviousMeetings;
