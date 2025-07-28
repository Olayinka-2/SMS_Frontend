import Layout from "../../components/Layout/Layout";
import MessageList from "../MessageComponents/MessageList";
import StartConversation from "../MessageComponents/StartConversation";
import MessageHeader from "../MessageComponents/MessageHeader";


import { Search, AtSign, Image, Send, Smile, ArrowBigDownDashIcon } from "lucide-react";


import Tutor1 from "../../assets/Tutor1.png";


export default function MessagePage() {
  const users = [
    { id: 1, name: "Danjuma Danlami", img: Tutor1 },
    { id: 2, name: "Sule Madu", img: Tutor1 },
    { id: 3, name: "Danlami Yokolo", img: Tutor1 },
  ];

  return(
    <>
      <Layout activeTab = "Messaging">
        <div className="flex h-full">

          <MessageList users = {users}/>
          <div className="flex-1 flex flex-col h-screen">
            <MessageHeader />

            <div className="border border-gray-200 flex-1 flex flex-col">

              {/* <StartConversation /> */}
              <div className="h-full flex flex-col">
                <div className="overflow-y-auto p-12 w-full"
                  style={{ height: "calc(100vh - 10rem)" }}>
                  <div className="flex flex-col gap-6 w-full">

                    <div className="bg-blue-500 border-2 border-blue-500 max-w-xs w-max p-2 relative rounded-2xl mt-5">
                      <div className="w-16 h-16 rounded-full overflow-hidden absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 p-2">
                        <img src={Tutor1} alt="" className="w-full rounded-full" />
                      </div>
                      <div className="flex flex-col gap-3 text-white text-sm ml-8">
                        <p className="font-medium">Danlami Sule</p>
                        <p className="text-base font-normal">Lorem ipsum, dolor sit Lorem ipsum dolor sit, amet consectetur adlorem consectetur adipisicing elit. Iste, vero?</p>
                        <p className="text-xs font-normal">08:00am</p>
                      </div>
                    </div>

                    <div className="self-end flex flex-col gap-1">
                      <div className="flex gap-2 items-center ml-auto self-end">
                        <img src={Tutor1} alt="" className="w-10 h-10 rounded-full border-2 border-black-800"/>
                        <p className="text-xs">You</p>
                        <p className="text-xs text-gray-400">11:50</p>
                      </div>

                      <div className="bg-blue-200 max-w-xs w-max p-3 relative rounded-2xl self-end">
                        <div className="flex flex-col gap-3 text-gray-700 text-sm">
                          <p className="text-base font-normal">Lorem ipsum, dolor sit Lorem ipsum dolor sit, amet consectetur adlorem consectetur adipisicing elit. Iste, vero?</p>
                          <p className="text-xs font-normal self-end">08:00am</p>
                        </div>
                      </div>
                      <div className="bg-blue-200 max-w-xs w-max p-3 relative rounded-2xl self-end">
                        <div className="flex flex-col gap-3 text-gray-700 text-sm">
                          <p className="text-base font-normal">Lorem ng elit. Iste, vero?</p>
                          <p className="text-xs font-normal self-end">08:00am</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center w-full gap-1">
                      <span className="h-px flex-1 bg-gray-300"></span>
                      <span className="text-gray-600 text-sm font-normal whitespace-nowrap">Project</span>
                      <span className="h-px flex-1 bg-gray-300"></span>
                    </div>

                    <div className="bg-blue-500 border-2 border-blue-500 max-w-xs w-max p-2 relative rounded-2xl mt-5">
                      <div className="w-16 h-16 rounded-full overflow-hidden absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 p-2">
                        <img src={Tutor1} alt="" className="w-full rounded-full" />
                      </div>
                      <div className="flex flex-col gap-3 text-white text-sm ml-8">
                        <p className="font-medium">Danlami Sule</p>
                        <p className="text-base font-normal">Lorem ipsum, dolor sit Lorem ipsum dolor sit, amet consectetur adlorem consectetur adipisicing elit. Iste, vero?</p>
                        <p className="text-xs font-normal">08:00am</p>
                      </div>
                    </div>


                  </div>
                </div>

                  <div className="relative mt-auto mb-5 mx-auto w-9/12">
                    <input
                      type="text"
                      placeholder="Search or type a message..."
                      className="w-full py-2 pl-10 pr-32 rounded border border-green-500 focus:outline-none"
                    />

                    <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 w-5 h-5" />

                    <div className="absolute top-1/2 right-3 transform -translate-y-1/2 flex items-center gap-3 text-gray-500">
                      <ArrowBigDownDashIcon className="w-5 h-5 cursor-pointer hover:text-green-500" />
                      <AtSign className="w-5 h-5 cursor-pointer hover:text-green-500" />
                      <Image className="w-5 h-5 cursor-pointer hover:text-green-500" />
                      <Smile className="w-5 h-5 cursor-pointer hover:text-green-500" />
                      <Send className="w-7 h-7 p-1 bg-green-500 text-white rounded-full cursor-pointer hover:text-green-500 hover:bg-white" />
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