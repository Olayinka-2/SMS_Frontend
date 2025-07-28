import { Video, Phone} from "lucide-react";

import Tutor1 from "../../assets/Tutor1.png";

const MessageHeader = () => {

  return(
    <>
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
    </>
  )
}

export default MessageHeader;