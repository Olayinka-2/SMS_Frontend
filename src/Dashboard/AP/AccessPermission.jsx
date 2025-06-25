import React from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  User,
  MessageCircle,
  CalendarDays,
  DollarSign,
  Bell,
  ClipboardList,
  BookOpenCheck,
  Settings,
  LogOut,
} from "lucide-react";

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
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow border-r">
        <div className="p-6 font-bold text-purple-600 text-xl">WiSch⚫⚫l</div>
        <nav className="flex flex-col space-y-2 p-4 text-gray-700">
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
      <main className="flex-1 p-6">
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
          <button className="text-gray-600 hover:text-green-500 border-b-2 border-transparent hover:border-green-500 cursor-pointer">
            Activity Log
          </button>
          <button className="text-gray-600 hover:text-green-500 border-b-2 border-transparent hover:border-green-500 cursor-pointer">
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

        {/* Role badge */}
        <div className="mt-6 inline-block bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-sm font-medium">
          System Admin
        </div>
      </main>
    </div>
  );
}

function SidebarItem({ icon: Icon, label }) {
  return (
    <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 rounded-md cursor-pointer">
      <Icon className="w-5 h-5" />
      {label}
    </button>
  );
}
