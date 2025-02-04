import React, { useState } from "react";

const StudentAdmission = () => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="max-w-4xl p-8 bg-white">
            <h2 className="text-[24px] font-bold mb-4 text-[#252B42]">Student Info</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                {[
                    "ad_number", "date", "class", "firstname", "midname", "lastname", "dob", "address", "email", "bumber", "pre_school"
                ].map((field, index) => (
                    <input
                        key={index}
                        type={field.includes("dob") || field.includes("date") ? "date" : "text"}
                        name={field}
                        placeholder={field.replace(/_/g, " ").toUpperCase()}
                        onChange={handleChange}
                        className="p-2 border border-[#989E99] rounded-md"
                    />
                ))}

                <select name="gender" onChange={handleChange} className="p-2 border border-[#989E99] rounded-md">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>

                <select name="state" onChange={handleChange} className="p-2 border border-[#989E99] rounded-md">
                    <option value="">Select State</option>
                    <option value="state1">State 1</option>
                    <option value="state2">State 2</option>
                    <option value="state3">State 3</option>
                </select>

                <select name="lga" onChange={handleChange} className="p-2 border border-[#989E99] rounded-md">
                    <option value="">Select LGA</option>
                    <option value="lga1">LGA 1</option>
                    <option value="lga2">LGA 2</option>
                    <option value="lga3">LGA 3</option>
                </select>

                <h3 className="text-xl font-bold col-span-2 mt-4">Guardian Information</h3>
                {[
                    "title", "fname", "middname", "lastname", "dob", "address", "email", "number", "quali", "occupation", "annual_income"
                ].map((field, index) => (
                    <input
                        key={index}
                        type={field.includes("dob") ? "date" : "text"}
                        name={field}
                        placeholder={field.replace(/_/g, " ").toUpperCase()}
                        onChange={handleChange}
                        className="p-2 border border-[#989E99] rounded-md"
                    />
                ))}

                <select name="gender" onChange={handleChange} className="p-2 border border-[#989E99] rounded-md">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>

                <select name="state" onChange={handleChange} className="p-2 border border-[#989E99] rounded-md">
                    <option value="">Select State</option>
                    <option value="state1">State 1</option>
                    <option value="state2">State 2</option>
                    <option value="state3">State 3</option>
                </select>

                <select name="lga" onChange={handleChange} className="p-2 border border-[#989E99] rounded-md">
                    <option value="">Select LGA</option>
                    <option value="lga1">LGA 1</option>
                    <option value="lga2">LGA 2</option>
                    <option value="lga3">LGA 3</option>
                </select>

                <button type="submit" className=" bg-blue-600 text-white p-2 rounded-md mt-4">Submit</button>
            </form>
        </div>
    );
};

export default StudentAdmission;
