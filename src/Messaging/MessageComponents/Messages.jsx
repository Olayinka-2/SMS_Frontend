import { Mic, AtSign, Image, Send, Smile, ArrowBigDownDashIcon } from "lucide-react";

import Tutor1 from "../../assets/Tutor1.png";

const Messages = ({userMessages, selectedUser}) => {

  const formatMessage = () => {
    let grouped = {};
    userMessages.forEach(message => {
      if(grouped[message.date]) {
        grouped[message.date].push(message);
      } else {
        grouped[message.date] = [message];
      }
    });

    return Object.entries(grouped);
  };

  console.log(formatMessage());

  const groupedMessages = formatMessage();

  return(
    <>
      <div className="h-full flex flex-col">
                <div className="overflow-y-auto px-12 pb-12 w-full"
                  style={{ height: "calc(100vh - 10rem)" }}>


                    {
                      groupedMessages.map(([day, message]) => (
                      <div className="flex flex-col w-full">
                        <div className="flex items-center w-full gap-1 my-10" key={day}>
                        <span className="h-px flex-1 bg-gray-300"></span>
                        <span className="text-gray-600 text-sm font-normal whitespace-nowrap">{day}</span>
                        <span className="h-px flex-1 bg-gray-300"></span>
                      </div>

                      {
                        message.map((msg, index) => {
                          const isFirstSender =
                            index === 0 || message[index - 1].sender !== msg.sender;

                            console.log(index)

                          const isUser = msg.sender === "user"

                          const alignment = isUser ? "self-start" : "self-end";
                          const color = isUser
                            ? "bg-blue-500 text-gray-100"
                            : "bg-blue-200 text-blue-900";


                          return(
                            <div key={msg} className="flex flex-col">

                              {
                                isFirstSender ? (
                                  isUser ? (
                                    // 🟦 Message from me (user) - with image on the right
                                    <div className={`${color} ${alignment} max-w-xs w-max p-3 relative rounded-2xl pl-7`}>
                                    <div className="w-16 h-16 rounded-full overflow-hidden absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 p-2">
                                    <img src={Tutor1} alt="" className="w-full rounded-full" />
                                  </div>
                                    <div className="flex flex-col gap-3 text-sm">
                                      <p className="font-medium">{selectedUser.name}</p>
                                      <p className="text-base font-normal">{msg.text}</p>
                                      <p className="text-xs font-normal">{msg.time}</p>
                                    </div>
                                  </div>
                                  ) : (
                                    // 🟦 Message from other user - with image on the left
                                    <div className="self-end flex flex-col gap-1">
                                    <div className="flex gap-2 items-center ml-auto self-end">
                                      <img src={Tutor1} alt="" className="w-10 h-10 rounded-full border-2 border-black-800"/>
                                      <p className="text-xs">You</p>
                                      <p className="text-xs text-gray-400">11:50</p>
                                    </div>

                                    <div className={`${color} ${alignment} max-w-xs w-max p-3 relative rounded-2xl my-1`}>
                                      <div className="flex flex-col gap-3 text-sm">
                                        <p className="font-medium">{selectedUser.name}</p>
                                        <p className="text-base font-normal">{msg.text}</p>
                                        <p className="text-xs font-normal">{msg.time}</p>
                                      </div>
                                  </div>
                                  </div>
                                  )
                                ) : (
                                  // ⬜ Not first sender — no image, just message bubble
                                  <div className={`${color} ${alignment} max-w-xs w-max p-3 relative rounded-2xl my-1`}>
                                  <div className="flex flex-col gap-3 text-sm">
                                    <p className="font-medium">{selectedUser.name}</p>
                                    <p className="text-base font-normal">{msg.text}</p>
                                    <p className="text-xs font-normal">{msg.time}</p>
                                  </div>
                                </div>
                                )
                              }

                            </div>
                          )
                        })
                      }
                      </div>
                      ))
                    }


                  </div>
                </div>

                  <div className="relative mt-auto mb-5 mx-auto w-9/12">
                    <input
                      type="text"
                      placeholder="Search or type a message..."
                      className="w-full py-2 pl-10 pr-32 rounded border border-green-500 focus:outline-none"
                    />

                    <Mic className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 w-5 h-5" />

                    <div className="absolute top-1/2 right-3 transform -translate-y-1/2 flex items-center gap-3 text-gray-500">
                      <ArrowBigDownDashIcon className="w-5 h-5 cursor-pointer hover:text-green-500" />
                      <AtSign className="w-5 h-5 cursor-pointer hover:text-green-500" />
                      <Image className="w-5 h-5 cursor-pointer hover:text-green-500" />
                      <Smile className="w-5 h-5 cursor-pointer hover:text-green-500" />
                      <Send className="w-7 h-7 p-1 bg-green-500 text-white rounded-full cursor-pointer hover:text-green-500 hover:bg-white" />
                    </div>
                </div>

    </>
  )
}

export default Messages;