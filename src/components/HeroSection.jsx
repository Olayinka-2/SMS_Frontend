import React from 'react'

const HeroSection = ({ title, text, image }) => {
    return (
        <div className="relative h-[80vh] bg-[#001B07] items-center text-[#F5F5F5] flex text-right  justify-center">
            <img
                src={image}
                alt="Contact Us"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="relative text-justify p-18">
                <h1 className="text-[50px] font-bold">{title}</h1>
                <p className="mt-2 text-[24px]">{text}</p>
            </div>
        </div>
    )
}

export default HeroSection