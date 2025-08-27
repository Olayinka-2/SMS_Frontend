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

  const groupedMessages = formatMessage();

  return(
    <>
      <div className="h-full flex flex-col">
      <div className="overflow-y-auto px-4 sm:px-8 pb-20 flex-1 w-full">
        {groupedMessages.map(([day, messages]) => (
          <div key={day} className="flex flex-col w-full">
            {/* Day divider */}
            <div className="flex items-center w-full gap-1 my-6">
              <span className="h-px flex-1 bg-gray-300"></span>
              <span className="text-gray-600 text-xs sm:text-sm font-normal whitespace-nowrap">{day}</span>
              <span className="h-px flex-1 bg-gray-300"></span>
            </div>

            {messages.map((msg, index) => {
              const isUser = msg.sender === "user";
              const alignment = isUser ? "self-start" : "self-end";
              const bubbleColor = isUser
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-900";

              return (
                <div
                  key={index}
                  className={`${bubbleColor} ${alignment} max-w-[85%] sm:max-w-xs w-max px-3 py-2 rounded-2xl my-1 text-sm sm:text-base`}
                >
                  {msg.text}
                  <p className="text-[10px] sm:text-xs text-gray-600 mt-1 text-right">{msg.time}</p>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      </div>

                  <div className="relative mt-auto mb-10 mx-auto w-9/12">
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