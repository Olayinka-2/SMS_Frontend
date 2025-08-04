import React, { useState } from 'react';
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  startOfWeek,
  endOfWeek,
  format,
  addMonths
} from 'date-fns';
import { ChevronLeft, ChevronRight } from "lucide-react";


const CalendarGrid = ({ events, onDateSelect }) => {

  const [currentDate, setCurrentDate] = useState(new Date());

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);

  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 0 });
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 0 });

  const daysToDisplay = eachDayOfInterval({ start: calendarStart, end: calendarEnd });

  function handleNextClick() {
    setCurrentDate(prev => addMonths(prev, 1));
  }

  function handleBackClick() {
    setCurrentDate(prev => addMonths(prev, -1));
  }


  return (
    <div className='w-60 bg  p-3'>

      <div className="flex items-center justify-between mb-4">
        <ChevronLeft className='cursor-pointer ' onClick={handleBackClick}/>
        <div>{format(currentDate, "MMM yyyy")}</div>
        <ChevronRight  className='cursor-pointer' onClick={handleNextClick} />
      </div>

      <div className="grid grid-cols-7 gap-2 mb-2 text-center text-xs font-bold text-gray-600">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <div key={index + day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 mb-2 text-center text-xs font-medium">
      {
      daysToDisplay.map((date) => {

        const isCurrentDay = format(date, "yyyy-MM-dd") == format(new Date(), "yyyy-MM-dd");
        const isCurrentMonth = isSameMonth(date, currentDate);

      return (
        <div
          key={date.toISOString()}
          className={`p-2 rounded cursor-pointer
          ${
            !isCurrentMonth && 'text-gray-400'
          }
          ${
            isCurrentDay ? 'bg-green-400 font-bold text-green-800' : ''
          } rounded-full`}
          onClick={() => onDateSelect(date)}
        >
          {format(date, 'd')}
        </div>
      );
    })}

      </div>
    </div>
  );
};

export default CalendarGrid;