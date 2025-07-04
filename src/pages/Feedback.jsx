import React, { useState } from "react";
import service from "../appwrite/config";
import { useSelector } from "react-redux";
import { Input, Button } from "../components/ui";


function FeedbackPage() {
  const { userData } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    email: userData?.email || "",
    message: "",

  });
  const [statusMessage, setStatusMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, message } = formData;

    if (!email || !message) {
      setStatusMessage("Please fill in all fields.");
      return;
    }

    const payload = {
      status: "active",
      email,
      message,
      createdAt: new Date().toISOString(),
    };

    try {
      await service.createFeedback(payload);
      setStatusMessage("Feedback submitted successfully!");
      setFormData({ email: userData?.email || "", message: "" });
    } catch (err) {
      console.log(payload);
      
      console.error("Feedback submit error:", err);
      setStatusMessage("Submission failed. Try again.");
    }
  };
  return (
    <div className="min-h-screen bg-gray-800">
      <div className="  px-4 py-10 flex justify-center">
        <div className="bg-white text-purple-500 shadow-lg rounded-xl p-6 w-full max-w-xl">
          <h2 className="text-2xl font-bold mb-2">We value your feedback</h2>
          <p className="text-sm text-gray-600 mb-4">Help us improve by sharing your thoughts.</p>
          {statusMessage && <p className="text-sm mb-4 text-blue-600">{statusMessage}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Your email"
              className="w-full border px-4 py-2 rounded-md text-sm"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
            name="message"
              placeholder="Write your feedback..."
              className="peer block w-full appearance-none rounded-xl border border-gray-300 
                bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-transparent 
                shadow-inner transition-all duration-300 
                focus:border-purple-500 focus:outline-none focus:ring-2 
                focus:ring-purple-400 focus:ring-offset-2 text-wrap resize-none "
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Button
              type="submit"
              className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition"
            >
              Submit Feedback
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FeedbackPage;
