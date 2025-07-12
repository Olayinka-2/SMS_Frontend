import React, { useState } from "react";
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
  Search,
  Grid3X3,
  List,
} from "lucide-react";

const teachersData = [
  {
    id: 1,
    name: "Danjuma Danlami",
    role: "Teacher",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Steaven Kolo",
    role: "Teacher",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Bako Gana",
    role: "Teacher",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Nupeko Katcha",
    role: "Teacher",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Gogo Babamini",
    role: "Teacher",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    id: 6,
    name: "Ester Gbamache",
    role: "Teacher",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 7,
    name: "Agnes Jiya",
    role: "Teacher",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    id: 8,
    name: "Teni Doko",
    role: "Teacher",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    id: 9,
    name: "Lami John",
    role: "Teacher",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
  },
  {
    id: 10,
    name: "Nma Madu",
    role: "Teacher",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
];

export default function TeachersDashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTeachers = teachersData.filter((t) =>
    t.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-64 bg-white border-r min-h-screen p-4">
        <h2 className="text-xl font-bold text-purple-600 mb-6">WiSch⚫⚫l</h2>
        <div className="space-y-2 text-sm">
          <SidebarItem icon={LayoutDashboard} label="Dashboard" active={false} />
          <SidebarItem icon={Users} label="HR" />
          <SidebarItem icon={User} label="Teachers" active={true} />
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
          <button className="text-red-500 flex items-center gap-2 mt-8">
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </aside>
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Teachers</h1>
          <div className="flex gap-4 items-center">
            <button className="border p-2 rounded hover:bg-gray-100">
              <Grid3X3 className="w-5 h-5" />
            </button>
            <button className="px-4 py-2 border rounded hover:bg-gray-100">
              Export CSV
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              Add New Teacher
            </button>
          </div>
        </div>
        <div className="mb-4 relative w-full max-w-md">
          <Search className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredTeachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white border rounded-lg p-4 text-center shadow-sm"
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-16 h-16 rounded-full mx-auto mb-2 object-cover"
              />
              <div className="font-medium text-gray-900">{teacher.name}</div>
              <div className="text-green-600 text-sm">{teacher.role}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

function SidebarItem({ icon: Icon, label, active = false }) {
  return (
    <div
      className={`flex items-center gap-2 px-3 py-2 rounded cursor-pointer transition-colors ${
        active ? "bg-green-500 text-white" : "hover:bg-gray-100 text-gray-700"
      }`}
    >
      <Icon className="w-4 h-4" />
      <span>{label}</span>
    </div>
  );
}
