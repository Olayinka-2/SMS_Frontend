import Layout from "../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import {Search} from "lucide-react";
import Tutor from "../../assets/Tutor2.png";

export default function NoticeBoard() {

  const arrayLength = [1,2,3,4,5]

  return(
    <>
      <Layout activeTab = "Notice Board">
        <div className="min-h-screen">

          <div className="bg-white rounded-md p-4">

              <div className="flex justify-between items-center mb-4">
                  <h1 className="font-bold text-2xl">Notice Board</h1>
              </div>

                  <div className="flex items-center justify-between py-1 bg-white">
                  <div className="relative w-88">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full border border-gray-300 rounded-md pl-3 pr-10 py-1 focus:outline-none"
                    />
                    <Search className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
                  </div>

                  <div>
                    <button className="px-4 py-2 bg-green-500 rounded hover:bg-green-600 w-full text-gray-800 font-base"
                    >
                      New Item
                    </button>
                  </div>
                </div>

          </div>

          <div className="bg-gray-50 mt-5 rounded-sm flex gap-4 p-4">
            <div className="flex-1 rounded bg-white overflow-y-scroll"
              style={
                {
                  "height": "calc(100vh - 10rem)"
                }
              }
            >
              <div className="flex flex-col gap-3">
                {
                  arrayLength.map((item) => (
                    <div className="border border-gray-200 rounded-lg p-2" key={item}>
                    <div className="flex gap-5 justify-around text-sm">
                      <div className="w-36">
                        <img src={Tutor} alt="Tutor" className=" rounded-xl w-full" />
                      </div>
                      <div className="flex flex-col justify-between py-2">
                        <div className="flex justify-between gap-5">
                          <h1 className="font-medium">Mid-Term Exam Schedule announcement</h1>
                          <button className="border border-green-400 text-green-400 px-3 py-0 cursor-pointer">Edit</button>
                        </div>
                        <p className="text-xs text-gray-400">By the School Head</p>
                        <div className="flex items-center gap-3">
                          <img src={Tutor} className="w-8 h-8 rounded-full" alt="" />
                          <div className="flex flex-col gap-0">
                            <p className="text-xs">Danlami Sule</p>
                            <p className="text-xs text-gray-300">1 min ago</p>
                          </div>
                          <p className="text-sm">50 views</p>
                          <p className="text-sm">45 Likes</p>
                          <p>Date</p>
                        </div>
                        <p className="text-xs font-medium">The Schedule of the midterm exams has been released...</p>
                      </div>
                      <div className="bg-white">
                        <img src={Tutor} className="w-10 h-10 rounded-full" alt="" />
                      </div>
                      </div>
                  </div>
                  ))
                }
                </div>

            </div>

            <div className="w-80  border border-gray-200 rounded bg-white p-3">
              <p className="font-medium mb-5">Upcoming Events</p>

              <div className="flex flex-col gap-2">
                <div className=" flex items-center gap-5">
                  <div className="bg-pink-300 py-5 px-3 rounded-lg text-center">
                    <p className="font-medium">Feb</p>
                    <p className="font-medium">7</p>
                  </div>
                  <div className="text-xs overflow-hidden">
                    <p className="font-medium text-nowrap text-ellipsis">Monthly School assembly for all student and teachers</p>
                    <p className="text-gray-400">Auditorium</p>
                  </div>
                </div>
                <div className=" flex items-center gap-5">
                  <div className="bg-pink-300 py-5 px-3 rounded-lg text-center">
                    <p className="font-medium">Feb</p>
                    <p className="font-medium">7</p>
                  </div>
                  <div className="text-xs overflow-hidden">
                    <p className="font-medium text-nowrap text-ellipsis">Monthly School assembly for all student and teachers</p>
                    <p className="text-gray-400">Auditorium</p>
                  </div>
                </div>
                <div className=" flex items-center gap-5">
                  <div className="bg-pink-300 py-5 px-3 rounded-lg text-center">
                    <p className="font-medium">Feb</p>
                    <p className="font-medium">7</p>
                  </div>
                  <div className="text-xs overflow-hidden">
                    <p className="font-medium text-nowrap text-ellipsis">Monthly School assembly for all student and teachers</p>
                    <p className="text-gray-400">Auditorium</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Layout>
    </>
  )
}

