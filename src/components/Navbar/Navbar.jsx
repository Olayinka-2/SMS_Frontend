/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaReact, FaSearch } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className='bg-white shadow-md py-4'>
            <div className='flex justify-center items-center px-6'>
                <div className='flex items-center text-xl font-bold gap-2'>
                    <FaReact className='text-blue-500' />
                    <span className='text-purple-600'>WiSchool</span>
                </div>
                <div className='flex items-center gap-6 mx-auto'>
                    <Link to='/' className='hover:text-green-600'>Home</Link>
                    <Link to='/academics' className='hover:text-green-600'>Academics</Link>
                    <Link to='/about' className='hover:text-green-600'>About us</Link>
                    <Link to='/admission' className='hover:text-green-600'>Admission</Link>
                    <Link to='/payment' className='hover:text-green-600'>Online Payment</Link>
                    <Link to='/gallery' className='hover:text-green-600'>Gallery</Link>
                    <Link to='/news-event' className='hover:text-green-600'>News/Event</Link>
                    <Link to='/blog' className='hover:text-green-600'>Blog</Link>
                    <Link to='/contact' className='hover:text-green-600'>Contact us</Link>
                </div>
                <div className='flex items-center gap-3'>
                    <FaSearch className='w-5 h-5 gap-3 text-purple-500 cursor-pointer' />
                    <Link to='/login'>
                        <button className='bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300'>
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;