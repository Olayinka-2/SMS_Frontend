import { useState } from "react";
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
  ExternalLink,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Dummy data placeholder
const teachersData = [
  {
    id: 1,
    teacherId: "T001",
    name: "Danjuma Danlami",
    gender: "Male",
    mobile: "08012345678",
    email: "danjuma@example.com",
    class: "JSS 1",
    subject: "Math",
    address: "123 Main St, Abuja",
  },
  // Add more sample data as needed...
];

function Sidebar({ isOpen, setIsOpen, activeTab }) {
  const navigate = useNavigate();

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
    { icon: User, label: "Admin Users", path: "/admin-users" },
  ];

  return (
    <aside
      className={`${
        isOpen ? "block" : "hidden lg:block"
      } fixed lg:static top-0 left-0 z-50 w-64 h-full bg-white border-r overflow-y-auto`}
    >
      <div className="p-6 font-bold text-purple-600 text-xl flex justify-between items-center border-b">
        WiSch⚫⚫l
        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden text-gray-500 hover:text-black cursor-pointer"
        >
          ✕
        </button>
      </div>
      <nav className="flex flex-col space-y-1 p-4 text-gray-700">
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => navigate(item.path)}
            className={`flex items-center gap-3 px-4 py-2 rounded-md transition ${
              activeTab === item.label
                ? "bg-green-500 text-white"
                : "hover:bg-gray-100"
            } cursor-pointer`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}
        <button
          className="mt-4 flex items-center gap-2 text-red-600 px-4 py-2 hover:bg-red-100 rounded-md cursor-pointer"
          onClick={() => console.log("Logout")}
        >
          <LogOut className="w-5 h-5" /> Logout
        </button>
      </nav>
    </aside>
  );
}

export default function TeachersDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState("table");
  const navigate = useNavigate();

  const filteredTeachers = teachersData.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.teacherId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded shadow cursor-pointer"
      >
        <List className="w-6 h-6 text-gray-700" />
      </button>
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} activeTab="Teachers" />
      <main className="flex-1 p-6">
        <header className="bg-white border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Teachers</h1>
            <div className="flex items-center gap-3">
              <Bell className="w-6 h-6 text-gray-400" />
              <div className="flex items-center gap-2">
                <img src="/placeholder.svg" alt="Profile" className="w-8 h-8 rounded-full" />
                <div className="text-sm">
                  <div className="font-medium text-gray-900">Danlomi Sule</div>
                  <div className="text-gray-500">Admin</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="p-6">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="px-6 py-4 border-b">
              <h2 className="text-lg font-semibold text-gray-900">Teachers</h2>
            </div>
            <div className="px-6 py-4 border-b">
              <div className="flex items-center justify-between gap-4">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border rounded-md">
                    <button
                      onClick={() => setViewMode("table")}
                      className={`p-2 ${viewMode === "table" ? "bg-gray-100" : ""} cursor-pointer`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 ${viewMode === "grid" ? "bg-gray-100" : ""} cursor-pointer`}
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </button>
                  </div>
                  <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 cursor-pointer">
                    Export CSV
                  </button>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 cursor-pointer">
                    Add New Teacher
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">S/N</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Teacher ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Gender</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Mobile</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Class</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Subject</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Address</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredTeachers.map((teacher, index) => (
                    <tr key={teacher.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">{index + 1}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{teacher.teacherId}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{teacher.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{teacher.gender}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{teacher.mobile}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{teacher.email}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{teacher.class}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{teacher.subject}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">{teacher.address}</td>
                      <td className="px-6 py-4 text-sm">
                        <button className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 cursor-pointer">
                          <ExternalLink className="w-4 h-4" /> View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-6 py-4 border-t flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  disabled={currentPage === 1}
                  className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 disabled:opacity-50 cursor-pointer"
                >
                  Previous
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 cursor-pointer">
                  Next
                </button>
              </div>
              <div className="text-sm text-gray-500">Page {currentPage} of 50</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
