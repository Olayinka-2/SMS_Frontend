import React, { useState } from "react";
import AdmissionHeader from "../../components/AdmissionHeader/header";
import InputFields from "../../components/InputFields";

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
        <>
            <AdmissionHeader page="Admission" title="Student Admission" />
            <div className="w-[90%] px-14 py-2 bg-white">
                <h2 className="text-[24.5px] font-bold mb-4 text-[#252B42]">Student Info</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-y-4 gap-4">
                    <InputFields title="Admission Number*" inputType="text" placeholder="471" />
                    <InputFields title="Admission Date*" inputType="date" placeholder="DD/MM/YY" />
                    <label className="flex text-[#151716] text-[14px] font-semibold flex-col">Class*
                        <select name="class" onChange={handleChange} className="p-2 border text-[#7B8389] border-[#989E99] mt-2 rounded-md">
                            <option value="">Select</option>
                            <option value="class1">Class 1</option>
                            <option value="class2">Class 2</option>
                            <option value="class3">Class 3</option>
                        </select>
                    </label>
                    <InputFields title="First Name*" inputType="text" placeholder="First Name" />
                    <InputFields title="Middle Name" inputType="text" placeholder="Middle Name" />
                    <InputFields title="Last Name*" inputType="text" placeholder="Last Name" />
                    <InputFields title="Date of Birth" placeholder="DD/MM/YY" />
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
                    <InputFields title="Email*" inputType="email" placeholder="Email here" />
                    <label className="flex text-[#151716] text-[14px] font-semibold flex-col">LGA*
                        <select name="class" onChange={handleChange} className="p-2 border text-[#7B8389] border-[#989E99] mt-2 rounded-md">
                            <option value="">Select</option>
                            <option value="class1">Kano</option>
                            <option value="class2">Katsina</option>
                        </select>
                    </label>
                    <InputFields title="Mobile number*" placeholder="Mobile number" />
                    <InputFields title="Previous School*" placeholder="Previous School" />
                    <h3 className="text-[25px] text-[#252B42] font-bold col-span-2 mt-4">Parent/Guardian Info</h3>
                    <InputFields title="Title*" placeholder="Mr" />
                    <InputFields title="First Name*" placeholder="First Name" />
                    <InputFields title="Middle Name" placeholder="Middle Name" />
                    <InputFields title="Last Name*" placeholder="Last Name" />
                    <InputFields title="Date of Birth" inputType="date" placeholder="DD/MM/YY" />
                    <label className="flex text-[#151716] text-[14px] font-semibold flex-col">Gender*
                        <select name="class" onChange={handleChange} className="p-2 text-[#7B8389] border border-[#989E99] mt-2 rounded-md">
                            <option value="">Select</option>
                            <option value="class1">Male</option>
                            <option value="class2">Female</option>
                        </select>
                    </label>
                    <InputFields title="Address*" placeholder="Address" />
                    <label className="flex text-[#151716] text-[14px] font-semibold flex-col">LGA*
                        <select name="class" onChange={handleChange} className="p-2 border text-[#7B8389] border-[#989E99] mt-2 rounded-md">
                            <option value="">Select</option>
                            <option value="class1">Kano</option>
                            <option value="class2">Katsina</option>
                        </select>
                    </label>
                    <label className="flex text-[#151716] text-[14px] font-semibold flex-col">LGA*
                        <select name="class" onChange={handleChange} className="p-2 text-[#7B8389] border border-[#989E99] mt-2 rounded-md">
                            <option value="">Select</option>
                            <option value="class1">lga</option>
                            <option value="class2">lga</option>
                        </select>
                    </label>
                    <InputFields title="Email*" inputType="email" placeholder="Email here" />
                    <InputFields title="Mobile number*" inputType="text" placeholder="Mobile number" />
                    <InputFields title="Mobile number*" inputType="text" placeholder="Mobile number" />
                    <InputFields title="Educational Qualification*" inputType="text" placeholder="Educational Qualification" />
                    <InputFields title="Occupation" inputType="text" placeholder="Occupation" />
                    <InputFields title="Annual Income" inputType="text" placeholder="Educational Qualification" />
                    <button type="submit" className=" bg-[#09B451] text-[#001B07] p-1 rounded mt-7">Submit</button>
                </form>
            </div>
        </>
    );
};

export default StudentAdmission;
