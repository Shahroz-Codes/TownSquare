import React, { useEffect, useState } from 'react';
import service from '../appwrite/config';
import EventCard from '../components/shared/EventCard';

function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await service.getEvents();
        setEvents(data);
      } catch (error) {
        console.error("Failed to load events", error);
      }
    };

    loadEvents();
  }, []);

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-gray-100 to-gray-200 text-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-8 text-purple-600 text-center">
          Upcoming Events
        </h2>

        {events.length === 0 ? (
          <p className="text-center text-gray-400">No active events yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {events.map(event => (
              <EventCard key={event.$id} event={event} />
            ))}
          </div>
        )}
      </div>
    </div>

  );
}

export default EventsPage;
