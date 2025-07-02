import React, { useState } from 'react';
import EventDetails from './EventDetails';
import service from "../../appwrite/config";
import { Button } from '../ui';

function EventCard({ event }) {
  const [isOpen, setIsOpen] = useState(false);
    const imageUrl = service.getImageUrl(event.image);
    
  return (
    <>
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 text-black">
        <img
          src={imageUrl}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{event.title}</h3>
          <Button
            onClick={() => setIsOpen(true)}
            className="text-sm text-purple-600 hover:underline font-semibold"
          >
            Read More
          </Button>
        </div>
      </div>

      {isOpen && (
        <EventDetails event={event} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
}

export default EventCard;
