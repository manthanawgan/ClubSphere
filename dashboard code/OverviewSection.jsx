import React from 'react';

const OverviewDashboard = () => {
  // Sample data for the IEEE Student Chapter
  const chapterInfo = {
    name: "IEEE - Student Chapter",
    memberCount: 32,
    eventsHosted: 250,
    projectsCompleted: 56
  };

  // Sample members data - in a real application this would come from an API
  const members = [
    { id: 1, name: "Emily Parker", email: "emily.p@example.com", avatar: "/api/placeholder/40/40" },
    { id: 2, name: "Daniel Lee", email: "daniel.l@example.com", avatar: "/api/placeholder/40/40" },
    { id: 3, name: "Sophia Garcia", email: "sophia.g@example.com", avatar: "/api/placeholder/40/40" },
    { id: 4, name: "Nathan Kim", email: "nathan.k@example.com", avatar: "/api/placeholder/40/40" },
    { id: 5, name: "Olivia Wilson", email: "olivia.w@example.com", avatar: "/api/placeholder/40/40" }
  ];

  return (
    <div className="flex flex-col h-full p-6 space-y-6">
      {/* Chapter Info Header */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">{chapterInfo.name}</h1>
          <button className="bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-md">
            Edit club details
          </button>
        </div>

        {/* Stats Cards */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex flex-wrap justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <div>
                <p className="text-xs text-green-500">Lead</p>
                <p className="font-medium">Name</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <div>
                <p className="font-medium">{chapterInfo.eventsHosted}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <p className="font-medium">{chapterInfo.projectsCompleted}</p>
                <div className="flex">
                  <span className="bg-yellow-300 w-2 h-2 rounded-full"></span>
                  <span className="bg-green-300 w-2 h-2 rounded-full mx-1"></span>
                  <span className="bg-red-300 w-2 h-2 rounded-full"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coding Club Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center mb-4">
          <h2 className="text-lg font-semibold">Coding Club</h2>
        </div>
        <div className="flex items-center mb-4">
          <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
          <span>{chapterInfo.memberCount} Members</span>
        </div>
      </div>

      {/* Members Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Members</h2>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-1 px-3 rounded-md text-sm">
            Add New Members
          </button>
        </div>
        
        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search members..."
              className="pl-10 w-full p-2 border rounded-md"
            />
          </div>
        </div>
        
        {/* Members List */}
        <div className="space-y-4">
          {members.map((member) => (
            <div key={member.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <img className="h-10 w-10 rounded-full bg-gray-200" src={member.avatar} alt="" />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">{member.name}</div>
                  <div className="text-sm text-gray-500">{member.email}</div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewDashboard;