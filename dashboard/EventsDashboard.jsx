import React, { useState } from 'react';

const EventsDashboard = () => {
  // Sample data - in a real application this would come from an API
  const [events, setEvents] = useState([
    { 
      id: 1, 
      title: "AI Workshop Series: Part 1", 
      organizer: "Dr. Sarah Chen", 
      organizerAvatar: "/api/placeholder/40/40",
      startDate: "2025-03-18T14:00:00",
      endDate: "2025-03-18T16:00:00",
      location: "Tech Hub, Room 204",
      description: "Introduction to machine learning algorithms and practical applications.",
      capacity: 50,
      registered: 32,
      type: "Workshop",
      status: "current"
    },
    { 
      id: 2, 
      title: "Neural Networks Deep Dive", 
      organizer: "Prof. James Wilson", 
      organizerAvatar: "/api/placeholder/40/40",
      startDate: "2025-03-20T10:00:00",
      endDate: "2025-03-20T13:00:00",
      location: "Online (Zoom)",
      description: "Advanced session on neural network architectures and optimization techniques.",
      capacity: 100,
      registered: 45,
      type: "Webinar",
      status: "current"
    },
    { 
      id: 3, 
      title: "AI Ethics Panel Discussion", 
      organizer: "AI Club Committee", 
      organizerAvatar: "/api/placeholder/40/40",
      startDate: "2025-03-25T15:00:00",
      endDate: "2025-03-25T17:00:00",
      location: "Main Auditorium",
      description: "Panel discussion about ethical considerations in AI development and deployment.",
      capacity: 150,
      registered: 72,
      type: "Panel",
      status: "upcoming"
    },
    { 
      id: 4, 
      title: "Hackathon: AI for Social Good", 
      organizer: "Alex Johnson", 
      organizerAvatar: "/api/placeholder/40/40",
      startDate: "2025-04-05T09:00:00",
      endDate: "2025-04-06T18:00:00",
      location: "Innovation Center",
      description: "48-hour hackathon focused on developing AI solutions for social challenges.",
      capacity: 80,
      registered: 34,
      type: "Hackathon",
      status: "upcoming"
    },
    { 
      id: 5, 
      title: "Natural Language Processing Workshop", 
      organizer: "Dr. Maya Patel", 
      organizerAvatar: "/api/placeholder/40/40",
      startDate: "2025-04-12T13:00:00",
      endDate: "2025-04-12T16:00:00",
      location: "Tech Hub, Room 303",
      description: "Hands-on workshop about NLP techniques and applications.",
      capacity: 40,
      registered: 12,
      type: "Workshop",
      status: "upcoming"
    }
  ]);

  // State for active tab
  const [activeTab, setActiveTab] = useState('current');

  // Filter events based on status
  const filteredEvents = events.filter(event => event.status === activeTab);

  // Format date function
  const formatDate = (dateString) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  // Calculate days remaining for upcoming events
  const getDaysRemaining = (dateString) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    const diffTime = eventDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Handle register click
  const handleRegister = (eventId) => {
    // In a real app, this would make an API call to register
    console.log(`Registered for event ID: ${eventId}`);
    
    // For demo purposes, we'll update the UI
    setEvents(events.map(event => 
      event.id === eventId 
        ? { ...event, registered: event.registered + 1 } 
        : event
    ));
  };

  return (
    <div className="flex flex-col h-full p-6 space-y-6">
      {/* Events Header and Tabs */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Events</h1>
        <div className="flex space-x-2">
          <button 
            onClick={() => setActiveTab('current')} 
            className={`px-4 py-2 rounded-md ${activeTab === 'current' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
          >
            Current Events
          </button>
          <button 
            onClick={() => setActiveTab('upcoming')} 
            className={`px-4 py-2 rounded-md ${activeTab === 'upcoming' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
          >
            Upcoming Events
          </button>
        </div>
      </div>

      {/* Events Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm text-gray-500">Total Events</p>
          <p className="text-2xl font-bold">{events.length}</p>
          <div className="mt-2 flex items-center">
            <span className="text-green-500 text-sm">+3 this month</span>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm text-gray-500">{activeTab === 'current' ? 'Currently Running' : 'Upcoming'}</p>
          <p className="text-2xl font-bold">{filteredEvents.length}</p>
          <div className="mt-2 flex items-center">
            <span className="text-sm">{activeTab === 'current' ? 'Active now' : 'Scheduled'}</span>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm text-gray-500">Total Registrations</p>
          <p className="text-2xl font-bold">{events.reduce((sum, event) => sum + event.registered, 0)}</p>
          <div className="mt-2 flex items-center">
            <span className="text-green-500 text-sm">85% capacity filled</span>
          </div>
        </div>
      </div>

      {/* Events List */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">{activeTab === 'current' ? 'Current Events' : 'Upcoming Events'}</h2>
        </div>
        
        <div className="divide-y">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div key={event.id} className="p-4 hover:bg-gray-50">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
                        event.type === 'Workshop' ? 'bg-blue-500' : 
                        event.type === 'Webinar' ? 'bg-purple-500' : 
                        event.type === 'Hackathon' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}></span>
                      <span className="text-sm text-gray-500">{event.type}</span>
                    </div>
                    <h3 className="text-lg font-medium mt-1">{event.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                    
                    <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        {formatDate(event.startDate)}
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        {event.location}
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                        Organized by: {event.organizer}
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        </svg>
                        {event.registered} / {event.capacity} registered
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 md:mt-0 md:ml-6 flex flex-col items-center">
                    {activeTab === 'upcoming' && (
                      <div className="text-center mb-2">
                        <span className="text-sm text-gray-500">Starting in</span>
                        <div className="text-xl font-semibold text-blue-600">{getDaysRemaining(event.startDate)} days</div>
                      </div>
                    )}
                    
                    <button 
                      onClick={() => handleRegister(event.id)}
                      className={`w-full md:w-auto px-4 py-2 rounded-md ${
                        event.registered >= event.capacity 
                          ? 'bg-gray-300 cursor-not-allowed' 
                          : 'bg-blue-500 hover:bg-blue-600 text-white'
                      }`}
                      disabled={event.registered >= event.capacity}
                    >
                      {event.registered >= event.capacity ? 'Full' : 'Register'}
                    </button>
                    
                    <button className="w-full md:w-auto mt-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-gray-500">
              No {activeTab} events found.
            </div>
          )}
        </div>
      </div>

      {/* Add New Event Button */}
      <div className="flex justify-end">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          Add New Event
        </button>
      </div>
    </div>
  );
};

export default EventsDashboard;