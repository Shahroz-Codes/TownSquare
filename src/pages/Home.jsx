import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
      const { isAuthenticated, userData } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-4">
          Welcome to TownSquare
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Connect with your community. Discover local events, volunteer
          opportunities, and share your valuable feedback.
        </p>
      </section>

      {/* Feature Cards */}
     {isAuthenticated && <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <NavLink
          to="/events"
          className="bg-gray-800 rounded-lg p-6 shadow hover:shadow-xl transition border border-gray-700 hover:border-purple-500"
        >
          <h2 className="text-xl font-semibold mb-2 text-purple-300">
            Upcoming Events
          </h2>
          <p className="text-gray-400 mb-4">
            Discover what's happening near you.
          </p>
          <span className="text-purple-400 font-medium hover:underline">
            View Events →
          </span>
        </NavLink>

        <NavLink
          to="/volunteer"
          className="bg-gray-800 rounded-lg p-6 shadow hover:shadow-xl transition border border-gray-700 hover:border-purple-500"
        >
          <h2 className="text-xl font-semibold mb-2 text-purple-300">
            Volunteer Opportunities
          </h2>
          <p className="text-gray-400 mb-4">
            Help your community by volunteering.
          </p>
          <span className="text-purple-400 font-medium hover:underline">
            Find Opportunities →
          </span>
        </NavLink>

        <NavLink
          to="/feedback"
          className="bg-gray-800 rounded-lg p-6 shadow hover:shadow-xl transition border border-gray-700 hover:border-purple-500"
        >
          <h2 className="text-xl font-semibold mb-2 text-purple-300">
            Give Feedback
          </h2>
          <p className="text-gray-400 mb-4">
            Share your thoughts and suggestions.
          </p>
          <span className="text-purple-400 font-medium hover:underline">
            Submit Feedback →
          </span>
        </NavLink>
      </section>}
 
    </div>
  );
};

export default Home;
