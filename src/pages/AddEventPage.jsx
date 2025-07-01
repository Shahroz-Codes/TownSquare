import React, { useState } from 'react';
import { Input, Button } from '../components/ui';

function AddEventPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit event:", formData); // backend integration later
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] px-4">
      <div className="w-full max-w-xl bg-white text-black p-8 rounded-xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-center">Create New Event</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Event Title"
            placeholder="Enter event title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <Input
            label="Description"
            placeholder="Describe the event"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <Input
            label="Event Date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <Button type="submit" className="w-full">
            Add Event
          </Button>
        </form>
      </div>
    </div>
  );
}

export default AddEventPage;
