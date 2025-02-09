import React, { useState } from "react";

const InputFields = ({ title, placeholder, inputType }) => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    return (
        <label className="flex text-[#151716] text-[14px] font-semibold flex-col">
            {title}
            <input
                type={inputType}
                placeholder={placeholder}
                onChange={handleChange}
                className="p-2 border border-[#989E99] mt-2 rounded-md"
            />
        </label>
    );
};

export default InputFields;
