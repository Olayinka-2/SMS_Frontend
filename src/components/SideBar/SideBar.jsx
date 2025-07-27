import React from "react";
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
  LogOut
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

function SidebarItem({ icon: Icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-md text-left transition ${
        active ? "bg-green-600 text-white" : "text-gray-700 hover:bg-gray-100"
      }  ${label ? "w-full": "w-min justify-center"}`}
    >
      <Icon className={`${label ? "w-4 h-4" : "w-5 h-5"}`}/>
      {label && <span>{label}</span>}
    </button>
  );
}

export default function Sidebar({ isOpen, setIsOpen, activeTab }) {
  const navigate = useNavigate();
  const location = useLocation();

  let isMessagePage = location.pathname == "/messaging"; 

  const items = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: Users, label: "HR", path: "/HrDashboard" },
    { icon: User, label: "Teachers", path: "/TeachersDashboard" },
    { icon: User, label: "Parents", path: "/parents" },
    { icon: User, label: "Students", path: "/students" },
    { icon: MessageCircle, label: "Messaging", path: "/messaging" },
    { icon: CalendarDays, label: "Events", path: "/events" },
    { icon: DollarSign, label: "Finance", path: "/finance" },
    { icon: Bell, label: "Notice Board", path: "/notice-board" },
    { icon: ClipboardList, label: "School Calendar", path: "/calendar" },
    { icon: BookOpenCheck, label: "Subjects", path: "/subjects" },
    { icon: Settings, label: "CMS", path: "/cms" },
    { icon: User, label: "Admin Users", path: "/admin-users" }
  ];

  return (
    <aside
      className={`${
        isOpen ? "block" : "hidden lg:block"
      } fixed lg:static top-0 left-0 z-50 bg-white border-r min-h-screen p-4 ${isMessagePage ? "w-20" : "w-64"}`}
    >
      <div className={`flex items-center mb-6 ${isMessagePage ? "justify-center" : "justify-between"}`}>
        {
          isMessagePage ? <span className="block">⚫⚫</span> :  <h2 className="text-xl font-bold text-purple-600">WiSch⚫⚫l</h2>
        }

        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden text-gray-500 hover:text-black"
        >
          ✕
        </button>
      </div>

      <div className="space-y-2 text-sm flex flex-col items-center">
        {items.map((item, i) => (
          <SidebarItem
            key={i}
            icon={item.icon}
            label={ isMessagePage ? null : item.label}
            active={activeTab === item.label}
            onClick={() => navigate(item.path)}
          />
        ))}

        <button
          onClick={() => console.log("Logout")}
          className="text-red-500 flex items-center gap-2 mt-8"
        >
          <LogOut className="w-4 h-4" /> Logout
        </button>
      </div>
    </aside>
  );
}
