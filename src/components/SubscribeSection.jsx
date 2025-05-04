import React from 'react'

const SubscribeSection = ({ show }) => {
    return (
        <section className={`p-6 bg-[#E8ECE9] ${show ? 'flex' : 'hidden'} h-[50vh] py-52  flex-col items-center justify-center text-center w-[100%]`}>
            <p className='text-[#09B451] text-[16px] font-semibold'>Newsletter</p>
            <h2 className="text-[25px] py-4 text-[#001B07] font-bold">Subscribe to Our Newsletter</h2>
            <p className="mt-2 text-[#56585C] text-[14px] w-[50%]">Stay connected and receive the latest blog updates directly to your inbox. Subscribe to our newsletter to get notified about new articles, upcoming events, and special<br></br> announcements.</p>
            <div className="mt-4 w-[50%] rounded bg-[#F9F9F9] flex justify-center">
                <input
                    type="email"
                    placeholder="Your email"
                    className="p-3 outline-0  rounded-l w-full"
                />
                <button className="bg-[#09B451] text-white p-3">Subscribe</button>
            </div>
        </section>
    )
}

export default SubscribeSection