/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sec2 from '../../assets/Sec2.png';
import Tutor1 from '../../assets/Tutor1.png';
import Tutor2 from '../../assets/Tutor2.png';
import Tutor3 from '../../assets/Tutor3.png';
import AboutImg from '../../assets/About.png';

const About = () => {
    return (
        <>
            <Navbar />

            {/* Hero Section with Background Image */}
            <div
    className="relative bg-cover bg-center h-[250px] md:h-[350px] flex items-center justify-start text-white px-6 md:px-16 text-left"
    style={{ backgroundImage: `url(${AboutImg})` }}
>
    <div className=" bg-opacity-60 w-full h-full absolute top-0 left-0"></div>
    <div className="relative z-10 max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-bold">About Us</h1>
        <p className="mt-2 md:mt-4 text-sm md:text-lg">
            At WiSchool, we provide a nurturing and inclusive learning environment where every student thrives academically, socially, and emotionally.
        </p>
    </div>
</div>


            {/* Mission/Vision Section */}
            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-green-700">Mission/Vision</h2>
                        <h3 className="text-xl font-semibold mt-4">Mission</h3>
                        <p className="text-gray-600 mt-2 text-sm md:text-base">
                            Empowering students to reach their full potential through innovative education, personalized support, and a commitment to excellence.
                        </p>
                        <h3 className="text-xl font-semibold mt-6">Vision</h3>
                        <p className="text-gray-600 mt-2 text-sm md:text-base">
                            To be a leading educational institution that inspires lifelong learning, fosters creativity and critical thinking, and prepares students to succeed in a global society.
                        </p>
                    </div>
                    <div>
                        <img src={Sec2} alt="Mission" className="w-[70%] md:w-[60%] mx-auto rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>

            {/* Director's Message Section */}
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <img src={Sec2} alt="Director's Message" className="w-[70%] md:w-[60%] mx-auto rounded-lg shadow-lg" />
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-green-700">Director's Message</h2>
                        <p className="text-gray-600 mt-4 text-sm md:text-base">
                            Welcome to WiSchool! As the Director, I am pleased to welcome you to our vibrant learning community. We are committed to providing holistic education that fosters academic excellence, creativity, and character development.
                        </p>
                    </div>
                </div>
            </div>

            {/* Faculty & Staff Section */}
            <div className="container mx-auto px-6 py-12">
                <h2 className="text-2xl md:text-3xl font-bold text-green-700 text-center">Faculty & Staff</h2>
                <p className="text-gray-600 text-center mt-2 text-sm md:text-base">
                    Meet the dedicated educators who make WiSchool a vibrant and supportive learning community.
                </p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[Tutor1, Tutor2, Tutor3, Tutor1, Tutor2, Tutor3].map((tutor, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-4 text-center">
                            <img src={tutor} alt="staff" className="w-[80px] md:w-[100px] mx-auto rounded-full" />
                            <h3 className="text-lg font-semibold mt-2 text-green-700">Tutor Name</h3>
                            <p className="text-gray-600 text-sm">Subject/Role</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default About;