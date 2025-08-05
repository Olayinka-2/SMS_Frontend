import MainEvent from "../EventComponent/MainEvent/MainEvent";
import EventCalender from "../EventComponent/EventCalender/EventCalender";
import Layout from "../../components/Layout/Layout";


export default function EventPage() {

  const events = [
    {
      id: 1,
      title: "School Assembly",
      date: "2025-08-31",
      time: "8:00am",
      location: "Auditorium",
      description: "Monthly School assembly for students and staff",
      organizer: "School Admin",
    },
    {
      id: 2,
      title: "Mathematics Competition",
      date: "2025-08-02",
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



  return(
    <>
      <Layout activeTab = "Events">
        <MainEvent events={events} />

      </Layout>
    </>
  )
}
