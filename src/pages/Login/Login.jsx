// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import AdmissionHeader from "../../components/AdmissionHeader/header";

// // Reusable input field component
// const InputFields = ({ title, placeholder, inputType = "text", name, onChange }) => (
//   <label className="flex text-[#151716] text-[14px] font-semibold flex-col">
//     {title}
//     <input
//       type={inputType}
//       name={name}
//       onChange={onChange}
//       className="p-2 border text-[#7B8389] border-[#989E99] mt-2 rounded-md"
//       placeholder={placeholder}
//     />
//   </label>
// );

// const StudentRegistration = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({});
//   const [showSuccessModal, setShowSuccessModal] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const requiredFields = [
//       "class",
//       "admissionNumber",
//       "firstName",
//       "lastName",
//       "gender",
//       "address",
//       "state",
//       "lga",
//       "mobileNumber",
//       "username",
//       "password",
//     ];

//     const missingFields = requiredFields.filter(
//       (field) => !formData[field] || formData[field].trim() === ""
//     );

//     if (missingFields.length > 0) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     if (formData.mobileNumber.length !== 11 || !/^\d{11}$/.test(formData.mobileNumber)) {
//       alert("Mobile number must be exactly 11 digits.");
//       return;
//     }

//     console.log("Form Submitted:", formData);
//     setShowSuccessModal(true);
//   };

//   return (
//     <>
//       <AdmissionHeader page="Admission" title="Student Registration" />

//       <div className="lg:w-[90%] mt-4 flex flex-col px-14 p-6">
//         <h2 className="text-[24.5px] font-bold mb-4 text-[#252B42]">Student Info</h2>

//         <form onSubmit={handleSubmit} className="lg:grid md:grid grid-cols-2 gap-4">
//           <label className="flex text-[#151716] text-[14px] font-semibold flex-col">
//             Class*
//             <select
//               name="class"
//               onChange={handleChange}
//               className="p-2 border text-[#7B8389] border-[#989E99] mt-2 rounded-md"
//             >
//               <option value="">Select</option>
//               <option value="class1">Class 1</option>
//               <option value="class2">Class 2</option>
//               <option value="class3">Class 3</option>
//             </select>
//           </label>

//           <InputFields
//             title="Admission Number*"
//             name="admissionNumber"
//             placeholder="471"
//             onChange={handleChange}
//           />
//           <InputFields
//             title="First Name*"
//             name="firstName"
//             placeholder="First Name"
//             onChange={handleChange}
//           />
//           <InputFields
//             title="Middle Name"
//             name="middleName"
//             placeholder="Middle Name"
//             onChange={handleChange}
//           />
//           <InputFields
//             title="Last Name*"
//             name="lastName"
//             placeholder="Last Name"
//             onChange={handleChange}
//           />
//           <InputFields
//             title="Date of Birth"
//             name="dob"
//             inputType="date"
//             placeholder="DD/MM/YY"
//             onChange={handleChange}
//           />

//           <label className="flex text-[#151716] text-[14px] font-semibold flex-col">
//             Gender*
//             <select
//               name="gender"
//               onChange={handleChange}
//               className="p-2 border text-[#7B8389] border-[#989E99] mt-2 rounded-md"
//             >
//               <option value="">Select</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//             </select>
//           </label>

//           <InputFields
//             title="Address*"
//             name="address"
//             inputType="text"
//             placeholder="Address"
//             onChange={handleChange}
//           />

//           <label className="flex text-[#151716] text-[14px] font-semibold flex-col">
//             State*
//             <select
//               name="state"
//               onChange={handleChange}
//               className="p-2 border text-[#7B8389] border-[#989E99] mt-2 rounded-md"
//             >
//               <option value="">Select</option>
//               <option value="kano">Kano</option>
//               <option value="katsina">Katsina</option>
//             </select>
//           </label>

//           <label className="flex text-[#151716] text-[14px] font-semibold flex-col">
//             LGA*
//             <select
//               name="lga"
//               onChange={handleChange}
//               className="p-2 border text-[#7B8389] border-[#989E99] mt-2 rounded-md"
//             >
//               <option value="">Select</option>
//               <option value="kano">Kano</option>
//               <option value="katsina">Katsina</option>
//             </select>
//           </label>

//           <InputFields
//             title="Mobile number*"
//             name="mobileNumber"
//             inputType="text"
//             placeholder="Mobile number"
//             onChange={handleChange}
//           />
//           <InputFields
//             title="Alternative Mobile number"
//             name="altMobileNumber"
//             inputType="text"
//             placeholder="Mobile number"
//             onChange={handleChange}
//           />
//           <InputFields
//             title="User Name*"
//             name="username"
//             inputType="text"
//             placeholder="User Name"
//             onChange={handleChange}
//           />
//           <InputFields
//             title="Password*"
//             name="password"
//             inputType="password"
//             placeholder="Password"
//             onChange={handleChange}
//           />
//         </form>

//         <button
//           type="submit"
//           onClick={handleSubmit}
//           className="bg-[#09B451] justify-center mx-auto w-[40%] text-[#001B07] p-1 py-2 rounded mt-4"
//         >
//           Register
//         </button>
//       </div>

//       {/* Modal */}
//       {showSuccessModal && (
//         <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 w-[90%] max-w-md text-center shadow-lg relative">
//             <button
//               className="absolute top-2 right-2 text-red-500 text-xl font-bold"
//               onClick={() => setShowSuccessModal(false)}
//             >
//               &times;
//             </button>
//             <div className="flex justify-center mb-4">
//               <div className="bg-green-300 border border-green-500 p-3 rounded-md">
//                 <svg
//                   className="w-6 h-6 text-green-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//               </div>
//             </div>
//             <h2 className="text-xl font-bold mb-2">Congratulations!</h2>
//             <p className="text-gray-600 mb-4">
//               You have successfully registered. Please log in to access your account and explore our resources.
//             </p>
//             <button
//             onClick={() => {
//                 setShowSuccessModal(false);
//                 navigate("/login");
//             }}
//             className="bg-[#09B451] text-white py-2 w-full rounded hover:bg-green-600 transition"
//             >
//             Login
//             </button>

//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default StudentRegistration;

import { useState } from 'react';
import './login.css';
import { BsEye } from 'react-icons/bs';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    return (
        // <div className="login-container" style={{ backgroundImage: url('/login.png') }}>
        <div
            className="login-container"
            style={{
            backgroundImage: `url('/login.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
         }}
>

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
                                    onClick={() => navigate('/dashboard')}
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