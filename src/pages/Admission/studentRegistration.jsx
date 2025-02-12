import React, { useState } from "react";
import AdmissionHeader from "../../components/AdmissionHeader/header";
import InputFields from "../../components/InputFields";

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
            <AdmissionHeader page="Admission" title="Student Registration" />
            <div className="lg:w-[90%] flex flex-col px-14 p-6">
                <h2 className="text-[24.5px] font-bold mb-4 text-[#252B42]">Student Info</h2>
                <form onSubmit={handleSubmit} className="lg:grid md:grid grid-cols-2 gap-4">
                    <label className="flex text-[#151716] text-[14px] font-semibold flex-col">Class*
                        <select name="class" onChange={handleChange} className="p-2 border text-[#7B8389] border-[#989E99] mt-2 rounded-md">
                            <option value="">Select</option>
                            <option value="class1">Class 1</option>
                            <option value="class2">Class 2</option>
                            <option value="class3">Class 3</option>
                        </select>
                    </label>
                    <InputFields title="Admission Number*" placeholder="471" />
                    <InputFields title="First Name*" placeholder="First Name" />
                    <InputFields title="Middle Name" placeholder="Middle Name" />
                    <InputFields title="Last Name*" placeholder="Last Name" />
                    <InputFields title="Date of Birth" inputType="date" placeholder="DD/MM/YY" />
                    <label className="flex text-[#151716] text-[14px] font-semibold flex-col">Gender*
                        <select name="class" onChange={handleChange} className="p-2 border text-[#7B8389] border-[#989E99] mt-2 rounded-md">
                            <option value="">Select</option>
                            <option value="class1">Male</option>
                            <option value="class2">Female</option>
                        </select>
                    </label>
                    <InputFields title="Address*" inputType="text" placeholder="Address" />
                    <label className="flex text-[#151716] text-[14px] font-semibold flex-col">State*
                        <select name="class" onChange={handleChange} className="p-2 border text-[#7B8389] border-[#989E99] mt-2 rounded-md">
                            <option value="">Select</option>
                            <option value="class1">Kano</option>
                            <option value="class2">Katsina</option>
                        </select>
                    </label>
                    <label className="flex text-[#151716] text-[14px] font-semibold flex-col">LGA*
                        <select name="class" onChange={handleChange} className="p-2 border text-[#7B8389] border-[#989E99] mt-2 rounded-md">
                            <option value="">Select</option>
                            <option value="class1">Kano</option>
                            <option value="class2">Katsina</option>
                        </select>
                    </label>
                    <InputFields title="Mobile number*" inputType="text" placeholder="Mobile number" />
                    <InputFields title="Alternative Mobile number*" inputType="text" placeholder="Mobile number" />
                    <InputFields title="User Name*" inputType="text" placeholder="user Name" />
                    <InputFields title="Password*" inputType="password" placeholder="Password" />

                </form>
                <button type="submit" className=" bg-[#09B451] justify-center mx-auto w-[40%] text-[#001B07] p-1 py-2 rounded mt-4">Register</button>
            </div>
        </>
    );
};

export default StudentRegistration;
