import React, { useEffect, useState } from 'react';
import service from '../appwrite/config'; // or wherever you exported it

function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    service.getEvents()
      .then(data => {
        setEvents(data); // response.documents
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading events...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      <div className="space-y-4">
        {events.map(event => (
          <div key={event.$id} className="p-4 border rounded-lg bg-white text-black">
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p>{event.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default EventsPage;