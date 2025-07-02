import React, { useState } from 'react';
import { Input } from '../ui';
import Button from '../ui/Button';
import service from '../../appwrite/config';
import { useSelector } from 'react-redux';

function VolunteerForm({ closeModal,refreshNeeds }) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        location: '',
        contact: '',
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const userData = useSelector((state) => state.auth.userData);

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        const { title, description, location, contact } = formData;

        // Basic validation
        if (!title || !description || !location || !contact) {
            setError('Please fill all required fields.');
            setLoading(false);
            return;
        }

        try {
            await service.createVolunteerNeed({
                title,
                description,
                location,
                contact,
                createdat: new Date().toISOString(),
                createdby: userData?.$id || "anonymous",
                status: "active"
            });
            refreshNeeds();
            closeModal(); // Close modal after successful submission
        } catch (err) {
            console.error("Error creating volunteer post:", err);
            setError('Something went wrong while submitting.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <Input
                label="Title"
                name="title"
                placeholder="Title of the volunteer request"
                value={formData.title}
                onChange={handleChange}
                required
            />
            <Input
                label="Description"
                name="description"
                placeholder="Brief description"
                value={formData.description}
                onChange={handleChange}
                required
            />
            <Input
                label="Location"
                name="location"
                placeholder="Where the help is needed"
                value={formData.location}
                onChange={handleChange}
                required
            />
            <Input
                label="Contact Email"
                name="contact"
                type="email"
                placeholder="Your contact email"
                value={formData.contact}
                onChange={handleChange}
                required
            />

            {error && <p className="text-red-600 text-sm">{error}</p>}

            <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Posting..." : "Post Request"}
            </Button>
        </form>
    );
}

export default VolunteerForm;
