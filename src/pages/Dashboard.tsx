import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home, CreditCard, Calendar, Briefcase, FileText, BookOpen, User } from 'lucide-react';
import Overview from './dashboard/Overview';
import Credits from './dashboard/Credits';
import Events from './dashboard/Events';
import Workspace from './dashboard/Workspace';
import Documentation from './dashboard/Documentation';
import Resources from './dashboard/Resources';

const Dashboard = () => {
  const location = useLocation();
  const [userImage] = useState('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80');

  const navigationItems = [
    { path: '/dashboard', icon: <Home className="w-5 h-5" />, label: 'Overview' },
    { path: '/dashboard/credits', icon: <CreditCard className="w-5 h-5" />, label: 'Credits' },
    { path: '/dashboard/events', icon: <Calendar className="w-5 h-5" />, label: 'Events' },
    { path: '/dashboard/workspace', icon: <Briefcase className="w-5 h-5" />, label: 'Workspace' },
    { path: '/dashboard/documentation', icon: <FileText className="w-5 h-5" />, label: 'Documentation' },
    { path: '/dashboard/resources', icon: <BookOpen className="w-5 h-5" />, label: 'Resources' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900 text-white">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-purple-900/50 backdrop-blur-lg p-4">
          <div className="flex items-center gap-3 mb-8 p-2">
            <div className="relative">
              <img
                src={userImage}
                alt="Profile"
                className="w-12 h-12 rounded-full"
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-purple-900"></div>
            </div>
            <div>
              <h2 className="font-semibold">John Doe</h2>
              <p className="text-sm text-purple-300">Admin</p>
            </div>
          </div>

          <nav className="space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'bg-purple-500 text-white'
                    : 'text-purple-300 hover:bg-purple-800/50'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="/events" element={<Events />} />
            <Route path="/workspace" element={<Workspace />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;