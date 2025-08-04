import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";
import { Search, Calendar, List } from "lucide-react";

import CalendarGrid from './CalenderGrid';


// 📆 Main Page Component
export default function EventCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const navigate = useNavigate();

  const events = [
    {
      title: 'PTA Meeting',
      date: '2025-08-15',
      time: '10:00 AM',
    },
    {
      title: 'School Sports Day',
      date: '2025-08-20',
      time: '9:00 AM',
    },
  ];

  return (

    <>
      <div className="flex flex-col min-h-screen bg-white">
        <div className="p-3 bg-white border border-gray-100">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-xl">Event</h1>
            <p className="text-xs">Hi, Danlami Sule. Welcome to school dashboard</p>
          </div>
        </div>
        <div className="p-3 border border-gray-100 rounded bg-white ">
          <div>
            <h1 className="text-lg font-bold">Event List</h1>
              <div className="flex items-center justify-between mt-1">
                <div className="relative w-full max-w-xs">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-5 pr-10 py-1 rounded border border-gray-300 focus:outline-none"
                  />
                  <Search className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 w-5 h-5 cursor-pointer" />
                </div>

                <div className="flex items-center">
                  <div className="hover:bg-green-700 bg-green-600 cursor-pointer text-black p-2 rounded">
                    <List className="h-5 w-5"/>
                  </div>
                  <div className="bg-white px-6 py-2 cursor-pointer">
                    <Calendar className="text-gray-500 hover:text-gray-600" />
                  </div>
                  <div className="py-2 px-7 hover:bg-green-700 bg-green-600 cursor-pointer font-medium rounded-md"
                  onClick={() => navigate("/Events/add")}
                  >Add Event</div>
                </div>
              </div>
            </div>

          </div>

          <div className='px-3'>
            <div>
              <CalendarGrid
              events={events}
              onDateSelect={setSelectedDate}
            />
            </div>
          </div>



      <div className="flex gap-8 p-6">
      {/* Calendar Grid (Left) */}

      {/* Event List (Right) */}
      {/* <div className="w-1/3 bg-white rounded shadow p-4">
        <h2 className="text-xl font-bold mb-4">
          Events on {format(selectedDate, 'PPP')}
        </h2>
        <ul>
          {events.filter((event) =>
            isSameDay(new Date(event.date), selectedDate)
          ).length === 0 ? (
            <p className="text-gray-500 text-sm">No events for this day.</p>
          ) : (
            events
              .filter((event) =>
                isSameDay(new Date(event.date), selectedDate)
              )
              .map((event, idx) => (
                <li key={idx} className="mb-2 p-2 border rounded">
                  <p className="font-medium">{event.title}</p>
                  <p className="text-sm text-gray-500">{event.time}</p>
                </li>
              ))
          )}
        </ul>
      </div> */}
    </div>
        </div>

    </>
  );
}
