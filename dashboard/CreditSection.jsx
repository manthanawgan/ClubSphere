import React, { useState } from 'react';

const CreditsDashboard = () => {
  // Sample data - in a real application this would come from an API
  const [members, setMembers] = useState([
    { id: 1, name: "Alex Johnson", avatar: "/api/placeholder/40/40", credits: 350, tasksCompleted: 12, level: "Gold" },
    { id: 2, name: "Maria Garcia", avatar: "/api/placeholder/40/40", credits: 275, tasksCompleted: 9, level: "Silver" },
    { id: 3, name: "Sam Wilson", avatar: "/api/placeholder/40/40", credits: 420, tasksCompleted: 15, level: "Gold" },
    { id: 4, name: "Priya Patel", avatar: "/api/placeholder/40/40", credits: 190, tasksCompleted: 7, level: "Bronze" },
    { id: 5, name: "David Kim", avatar: "/api/placeholder/40/40", credits: 305, tasksCompleted: 11, level: "Silver" }
  ]);

  // State for filtering and pagination
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 5;

  // Filter members based on level
  const filteredMembers = filter === 'all' 
    ? members 
    : members.filter(member => member.level.toLowerCase() === filter.toLowerCase());

  // Calculate pagination
  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = filteredMembers.slice(indexOfFirstMember, indexOfLastMember);
  const totalPages = Math.ceil(filteredMembers.length / membersPerPage);

  // Calculate total credits and tasks
  const totalCredits = members.reduce((sum, member) => sum + member.credits, 0);
  const totalTasks = members.reduce((sum, member) => sum + member.tasksCompleted, 0);

  return (
    <div className="flex flex-col h-full p-6 space-y-6">
      {/* Credits Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Total AI Credits</p>
            <p className="text-2xl font-bold">{totalCredits}</p>
          </div>
          <div className="bg-blue-100 p-3 rounded-full">
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Tasks Completed</p>
            <p className="text-2xl font-bold">{totalTasks}</p>
          </div>
          <div className="bg-green-100 p-3 rounded-full">
            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Average Credits</p>
            <p className="text-2xl font-bold">{Math.round(totalCredits / members.length)}</p>
          </div>
          <div className="bg-purple-100 p-3 rounded-full">
            <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Credits Table Section */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">Member Credits</h2>
          <div className="flex space-x-2">
            <button 
              onClick={() => setFilter('all')} 
              className={`px-3 py-1 text-sm rounded-md ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('gold')} 
              className={`px-3 py-1 text-sm rounded-md ${filter === 'gold' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
            >
              Gold
            </button>
            <button 
              onClick={() => setFilter('silver')} 
              className={`px-3 py-1 text-sm rounded-md ${filter === 'silver' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
            >
              Silver
            </button>
            <button 
              onClick={() => setFilter('bronze')} 
              className={`px-3 py-1 text-sm rounded-md ${filter === 'bronze' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
            >
              Bronze
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Member</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">AI Credits</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tasks Completed</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentMembers.map((member) => (
                <tr key={member.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src={member.avatar} alt="" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{member.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{member.credits}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{member.tasksCompleted}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${member.level === 'Gold' ? 'bg-yellow-100 text-yellow-800' : 
                        member.level === 'Silver' ? 'bg-gray-100 text-gray-800' : 
                        'bg-yellow-700 text-white'}`}>
                      {member.level}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-blue-600 hover:text-blue-900">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="p-4 flex items-center justify-between border-t">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">{indexOfFirstMember + 1}</span> to <span className="font-medium">
                  {Math.min(indexOfLastMember, filteredMembers.length)}
                </span> of <span className="font-medium">{filteredMembers.length}</span> members
              </p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded-md text-sm disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded-md text-sm disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Add Credit Feature */}
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-4">Award AI Credits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Member</label>
            <select className="w-full p-2 border rounded-md">
              <option value="">Select Member</option>
              {members.map(member => (
                <option key={member.id} value={member.id}>{member.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Task Type</label>
            <select className="w-full p-2 border rounded-md">
              <option value="">Select Task</option>
              <option value="workshop">Workshop Participation</option>
              <option value="project">Project Submission</option>
              <option value="challenge">Challenge Completion</option>
              <option value="mentoring">Mentoring Session</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Credit Amount</label>
            <input type="number" className="w-full p-2 border rounded-md" placeholder="Enter amount" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Optional notes" />
          </div>
          <div className="md:col-span-2">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">
              Award Credits
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditsDashboard;