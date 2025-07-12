import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';

export default function AdminProfile() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: '',
    phone: '',
    lastLogin: ''
  });
  const [profilePic, setProfilePic] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  return (
    <Layout activeTab="Dashboard">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <img
            src={profilePic || 'https://via.placeholder.com/40'}
            className="w-12 h-12 rounded-full"
            alt="profile"
          />
          <div className="hidden sm:block">
            <h2 className="font-bold text-lg">Danlami Sule</h2>
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
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow border">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>

        {/* Tabs */}
        <div className="flex gap-6 mb-6 border-b pb-4 overflow-x-auto">
          <button className="text-green-500 font-medium border-b-2 border-green-500 cursor-pointer">
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
          <button
            onClick={() => navigate('/DashboardSettings')}
            className="text-gray-600 hover:text-green-500 border-b-2 border-transparent hover:border-green-500 cursor-pointer"
          >
            Settings
          </button>
        </div>

        {/* Profile Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Position/Role</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Last Login</label>
            <input
              type="text"
              name="lastLogin"
              value={formData.lastLogin}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
        </div>

        {/* Profile Picture Upload */}
        <div className="mt-8">
          <label className="block text-sm font-medium mb-2">Upload Profile Picture</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="block w-full text-sm text-gray-500"
          />
        </div>

        <div className="mt-6">
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg cursor-pointer">
            Save Profile
          </button>
        </div>
      </div>
    </Layout>
  );
}
