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

const App = () => {
  const location = useLocation();

  const excludePaths = ["/login"];

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

      </Routes>
      {!excludePaths.includes(location.pathname) && <Footer />}
    </>
  );
};

export default App;
