import { Link } from "react-router-dom";

const Admission = () => {
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
                    <h1 className="text-[45px] font-bold">Contact Us</h1>
                    <p className="mt-2 text-[24px]">Welcome to the WiSchool Admission page! We are excited that you are considering joining our vibrant learning community. Below, you will find information about our admission process, requirements, and how to apply. If you have any questions or need assistance, please don't hesitate to contact us.</p>
                    <div className="flex gap-5 mt-10">
                        <Link to='/student-admission'><button className="bg-[#09B451] text-[#001B07] py-2 px-5">Student Admission</button></Link>
                        <Link to='/student-registration'><button className="bg-[#FFFFFF] text-[#09B451] py-2 px-5">Student Registration</button></Link>
                    </div>
                </div>
            </div>

            <div className="mt-7 p-6 flex flex-col justify-center items-center">
                <h3>Check Admission Status</h3>
                <div className="w-[50%]">
                    <h4>Admission Number</h4>
                    <div className="border flex border-[#E6E6E6] bg-[#F9F9F9] h-[40px] justify-between w-full">
                        <input type="text" className="h-full w-full p-2" placeholder="Admission Number" />
                        <button className="bg-[#09B451] p-2 h-full text-[#FFFFFF]">Check status</button>
                    </div>
                </div>
            </div>

            {/* Send Us a Message */}
            <div className="flex p-6 gap-10 items-center flex-col lg:flex-row md:flex-row">
                <div className="p-6 mt-6 lg:w-[60%] md:w-[60%]">
                    <h2 className="text-[#323533] text-[28px] font-bold">Send Us a Message</h2>
                    <div className="border-t-6 border-[#f61122] w-16 my-4"></div>

                    <form className="space-y-4 ">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <label>name<input type="text" placeholder="First Name" className="p-3 border rounded w-full" /></label>
                            <label>name<input type="text" placeholder="Last Name" className="p-3 border rounded w-full" /></label>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <label>Phone Number
                                <input type="tel" placeholder="Phone" className="p-3 border rounded w-full" /></label>
                            <label>Email
                                <input type="email" placeholder="Email" className="p-3 border rounded w-full" /></label>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <label>Select service
                                <select className="p-3 border rounded w-full">

                                    <option>Select a Service</option>
                                    <option>Service 1</option>
                                    <option>Service 2</option>
                                </select>
                            </label>
                            <label>Appointment date
                                <input type="date" className="p-3 border rounded w-full" /></label>
                        </div>
                        <label>Message
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

export default Admission;