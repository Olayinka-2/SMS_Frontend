import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, Users, User, MessageCircle, CalendarDays, DollarSign,
  Bell, ClipboardList, BookOpenCheck, Settings, LogOut, Menu, X
} from 'lucide-react';

export default function AdminProfile() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`${
        sidebarOpen ? 'block' : 'hidden lg:block'
      } w-64 bg-white border-r fixed lg:static z-50 h-full overflow-y-auto`}>
        <div className="p-6 font-bold text-purple-600 text-xl flex justify-between items-center">
          WiSch⚫⚫l
          <button
            className="lg:hidden text-gray-500 cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          >
            <X />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-4 text-gray-700">
          <button className="flex items-center gap-2 bg-green-500 text-white rounded-md px-4 py-2 cursor-pointer">
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </button>
          <SidebarItem icon={Users} label="HR" />
          <SidebarItem icon={User} label="Teachers" />
          <SidebarItem icon={User} label="Parents" />
          <SidebarItem icon={User} label="Students" />
          <SidebarItem icon={MessageCircle} label="Messaging" />
          <SidebarItem icon={CalendarDays} label="Events" />
          <SidebarItem icon={DollarSign} label="Finance" />
          <SidebarItem icon={Bell} label="Notice Board" />
          <SidebarItem icon={ClipboardList} label="School Calendar" />
          <SidebarItem icon={BookOpenCheck} label="Subjects" />
          <SidebarItem icon={Settings} label="CMS" />
          <SidebarItem icon={User} label="Admin Users" />
          <button className="mt-4 flex items-center gap-2 text-red-600 px-4 py-2 hover:bg-red-100 rounded-md cursor-pointer">
            <LogOut className="w-5 h-5" /> Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 py-6 lg:ml-14">
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

          <button
            className="lg:hidden text-gray-700 cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <h1 className="text-2xl font-bold mb-4">Profile</h1>

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
            <button className="text-gray-600 hover:text-green-500 border-b-2 border-transparent hover:border-green-500 cursor-pointer">
              Activity Log
            </button>
            <button className="text-gray-600 hover:text-green-500 border-b-2 border-transparent hover:border-green-500 cursor-pointer">
              Settings
            </button>
          </div>

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

          {/* Profile Image Upload */}
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
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg cursor-pointer">Save Profile</button>
          </div>
        </div>
      </main>
    </div>
  );
}

function SidebarItem({ icon: Icon, label, active }) {
  return (
    <button
      className={`flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer ${
        active ? 'bg-green-500 text-white' : 'hover:bg-gray-100'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </button>
  );
}
