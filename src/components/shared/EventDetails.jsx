import React from 'react';
import service from "../../appwrite/config";


function EventDetails({ event, onClose }) {
    const imageUrl = service.getImageUrl(event.image);


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-60 backdrop-blur-sm">
            <div className="bg-white rounded-xl max-w-lg w-full p-6 relative text-black">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-200 text-center pb-1 hover:text-gray-200 hover:scale-110 transition bg-purple-600 rounded-lg pl-2 pr-2 text-3xl font-bold"
                >
                    &times;
                </button>
                <img
                    src={imageUrl}
                    alt={event.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
                <p className="text-sm text-gray-600 mb-1">
                    <strong>Location:</strong> {event.location}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                    <strong>Date:</strong> {new Date(event.date).toLocaleString()}
                </p>
                <p className="mt-4 text-gray-800">{event.description}</p>
            </div>
        </div>
    );
}

export default EventDetails;
