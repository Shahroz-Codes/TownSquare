import React, { useState } from 'react';
import { Input, Button } from '../../components/ui';
import service from '../../appwrite/config';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AddEventPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    date: '',
    status: 'active',
    image: null,
  });

  const [loading, setLoading] = useState(false);
  const userData = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.image) {
      alert('Image is required');
      return;
    }

    setLoading(true);
    try {
      await service.createEvent({
        ...formData,
        userId: userData.$id,
        imageFile: formData.image,
      });

      navigate('/events');
    } catch (err) {
      console.error('AddEvent failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen text-black py-10 ">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl  space-y-6 bg-gray-100 p-8 rounded-xl ring-2 ring-purple-600 shadow"
      >
        <h2 className="text-2xl font-bold text-center text-purple-500">Create New Event</h2>

        <Input
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <Input
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <Input
          label="Location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <Input
          label="Date & Time"
          type="datetime-local"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          <option value="active">Active</option>
          <option value="cancelled">Cancelled</option>
          <option value="postponed">Postponed</option>
        </select>

        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="block w-full text-sm text-gray-600
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-xl file:border-0
                     file:text-sm file:font-semibold
                     file:bg-purple-50 file:text-purple-700
                     hover:file:bg-purple-100"
          required
        />

        <Button type="submit" className="w-full">
          {loading ? 'Creating...' : 'Create Event'}
        </Button>
      </form>
    </div>
  );
}

export default AddEventPage;