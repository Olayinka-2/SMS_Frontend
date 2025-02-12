/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import AboutImg from "../../assets/About.png";
import Sec2 from '../../assets/Sec2.png';
import Tutor1 from '../../assets/Tutor1.png';
import Tutor2 from '../../assets/Tutor2.png';
import Tutor3 from '../../assets/Tutor3.png';

const Academics = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[250px] md:h-[350px] flex items-center justify-start text-white px-6 md:px-16"
        style={{ backgroundImage: `url(${AboutImg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold">About Us</h1>
          <p className="mt-2 md:mt-4 text-sm md:text-lg">
            At WiSchool, we're committed to providing a dynamic and enriching academic experience that prepares students for success.
          </p>
          <h2 className="mt-3 md:mt-5 text-xl font-semibold text-yellow-300">Explore our offerings below</h2>
        </div>
      </div>

      {/* Primary School Curriculum */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Primary School Curriculum</h1>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Our primary school curriculum nurtures curiosity and creativity while building a strong academic foundation.
        </p>
        
        <h3 className="mt-6 text-2xl font-semibold text-gray-800">Core Subjects</h3>
        <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
          <li>Language Arts</li>
          <li>Mathematics</li>
          <li>Science</li>
          <li>Social Studies</li>
          <li>Art</li>
          <li>Physical Education</li>
        </ul>

        <h3 className="mt-6 text-2xl font-semibold text-gray-800">Enrichment Programs</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          <strong>STEM Education:</strong> Hands-on learning with technology and engineering. <br />
          <strong>Environmental Awareness:</strong> Outdoor exploration and sustainability projects. <br />
          <strong>Character Building:</strong> Developing empathy, integrity, and leadership.
        </p>

        <h3 className="mt-6 text-2xl font-semibold text-gray-800">Assignments & Evaluation</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Continuous assessments, progress reports, and standardized tests to measure student growth.
        </p>

        <div className="mt-6">
          <img src={Sec2} alt="Primary Education" className="w-full rounded-lg shadow-md" />
        </div>
      </div>

      {/* Secondary School Curriculum */}
      <div className="bg-gray-50 py-12 px-6 md:px-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Secondary School Curriculum</h1>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Our secondary program prepares students for higher education with a rigorous and inquiry-based approach.
        </p>

        <h3 className="mt-6 text-2xl font-semibold text-gray-800">Core Subjects</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          English, Mathematics, Science (Biology, Chemistry, Physics), Social Sciences, Foreign Languages, and various electives.
        </p>

        <h3 className="mt-6 text-2xl font-semibold text-gray-800">Advanced Placement (AP) & Honors</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Opportunities to earn college credits with AP courses in Calculus, Literature, Biology, and more.
        </p>

        <h3 className="mt-6 text-2xl font-semibold text-gray-800">Extracurricular Activities</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Clubs, sports teams, arts programs, leadership initiatives, and community service.
        </p>

        <div className="mt-6">
          <img src={Sec2} alt="Secondary Education" className="w-full rounded-lg shadow-md" />
        </div>
      </div>

      {/* Faculty Profiles */}
      <div className="py-12 px-6 md:px-12 text-left">
        <h1 className="text-3xl font-bold text-gray-900">Faculty Profiles</h1>
        <p className="text-gray-700 font-semibold text-lg mt-2 max-w-2xl">
          Meet our passionate educators dedicated to inspiring students.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[Tutor1, Tutor2, Tutor3, Tutor1].map((tutor, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4 text-center">
              <img src={tutor} alt="Tutor" className="w-full rounded-lg mb-3" />
              <h1 className="text-xl font-semibold text-green-600">Julien Berger</h1>
              <h2 className="text-md text-gray-700">Senior Educator</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Academic Resources & Extracurriculars */}
      <div className="py-12 px-6 md:px-12">
        {[{
          title: "Academic Resources",
          text: "Access a wealth of resources including online libraries, educational websites, and study tools.",
          img: Sec2,
        }, {
          title: "Extracurricular Activities",
          text: "Join clubs, sports teams, and arts programs to explore your interests beyond academics.",
          img: Sec2,
        }].map((section, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center justify-between mt-12 gap-12">
            <div className="w-full md:w-1/2">
              <img src={section.img} alt={section.title} className="w-full rounded-lg shadow-lg" />
            </div>
            <div className="text-left md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{section.title}</h2>
              <p className="text-gray-700 text-lg">{section.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="bg-gray-100 py-12 px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { text: "This school changed my child's life. The staff dedication is unmatched!", author: "Jane Doe" },
          { text: "An amazing place for learning. My child has grown tremendously.", author: "John Smith" },
          { text: "A wonderful institution that truly cares about students.", author: "Sarah Lee" }
        ].map((review, index) => (
          <div key={index} className="bg-white shadow-lg p-8 rounded-lg text-left">
            <p className="italic text-lg">{`"${review.text}"`}</p>
            <h3 className="text-xl font-semibold mt-6">{`- ${review.author}`}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Academics
