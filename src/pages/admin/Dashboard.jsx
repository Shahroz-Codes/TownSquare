import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Dashboard = () => {
      const { userData } = useSelector((state) => state.auth);

  return (
    <div className="space-y-6">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-purple-400">
        Welcome {userData.name}
      </h1>
      <p className="text-lg text-gray-300">
        Your central hub to manage community events, volunteer needs, and feedback.
      </p>

      {/* Dashboard Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <NavLink
          to="/admin/add-event"
          className="bg-gray-800 rounded-lg p-6 shadow hover:shadow-xl transition border border-gray-700 hover:border-purple-500"
        >
          <h2 className="text-xl font-semibold mb-2 text-purple-300">
            Manage Events
          </h2>
          <p className="text-gray-400 mb-4">
            Create, edit, and delete community events.
          </p>
          <span className="text-purple-400 font-medium hover:underline">
            Go to Events →
          </span>
        </NavLink>

        <NavLink
          to="/admin/analytics"
          className="bg-gray-800 rounded-lg p-6 shadow hover:shadow-xl transition border border-gray-700 hover:border-purple-500"
        >
          <h2 className="text-xl font-semibold mb-2 text-purple-300">
            Analytics 
          </h2>
          <p className="text-gray-400 mb-4">
            View community engagement and volunteer statistics.
          </p>
          <span className="text-purple-400 font-medium hover:underline">
            View Analytics →
          </span>
        </NavLink>

        <NavLink
          to="/admin/feedbacks"
          className="bg-gray-800 rounded-lg p-6 shadow hover:shadow-xl transition border border-gray-700 hover:border-purple-500"
        >
          <h2 className="text-xl font-semibold mb-2 text-purple-300">
            Feedback & Insights
          </h2>
          <p className="text-gray-400 mb-4">
            Review community feedback and insights.
          </p>
          <span className="text-purple-400 font-medium hover:underline">
            View Feedback →
          </span>
        </NavLink>
      </section>
    </div>
  );
};

export default Dashboard;
