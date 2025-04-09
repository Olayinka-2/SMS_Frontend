/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import AboutImg from "../../assets/About.png";
import Sec2 from "../../assets/Sec2.png";
import Tutor1 from "../../assets/Tutor1.png";
import Tutor2 from "../../assets/Tutor2.png";
import Tutor3 from "../../assets/Tutor3.png";
import HeroSection from "../../components/HeroSection";
import { RedLine } from "../../components/RedLine";

const Academics = () => {
  return (
    <>
      <Navbar />
      <HeroSection title="Academics" text="At WiSchool, we're committed to providing a dynamic and enriching academic experience that prepares students for success in an ever-changing world. Our comprehensive academic programs are designed to foster critical thinking, creativity, and a lifelong love for learning. 
" image={AboutImg} about />

      {/* Primary School Curriculum */}
      <div className="max-w-6xl mx-auto px-7 md:px-14 py-12 flex flex-col md:flex-row items-center gap-12">
        <div className="text-left md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-[30px] font-bold text-[#323533]">Primary School Curriculum</h1>
          <RedLine />
          <p className="text-[#737373] text-[16px]">
            At WiSchool, our primary school curriculum is designed to provide a strong foundation for academic success while nurturing students' curiosity, creativity, and love for learning. Our holistic approach integrates core subjects with hands-on learning experiences and character development initiatives
          </p>
          <h3 className="text-[22px] font-bold text-[#026229]">Core Subjects</h3>
          <ul className="list-disc text-[#737373] text-[16px]">
            <li>Language Arts</li>
            <li>Mathematics</li>
            <li>Science</li>
            <li>Social Studies</li>
            <li>Art</li>
            <li>Physical Education</li>
          </ul>
          <h3 className="text-[22px] font-bold text-[#026229]">Enrichment Programs</h3>
          <ul className="list-disc  text-[#737373] text-[16px] space-y-1">
            <li>STEM Education: Engages students in hands-on learning experiences that integrate science, technology, engineering, and mathematics.</li>
            <li>Environmental Education: Raises awareness of environmental issues and promotes sustainable practices through outdoor exploration and conservation projects.</li>
            <li>Character Education: Fosters values such as respect, responsibility, integrity, and empathy through character-building activities and discussions</li>
          </ul>
          <h3 className="text-[22px] font-bold text-[#026229]">Assessment and Evaluation</h3>
          <ul className="list-disc  text-[#737373] text-[16px] space-y-1">
            <li>Continuous assessment through quizzes, projects, and class participation.
            </li>
            <li>Periodic progress reports and parent-teacher conferences to monitor student growth and address any areas of concern.
            </li>
            <li>Standardized testing to measure student achievement and inform instructional planning</li>
          </ul>
        </div>
        <div className="">
          <img src="contactImage2.png" alt="Primary Education" className="" />
        </div>
      </div>

      {/* Secondary School Curriculum -  */}
      <div className=" py-12 px-6 md:px-12 flex flex-col md:flex-row-reverse items-center gap-12">
        <div className="text-left md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-[28px] font-bold text-[#323533]">Secondary School Curriculum</h1>
          <RedLine />
          <p className="text-[#737373] text-[13.5px]">
            In our secondary school program, WiSchool offers a rigorous academic curriculum that prepares students for higher education and future careers. Our comprehensive approach emphasizes critical thinking, inquiry-based learning, and real-world application of knowledge
          </p>
          <h3 className="text-[22px] font-bold text-[#026229]">Core Subjects</h3>
          <ul className="list-disc text-[#737373] text-[14px]">
            <li>English Language and Literature</li>
            <li>Mathematics</li>
            <li>Science: Explores advanced scientific principles and methodologies through biology, chemistry, physics, and environmental science.</li>
            <li>Social Sciences: Analyzes historical events, political systems, economic theories, and societal issues through courses in history, geography, economics, and sociology.</li>
            <li>Foreign Languages: Develops proficiency in a second language through courses in language acquisition, literature, and culture.</li>
            <li>Electives: Offers a wide range of elective courses to cater to students' interests and career goals, such as computer science, fine arts, business, and psychology</li>
          </ul>
          <h3 className="text-[22px] font-bold text-[#026229]">Advanced Placement (AP) and Honors Courses</h3>
          <ul className="list-disc  text-[#737373] text-[15px] space-y-1">
            <li>Provides opportunities for motivated students to pursue advanced coursework and earn college credit through AP courses in subjects such as calculus, biology, chemistry, and literature.</li>
            <li>Honors courses offer accelerated and enriched curriculum options for high-achieving students seeking academic challenges and intellectual stimulation</li>
          </ul>
          <h3 className="text-[22px] font-bold text-[#026229]">Extracurricular Opportunities</h3>
          <ul className="list-disc  text-[#737373] text-[14px] space-y-1">
            <li>Clubs and Organizations: Provides opportunities for students to explore their interests and passions outside the classroom through clubs, student organizations, and leadership activities.</li>
            <li>Internships and Work Experience: Offers hands-on learning experiences and real-world exposure through internships, job shadowing, and career exploration programs.</li>
            <li>Community Service and Volunteering: Encourages students to make a positive impact in their communities and develop leadership skills through service-learning projects and volunteer opportunities.</li>
          </ul>
          <h3 className="text-[22px] font-bold text-[#026229]">College and Career Preparation</h3>
          <ul className="list-disc  text-[#737373] text-[14px] space-y-1">
            <li>College Counseling: Guides students through the college application process, including standardized testing, college research, essay writing, and financial aid.</li>
            <li>Career Exploration: Provides resources and support for students to explore potential career paths, develop career readiness skills, and make informed decisions about their future</li>
          </ul>
        </div>
        <div className="">
          <img src="contactImage2.png" alt="Secondary Education" className="" />
        </div>
      </div>

      {/* Faculty Profiles */}
      <div className="py-12 px-6 md:px-12 text-left">
        <h1 className="text-3xl font-bold text-green-600">Faculty Profiles</h1>
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

      {/* Academic Resources */}
      <div className="py-12 px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        <div className="text-left md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600">Academic Resources</h2>
          <p className="text-gray-700 text-3xl">
            Access a wealth of resources including online libraries, educational websites, and study tools.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img src={Sec2} alt="Academic Resources" className="w-full h-full object-cover rounded-lg shadow-md" />
        </div>
      </div>

      {/* Extracurricular Activities -  */}
      <div className="py-12 px-6 md:px-12 flex flex-col md:flex-row-reverse items-center gap-12">
        <div className="text-left md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600">Extracurricular Activities</h2>
          <p className="text-gray-700 text-lg">
            Join clubs, sports teams, and arts programs to explore your interests beyond academics.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img src={Sec2} alt="Extracurricular Activities" className="w-full h-full object-cover rounded-lg shadow-md" />
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-100 py-12 px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { text: "This school changed my child's life. The staff dedication is unmatched!", author: "Jane Doe" },
          { text: "An amazing place for learning. My child has grown tremendously.", author: "John Smith" },
          { text: "A wonderful institution that truly cares about students.", author: "Sarah Lee" }
        ].map((review, index) => (
          <div key={index} className="bg-green-600 shadow-lg p-8 rounded-lg text-left">
            <p className="italic text-white text-lg">{`"${review.text}"`}</p>
            <h3 className="text-xl font-semibold mt-6">{`- ${review.author}`}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Academics;
