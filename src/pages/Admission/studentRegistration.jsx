import React, { useState } from "react";
import AdmissionHeader from "../../components/AdmissionHeader/header";

const StudentRegistration = () => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <>
            <AdmissionHeader title="Student Registration" />
            <div className="w-[90%] flex flex-col px-14 p-6">
                <h2 className="text-[24.5px] font-bold mb-4 text-[#252B42]">Student Info</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                    <label className="flex flex-col">Class*
                        <input type="text" name="class" placeholder="CLASS" onChange={handleChange} className="p-2 border rounded-md" />
                    </label>
                    <label className="flex flex-col">Admission Number*
                        <input type="text" name="ad_number" placeholder="ADMISSION NUMBER" onChange={handleChange} className="p-2 border rounded-md" />
                    </label>
                    <label className="flex flex-col">First Name*
                        <input type="text" name="fname" placeholder="FIRST NAME" onChange={handleChange} className="p-2 border rounded-md" />
                    </label>
                    <label className="flex flex-col">Middle Name
                        <input type="text" name="middle_name" placeholder="MIDDLE NAME" onChange={handleChange} className="p-2 border rounded-md" />
                    </label>
                    <label className="flex flex-col">Last Name*
                        <input type="text" name="last_name" placeholder="LAST NAME" onChange={handleChange} className="p-2 border rounded-md" />
                    </label>
                    <label className="flex flex-col">Date of Birth*
                        <input type="date" name="dob" placeholder="DATE OF BIRTH" onChange={handleChange} className="p-2 border rounded-md" />
                    </label>
                    <label className="flex flex-col">Gender*
                        <select name="gender" onChange={handleChange} className="p-2 border rounded-md">
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </label>
                    <label className="flex flex-col">Address*
                        <input type="text" name="address" placeholder="ADDRESS" onChange={handleChange} className="p-2 border rounded-md" />
                    </label>
                    <label className="flex flex-col">State*
                        <select name="state" onChange={handleChange} className="p-2 border rounded-md">
                            <option value="">Select State</option>
                            <option value="state1">State 1</option>
                            <option value="state2">State 2</option>
                            <option value="state3">State 3</option>
                        </select>
                    </label>
                    <label className="flex flex-col">LGA*
                        <select name="lga" onChange={handleChange} className="p-2 border rounded-md">
                            <option value="">Select LGA</option>
                            <option value="lga1">LGA 1</option>
                            <option value="lga2">LGA 2</option>
                            <option value="lga3">LGA 3</option>
                        </select>
                    </label>
                    <label className="flex flex-col">Mobile Number*
                        <input type="text" name="mobile_number" placeholder="MOBILE NUMBER" onChange={handleChange} className="p-2 border rounded-md" />
                    </label>
                    <label className="flex flex-col">Alternative Mobile Number*
                        <input type="text" name="alternative_mobile_number" placeholder="ALTERNATIVE MOBILE NUMBER" onChange={handleChange} className="p-2 border rounded-md" />
                    </label>
                    <label className="flex flex-col">User Name*
                        <input type="text" name="username" placeholder="USERNAME" onChange={handleChange} className="p-2 border rounded-md" />
                    </label>
                    <label className="flex flex-col">Password*
                        <input type="password" name="password" placeholder="PASSWORD" onChange={handleChange} className="p-2 border rounded-md" />
                    </label>
                </form>
                <button type="submit" className=" bg-[#09B451] justify-center mx-auto w-[40%] text-[#001B07] p-1 rounded mt-4">Register</button>
            </div>
        </>
    );
};

export default StudentRegistration;
