import {Search, CirclePlus} from "lucide-react";

const MessageList = ({users, setSelectedUser, selectedUser}) => {

  function handleClick(user) {
    setSelectedUser(user);
  }

  return(
    <>
      <div className="p-4 h-full flex flex-col gap-4">
        <h1 className="text-2xl font-bold md:text-3xl">Messaging</h1>

        <div className="flex gap-3 items-center flex-wrap">
          <p className="text-base sm:text-lg font-medium">PERSONAL MESSAGES</p>
          <Search className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 cursor-pointer" />
          <CirclePlus className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 cursor-pointer" />
        </div>

        <div className="relative w-full">
          <input
            type="text"
            className="w-full py-2 pl-3 pr-8 rounded border border-gray-400 focus:outline-none text-sm"
            placeholder="Search..."
          />
          <Search className="w-5 h-5 text-gray-400 absolute top-2 right-3" />
        </div>

        {/* Users */}
        <div className="flex flex-col gap-2 overflow-y-auto">
          {users.map((user) => {
            const isSelected = selectedUser?.id === user.id;
            return (
              <div
                key={user.id}
                className={`p-2 flex items-center gap-3 cursor-pointer rounded-md transition ${
                  isSelected ? "bg-green-200" : "hover:bg-gray-100"
                }`}
                onClick={() => handleClick(user)}
              >
                <img src={user.img} alt="" className="w-10 h-10 rounded-full"/>
                <p className="font-medium text-sm sm:text-base">{user.name}</p>
              </div>
            );
          })}
        </div>
      </div>

    </>
  )
}

export default MessageList;