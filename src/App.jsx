/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Admission from './pages/Admission/Admission';
import StudentAdmission from './pages/Admission/studentAdmission';
import OnlinePayment from './pages/Payment/OnlinePayment';
import Gallery from './pages/Gallery/Gallery';
import NewsOrEvent from './pages/News/Event/News-event';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Academics from './pages/Academics/Academics';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import BlogDetail from './pages/Blog/BlogDetail';
import StudentRegistration from './pages/Admission/studentRegistration';
import Dashboard from './Dashboard/dashboard';
import AdminProfile from './Dashboard/Profile/AdminProfile';
import AccessPermission from './Dashboard/AP/AccessPermission';
import ActivityLog from './Dashboard/ActivityLog/ActivityLog';
import DashboardSettings from './Dashboard/DashboardSettings/DashboardSettings';
import HrDashboard from './HR/HrDashboard/HrDashboard';
import Leavepermission from './HR/Leavepermission/Leavepermission';
import StaffAttendance from './HR/StaffAttendance/StaffAttendance';
import AdmissionManagement from './HR/AdmissionManagement/AdmissionManagement';
import StudentInfo from './HR/StudentInfo/StudentInfo';
import TeachersDashboard from './Teachers/TeachersDashboard/TeachersDashboard';
import TeachersProfile from './Teachers/TeachersProfile/TeachersProfile';
import MessagePage from './Messaging/MessagePage/MessagePage';
import EventPage from './Events/EventPage/EventPage';
import AddEventPage from './Events/EventComponent/AddEvent/AddEvent';
import EventCalender from './Events/EventComponent/EventCalender/EventCalender';





// import { Activity } from 'lucide-react';
// import { RxActivityLog } from 'react-icons/rx';



{/* <Route path="/profile" element={<AdminProfile />} /> */}


const App = () => {
  const location = useLocation();

const excludePaths = ["/login", "/dashboard", "/Adminprofile", "/AccessPermission", "/ActivityLog", "/DashboardSettings", "/HrDashboard"
  , "/Leavepermission", "/StaffAttendance", "/AdmissionManagement", "/StudentInfo", "/ParentGuardian" , "/TeachersDashboard", "/TeachersProfile", "/messaging", "/Events", "/Events/add", "/Events/calendar",
];

  return (
    <>
      {!excludePaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/student-admission" element={<StudentAdmission />} />
        <Route path="/student-registration" element={<StudentRegistration />} />
        <Route path="/payment" element={<OnlinePayment />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news-event" element={<NewsOrEvent />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Adminprofile" element={<AdminProfile />} />
        {/* <Route path="/profile" element={<AdminProfile />} /> */}
        <Route path="/Accesspermission" element={<AccessPermission />} />
        <Route path="/ActivityLog" element={<ActivityLog/>} />
        <Route path="/DashboardSettings" element={<DashboardSettings/>} />
        <Route path="/HrDashboard" element={<HrDashboard/>} />
        <Route path="/Leavepermission" element={<Leavepermission/>} />
        <Route path="/StaffAttendance" element={<StaffAttendance/>} />
        <Route path="/AdmissionManagement" element={<AdmissionManagement/>} />
        <Route path="/StudentInfo" element={<StudentInfo/>} />
        <Route path="/TeachersDashboard" element={<TeachersDashboard/>} />
        <Route path="/TeachersProfile" element={<TeachersProfile/>} />

        <Route path="/messaging" element={<MessagePage/>} />
        <Route path="/Events" element={<EventPage/>} />
        <Route path="/Events/add" element={<AddEventPage/>} />
        <Route path="/Events/calendar" element={<EventCalender/>} />

      </Routes>
      {!excludePaths.includes(location.pathname) && <Footer />}
    </>
  );
};

export default App;
