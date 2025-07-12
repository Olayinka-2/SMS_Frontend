import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

export default function AccessPermission() {
  const navigate = useNavigate();

  const accessData = [
    "Dashboard",
    "HR",
    "Teachers",
    "Parents",
    "Students",
    "Messaging",
    "Events",
    "Finance",
    "Notice Board",
    "School Calendar",
    "Subjects",
    "CMS",
    "Admin Users",
  ];

  return (
    <Layout activeTab="Dashboard">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Access Permissions</h1>
          <div className="text-sm text-gray-600 flex items-center gap-2 mt-1">
            <button
              onClick={() => navigate("/dashboard")}
              className="text-green-600 hover:text-green-700 hover:underline font-medium cursor-pointer"
            >
              Dashboard
            </button>
            <span className="text-gray-400">{">"}</span>
            <button
              onClick={() => navigate("/Adminprofile")}
              className="text-black font-semibold hover:text-green-600 cursor-pointer"
            >
              Profile
            </button>
          </div>
        </div>

        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => navigate("/Adminprofile")}
        >
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="text-left">
            <p className="font-medium">Danlami Sule</p>
            <p className="text-sm text-gray-500">Admin</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b pb-2 mb-4">
        <button
          onClick={() => navigate("/Adminprofile")}
          className="text-gray-600 hover:text-green-500 border-b-2 border-transparent hover:border-green-500 cursor-pointer"
        >
          Profile Overview
        </button>
        <button className="text-green-500 font-medium border-b-2 border-green-500 cursor-pointer">
          Access Permissions
        </button>
        <button
          onClick={() => navigate('/ActivityLog')}
          className="text-gray-600 hover:text-green-500 border-b-2 border-transparent hover:border-green-500 cursor-pointer"
        >
          Activity Log
        </button>
        <button
          onClick={() => navigate('/DashboardSettings')}
          className="text-gray-600 hover:text-green-500 border-b-2 border-transparent hover:border-green-500 cursor-pointer"
        >
          Settings
        </button>
      </div>

      {/* Permissions Table */}
      <div className="bg-white rounded-lg shadow border overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-6 py-3">Module</th>
              <th className="px-6 py-3">Access Level</th>
            </tr>
          </thead>
          <tbody>
            {accessData.map((module, idx) => (
              <tr key={idx} className="border-b even:bg-gray-50">
                <td className="px-6 py-3 font-medium text-gray-800">
                  {module}
                </td>
                <td className="px-6 py-3 text-gray-600">
                  Full Access (View, Edit, Delete)
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Role Badge */}
      <div className="mt-6 inline-block bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-sm font-medium">
        System Admin
      </div>
    </Layout>
  );
}
