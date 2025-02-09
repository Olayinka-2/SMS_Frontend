import { Link } from "react-router-dom";
import ContactForm from "../../components/Contact";

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
                        <Link to='/student-admission'><button className="bg-[#09B451] rounded text-[#001B07] py-2 px-5">Student Admission</button></Link>
                        <Link to='/student-registration'><button className="bg-[#FFFFFF] rounded text-[#09B451] py-2 px-5">Student Registration</button></Link>
                    </div>
                </div>
            </div>

            <div className="mt-7 p-6 flex flex-col justify-center items-center">
                <h3 className="text-[#001B07] text-[22px]">Check Admission Status</h3>
                <div className="w-[50%]">
                    <h4 className="text-[#001B07] text-[16px] py-3">Admission Number</h4>
                    <div className="border flex border-[#E6E6E6] rounded bg-[#F9F9F9] h-[40px] justify-between w-full">
                        <input type="text" className="h-full p-2" placeholder="Admission Number" />
                        <button className="bg-[#09B451] p-2 h-full text-[#FFFFFF]">Check status</button>
                    </div>
                </div>
            </div>

            {/* Send Us a Message */}
            <ContactForm title="Contact Us" />
        </div >
    );
};

export default Admission;