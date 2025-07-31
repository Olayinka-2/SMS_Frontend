import { Search, Calendar, List, SquarePen, ArrowDown } from "lucide-react";
import { useState } from "react";
import Layout from "../components/Layout/Layout";


export default function EventPage() {

  const events = [
    {
      id: 1,
      title: "School Assembly",
      date: "2024-05-31",
      time: "8:00am",
      location: "Auditorium",
      description: "Monthly School assembly for students and staff",
      organizer: "School Admin",
    },
    {
      id: 2,
      title: "Mathematics Competition",
      date: "2024-06-02",
      time: "10:00am",
      location: "Lecture Hall A",
      description: "Inter-school mathematics challenge",
      organizer: "Math Department",
    },
    {
      id: 3,
      title: "Career Day",
      date: "2024-06-05",
      time: "9:00am",
      location: "Main Auditorium",
      description: "Professional talks and mentoring sessions",
      organizer: "Career Office",
    },
    {
      id: 4,
      title: "Parent-Teacher Meeting",
      date: "2024-06-07",
      time: "11:00am",
      location: "Conference Room",
      description: "Quarterly meeting with parents",
      organizer: "School Admin",
    },
    {
      id: 5,
      title: "Science Fair",
      date: "2024-06-10",
      time: "12:00pm",
      location: "Science Block",
      description: "Students display science projects",
      organizer: "Science Department",
    },
    {
      id: 6,
      title: "Sports Day",
      date: "2024-06-12",
      time: "8:30am",
      location: "School Field",
      description: "Annual inter-house sports competition",
      organizer: "Sports Committee",
    },
    {
      id: 7,
      title: "Art Exhibition",
      date: "2024-06-14",
      time: "2:00pm",
      location: "Art Studio",
      description: "Display of student artwork",
      organizer: "Arts Department",
    },
    {
      id: 8,
      title: "Book Week",
      date: "2024-06-17",
      time: "9:00am",
      location: "Library",
      description: "Reading and book review sessions",
      organizer: "Library Staff",
    },
    {
      id: 9,
      title: "Coding Bootcamp",
      date: "2024-06-19",
      time: "10:00am",
      location: "Computer Lab",
      description: "Intro to web development for students",
      organizer: "ICT Department",
    },
    {
      id: 10,
      title: "Graduation Ceremony",
      date: "2024-06-21",
      time: "3:00pm",
      location: "Auditorium",
      description: "Final year student graduation",
      organizer: "School Admin",
    },
    {
      id: 11,
      title: "Drama Performance",
      date: "2024-06-24",
      time: "1:00pm",
      location: "Auditorium",
      description: "Drama club end-of-term performance",
      organizer: "Drama Club",
    },
    {
      id: 12,
      title: "Language Day",
      date: "2024-06-26",
      time: "10:00am",
      location: "Hall B",
      description: "Cultural presentations in various languages",
      organizer: "Language Department",
    },
    {
      id: 13,
      title: "Debate Competition",
      date: "2024-06-28",
      time: "11:00am",
      location: "Lecture Hall C",
      description: "Interschool debate finals",
      organizer: "Literary & Debating Society",
    },
    {
      id: 14,
      title: "Music Concert",
      date: "2024-07-01",
      time: "6:00pm",
      location: "Music Hall",
      description: "Student band and choir performances",
      organizer: "Music Club",
    },
    {
      id: 15,
      title: "Health Seminar",
      date: "2024-07-03",
      time: "9:30am",
      location: "Conference Room",
      description: "Health awareness talk",
      organizer: "Health Office",
    },
    {
      id: 16,
      title: "Environmental Day",
      date: "2024-07-05",
      time: "8:00am",
      location: "School Compound",
      description: "Clean-up and planting activities",
      organizer: "Green Club",
    },
    {
      id: 17,
      title: "Student Council Election",
      date: "2024-07-08",
      time: "1:00pm",
      location: "Auditorium",
      description: "Election of new student leaders",
      organizer: "Electoral Committee",
    },
    {
      id: 18,
      title: "Coding Hackathon",
      date: "2024-07-10",
      time: "10:00am",
      location: "Tech Hub",
      description: "24-hour app-building challenge",
      organizer: "ICT Department",
    },
    {
      id: 19,
      title: "Photography Contest",
      date: "2024-07-12",
      time: "2:00pm",
      location: "Gallery Room",
      description: "Exhibition and judging of entries",
      organizer: "Media Club",
    },
    {
      id: 20,
      title: "Teacher Appreciation Day",
      date: "2024-07-14",
      time: "12:00pm",
      location: "Auditorium",
      description: "Celebrating and awarding outstanding teachers",
      organizer: "Student Council",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const numberOfPages = Math.ceil(events.length / itemsPerPage);

  function handleNextClick() {
    setCurrentPage((prev) => prev + 1)
  }
  function handlePreviousClick() {
    setCurrentPage((prev) => prev - 1)
  }



  return(
    <>
      <Layout activeTab = "Events">
        <div className="flex flex-col min-h-screen">
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
                    <div className="py-2 px-7 hover:bg-green-700 bg-green-600 cursor-pointer font-medium rounded-md">Add Event</div>
                  </div>
                </div>
              </div>

            </div>

            <div className="border border-gray-100 p-1 bg-white rounded-t-md">
              <div>
                <table className="w-full border-collapse border border-gray-100 m-0 rounded-t-md">
                  <thead>
                    <tr className="border border-gray-100">
                      <th className="text-left p-2">
                        <div className="text-xs font-bold flex items-center gap-1">
                          <p>S/N </p>
                          <ArrowDown className="w-4 h-4"/>
                        </div>
                      </th>
                      <th className="text-center text-xs  p-2 font-bold">Event Title</th>
                      <th className="text-center text-xs  p-2 font-bold">Date</th>
                      <th className="text-center text-xs  p-2 font-bold">Time</th>
                      <th className="text-center text-xs  p-2 font-bold">Location</th>
                      <th className="text-center text-xs  p-2 font-bold">Description</th>
                      <th className="text-center text-xs  p-2 font-bold">Organizer</th>
                      <th className="text-center text-xs  p-2 font-bold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {events.slice(indexOfFirstItem, indexOfLastItem).map((event, index) => (
                      <tr
                        key={event.id}
                        className={`border ${
                          index % 2 === 0 && "bg-gray-100"
                        }`}
                      >
                        <td className="px-2 py-5 text-xs text-center text-gray-600 border border-white border-l-gray-100">
                          {event.id}
                        </td>
                        <td className="px-2 py-5 text-xs text-center text-gray-600 border border-white">
                          {event.title}
                        </td>
                        <td className="border border-white text-center px-2 py-5 text-xs text-gray-600">
                          {event.date}
                        </td>
                        <td className="border border-white text-center px-2 py-5 text-xs text-gray-600">
                          {event.time}
                        </td>
                        <td className="border border-white text-center px-2 py-5 text-xs text-gray-600">
                          {event.location}
                        </td>
                        <td className="border border-white text-center px-2 py-5 text-xs text-gray-600">
                          {event.description}
                        </td>
                        <td className="border border-white text-center px-2 py-5 text-xs text-gray-600">
                          {event.organizer}
                        </td>
                        <td className="text-center px-2 py-5 text-xs text-gray-600 border border-white border-r-gray-100">
                          <div className="flex justify-center items-center gap-3 cursor-pointer">
                            <SquarePen className="w-5 h-5" />
                            <button className="text-green-500 border border-green-500 rounded-md  hover:bg-green-500 hover:text-white py-1 px-4 cursor-pointer">View</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="border border-gray-100 m-0 p-1 rounded-b-md flex items-center justify-between" >
                  <div className="flex gap-3 items-center">
                    <button className="py-1 px-4 text-green-500 border border-green-500 rounded-md  hover:bg-green-500 hover:text-white cursor-pointer" onClick={handlePreviousClick}>Previous</button>
                    <button className="py-1 px-4 text-green-500 border border-green-500 rounded-md  hover:bg-green-500 hover:text-white cursor-pointer" onClick={handleNextClick}>Next</button>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">{`page ${currentPage} of ${numberOfPages}`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Layout>
    </>
  )
}

