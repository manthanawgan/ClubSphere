import React from 'react';
import './style/EventsShowcase.css';

function EventsShowcase() {
  const events = [
    {
      id: 1,
      title: 'Hackathon Workshop',
      date: 'March 22, 2025',
      host: 'IEEE Student Chapter',
      topic: 'Building Sustainable Tech Solutions',
      attendees: '45/100',
      image: 'hackathon-bg',
      featured: 'HACKATHON'
    },
    {
      id: 2,
      title: 'AI Research Symposium',
      date: 'March 25, 2025',
      host: 'ACM Research Group',
      topic: 'Advancements in Natural Language Processing',
      attendees: '75/150',
      image: 'ai-symposium-bg'
    },
    {
      id: 3,
      title: 'Cloud Computing Workshop',
      date: 'April 2, 2025',
      host: 'AWS Student Club',
      topic: 'Serverless Architecture Fundamentals',
      attendees: '30/50',
      image: 'cloud-computing-bg'
    },
    {
      id: 4,
      title: 'Tech Career Fair',
      date: 'April 10, 2025',
      host: 'Joint GDG & STIC Chapters',
      topic: 'Connect with Industry Leaders',
      attendees: '120/200',
      image: 'career-fair-bg',
      featured: 'Tech\nCAREER FAIR'
    }
  ];

  return (
    <div className="events-showcase">
      <h2 className="events-title">Events Showcase</h2>
      
      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className={`event-card ${event.image}`}>
            <div className="event-image-container">
              {event.featured && (
                <div className="event-featured-title">
                  {event.featured.includes('\n') 
                    ? event.featured.split('\n').map((line, i) => <div key={i}>{line}</div>) 
                    : event.featured
                  }
                </div>
              )}
            </div>
            
            <div className="event-details">
              <h3>{event.title}</h3>
              <p><span>Date:</span> {event.date}</p>
              <p><span>Host:</span> {event.host}</p>
              <p><span>Topic:</span> "{event.topic}"</p>
              <p><span>Attendees:</span> {event.attendees}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="view-all-container">
        <button className="view-all-btn">View All</button>
      </div>
    </div>
  );
}

export default EventsShowcase;