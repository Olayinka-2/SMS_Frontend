import Layout from "../../../components/Layout/Layout";

import { useState } from "react";

import EventModal from "../MainEvent/EventModal";



export default function AddEventPage() {

  const [showModal, setShowModal] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setShowModal(true);
  }


  return(
    <>
      <Layout activeTab = "Events">
        <div className="flex flex-col f-full">
            <div className="p-4 rounded bg-white flex justify-between items-center border border-gray-100">
              <h1 className="font-bold text-2xl">Add Event</h1>
              <div className="flex gap-4 items-center">
                <p className="text-gray-400 text-sm">Add Event</p>
                <p className="text-gray-400 text-sm">{">"}</p>
                <p className="font-medium text-sm">Student Profile</p>
              </div>
            </div>

            <div className="rounded-xl p-4 bg-white border border-gray-100">
              <div className="font-bold text-lg mb-2">Basic Details</div>
              <form action="#">
                <div className="flex flex-col gap-5">
                  <div className="flex gap-2">
                    <div className="flex-1 flex flex-col gap-1">
                      <label htmlFor="EventTitle" className="text-sm font-medium">Event Title*</label>
                      <input type="text" name="Title" id="EventTitle" placeholder="Event Title"
                        className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                      <label htmlFor="DOB" className="text-sm font-medium">Date of Birth*</label>
                      <input type="text" name="Title" id="DOB" placeholder="Data of Birth"
                        className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none" />
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <div className="flex-1 flex flex-col gap-1">
                      <label htmlFor="Time" className="text-sm font-medium">Time*</label>
                      <input type="text" name="Time" id="Time" placeholder="Time"
                        className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                      <label htmlFor="Location" className="text-sm font-medium">Location</label>
                      <input type="text" name="Location" id="Location" placeholder="Location"
                        className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none" />
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <div className="flex-1 flex flex-col gap-1">
                      <label htmlFor="Description" className="text-sm font-medium">Description*</label>
                      <input type="text" name="Description" id="Description" placeholder="Description"
                        className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                      <label htmlFor="Organizer" className="text-sm font-medium">Organizer*</label>
                      <input type="text" name="Organizer" id="Organizer" placeholder="Organizer"
                        className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <button className="py-1 px-4 bg-green-600 border border-green-500 rounded-sm  cursor-pointer hover:bg-green-500"
                    onClick={(e) => handleClick(e)}
                    >Add Event</button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {showModal && (
              <EventModal setShowModal={setShowModal} />
          )}
      </Layout>
    </>
  )
}
