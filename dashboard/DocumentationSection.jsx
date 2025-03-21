import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from 'lucide-react';

const EventDocumentation = () => {
  const [activeTab, setActiveTab] = useState('create');
  const [generatingReport, setGeneratingReport] = useState(false);
  const [generatedReport, setGeneratedReport] = useState('');
  const [formData, setFormData] = useState({
    eventName: '',
    eventDate: '',
    eventType: '',
    speaker: '',
    attendees: '',
    summary: '',
    keyPoints: '',
    feedback: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGeneratingReport(true);
    
    // Simulate AI report generation
    setTimeout(() => {
      const report = generateAIReport(formData);
      setGeneratedReport(report);
      setGeneratingReport(false);
      setActiveTab('report');
    }, 1500);
  };

  const generateAIReport = (data) => {
    // This would be replaced with actual AI integration
    return `
# Event Documentation: ${data.eventName}

## Event Overview
- **Date:** ${data.eventDate}
- **Type:** ${data.eventType}
- **Speaker:** ${data.speaker}
- **Attendees:** ${data.attendees} participants

## Summary
${data.summary}

## Key Points Discussed
${data.keyPoints}

## Feedback and Insights
${data.feedback}

## Action Items
Based on the event details, the following action items are recommended:
1. Follow up with attendees for additional feedback
2. Schedule a follow-up session to address unanswered questions
3. Share event materials with the broader team
4. Incorporate feedback into future events

## Analytics
- Engagement rate: 87%
- Session satisfaction: 4.2/5
- Most engaged topics: [Derived from key points]
    `;
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="create">Create Documentation</TabsTrigger>
          <TabsTrigger value="report" disabled={!generatedReport}>AI Report</TabsTrigger>
          <TabsTrigger value="history">Documentation History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="create">
          <Card>
            <CardHeader>
              <CardTitle>Event Documentation</CardTitle>
              <CardDescription>Enter event details to generate comprehensive documentation</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Event Name</label>
                    <input
                      type="text"
                      name="eventName"
                      value={formData.eventName}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Event Date</label>
                      <div className="relative">
                        <input
                          type="date"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleChange}
                          className="w-full p-2 border rounded"
                          required
                        />
                        <Calendar className="absolute top-2 right-2 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Event Type</label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                      >
                        <option value="">Select Type</option>
                        <option value="Webinar">Webinar</option>
                        <option value="Workshop">Workshop</option>
                        <option value="Conference">Conference</option>
                        <option value="Training">Training</option>
                        <option value="Meetup">Meetup</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Speaker/Presenter</label>
                      <input
                        type="text"
                        name="speaker"
                        value={formData.speaker}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Number of Attendees</label>
                      <input
                        type="number"
                        name="attendees"
                        value={formData.attendees}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Event Summary</label>
                    <textarea
                      name="summary"
                      value={formData.summary}
                      onChange={handleChange}
                      className="w-full p-2 border rounded h-24"
                      required
                      placeholder="Provide a brief summary of the event"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Key Points Discussed</label>
                    <textarea
                      name="keyPoints"
                      value={formData.keyPoints}
                      onChange={handleChange}
                      className="w-full p-2 border rounded h-24"
                      placeholder="List the main topics and key points discussed"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Feedback & Observations</label>
                    <textarea
                      name="feedback"
                      value={formData.feedback}
                      onChange={handleChange}
                      className="w-full p-2 border rounded h-24"
                      placeholder="Include audience feedback and your observations"
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSubmit} disabled={generatingReport}>
                {generatingReport ? 'Generating AI Report...' : 'Generate Documentation'}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="report">
          <Card>
            <CardHeader>
              <CardTitle>AI-Generated Documentation</CardTitle>
              <CardDescription>Comprehensive event report generated by AI</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-4 rounded-md whitespace-pre-wrap">
                {generatedReport}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setActiveTab('create')}>
                Edit Details
              </Button>
              <Button>Download Report</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Documentation History</CardTitle>
              <CardDescription>Access and manage previous event documentation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded">
                  <div>
                    <h3 className="font-medium">Q1 Strategy Workshop</h3>
                    <p className="text-sm text-gray-500">March 10, 2025 • Workshop</p>
                  </div>
                  <Button variant="outline" size="sm">View</Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded">
                  <div>
                    <h3 className="font-medium">Product Launch Webinar</h3>
                    <p className="text-sm text-gray-500">February 24, 2025 • Webinar</p>
                  </div>
                  <Button variant="outline" size="sm">View</Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded">
                  <div>
                    <h3 className="font-medium">Annual Customer Conference</h3>
                    <p className="text-sm text-gray-500">January 15-17, 2025 • Conference</p>
                  </div>
                  <Button variant="outline" size="sm">View</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EventDocumentation;