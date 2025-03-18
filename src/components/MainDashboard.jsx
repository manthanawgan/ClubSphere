import React, { useState } from 'react';
import OverviewSection from './OverviewSection';
import CreditSection from './CreditSection';
import EventsDashboard from './EventsDashboard';
import WorkspaceDashboard from './WorkspaceDashboard';
import DocumentationSection from './DocumentationSection';


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Profile information
  const profile = {
    name: 'Name',
    position: 'Position',
    avatar: '/api/placeholder/40/40',
    notifications: 4
  };

  // Render the active dashboard section
  const renderDashboard = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewDashboard />;
      case 'credits':
        return <CreditsDashboard />;
      case 'events':
        // return <EventsDashboard />;
        return <div>Events Dashboard Coming Soon</div>;
      case 'workspace':
        // return <WorkspaceDashboard />;
        return <div>Workspace Dashboard Coming Soon</div>;
      case 'documentation':
        // return <DocumentationDashboard />;
        return <div>Documentation Dashboard Coming Soon</div>;
      case 'resources':
        // return <ResourcesDashboard />;
        return <div>Resources Dashboard Coming Soon</div>;
      default:
        return <OverviewDashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-4 border-b border-gray-800">
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>
        
        {/* Profile Section */}
        <div className="p-4 flex items-center space-x-3 border-b border-gray-800">
          <div className="relative">
            <img
              src={profile.avatar}
              alt="Profile"
              className="h-12 w-12 rounded-full bg-gray-700"
            />
            {profile.notifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white w-5 h-5 flex items-center justify-center rounded-full">
                {profile.notifications}
              </span>
            )}
          </div>
          <div>
            <p className="font-medium">{profile.name}</p>
            <p className="text-sm text-gray-400">{profile.position}</p>
          </div>
        </div>
        
        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="py-4">
            <li>
              <button
                onClick={() => setActiveTab('overview')}
                className={`flex items-center w-full px-4 py-3 ${
                  activeTab === 'overview' ? 'bg-gray-800' : 'hover:bg-gray-800'
                }`}
              >
                <span>Overview</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('credits')}
                className={`flex items-center w-full px-4 py-3 ${
                  activeTab === 'credits' ? 'bg-gray-800' : 'hover:bg-gray-800'
                }`}
              >
                <span>Credits</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('events')}
                className={`flex items-center w-full px-4 py-3 ${
                  activeTab === 'events' ? 'bg-gray-800' : 'hover:bg-gray-800'
                }`}
              >
                <span>Events</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('workspace')}
                className={`flex items-center w-full px-4 py-3 ${
                  activeTab === 'workspace' ? 'bg-gray-800' : 'hover:bg-gray-800'
                }`}
              >
                <span>Workspace</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('documentation')}
                className={`flex items-center w-full px-4 py-3 ${
                  activeTab === 'documentation' ? 'bg-gray-800' : 'hover:bg-gray-800'
                }`}
              >
                <span>Documentation</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('resources')}
                className={`flex items-center w-full px-4 py-3 ${
                  activeTab === 'resources' ? 'bg-gray-800' : 'hover:bg-gray-800'
                }`}
              >
                <span>Resources</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {renderDashboard()}
      </div>
    </div>
  );
};

export default Dashboard;