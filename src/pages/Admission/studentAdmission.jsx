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
                    {/* <label className="flex flex-col">Admission Number*
                        <input type="text" name="ad_number" placeholder="471" onChange={handleChange} className="p-2 border border-[#989E99] rounded-md" />
                    </label>
                    <label className="flex flex-col">Admission Date*
                        <input type="date" name="date" onChange={handleChange} className="p-2 border border-[#989E99] rounded-md" />
                    </label>
                    <label className="flex flex-col">Class*
                        <select name="class" onChange={handleChange} className="p-2 border border-[#989E99] rounded-md">
                            <option value="">Select Class</option>
                            <option value="class1">Class 1</option>
                            <option value="class2">Class 2</option>
                            <option value="class3">Class 3</option>
                        </select>
                    </label>
                    <label className="flex flex-col">First Name*
                        <input type="text" name="firstname" placeholder="FIRST NAME" onChange={handleChange} className="p-2 border border-[#989E99] rounded-md" />
                    </label>
                    <label className="flex flex-col">Middle Name
                        <input type="text" name="midname" placeholder="MIDDLE NAME" onChange={handleChange} className="p-2 border border-[#989E99] rounded-md" />
                    </label>
                    <label className="flex flex-col">Last Name*
                        <input type="text" name="lastname" placeholder="LAST NAME" onChange={handleChange} className="p-2 border border-[#989E99] rounded-md" />
                    </label>
                    <label className="flex flex-col">Date of Birth*
                        <input type="date" name="dob" placeholder="DATE OF BIRTH" onChange={handleChange} className="p-2 border border-[#989E99] rounded-md" />
                    </label>
                    <label className="flex flex-col">Gender*
                        <select name="gender" onChange={handleChange} className="p-2 border border-[#989E99] rounded-md">
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </label>
                    <label className="flex flex-col">Address*
                        <input type="text" name="address" placeholder="ADDRESS" onChange={handleChange} className="p-2 border border-[#989E99] rounded-md" />
                    </label>
                    <label className="flex flex-col">State*
                        <select name="state" onChange={handleChange} className="p-2 border border-[#989E99] rounded-md">
                            <option value="">Select State</option>
                            <option value="state1">State 1</option>
                            <option value="state2">State 2</option>
                            <option value="state3">State 3</option>
                        </select>
                    </label>
                    <label className="flex flex-col">Email*
                        <input type="email" name="email" placeholder="EMAIL" onChange={handleChange} className="p-2 border border-[#989E99] rounded-md" />
                    </label>
                    <label className="flex flex-col">LGA*
                        <select name="lga" onChange={handleChange} className="p-2 border border-[#989E99] rounded-md">
                            <option value="">Select LGA</option>
                            <option value="lga1">LGA 1</option>
                            <option value="lga2">LGA 2</option>
                            <option value="lga3">LGA 3</option>
                        </select>
                    </label>
                    <label className="flex flex-col">Mobile Number*
                        <input type="text" name="bumber" placeholder="MOBILE NUMBER" onChange={handleChange} className="p-2 border border-[#989E99] rounded-md" />
                    </label>
                    <label className="flex flex-col">Previous School*
                        <input type="text" name="pre_school" placeholder="PREVIOUS SCHOOL" onChange={handleChange} className="p-2 border border-[#989E99] rounded-md" />
                    </label>

                    <h3 className="text-xl font-bold col-span-2 mt-4">Parent/Guardian Info</h3>
                    <label className="flex flex-col">Title*
                        <input type="text" name="title" placeholder="TITLE" onChange={handleChange} className="p-2 border border-[#989E99] rounded-md" />
                    </label>
                    <label className="flex flex-col">First Name*
                        <input type="text" name="fname" placeholder="FIRST NAME" onChange={handleChange} className="p-2 border border-[#989E99] rounded-md" />
                    </label>
                    <label className="flex flex-col">Middle Name*
                        <input type="text" name="middname" placeholder="MIDDLE NAME" onChange={handleChange} className="p-2 border border-[#989E99] rounded-md" />
                    </label>
                    <label className="flex flex-col">Last Name*
                        <input type="text" name="lastname" placeholder="LAST NAME" onChange={handleChange} className="p-2 border border-[#989E99] rounded-md" />
                    </label>
                    <label className="flex flex-col">Date of Birth*
                        <input type="date" name="dob" placeholder="DATE OF BIRTH" onChange={handleChange} className="p-2 border border-[#989E99] rounded-md" />
                    </label>
                    <label className="flex flex-col">Gender*
                        <select name="gender" onChange={handleChange} className="p-2 border border-[#989E99] rounded-md">
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </label>
                    <label className="flex flex-col">Address*
                        <input type="text" name="address" placeholder="ADDRESS" onChange={handleChange} className="p-2 border border-[#989E99] rounded-md" />
                    </label>
                    <label className="flex flex-col">State*
                        <select name="state" onChange={handleChange} className="p-2 border border-[#989E99] rounded-md">
                            <option value="">Select State</option>
                            <option value="state1">State 1</option>
                            <option value="state2">State 2</option>
                            <option value="state3">State 3</option>
                        </select>
                    </label>
                    <label className="flex flex-col">LGA*
                        <select name="lga" onChange={handleChange} className="p-2 border border-[#989E99] rounded-md">
                            <option value="">Select LGA</option>
                            <option value="lga1">LGA 1</option>
                            <option value="lga2">LGA 2</option>
                            <option value="lga3">LGA 3</option>
                        </select>
                    </label>
                    <label className="flex flex-col">Email*
                        <input type="email" name="email" placeholder="EMAIL" onChange={handleChange} className="p-2 border border-[#989E99] rounded-md" />
                    </label>
                    <label className="flex flex-col">Mobile Number*
                        <input type="text" name="number" placeholder="MOBILE NUMBER" onChange={handleChange} className="p-2 border border-[#989E99] rounded-md" />
                    </label>
                    <label className="flex flex-col">Mobile Number*
                        <input type="text" name="number" placeholder="MOBILE NUMBER" onChange={handleChange} className="p-2 border border-[#989E99] rounded-md" />
                    </label>
                    <label className="flex flex-col">Educational Qualification*
                        <input type="text" name="number" placeholder="Qualification" onChange={handleChange} className="p-2 border border-[#989E99] rounded-md" />
                    </label>
                    <label className="flex flex-col">Occupation*
                        <input type="text" name="number" placeholder="occu" onChange={handleChange} className="p-2 border border-[#989E99] rounded-md" />
                    </label>
                    <label className="flex flex-col">Annual Income*
                        <input type="text" name="number" placeholder="income" onChange={handleChange} className="p-2 border border-[#989E99] rounded-md" />
                    </label> */}
                    <InputFields title="Admission Number*" inputType="text" placeholder="471" />
                    <InputFields title="Admission Date*" inputType="date" placeholder="DD/MM/YY" />
                    <InputFields title="Class*" placeholder="Select" />
                    <InputFields title="First Name*" inputType="text" placeholder="First Name" />
                    <InputFields title="Middle Name" inputType="text" placeholder="Middle Name" />
                    <InputFields title="Last Name*" inputType="text" placeholder="Last Name" />
                    <InputFields title="Date of Birth" placeholder="DD/MM/YY" />
                    <InputFields title="Gender*" placeholder="Select" />
                    <InputFields title="Address*" inputType="text" placeholder="Address" />
                    <InputFields title="State*" placeholder="Select" />
                    <InputFields title="Email*" inputType="email" placeholder="Email here" />
                    <InputFields title="LGA*" placeholder="Select" />
                    <InputFields title="Mobile number*" placeholder="Mobile number" />
                    <InputFields title="Previous School*" placeholder="Previous School" />
                    <h3 className="text-[25px] text-[#252B42] font-bold col-span-2 mt-4">Parent/Guardian Info</h3>
                    <InputFields title="Title*" placeholder="Mr" />
                    <InputFields title="First Name*" placeholder="First Name" />
                    <InputFields title="Middle Name" placeholder="Middle Name" />
                    <InputFields title="Last Name*" placeholder="Last Name" />
                    <InputFields title="Date of Birth" placeholder="DD/MM/YY" />
                    <InputFields title="Gender*" placeholder="Select" />
                    <InputFields title="Address*" placeholder="Address" />
                    <InputFields title="State*" placeholder="Select" />
                    <InputFields title="LGA*" placeholder="Select" />
                    <InputFields title="Email*" placeholder="Email here" />
                    <InputFields title="Mobile number*" placeholder="Mobile number" />
                    <InputFields title="Mobile number*" placeholder="Mobile number" />
                    <InputFields title="Educational Qualification*" placeholder="Educational Qualification" />
                    <InputFields title="Occupation" placeholder="Occupation" />
                    <InputFields title="Annual Income" placeholder="Educational Qualification" />
                    <button type="submit" className=" bg-[#09B451] text-[#001B07] p-1 rounded mt-7">Submit</button>
                </form>
            </div>
        </>
    );
};

export default StudentAdmission;
