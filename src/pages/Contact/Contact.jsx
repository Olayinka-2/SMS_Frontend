import { BiPhone, BiSolidPhone } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { HiLocationMarker } from "react-icons/hi";
import { MdMail } from "react-icons/md";


const Contact = () => {
    return (
        <div className="">
            {/* Hero Section */}
            <div className="relative h-[80vh] bg-[#001B07] items-center text-[#F5F5F5] flex text-right  justify-center">
                <img
                    src="/contactImage.png"
                    alt="Contact Us"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                <div className="relative text-justify p-18">
                    <h1 className="text-[50px] font-bold">Contact Us</h1>
                    <p className="mt-2 text-[24px]">Welcome to the WiSchool Contact Us page! Whether you have questions, feedback, or just want to say hello, we'd love to hear from you. Use the information below to get in touch with our team. We're here to help!</p>
                </div>
            </div>

            {/* Three Column Section */}
            <div className="grid grid-cols-1 bg-[#A5FFB9] md:grid-cols-3 gap-6 p-8 px-20">
                <div className="p-6 h-40">
                    <div className="flex items-center gap-4">
                        <MdMail color="#09B451" size={38} />
                        <h3 className="text-[32px] font-bold text-[#09B451]">Email</h3>
                        {/* icon */}
                    </div>
                    <p className="text-[#000000] text-[16px] py-3">For general inquiries,please email us at</p>
                    <p className=" underline"><a>info@wiSchool.edu</a></p>
                </div>
                <div className="p-6 h-40">
                    <div className="flex items-center gap-4">
                        <BiSolidPhone color="#09B451" size={38} />
                        <h3 className="text-[32px] font-bold text-[#09B451]">Phone</h3>
                        {/* icon */}
                    </div>
                    <p className="text-[#000000] text-[16px] py-3">To speak with a customer service representative, please call us at</p>
                    <p><a>(555) 123-4567</a></p>
                </div>
                <div className="p-6 h-40">
                    <div className="flex items-center gap-4">
                        <HiLocationMarker color="#09B451" size={38} />
                        <h3 className="text-[32px] font-bold text-[#09B451]">Office</h3>
                        {/* icons */}
                    </div>
                    <p className="text-[#000000] text-[16px] py-3">To visit our office, please come to</p>
                    <p>WiSchool 123 Main Street Cityville, State 12345 Country</p>
                </div>
            </div>

            {/* Office Hours */}
            <div className="p-10">
                <h2 className="text-[34px] text-[#323533] font-bold">Office Hours</h2>
                <p className="text-[#737373] text-[14px]">Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p className="text-[#737373] text-[14px]">Saturday: 9:00 AM - 12:00 PM</p>
            </div>

            {/* Maps & Directions */}
            <div className="p-8">
                <h2 className="text-[34px] py-4 text-[#323533] font-bold">Map and Directions</h2>
                <iframe

                    className="flex mx-auto w-[90%] h-[60vh]"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2001251.996363329!2d7.1977604828396835!3d11.573686867157598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ac492941faebb7%3A0xb77211b27ef50cdb!2sKano!5e0!3m2!1sen!2sng!4v1738258150350!5m2!1sen!2sng"
                    allowFullScreen
                ></iframe>

            </div>

            {/* Send Us a Message */}
            <div className="flex p-6 gap-10 items-center flex-col lg:flex-row md:flex-row">
                <div className="p-6 mt-6 lg:w-[60%] md:w-[60%]">
                    <h2 className="text-[#323533] text-[28px] font-bold">Send Us a Message</h2>
                    <p className="text-[#737373] text-[15.5px]">Have a question or comment? Use the form below to send us a message. We'll get back to you as soon as possible!</p>
                    <div className="border-t-6 border-[#f61122] w-18 my-4"></div>

                    <form className="space-y-4 ">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <label className="text-[#000000] text-[16px] flex flex-col gap-1">First name<input type="text" className="p-3 px-6 border border-[#09B451] rounded w-full" /></label>
                            <label className="text-[#000000] text-[16px] flex flex-col gap-1">Last name<input type="text" className="p-3 px-6 border border-[#09B451] rounded w-full" /></label>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <label className="text-[#000000] text-[16px] flex flex-col gap-1">Phone number
                                <input type="tel" className="p-3 px-6 border-[#09B451] border rounded w-full" /></label>
                            <label className="text-[#000000] text-[16px] flex flex-col gap-1">Email
                                <input type="email" className="p-3 px-6 border border-[#09B451] rounded w-full" /></label>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <label className="text-[#000000] text-[16px] flex flex-col gap-1">Select service
                                <select className="p-3 border-[#09B451] px-6 border rounded w-full">

                                    <option></option>
                                    <option>Service 1</option>
                                    <option>Service 2</option>
                                </select>
                            </label>
                            <label className="text-[#000000] text-[16px] flex flex-col gap-1">Appointment date
                                <input type="date" placeholder="" className="p-3 border-[#09B451] border pxr-6 rounded w-full" /></label>
                        </div>
                        <label className="text-[#000000] text-[16px] flex flex-col gap-1"   >Message
                            <textarea placeholder="Type your message" className="p-3 border border-[#0093DF] rounded w-full h-42"></textarea></label>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4" />
                            <label className="text-[#000000] text-[14px]">I accept the <span className=" underline">Terms</span></label>
                        </div>
                        <button className="bg-[#09B451] text-[#FFFFFF] text-[16px] py-[16px] px-[28px] rounded ">Submit</button>
                    </form>
                </div>
                <div className=" md:w-[30%] lg:w-[30%]">
                    <img src="/contactImage2.png" alt="IMAGE" />
                </div>
            </div>
        </div >
    );
};

export default Contact;
