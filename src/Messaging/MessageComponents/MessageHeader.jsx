import { Video, Phone} from "lucide-react";

import Tutor1 from "../../assets/Tutor1.png";

const MessageHeader = ({ selectedUser, setSelectedUser }) => {
  return (
    <div className="flex justify-between items-center py-2 px-4 sm:px-8 border-b border-gray-200 h-16">
      <div className="flex items-center gap-3">
        <button
          className="lg:hidden text-green-600 font-bold"
          onClick={() => setSelectedUser(null)}
        >
          ←
        </button>

        <img src={selectedUser.img} alt="" className="w-8 h-8 rounded-full"/>
        <div className="flex flex-col">
          <p className="text-sm font-medium">{selectedUser.name}</p>
          <p className="text-xs text-gray-400">Last seen yesterday</p>
        </div>
      </div>
      <div className="flex gap-2 sm:gap-4 items-center">
        <Video className="rounded bg-green-100 text-green-800 w-8 h-8 p-2 cursor-pointer " />
        <Phone className="rounded bg-purple-100 text-pink-900 w-8 h-8 p-2 cursor-pointer " />
      </div>
    </div>
  );
};


export default MessageHeader;