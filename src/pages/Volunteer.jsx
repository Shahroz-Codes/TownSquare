import React, { useEffect, useState } from "react";
import VolunteerForm from "../components/shared/VolunteerForm";
import service from "../appwrite/config";
import { Button } from "../components/ui";
import { useSelector } from "react-redux";

function VolunteerPage() {
  const [volunteerNeeds, setVolunteerNeeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const userData = useSelector((state) => state.auth.userData);

  const fetchVolunteerNeeds = async () => {
    try {
      setLoading(true);
      const res = await service.getVolunteerNeeds();
      setVolunteerNeeds(res);
    } catch (err) {
      console.error("Failed to load volunteer needs", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVolunteerNeeds();
  }, []);

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this request?");
    if (!confirmed) return;

    const success = await service.deleteVolunteerNeed(id, userData.$id);
    if (success) {
      setVolunteerNeeds((prev) => prev.filter((n) => n.$id !== id));
    }
  };


  return (
    <div className="min-h-screen px-4 py-10 bg-gray-800 text-black">
      {/* Trigger Button */}
      <div className="text-center mb-10">
        <Button
          onClick={() => setShowModal(true)}
          className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow-lg hover:bg-purple-700 transition"
        >
          Post Volunteer Request
        </Button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl w-full max-w-xl p-6 shadow-xl relative">
            <Button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500"
            >
              ✕
            </Button>
            <h2 className="text-xl font-bold text-center mb-4">Submit Volunteer Help Request</h2>
            <VolunteerForm
              closeModal={() => setShowModal(false)}
              refreshNeeds={fetchVolunteerNeeds} // 🔁 Important
            />
          </div>
        </div>
      )}

      {/* Volunteer Posts */}
      <div className="max-w-6xl mx-auto mt-6">
        <h2 className="text-3xl pl-10 font-bold mb-4 text-purple-500">Volunteer Needs</h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : volunteerNeeds.length === 0 ? (
          <p className="text-center text-purple-500">No active volunteer needs yet.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {volunteerNeeds.map((need) => (
              <div key={need.$id} className="bg-white shadow-md rounded-lg p-5 relative">
                <h3 className="text-lg font-semibold text-purple-700">{need.title}</h3>
                <p className="text-sm mt-2">{need.description}</p>
                <p className="text-sm text-gray-600 mt-1">📍 {need.location}</p>
                <p className="text-sm text-gray-600 mt-1">📧 {need.contact}</p>
                <p className="text-xs text-gray-400 mt-2">
                  Created: {new Date(need.createdat).toLocaleString()}
                </p>
                {userData?.$id === need.createdby && (
                  <div className="absolute bottom-2 right-2">
                  <Button
                    onClick={() => handleDelete(need.$id)}
                    className=" mt-2 "
                  >
                    Delete
                  </Button>
                  </div>
                )}

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default VolunteerPage;
