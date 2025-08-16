import Layout from "../../components/Layout/Layout";
import FileUploadBox from "./FileUploadBox";

import { invoiceData } from "../../Finance/data";
import { useNavigate } from "react-router-dom";
import NoticeModal from "./NoticeModal";
import { useState } from "react";

export default function NewItem() {

  const navigate = useNavigate();
  const [textLength, setTextLength] = useState(0);


  const [showModal, setShowModal] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    setShowModal(true);
  }

  function handleTextArea(e) {
      const length = e.target.value.length;
      setTextLength(length);
  }


  return(
    <>
      <Layout activeTab = "Notice Board">
        <div className="min-h-screen">

          <div className="bg-white rounded-md px-5 py-4">
              <div className="flex justify-between items-center mb-4">
                  <h1 className="font-bold text-lg">Notice Board</h1>
                  <div className="flex gap-3 items-center text-gray-400 cursor-pointer">
                    <p
                      onClick={() => navigate("/notice-board")}
                    >Notice Board</p>
                    <p>{">"}</p>
                    <p className="font-medium cursor-pointer text-black">Add Item</p>
                  </div>
              </div>

              <div>
                  <form action="#">
                    <div className="flex flex-col gap-5">

                      <div className="flex gap-2 items-center">
                        <div className="flex-1 flex flex-col gap-1">
                          <h1 className="text-sm font-medium">Media</h1>
                          <FileUploadBox />
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                          <label htmlFor="parentName" className="text-sm font-medium">Parent Name</label>
                          <select
                            name="parentName"
                            id="parentName"
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
                          >
                            <option value="">Select Parent </option>
                            {invoiceData.map((parent) => (
                              <option key={parent.id} value={parent.invoicedTo}>
                                {parent.invoicedTo}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="flex gap-1">
                        <div className="flex-1 flex flex-col gap-1">
                          <label htmlFor="title" className="text-sm font-medium">Title</label>
                          <input type="text" name="title" id="title" placeholder="Title"
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none" />
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                          <label htmlFor="noticeBy" className="text-sm font-medium">Notice By</label>
                          <input type="text" name="noticeBy" id="noticeBy" placeholder="Notice By"
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none" />
                        </div>
                        </div>

                        <div className="flex flex-col gap-1">
                          <label htmlFor="moreAbout" className="text-sm font-medium">More about the event/notice</label>
                          <textarea name="moreAbout" id="moreAbout" rows="11" placeholder="Enter event here" className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
                          onChange= {(e) => handleTextArea(e)}
                          >

                          </textarea>
                        </div>
                        <div className="">
                          <button className="px-4 py-2 bg-green-500 rounded font-medium hover:bg-green-600 font-base cursor-pointer"
                            onClick={(e) => handleClick(e)}
                            >
                              {
                                textLength > 0 ? "Save" : "Add Item"
                              }

                          </button>
                        </div>
                    </div>
                  </form>
              </div>

          </div>
        </div>

        {showModal && (
          <NoticeModal setShowModal={setShowModal} />
)}
      </Layout>
    </>
  )
}

