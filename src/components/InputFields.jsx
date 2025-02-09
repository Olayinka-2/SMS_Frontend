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
                className="p-2 border outline-0 border-[#989E99] placeholder:text-[#7B8389] pl mt-2 rounded-md"
            />
        </label>
    );
};

export default InputFields;
