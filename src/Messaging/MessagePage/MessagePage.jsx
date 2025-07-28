import Layout from "../../components/Layout/Layout";
import MessageList from "../MessageComponents/MessageList";
import StartConversation from "../MessageComponents/StartConversation";
import MessageHeader from "../MessageComponents/MessageHeader";


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
        <div className="flex h-screen">

          <MessageList users = {users}/>
          <div className="flex-1 flex flex-col h-screen">
            <MessageHeader />

            <div className="border border-gray-200 flex-1">

              {/* <StartConversation /> */}
              <div className="h-full p-12 w-full">
                <div className="flex flex-col gap-6 w-full">
                  <div className="bg-blue-500 border-2 border-blue-500 max-w-xs w-max p-2 relative rounded-2xl">
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


                </div>
              </div>

            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}