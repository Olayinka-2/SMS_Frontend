import Layout from "../../components/Layout/Layout";
import MessageList from "../MessageComponents/MessageList";
import StartConversation from "../MessageComponents/StartConversation";
import MessageHeader from "../MessageComponents/MessageHeader";


import Tutor1 from "../../assets/Tutor1.png";
import { useEffect, useState } from "react";
import Messages from "../MessageComponents/Messages";


export default function MessagePage() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [userMessages, setUserMessages] = useState([]);

  const users = [
    {
      id: 1,
      name: "Danjuma Danlami",
      img: Tutor1,
      messages: [
        { text: "Hey there!", time: "08:00am", sender: "user", date: "Yesterday" },
        { text: "Hey there!", time: "08:00am", sender: "user", date: "Yesterday" },
        { text: "How ok ok", time: "08:00am", sender: "me", date: "Today" },
        { text: "Hey there!", time: "08:00am", sender: "user", date: "Today" },
        { text: "How are you doing", time: "08:00am", sender: "me", date: "Today" },

      ]
    },
    {
      id: 2,
      name: "Sule Madu",
      img: Tutor1,
      messages: [
        { text: "Good morning!", time: "09:10am", sender: "user", date: "Today" },
        { text: "Morning! Ready for the meeting?", time: "09:11am", sender: "me", date: "Today" },
        { text: "Yes, joining now.", time: "09:12am", sender: "user", date: "Today" }
      ]
    },
    {
      id: 3,
      name: "Danlami Yokolo",
      img: Tutor1,
      messages: [
        { text: "Can you help with the code?", time: "10:00am", sender: "user", date: "Yesterday" },
        { text: "Sure, send it over.", time: "10:01am", sender: "me", date: "Yesterday" }
      ]
    }
  ];


  useEffect(() => {
    if(selectedUser) {
      const foundUser = users.find(user => user.id === selectedUser.id);
      if(foundUser) setUserMessages(foundUser.messages);
    } else {
      setUserMessages([]);
    }
  }, [selectedUser]);



  return(
    <>
      <Layout activeTab = "messaging">
      <div className="flex min-h-screen bg-white flex-col lg:flex-row">
        <div className={`${selectedUser ? "hidden lg:block" : "block"} lg:w-80 border-r border-gray-200`}>
          <MessageList users={users} setSelectedUser={setSelectedUser} selectedUser={selectedUser}/>
        </div>

        {/* Chat Section */}
        <div className={`${selectedUser ? "flex" : "hidden lg:flex"} flex-1 flex-col h-screen`}>
          {selectedUser ? (
            <>
              <MessageHeader selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
              <div className="border-t border-gray-200 flex-1 flex flex-col">
                <Messages userMessages={userMessages} selectedUser={selectedUser}/>
              </div>
            </>
          ) : (
            <StartConversation />
          )}
        </div>
      </div>

      </Layout>
    </>
  )
}

