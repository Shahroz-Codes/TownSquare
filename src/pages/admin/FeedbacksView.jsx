import { useEffect, useState } from "react";
import service from "../../appwrite/config";  // Your new Service class

const FeedbacksPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const res = await service.getFeedbacks();
        setFeedbacks(res);
      } catch (error) {
        console.error("Failed to fetch feedbacks:", error);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <div >
      <h1 className="text-2xl font-bold mb-4 text-purple-500">Feedback Submissions</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {feedbacks.map((fb) => (
          <div
            key={fb.$id}
            className="p-4 bg-gray-200 text-black shadow rounded-xl"
          >
            <p><strong>Email:</strong> {fb.email}</p>
            <p><strong>Message:</strong> {fb.message}</p>
            <p className="text-sm text-gray-500">
              Submitted: {new Date(fb.createdat).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbacksPage;
