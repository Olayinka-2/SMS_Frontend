import React from 'react';
import HeroSection from '../../../components/HeroSection';

const events = [
  {
    month: 'March',
    date: '15',
    title: 'Parent-Teacher Conference',
    description: 'Description: Meet with your child\'s teachers to discuss their progress, goals and academic achievements. This is a valuable opportunity for parents to connect with teachers and support their child\'s learning journey',
    time: 'Time: 9:00 AM - 12:00PM'
  },
  {
    month: 'March',
    date: '15',
    title: 'Science Fair Exhibition',
    description: 'Join us for interactive showcasing the creative and innovative projects of our students. From biology experiments to engineering challenges, explore the wonders of science and celebrate our students\'.',
    time: 'Time: 9:00 AM - 12:00PM'
  },
  {
    month: 'March',
    date: '15',
    title: 'Parent-Teacher Conference',
    description: 'Description: Meet with your child\'s teachers to discuss their progress, goals and academic achievements. This is a valuable opportunity for parents to connect with teachers and support their child\'s learning journey.',
    time: 'Time: 9:00 AM - 12:00PM'
  },
  {
    month: 'March',
    date: '15',
    title: 'Parent-Teacher Conference',
    description: 'Description: Meet with your child\'s teachers to discuss their progress, goals and academic achievements. This is a valuable opportunity for parents to connect with teachers and support their child\'s learning journey',
    time: 'Time: 9:00 AM - 12:00PM'
  },
];

const NewsEvents = () => {
  return (
    <div className="">

      <HeroSection image="/news.png" title="News & Events" text="Welcome to the WiSchool News & Events page! Stay up-to-date with the latest happenings, announcements, and exciting events from our school community. Whether it's academic achievements, cultural celebrations, or extracurricular activities, you'll find all the news and updates right here." />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className=" p-6 rounded-lg ">
          <div className=" mt-6">

            <div >
              {/* <div style={{backgroundImage: 'url(https://res.cloudinary.com/dtz4rslmb/image/upload/v1738831296/loupe_1_ijxbmh.png), norepeat', height: '3px'}}></div> */}
              <input type="text" placeholder='Search for events' className='text-[16px] border-gray-600 pr-20 pb-1.5 pl-1' style={{ border: '1px solid gray', paddingTop: '5px', paddingLeft: '3px' }} />
              <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                View All Events
              </button>
            </div>

            <div className='flex pt-2 mb-2'>
              <h2 className="text-3xl  font-bold  mb-4">Upcoming Events</h2>
              <p className=' mb-4 ml-7 font-light text-gray-400 text-3xl'>Upcoming Events</p>
            </div>


            <div className="space-y-4">
              {events.map((event, index) => (

                <div key={index} className="flex items-start  border-gray-200 rounded-lg shadow-sm pt-7 pb-7">
                  <div className='pr-[10px] pl-[17px] mr-4' >
                    <p className="text-[13px] pl-1.5">{event.month}</p>
                    <span className="text-4xl font-semibold pl-2">{event.date}</span>
                  </div>
                  <div className="flex-1">
                    <div className='border-l border-l-black pl-[11px] pt-[2px] pb-[3px]'>
                      <h3 className="text-lg font-bold">{event.title}</h3>
                      <p className="mt-1 text-black-500" style={{ maxWidth: '670px', fontSize: '14px' }}>{event.description}</p>
                      <p className='text-sm'>{event.time}</p>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsEvents;