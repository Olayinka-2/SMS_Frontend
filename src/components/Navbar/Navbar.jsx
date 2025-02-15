/* eslint-disable no-unused-vars */
import './Navbar.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaReact, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
 
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='bg-white shadow-md fixed w-full top-0 left-0 z-50'>
            <div className='container mx-auto flex justify-between items-center px-6 py-4'>
                {/* Logo */}
                <div className='flex items-center text-xl font-bold gap-2'>
                    <FaReact className='text-blue-500' />
                    <span className='text-purple-600 text-lg'>WiSchool</span>
                </div>

                {/* Desktop Menu */}
                <div className='hidden md:flex items-center gap-6'>
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

                {/* Right Section (Search & Login) */}
                <div className='hidden md:flex items-center gap-3'>
                    <FaSearch className='w-5 h-5 text-purple-500 cursor-pointer' />
                    <Link to='/login'>
                        <button className='bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300'>
                            Login
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle Button */}
                <div className='md:hidden'>
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes className='w-6 h-6 text-purple-600' /> : <FaBars className='w-6 h-6 text-purple-600' />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className='md:hidden absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 space-y-4'>
                    <Link to='/' className='hover:text-green-600' onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to='/academics' className='hover:text-green-600' onClick={() => setMenuOpen(false)}>Academics</Link>
                    <Link to='/about' className='hover:text-green-600' onClick={() => setMenuOpen(false)}>About us</Link>
                    <Link to='/admission' className='hover:text-green-600' onClick={() => setMenuOpen(false)}>Admission</Link>
                    <Link to='/payment' className='hover:text-green-600' onClick={() => setMenuOpen(false)}>Online Payment</Link>
                    <Link to='/gallery' className='hover:text-green-600' onClick={() => setMenuOpen(false)}>Gallery</Link>
                    <Link to='/news-event' className='hover:text-green-600' onClick={() => setMenuOpen(false)}>News/Event</Link>
                    <Link to='/blog' className='hover:text-green-600' onClick={() => setMenuOpen(false)}>Blog</Link>
                    <Link to='/contact' className='hover:text-green-600' onClick={() => setMenuOpen(false)}>Contact us</Link>

                    <div className='flex items-center gap-3'>
                        <FaSearch className='w-5 h-5 text-purple-500 cursor-pointer' />
                        <Link to='/login'>
                            <button className='bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300'>
                                Login
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
