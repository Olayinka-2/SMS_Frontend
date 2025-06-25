import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Dummy Header (replace with your actual component)
const AdmissionHeader = ({ page, title }) => (
  <div className="bg-gray-100 py-4 px-6">
    <h1 className="text-2xl font-bold">{title}</h1>
    <p>{page}</p>
  </div>
);

// Reusable Input Field
const InputFields = ({ title, placeholder, inputType = "text", name, onChange }) => (
  <label className="flex text-[#151716] text-[14px] font-semibold flex-col">
    {title}
    <input
      type={inputType}
      name={name}
      onChange={onChange}
      className="p-2 border text-[#7B8389] border-[#989E99] mt-2 rounded-md"
      placeholder={placeholder}
    />
  </label>
);

const StudentAdmission = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = [
      "admissionNumber", "admissionDate", "class", "firstName", "lastName", "dob", "gender",
      "address", "state", "email", "lga", "mobileNumber", "previousSchool", "parentTitle",
      "parentFirstName", "parentLastName", "parentDob", "parentGender", "parentAddress",
      "parentState", "parentLga", "parentEmail", "parentMobileNumber", "parentAltMobileNumber",
    ];

    const missingFields = requiredFields.filter(
      (field) => !formData[field] || String(formData[field]).trim() === ""
    );

    if (missingFields.length > 0) {
      alert("Please fill in all required fields.");
      return;
    }

    if (formData.mobileNumber.length !== 11 || !/^\d{11}$/.test(formData.mobileNumber)) {
      alert("Mobile number must be exactly 11 digits.");
      return;
    }

    console.log("Form submitted:", formData);
    setShowSuccessModal(true);
  };

  return (
    <>
      <AdmissionHeader page="Admission" title="Student Registration" />

      <div className="lg:w-[90%] mt-4 flex flex-col px-14 p-6">
        <h2 className="text-[24.5px] font-bold mb-4 text-[#252B42]">Student Info</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <InputFields title="Admission Number*" name="admissionNumber" placeholder="471" onChange={handleChange} />
          <InputFields title="Admission Date*" name="admissionDate" inputType="date" onChange={handleChange} />
          <label className="flex text-[#151716] text-[14px] font-semibold flex-col">
            Class*
            <select name="class" onChange={handleChange} className="p-2 border text-[#7B8389] border-[#989E99] mt-2 rounded-md">
              <option value="">Select</option>
              <option value="class1">Class 1</option>
              <option value="class2">Class 2</option>
              <option value="class3">Class 3</option>
            </select>
          </label>
          <InputFields title="First Name*" name="firstName" onChange={handleChange} />
          <InputFields title="Middle Name" name="middleName" placeholder="Middle Name" onChange={handleChange} />
          <InputFields title="Last Name*" name="lastName" onChange={handleChange} />
          <InputFields title="Date of Birth*" name="dob" inputType="date" onChange={handleChange} />
          <label className="flex text-[#151716] text-[14px] font-semibold flex-col">
            Gender*
            <select name="gender" onChange={handleChange} className="p-2 border text-[#7B8389] border-[#989E99] mt-2 rounded-md">
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <InputFields title="Address*" name="address" inputType="text" placeholder="Address" onChange={handleChange} />
          <label className="flex text-[#151716] text-[14px] font-semibold flex-col">
            State*
            <select name="state" onChange={handleChange} className="p-2 border text-[#7B8389] border-[#989E99] mt-2 rounded-md">
              <option value="">Select</option>
              <option value="kano">Kano</option>
              <option value="katsina">Katsina</option>
            </select>
          </label>
          <InputFields title="Email*" name="email" inputType="email" placeholder="Email here" onChange={handleChange} />
          <label className="flex text-[#151716] text-[14px] font-semibold flex-col">
            LGA*
            <select name="lga" onChange={handleChange} className="p-2 border text-[#7B8389] border-[#989E99] mt-2 rounded-md">
              <option value="">Select</option>
              <option value="kano">Kano</option>
              <option value="katsina">Katsina</option>
            </select>
          </label>
          <InputFields title="Mobile number*" name="mobileNumber" inputType="text" placeholder="Mobile number" onChange={handleChange} />
          <InputFields title="Previous School*" name="previousSchool" inputType="text" placeholder="Previous School" onChange={handleChange} />

          <div className="col-span-2 pt-4">
            <h2 className="text-[24.5px] font-bold mb-4 text-[#252B42]">Parent Info</h2>
          </div>

          <InputFields title="Title*" name="parentTitle" inputType="text" placeholder="Mr" onChange={handleChange} />
          <InputFields title="First Name*" name="parentFirstName" placeholder="First Name" onChange={handleChange} />
          <InputFields title="Middle Name" name="parentMiddleName" placeholder="Middle Name" onChange={handleChange} />
          <InputFields title="Last Name*" name="parentLastName" placeholder="Last Name" onChange={handleChange} />
          <InputFields title="Date of Birth*" name="parentDob" inputType="date" placeholder="DD/MM/YY" onChange={handleChange} />
          <label className="flex text-[#151716] text-[14px] font-semibold flex-col">
            Gender*
            <select name="parentGender" onChange={handleChange} className="p-2 border text-[#7B8389] border-[#989E99] mt-2 rounded-md">
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <InputFields title="Address*" name="parentAddress" inputType="text" placeholder="Address" onChange={handleChange} />
          <label className="flex text-[#151716] text-[14px] font-semibold flex-col">
            State*
            <select name="parentState" onChange={handleChange} className="p-2 border text-[#7B8389] border-[#989E99] mt-2 rounded-md">
              <option value="">Select</option>
              <option value="kano">Kano</option>
              <option value="katsina">Katsina</option>
            </select>
          </label>
          <label className="flex text-[#151716] text-[14px] font-semibold flex-col">
            LGA*
            <select name="parentLga" onChange={handleChange} className="p-2 border text-[#7B8389] border-[#989E99] mt-2 rounded-md">
              <option value="">Select</option>
              <option value="kano">Kano</option>
              <option value="katsina">Katsina</option>
            </select>
          </label>
          <InputFields title="Email*" name="parentEmail" inputType="email" placeholder="Email here" onChange={handleChange} />
          <InputFields title="Mobile number*" name="parentMobileNumber" inputType="text" placeholder="Mobile number" onChange={handleChange} />
          <InputFields title="Mobile number*" name="parentAltMobileNumber" inputType="text" placeholder="Mobile number" onChange={handleChange} />
          <InputFields title="Education Qualification" name="educationQualification" placeholder="Education Qualification" onChange={handleChange} />
          <InputFields title="Occupation" name="occupation" placeholder="Occupation" onChange={handleChange} />
          <InputFields title="Annual Income" name="annualIncome" placeholder="Annual Income" onChange={handleChange} />

          <button type="submit" onClick={handleSubmit} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 mt-5">
            Submit Application
          </button>
        </form>
      </div>

      {/* ✅ Perfect Match Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm  flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-[90%] max-w-[480px] text-center shadow-md relative">
            <button
              className="absolute top-4 right-4 text-red-600 rounded-full w-6 h-6 flex items-center justify-center "
              onClick={() => setShowSuccessModal(false)}
            >
              <span className="text-[22px] font-bold">&times;</span>
            </button>

            <div className="flex justify-center mb-4">
              <div className="w-10 h-10 border-2 border-green-500 rounded-md flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            <h2 className="text-[20px] font-bold text-gray-800 mb-2">Congratulations!</h2>
            <p className="text-gray-500 text-[15px] leading-relaxed">
              Thank you for completing the admission form! Your application has been received. Please check back later to view your admission status.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default StudentAdmission;
