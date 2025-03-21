import React, { useState } from 'react';
import { MessageSquare, PenTool, DollarSign, Users, AlertTriangle, TrendingUp, Check } from 'lucide-react';

const WorkspaceComponent = () => {
  const [activeTab, setActiveTab] = useState('chat');
  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: 'Sarah', message: 'When is our next team meeting?', time: '10:45 AM' },
    { id: 2, user: 'Mike', message: 'Tomorrow at 2pm in the conference room', time: '10:47 AM' },
    { id: 3, user: 'Alex', message: 'I added the agenda to our shared docs', time: '10:52 AM' }
  ]);
  const [newMessage, setNewMessage] = useState('');
  
  const [budgetItems, setBudgetItems] = useState([
    { 
      id: 1, 
      category: 'Venue', 
      allocated: 5000, 
      spent: 2000,
      aiSuggestion: 'Consider booking early for 12% discount',
      trend: 'stable',
      risk: 'low'
    },
    { 
      id: 2, 
      category: 'Marketing', 
      allocated: 3000, 
      spent: 1500,
      aiSuggestion: 'Reallocate $500 from print to digital channels',
      trend: 'increasing',
      risk: 'medium'
    },
    { 
      id: 3, 
      category: 'Speakers', 
      allocated: 2000, 
      spent: 500,
      aiSuggestion: 'Budget may be insufficient based on past events',
      trend: 'decreasing',
      risk: 'high'
    }
  ]);
  
  const [showAiInsights, setShowAiInsights] = useState(false);
  const [aiOptimizedBudget, setAiOptimizedBudget] = useState(null);
  
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: 'Sarah Johnson', position: 'Event Lead', avatar: '👩🏽' },
    { id: 2, name: 'Mike Chen', position: 'Marketing', avatar: '👨🏻' },
    { id: 3, name: 'Alex Rodriguez', position: 'Technical Support', avatar: '👨🏾' },
    { id: 4, name: 'Jamie Taylor', position: 'Guest Relations', avatar: '👩🏼' }
  ]);
  
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setChatMessages([
        ...chatMessages,
        { 
          id: chatMessages.length + 1, 
          user: 'You', 
          message: newMessage, 
          time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        }
      ]);
      setNewMessage('');
    }
  };

  const handleOptimizeBudget = () => {
    // Simulate AI optimization
    setShowAiInsights(true);
    setAiOptimizedBudget({
      savings: 1200,
      roi: 15,
      recommendations: [
        'Reduce venue cost by 10% through early booking',
        'Shift 30% of print marketing to digital channels',
        'Increase speaker budget by $500 for higher quality presenters'
      ]
    });
  };

  const renderTabContent = () => {
    switch(activeTab) {
      case 'chat':
        return (
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 rounded">
              {chatMessages.map(msg => (
                <div key={msg.id} className={`flex ${msg.user === 'You' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs px-4 py-2 rounded-lg ${msg.user === 'You' ? 'bg-blue-100' : 'bg-white border'}`}>
                    <div className="font-semibold text-sm">{msg.user} <span className="text-xs font-normal text-gray-500">{msg.time}</span></div>
                    <div className="text-sm">{msg.message}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 flex gap-2 bg-white border-t">
              <input 
                type="text" 
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Type your message..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button 
                onClick={handleSendMessage}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Send
              </button>
            </div>
          </div>
        );
      
      case 'drawing':
        return (
          <div className="h-full p-4 bg-gray-50 rounded flex flex-col items-center justify-center">
            <div className="text-center mb-4">
              <PenTool size={40} className="mx-auto mb-2 text-gray-400" />
              <h3 className="text-lg font-medium">Collaborative Drawing Board</h3>
              <p className="text-sm text-gray-500">Draw, annotate, and brainstorm with your team</p>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Start Drawing
            </button>
          </div>
        );
      
      case 'budget':
        return (
          <div className="h-full overflow-y-auto p-4 bg-gray-50 rounded">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium">Smart Budget Allocator</h3>
              <button 
                onClick={handleOptimizeBudget}
                className="text-xs px-3 py-1 bg-purple-600 text-white rounded-md hover:bg-purple-700 flex items-center"
              >
                <DollarSign size={14} className="mr-1" /> AI Optimize
              </button>
            </div>
            
            {showAiInsights && aiOptimizedBudget && (
              <div className="mb-4 p-3 bg-purple-50 border border-purple-200 rounded">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-purple-800">AI Budget Insights</h4>
                  <button onClick={() => setShowAiInsights(false)} className="text-xs text-gray-500">Hide</button>
                </div>
                <div className="flex space-x-4 text-center mb-2">
                  <div className="flex-1">
                    <div className="text-lg font-bold text-green-600">${aiOptimizedBudget.savings}</div>
                    <div className="text-xs text-gray-600">Potential Savings</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-lg font-bold text-blue-600">{aiOptimizedBudget.roi}%</div>
                    <div className="text-xs text-gray-600">Predicted ROI</div>
                  </div>
                </div>
                <div className="text-xs text-gray-700">
                  Top recommendation: {aiOptimizedBudget.recommendations[0]}
                </div>
              </div>
            )}
            
            <div className="space-y-4">
              {budgetItems.map(item => (
                <div key={item.id} className="bg-white p-3 rounded shadow-sm">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center">
                      <span className="font-medium">{item.category}</span>
                      {item.risk === 'high' && <AlertTriangle size={14} className="ml-1 text-red-500" />}
                      {item.trend === 'increasing' && <TrendingUp size={14} className="ml-1 text-blue-500" />}
                    </div>
                    <span className="text-sm text-gray-500">
                      ${item.spent} of ${item.allocated}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div 
                      className={`h-2 rounded-full ${
                        (item.spent/item.allocated) > 0.75 ? 'bg-red-500' : 
                        (item.spent/item.allocated) > 0.5 ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${(item.spent/item.allocated) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-purple-700 italic flex items-start">
                    <div className="mt-1 mr-1">💡</div>
                    <div>{item.aiSuggestion}</div>
                  </div>
                </div>
              ))}
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 mt-2">
                Add Budget Item
              </button>
            </div>
          </div>
        );
      
      case 'team':
        return (
          <div className="h-full overflow-y-auto p-4 bg-gray-50 rounded">
            <h3 className="font-medium mb-3">Team Positions</h3>
            <div className="space-y-3">
              {teamMembers.map(member => (
                <div key={member.id} className="flex items-center bg-white p-3 rounded shadow-sm">
                  <div className="text-xl mr-3">{member.avatar}</div>
                  <div className="flex-1">
                    <div className="font-medium">{member.name}</div>
                    <div className="text-sm text-gray-500">{member.position}</div>
                  </div>
                  <button className="text-xs px-2 py-1 border rounded hover:bg-gray-100">
                    Edit Role
                  </button>
                </div>
              ))}
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 mt-2">
                Assign New Position
              </button>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm h-96">
      <h2 className="text-xl font-semibold mb-4">Workspace</h2>
      
      <div className="flex border-b mb-4">
        <button 
          onClick={() => setActiveTab('chat')}
          className={`flex items-center px-4 py-2 ${activeTab === 'chat' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
        >
          <MessageSquare size={18} className="mr-2" /> Team Chat
        </button>
        <button 
          onClick={() => setActiveTab('drawing')}
          className={`flex items-center px-4 py-2 ${activeTab === 'drawing' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
        >
          <PenTool size={18} className="mr-2" /> Drawing
        </button>
        <button 
          onClick={() => setActiveTab('budget')}
          className={`flex items-center px-4 py-2 ${activeTab === 'budget' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
        >
          <DollarSign size={18} className="mr-2" /> Budget
        </button>
        <button 
          onClick={() => setActiveTab('team')}
          className={`flex items-center px-4 py-2 ${activeTab === 'team' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
        >
          <Users size={18} className="mr-2" /> Positions
        </button>
      </div>
      
      <div className="h-64">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default WorkspaceComponent;