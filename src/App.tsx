import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ArrowRight, BarChart2, Zap, Shield, Users, Calendar, Star, PlusCircle, ClipboardList, Globe2 } from 'lucide-react';
import Dashboard from './pages/Dashboard';

function LandingPage() {
  const navigate = useNavigate();

  const roleFeatures = {
    Admin: [
      { icon: <Calendar className="h-6 w-6" />, title: 'Member Management', description: 'Efficiently manage and organize club members.' },
      { icon: <PlusCircle className="h-6 w-6" />, title: 'Event Creator', description: 'Create and schedule new events for the club.' },
      { icon: <Shield className="h-6 w-6" />, title: 'Credit System', description: 'Manage and distribute credits to all members.' },
      { icon: <ClipboardList className="h-6 w-6" />, title: 'Role Assignment', description: 'Assign roles and permissions to club members.' },
    ],
    Student: [
      { icon: <Star className="h-6 w-6" />, title: 'Credit Tracking', description: 'View your earned credits and participate history.' },
      { icon: <PlusCircle className="h-6 w-6" />, title: 'Club Applications', description: 'Apply to join additional clubs that match your interests.' },
      { icon: <Calendar className="h-6 w-6" />, title: 'Event Leadership', description: 'Apply to lead or coordinate upcoming club events.' },
      { icon: <ClipboardList className="h-6 w-6" />, title: 'Activity History', description: 'Track your involvement and contributions to clubs.' },
    ],
    Visitor: [
      { icon: <Calendar className="h-6 w-6" />, title: 'Event Discovery', description: 'Browse upcoming events from all technical clubs.' },
      { icon: <PlusCircle className="h-6 w-6" />, title: 'Event Registration', description: 'Register for events that interest you.' },
      { icon: <Globe2 className="h-6 w-6" />, title: 'Club Exploration', description: 'Discover active technical clubs and their activities.' },
    ],
  };

  const [activeRole, setActiveRole] = useState<'Admin' | 'Student' | 'Visitor'>('Student');

  const events = [
    {
      title: 'Hackathon Workshop',
      date: 'March 22, 2025',
      host: 'IEEE Student Chapter',
      topic: 'Building Sustainable Tech Solutions',
      attendees: '45/100',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=500',
    },
    {
      title: 'AI Research Symposium',
      date: 'March 25, 2025',
      host: 'ACM Research Group',
      topic: 'Advancements in Natural Language Processing',
      attendees: '75/150',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=500',
    },
    {
      title: 'Cloud Computing Workshop',
      date: 'April 2, 2025',
      host: 'AWS Student Club',
      topic: 'Serverless Architecture Fundamentals',
      attendees: '30/50',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=500',
    },
    {
      title: 'Tech Career Fair',
      date: 'April 10, 2025',
      host: 'Joint GDG & STIC Chapters',
      topic: 'Connect with Industry Leaders',
      attendees: '120/200',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-purple-300" />
            <span className="text-2xl font-bold text-white">Club Sphere</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-purple-200 hover:text-white transition">Features</a>
            <a href="#events" className="text-purple-200 hover:text-white transition">Events</a>
            <a href="#roles" className="text-purple-200 hover:text-white transition">Roles</a>
            <a href="#contact" className="text-purple-200 hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
          Unify. Automate. Transform.
        </h1>
        <p className="text-xl text-purple-200 mb-12 max-w-2xl mx-auto">
          The next-generation platform for smarter club management. Streamline operations, engage members, and transform how you run your organization.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => navigate('/dashboard')}
            className="px-8 py-4 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition flex items-center justify-center gap-2"
          >
            Open Dashboard
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-purple-800/50 p-8 rounded-xl backdrop-blur-sm">
            <Shield className="h-12 w-12 text-purple-300 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Secure Management</h3>
            <p className="text-purple-200">
              Advanced security features to protect your club's data and members' information.
            </p>
          </div>
          <div className="bg-purple-800/50 p-8 rounded-xl backdrop-blur-sm">
            <BarChart2 className="h-12 w-12 text-purple-300 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Analytics & Insights</h3>
            <p className="text-purple-200">
              Comprehensive analytics to track engagement and make data-driven decisions.
            </p>
          </div>
          <div className="bg-purple-800/50 p-8 rounded-xl backdrop-blur-sm">
            <Users className="h-12 w-12 text-purple-300 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Member Engagement</h3>
            <p className="text-purple-200">
              Tools to keep your members connected and engaged with your club's activities.
            </p>
          </div>
        </div>
      </div>

      {/* Events Showcase Section */}
      <div className="container mx-auto px-6 py-16" id="events">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Events Showcase</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-purple-800/50 rounded-xl overflow-hidden backdrop-blur-sm transform hover:scale-[1.02] transition-transform">
              <div className="h-48 relative">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                <div className="space-y-2 text-purple-200">
                  <p>Date: {event.date}</p>
                  <p>Host: {event.host}</p>
                  <p>Topic: {event.topic}</p>
                  <p>Attendees: {event.attendees}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition">
            View All Events
          </button>
        </div>
      </div>

      {/* For Everyone Section */}
      <div className="container mx-auto px-6 py-16" id="roles">
        <h2 className="text-4xl font-bold text-white text-center mb-4">For Everyone</h2>
        <p className="text-center text-purple-200 mb-12 max-w-2xl mx-auto">
          The Techno Clubs Portal is designed with every stakeholder in mind. Our platform delivers tailored experiences and powerful tools for each user.
        </p>
        
        <div className="bg-purple-800/30 rounded-xl backdrop-blur-sm p-8 max-w-4xl mx-auto">
          <div className="flex justify-center gap-4 mb-8">
            {(['Admin', 'Student', 'Visitor'] as const).map((role) => (
              <button
                key={role}
                onClick={() => setActiveRole(role)}
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  activeRole === role
                    ? 'bg-purple-500 text-white'
                    : 'bg-purple-900/50 text-purple-200 hover:bg-purple-700/50'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {roleFeatures[activeRole].map((feature, index) => (
              <div key={index} className="bg-purple-900/50 p-6 rounded-lg flex items-start gap-4 hover:bg-purple-800/50 transition">
                <div className="text-purple-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                  <p className="text-purple-200">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-purple-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Zap className="h-6 w-6 text-purple-300" />
            <span className="text-white font-semibold">Club Sphere</span>
          </div>
          <div className="text-purple-200 text-sm">
            © 2025 Club Sphere. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;