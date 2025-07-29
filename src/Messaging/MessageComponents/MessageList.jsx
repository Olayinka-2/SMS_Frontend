import {Search, CirclePlus} from "lucide-react";

const MessageList = ({users, setSelectedUser, selectedUser}) => {

  function handleClick(user) {
    setSelectedUser(user);
  }

  return(
    <>
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
              {
                users.map((user) => {
                  let isSelected;
                  if(selectedUser) {
                    isSelected = selectedUser.id == user.id;
                  }

                  return (
                    <>
                      <div className={`py-2 px-3 flex items-center gap-2 cursor-pointer
                          ${isSelected ? "bg-green-300": ""}
                        `}
                          key={user.id}
                          onClick={(e) => handleClick(user)}>
                          <img src={user.img} alt="profile Image" className="block w-10 h-10 rounded-full"/>
                          <p className="font-medium">{user.name}</p>
                        </div>
                    </>
                  )

                })
              }

            </div>
          </div>
    </>
  )
}

export default MessageList;