import React, { useState } from 'react';
//import { Shield, Users, Calendar, Award, Clipboard, Star, PlusCircle } from 'lucide-react';

const RoleFeaturesSection = () => {
  const [activeRole, setActiveRole] = useState('Admin');
  
  const roleFeatures = {
    Admin: [
      { icon: <Users className="w-6 h-6" />, title: "Member Management", description: "Remove members, promote/demote, and assign roles within clubs" },
      { icon: <Calendar className="w-6 h-6" />, title: "Event Creation", description: "Create and manage club events with full administrative control" },
      { icon: <Award className="w-6 h-6" />, title: "Credit System", description: "View and edit the credit allocation system for all members" },
      { icon: <Shield className="w-6 h-6" />, title: "Role Assignment", description: "Assign specific roles and permissions to club members" }
    ],
    Student: [
      { icon: <Star className="w-6 h-6" />, title: "Credit Tracking", description: "View your earned credits and participation history" },
      { icon: <PlusCircle className="w-6 h-6" />, title: "Club Applications", description: "Apply to join additional clubs that match your interests" },
      { icon: <Calendar className="w-6 h-6" />, title: "Event Leadership", description: "Apply to lead or coordinate upcoming club events" },
      { icon: <Clipboard className="w-6 h-6" />, title: "Activity History", description: "Track your involvement and contributions to clubs" }
    ],
    Visitor: [
      { icon: <Calendar className="w-6 h-6" />, title: "Event Discovery", description: "Browse upcoming events from all technical clubs" },
      { icon: <PlusCircle className="w-6 h-6" />, title: "Event Registration", description: "Register for events that interest you" },
      { icon: <Users className="w-6 h-6" />, title: "Club Exploration", description: "Discover active technical clubs and their activities" }
    ]
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white p-6 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-xl font-medium mb-3">For Everyone</h2>
          <p className="text-gray-300 max-w-xl">
            The Techno Clubs Portal is designed with every stakeholder in mind. Our platform delivers tailored experiences and powerful tools for each user.
          </p>
        </div>
        
        {/* Role Selector */}
        <div className="bg-gray-800 bg-opacity-40 rounded-full p-1 flex mb-8 w-fit mx-auto">
          {['Admin', 'Student', 'Visitor'].map((role) => (
            <button
              key={role}
              onClick={() => setActiveRole(role)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeRole === role 
                  ? 'bg-purple-700 text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {role}
            </button>
          ))}
        </div>
        
        {/* Features Display Area */}
        <div className="bg-gray-900 bg-opacity-50 rounded-3xl p-8 min-h-96">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roleFeatures[activeRole].map((feature, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-40 rounded-xl p-5 flex items-start">
                <div className="mr-4 p-3 bg-purple-900 bg-opacity-40 rounded-xl">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleFeaturesSection;