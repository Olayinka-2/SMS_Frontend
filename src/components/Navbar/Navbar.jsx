import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='text-center'>
            <div>logo</div>
            <div className='flex gap-10'>
                <Link to='/'>Home</Link>
                <Link to='/academics'>Academics</Link>
                <Link to='/about'>About us</Link>
                <Link to='/admission'>Admission</Link>
                <Link to='/payment'>Online Payment</Link>
                <Link to='/gallery'>Gallery</Link>
                <Link to='/news-event'>News/Event</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/contact'>Contact us</Link>
                <div>
                    <Link to='/login'>
                        <button>Login</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar