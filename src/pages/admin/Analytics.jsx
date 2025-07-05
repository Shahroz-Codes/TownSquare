import { useEffect, useState } from "react";
import service from "../../appwrite/config"; // Adjust the import path as necessary
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const Analytics = () => {
  const [counts, setCounts] = useState({
    feedbacks: 0,
    events: 0,
    volunteerPosts: 0,
  });

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const res = await service.getAnalyticsCounts();
        setCounts(res);
      } catch (error) {
        console.error("Failed to fetch analytics:", error);
      }
    };

    fetchCounts();
  }, []);

  const data = [
    { name: "Feedbacks", value: counts.feedbacks },
    { name: "Events", value: counts.events },
    { name: "Volunteer Posts", value: counts.volunteerPosts },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-purple-500">Analytics Dashboard</h1>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-white">
        <div className="bg-gray-700 shadow-lg rounded-xl p-6">
          <p className="">Total Feedbacks</p>
          <p className="text-4xl font-bold text-blue-600">{counts.feedbacks}+</p>
        </div>
        <div className="bg-gray-700 shadow-lg rounded-xl p-6">
          <p className="">Total Events</p>
          <p className="text-4xl font-bold text-green-600">{counts.events}+</p>
        </div>
        <div className=" bg-gray-700 shadow-lg rounded-xl p-6">
          <p className="">Volunteer Posts</p>
          <p className="text-4xl font-bold text-yellow-600">
            {counts.volunteerPosts}+
          </p>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="bg-gray-700 text-white shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4 ">Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;
