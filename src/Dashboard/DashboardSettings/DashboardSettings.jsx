import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Layout from '../../components/Layout/Layout'; // Use layout wrapper

export default function DashboardSettings() {
  const navigate = useNavigate();

  return (
    <Layout activeTab="Dashboard">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <img
            src={'https://via.placeholder.com/40'}
            className="w-12 h-12 rounded-full"
            alt="profile"
          />
          <div>
            <h2 className="font-bold text-lg">Danlami Sule</h2>
            <div className="text-sm text-gray-600 hidden sm:flex items-center gap-2 mt-1">
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
        </div>
        <button
          className="lg:hidden text-gray-700 cursor-pointer"
          onClick={() => console.log("Sidebar toggle handled in Layout")}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow border">
        <h1 className="text-2xl font-bold mb-4">Settings</h1>

        {/* Tabs */}
        <div className="flex gap-6 mb-6 border-b pb-4 overflow-x-auto">
          <button
            onClick={() => navigate('/Adminprofile')}
            className="text-gray-600 hover:text-green-500 border-b-2 border-transparent hover:border-green-500 cursor-pointer"
          >
            Profile Overview
          </button>
          <button
            onClick={() => navigate('/AccessPermission')}
            className="text-gray-600 hover:text-green-500 border-b-2 border-transparent hover:border-green-500 cursor-pointer"
          >
            Access Permissions
          </button>
          <button
            onClick={() => navigate('/ActivityLog')}
            className="text-gray-600 hover:text-green-500 border-b-2 border-transparent hover:border-green-500 cursor-pointer"
          >
            Activity Log
          </button>
          <button className="text-green-500 font-medium border-b-2 border-green-500 cursor-pointer">
            Settings
          </button>
        </div>

        {/* Password Fields */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">New Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-6">
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg cursor-pointer">
            Save New Password
          </button>
        </div>
      </div>
    </Layout>
  );
}
