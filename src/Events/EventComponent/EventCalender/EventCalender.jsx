// ./EventCalendar.jsx
import React, { useState } from 'react';
import Layout from '../../../components/Layout/Layout';
import { useNavigate, useLocation } from "react-router-dom";
import { Search, Calendar, List } from "lucide-react";

import CalendarGrid from './CalenderGrid';
import EventGrid from './EventGrid';

export default function EventCalendar() {

  const [currentDate, setCurrentDate] = useState(new Date());
  const navigate = useNavigate();
  const location = useLocation();
  const { events = [] } = location.state || {};

  const handleDateSelect = (selectedDate) => {
    setCurrentDate(selectedDate);
  };


  return (
    <Layout activeTab="Events">
      <div className="p-3 border border-gray-100 rounded bg-white">
        <div>
          <h1 className="text-lg font-bold">Event List</h1>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mt-1">

            <div className="relative w-full sm:max-w-xs">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-5 pr-10 py-2 rounded border border-gray-300 focus:outline-none text-sm"
              />
              <Search className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 w-5 h-5 cursor-pointer" />
            </div>

            <div className="flex gap-2 flex-wrap sm:flex-nowrap justify-end">
              <div className="hover:bg-green-700 bg-green-600 cursor-pointer text-white p-2 rounded flex items-center justify-center">
                <List className="h-5 w-5" />
              </div>
              <div className="bg-white px-4 py-2 cursor-pointer rounded border flex items-center justify-center">
                <Calendar className="text-gray-500 hover:text-gray-600" />
              </div>
              <div
                className="py-2 px-5 hover:bg-green-700 bg-green-600 cursor-pointer font-medium rounded-md text-white text-sm w-full sm:w-auto text-center"
                onClick={() => navigate("/Events/add")}
              >
                Add Event
              </div>
            </div>
          </div>
        </div>

        <div className="lg:p-6 flex flex-col lg:flex-row my-5 gap-6 bg-white">
          <CalendarGrid
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
            onDateSelect={handleDateSelect}
          />
          <div className="flex-1">
            <EventGrid events={events} currentDate={currentDate} setCurrentDate={setCurrentDate} />
          </div>
        </div>
      </div>

    </Layout>
  );
}
