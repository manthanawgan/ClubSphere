import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface Message {
  id: number;
  sender: string;
  time: string;
  content: string;
}

const Workspace = () => {
  const [activeTab, setActiveTab] = useState('Chat');
  const [messages] = useState<Message[]>([
    { id: 1, sender: 'Sarah', time: '9:45 AM', content: 'When is our next meeting' },
    { id: 2, sender: 'Meet', time: '10:00 AM', content: 'At 12:30 PM' },
    { id: 3, sender: 'Sarah', time: '10:05 AM', content: 'Okay! Thank you' },
    { id: 4, sender: 'Meet', time: '10:06 AM', content: 'No Problem.' },
  ]);

  return (
    <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6">
      <div className="flex gap-4 mb-6">
        {['Chat', 'Drawing', 'AI Budget', 'Positions'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === tab
                ? 'bg-purple-500 text-white'
                : 'text-purple-300 hover:bg-purple-700/50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="flex items-start gap-3">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex-shrink-0"></div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-medium">{message.sender}</span>
                <span className="text-sm text-purple-400">{message.time}</span>
              </div>
              <p className="mt-1 text-purple-200">{message.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 bg-purple-900/50 border border-purple-700 rounded-lg px-4 py-2.5"
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2.5 rounded-lg transition-colors flex items-center gap-2">
          <Send className="w-4 h-4" />
          Send
        </button>
      </div>
    </div>
  );
};

export default Workspace;