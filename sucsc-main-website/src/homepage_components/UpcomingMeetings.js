import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function UpcomingMeetings() {
  return (
    <section className="bg-primary text-white py-5">
      <div className="p-3 mb-2 bg-gradient-primary text-white">.bg-gradient-primary</div>
      <div className="container">
        <h2>Upcoming Meetings</h2>
        <p>Last meeting we covered XYZ topics, and we had a great turnout! Here's what you need to know...</p>
        <div className="card bg-light my-3">
          <div className="card-body">
            <p className="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpcomingMeetings;
