import React from "react";
import { FiUsers, FiImage, FiMessageSquare, FiTrendingUp } from "react-icons/fi";

export default function AdminDashboard() {
  const stats = [
    { label: "Total Gallery Items", value: "24", icon: FiImage, color: "bg-blue-500" },
    { label: "Messages", value: "12", icon: FiMessageSquare, color: "bg-green-500" },
    { label: "Active Users", value: "8", icon: FiUsers, color: "bg-purple-500" },
    { label: "Page Views", value: "1.2k", icon: FiTrendingUp, color: "bg-orange-500" },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-4 border border-gray-100"
          >
            <div className={`${stat.color} p-4 rounded-full text-white`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-white rounded-2xl shadow-md p-8 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h3>
        <p className="text-gray-500">No recent activity to display.</p>
      </div>
    </div>
  );
}