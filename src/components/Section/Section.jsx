/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Sec1 from '../../assets/Sec1.png';
import Sec2 from '../../assets/Sec2.png';

const Section = () => {
  return (
    <div className='container mx-auto px-6 py-12 bg-white'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-purple-600 font-bold'>
        <h1 className='text-4xl'>100+ <br />Parents and Guardian</h1>
        <h1 className='text-4xl'>100+ <br />Online Contents</h1>
        <h1 className='text-4xl'>25K+ <br />Graduated Students</h1>
      </div>
      
      <div className='flex flex-col md:flex-row items-center justify-between mt-12 gap-12'>
        <div className='w-full md:w-1/2'>
          <img src={Sec1} alt='' className='w-full rounded-lg shadow-lg' />
        </div>
        <div className='text-left md:w-1/2 space-y-6'>
          <h2 className='text-5xl font-bold text-black'>We are Experts</h2>
          <h3 className='text-3xl font-semibold text-green-600'>Learning Institution</h3>
          <p className='text-gray-700 text-xl'>Education Excellence and Student Empowerment meet.</p>
          <button className='bg-green-600 text-white px-8 py-4 rounded-md text-lg hover:bg-green-700 transition duration-300'>Apply now</button>
        </div>
      </div>
      
      <div className='flex flex-col md:flex-row items-center justify-between mt-12 gap-12'>
        <div className='text-left md:w-1/2 space-y-6'>
          <h4 className='text-2xl font-semibold text-black'>Blog</h4>
          <div className='border-b-4 w-16 border-green-600'></div>
          <h3 className='text-4xl font-bold text-green-600'>Every Student Matters</h3>
          <p className='text-gray-700 text-xl'>Empowering Administration to Champion Individual Growth, Inclusivity, and Students Across the School Community.</p>
          <button className='bg-green-600 text-white px-8 py-4 rounded-md text-lg hover:bg-green-700 transition duration-300'>Learn More</button>
        </div>
        <div className='w-full md:w-1/2'>
          <img src={Sec2} alt='' className='w-full rounded-lg shadow-lg' />
        </div>
      </div>
      
      <div className='mt-12 text-left text-black'>
        <h2 className='text-5xl font-bold'>What the Parents Are Saying</h2>
        <h1 className='text-4xl font-semibold mt-4'>Every Client Matters</h1>
        <p className='text-gray-700 text-xl mt-6'>Empowering Individuals to Prioritize Individual Needs, Foster Inclusivity, and Deliver Exceptional Services Across the Board.</p>
      </div>
      
      {/* Review Cards */}
      <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='bg-green-600 text-white shadow-lg p-8 rounded-lg text-left'>
          <p className='italic text-lg'>"This school has truly changed my child's life. The dedication of the staff is unmatched!"</p>
          <h3 className='text-xl font-semibold mt-6'>- Jane Doe</h3>
        </div>
        <div className='bg-green-600 text-white shadow-lg p-8 rounded-lg text-left'>
          <p className='italic text-lg'>"An amazing place for learning. My child has grown so much academically and socially."</p>
          <h3 className='text-xl font-semibold mt-6'>- John Smith</h3>
        </div>
        <div className='bg-green-600 text-white shadow-lg p-8 rounded-lg text-left'>
          <p className='italic text-lg'>"A wonderful institution that truly cares about the well-being and future of its students."</p>
          <h3 className='text-xl font-semibold mt-6'>- Sarah Lee</h3>
        </div>
      </div>
    </div>
  );
};

export default Section;
