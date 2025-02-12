import { useState } from 'react';
import './login.css';
import { BsEye } from 'react-icons/bs';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="login-container" style={{ backgroundImage: `url('/login.png')` }}>
            <div className="login-container-overlay"></div>
            <div className="relative sm:items-center gap-10 z-10 flex md:flex-row flex-col md:items-start justify-center w-[100%] p-4">
                <div className="text-white flex flex-col justify-center items-center text-center">
                    <img src="/logo.png" alt="Logo" className="w-34 h-34 md:mb-13" />
                    <h1 className="text-[65px] text-[#A5FFB9] font-bold">WELCOME</h1>
                </div>
                <div>
                    <div className="bg-white p-8 rounded-lg shadow-lg lg:w-[456px]">
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="shadow appearance-none border border-[#989E99] rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Email here"
                                />
                            </div>
                            <div className="mb-2 relative">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="shadow appearance-none border border-[#989E99] rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-10 text-gray-600"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEye color='black' /> : <FaEyeSlash color='black' />}
                                </button>
                            </div>
                            <div className="flex items-center justify-between mb-6">
                                <a className="inline-block align-baseline font-bold text-sm hover:opacity-70 text-[#09B451]" href="#">
                                    Forgot Password?
                                </a>
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    className="bg-[#09B451] w-full hover:opacity-70 text-black py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="text-white text-left p-2 text-[16px]">
                        <p><span className='font-bold text-[20px] mr-2'>&copy; </span> {new Date().getFullYear()} Scholastify360 School Management System</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
