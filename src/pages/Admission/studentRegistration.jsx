import React, { useState } from "react";

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
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Student Registration Form</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                {["class", "add_no", "fname", "middle_name",
                    "last_name", "dob", "address", "mobile_number",
                    "alternative_mobile_number", "username", "password"
                ].map((field, index) => (
                    <input
                        key={index}
                        type={field.includes("dob") || field.includes("date") ? "date" : field.includes("password") ? "password" : "text"}
                        name={field}
                        placeholder={field.replace(/_/g, " ").toUpperCase()}
                        onChange={handleChange}
                        className="p-2 border rounded-md"
                    />
                ))}

                <select name="gender" onChange={handleChange} className="p-2 border rounded-md">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>

                <select name="state" onChange={handleChange} className="p-2 border rounded-md">
                    <option value="">Select State</option>
                    <option value="state1">State 1</option>
                    <option value="state2">State 2</option>
                    <option value="state3">State 3</option>
                </select>

                <select name="lga" onChange={handleChange} className="p-2 border rounded-md">
                    <option value="">Select LGA</option>
                    <option value="lga1">LGA 1</option>
                    <option value="lga2">LGA 2</option>
                    <option value="lga3">LGA 3</option>
                </select>

                <button type="submit" className="col-span-2 bg-blue-600 text-white p-2 rounded-md mt-4">Register</button>
            </form>
        </div>
    );
};

export default StudentRegistration;
