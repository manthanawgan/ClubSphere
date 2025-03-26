import React, { useState } from 'react';

interface Member {
  id: number;
  name: string;
  credits: number;
  tasksCompleted: number;
  level: 'Gold' | 'Silver' | 'Bronze';
}

const Credits = () => {
  const [members] = useState<Member[]>([
    { id: 1, name: 'Alex Johnson', credits: 350, tasksCompleted: 12, level: 'Gold' },
    { id: 2, name: 'Maria Garcia', credits: 275, tasksCompleted: 9, level: 'Silver' },
    { id: 3, name: 'Sam Wilson', credits: 420, tasksCompleted: 15, level: 'Gold' },
    { id: 4, name: 'Priya Patel', credits: 190, tasksCompleted: 7, level: 'Bronze' },
    { id: 5, name: 'David Kim', credits: 305, tasksCompleted: 11, level: 'Silver' },
  ]);

  const totalCredits = members.reduce((sum, member) => sum + member.credits, 0);
  const totalTasks = members.reduce((sum, member) => sum + member.tasksCompleted, 0);
  const averageCredits = Math.round(totalCredits / members.length);

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case 'Gold':
        return 'bg-yellow-500';
      case 'Silver':
        return 'bg-gray-400';
      case 'Bronze':
        return 'bg-amber-700';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-lg font-medium text-purple-200">Total Credits</h3>
          <p className="text-3xl font-bold mt-2">{totalCredits}</p>
        </div>
        <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-lg font-medium text-purple-200">Tasks Completed</h3>
          <p className="text-3xl font-bold mt-2">{totalTasks}</p>
        </div>
        <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-lg font-medium text-purple-200">Average Credits</h3>
          <p className="text-3xl font-bold mt-2">{averageCredits}</p>
        </div>
      </div>

      <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Member Credits</h2>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded-full bg-purple-700 text-sm">All</button>
            <button className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-500 text-sm">Gold</button>
            <button className="px-3 py-1 rounded-full bg-gray-400/20 text-gray-400 text-sm">Silver</button>
            <button className="px-3 py-1 rounded-full bg-amber-700/20 text-amber-700 text-sm">Bronze</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-purple-300">
                <th className="pb-4">MEMBER</th>
                <th className="pb-4">CREDITS</th>
                <th className="pb-4">TASKS COMPLETED</th>
                <th className="pb-4">LEVEL</th>
                <th className="pb-4">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id} className="border-t border-purple-700">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
                      {member.name}
                    </div>
                  </td>
                  <td className="py-4">{member.credits}</td>
                  <td className="py-4">{member.tasksCompleted}</td>
                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${getLevelBadgeColor(member.level)}`}>
                      {member.level}
                    </span>
                  </td>
                  <td className="py-4">
                    <button className="text-blue-400 hover:text-blue-300">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-6">Award Credits</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-purple-300 mb-2">Member</label>
            <select className="w-full bg-purple-900/50 border border-purple-700 rounded-lg p-2.5">
              <option>Select Member</option>
              {members.map(member => (
                <option key={member.id} value={member.id}>{member.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-purple-300 mb-2">Task Type</label>
            <select className="w-full bg-purple-900/50 border border-purple-700 rounded-lg p-2.5">
              <option>Select Task</option>
              <option>Event Organization</option>
              <option>Workshop Participation</option>
              <option>Project Contribution</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-purple-300 mb-2">Credit Amount</label>
            <input
              type="number"
              placeholder="Enter amount"
              className="w-full bg-purple-900/50 border border-purple-700 rounded-lg p-2.5"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-purple-300 mb-2">Notes</label>
            <input
              type="text"
              placeholder="Optional notes"
              className="w-full bg-purple-900/50 border border-purple-700 rounded-lg p-2.5"
            />
          </div>
        </div>
        <button className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2.5 rounded-lg transition-colors">
          Award Credits
        </button>
      </div>
    </div>
  );
};

export default Credits;