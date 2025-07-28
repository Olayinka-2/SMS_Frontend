import Layout from "../../components/Layout/Layout";
import {Search, CirclePlus, Video, Phone} from "lucide-react";

import Tutor1 from "../../assets/Tutor1.png";
import chatBubbles from "../../assets/chatBubbles.png";

export default function MessagePage() {
  return(
    <>
      <Layout activeTab = "Messaging">
        <div className="flex h-screen">
          <div className="py-5 pl-5 pr-3 border border-gray-200 w-80 h-screen flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Messaging</h1>

            <div className="flex gap-4 items-center">
              <p className="text-lg font-medium">PERSONAL MESSAGES</p>
              <Search className="w-6 h-6 text-green-500" />
              <CirclePlus className="w-6 h-6 text-green-500" />
            </div>

            <div className="relative w-full mx-auto">
              <input type="text" name="" id=""
                className="w-full p-1 rounded border border-gray-400 focus:outline-none"
              />
            <Search className="w-5 h-5 text-gray-400 absolute top-2 right-3" />
            </div>

            <div className="flex flex-col gap-3">
              <div className="py-2 px-3 flex items-center gap-2">
                <img src={Tutor1} alt="profile Image" className="block w-10 h-10 rounded-full"/>
                <p className="font-medium">Danjuma Danlami</p>
              </div>
              <div className="py-2 px-3 flex items-center gap-2">
                <img src={Tutor1} alt="profile Image" className="block w-10 h-10 rounded-full"/>
                <p className="font-medium">Sule Madu</p>
              </div>
              <div className="py-2 px-3 flex items-center gap-2">
                <img src={Tutor1} alt="profile Image" className="block w-10 h-10 rounded-full"/>
                <p className="font-medium">Danlami Yokolo</p>
              </div>
            </div>
          </div>


          <div className="flex-1 flex flex-col h-screen">
            <div className="flex justify-between py-2 px-12  border border-gray-200 h-16">
              <div className="py-2 px-3 flex items-center gap-2">
                <img src={Tutor1} alt="profile Image" className="block w-8 h-8 rounded-full"/>
                <div className="flex flex-col justify-center">
                  <p className="text-sm font-medium">Danjuma Danlami</p>
                  <p className="text-sm font-light text-gray-400">Last seen yesterday at 8:00am</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <Video  className="rounded bg-green-100 text-green-800 w-8 h-8 p-2 cursor-pointer " />
                <Phone className= "rounded bg-purple-100 text-pink-900 w-8 h-8 p-2 cursor-pointer " />
              </div>
            </div>

            <div className="border border-gray-200 flex-1 flex justify-center items-center">
              <div className="flex flex-col items-center">
                <img src={chatBubbles} alt="start conversation Image" className="mb-7 w-40  h-32" />
                <p className="font-medium text-lg">Start a conversation</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}