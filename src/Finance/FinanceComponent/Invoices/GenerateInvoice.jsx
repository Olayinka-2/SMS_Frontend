import Layout from "../../../components/Layout/Layout";
import InvoiceModal from "./InvoiceModal";
import { useNavigate } from "react-router-dom";

import {invoiceData, paymentData} from "../../data"

import { useState } from "react";

export default function StaffSalary() {

  const [showModal, setShowModal] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setShowModal(true);
  }
  

  const navigate = useNavigate();

  return(
    <>
      <Layout activeTab = "Finance">
        <div className="min-h-screen">
          <div className="bg-white rounded-md p-4">
              <div className="flex justify-between items-center mb-4">
                  <h1 className="font-bold text-2xl">Staff Salaries</h1>
                  <div className="flex gap-4 items-center">
                    <p className="text-gray-400 text-sm cursor-pointer"
                      onClick={() => navigate("/finance")}
                    >Finance</p>
                    <p className="text-gray-400 text-sm">{">"}</p>
                    <p className="font-medium text-sm">Generate Invoice</p>
                  </div>
              </div>

              <div className="p-2">

                <div className="rounded-xl p-4 bg-white border border-gray-100">
                  <div className="font-bold text-lg mb-2">Generate Invoice</div>
                  <form action="#">
                    <div className="flex flex-col gap-5">
                      <div className="flex gap-2">
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
                        <div className="flex-1 flex flex-col gap-1">
                          <label htmlFor="studentName" className="text-sm font-medium">Student Name</label>
                          <select
                            name="studentName"
                            id="studentName"
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
                          >
                            <option value="">Select Student </option>
                            {paymentData.map((student) => (
                              <option key={student.id} value={student.name}>
                                {student.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="flex gap-1">

                        <div className="flex-1 flex flex-col gap-1">
                          <label htmlFor="studentId" className="text-sm font-medium">Student ID</label>
                          <input type="text" name="studentId" id="studentId" placeholder="Student ID"
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none" />
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                          <label htmlFor="paymentFor" className="text-sm font-medium">Payment for</label>
                          <select
                            name="paymentFor"
                            id="paymentFor"
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
                          >
                            <option value="">Select -- </option>
                            {paymentData.map((student) => (
                              <option key={student.id} value={student.name}>
                                {student.name}
                              </option>
                            ))}
                          </select>
                        </div>

                      </div>
                      <div className="flex gap-1">
                      <div className="flex-1 flex flex-col gap-1">
                        <label htmlFor="session" className="text-sm font-medium">Session</label>
                        <select
                          name="session"
                          id="session"
                          className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
                        >
                          <option value="">Select --</option>
                          <option value="2023/2024">2023/2024</option>
                          <option value="2024/2025">2024/2025</option>
                          <option value="2025/2026">2025/2026</option>
                          <option value="2026/2027">2026/2027</option>
                        </select>
                      </div>

                      <div className="flex-1 flex flex-col gap-1">
                        <label htmlFor="Term" className="text-sm font-medium">Term</label>
                        <select
                          name="Term"
                          id="Term"
                          className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
                        >
                          <option value="">Select --</option>
                          <option value="2023/2024">Ist Term</option>
                          <option value="2024/2025">2nd Term</option>
                          <option value="2025/2026">3rd Term</option>
                        </select>
                      </div>
                      </div>
                      <div className="flex gap-1">
                        <div className="flex flex-col gap-1 w-1/2">
                          <label htmlFor="Amount" className="text-sm font-medium">Amount to Pay</label>
                          <input type="text" name="Amount" id="Amount" placeholder="0.00"
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
                          />
                        </div>

                      </div>

                      <div className="flex justify-between items-center">
                        <button className="py-1 px-5 text-green-500 border border-green-500 rounded cursor-pointer hover:bg-green-500 hover:text-white"
                        type="button"
                        >Process Salary</button>
                        <button className="py-1 px-4 bg-green-600 border border-green-500 rounded-sm  cursor-pointer hover:bg-green-500"
                        onClick={(e) => handleClick(e)}
                        >Generate Invoice</button>
                      </div>
                    </div>
                  </form>
                </div>

              </div>
          </div>
        </div>
        {showModal && (
              <InvoiceModal setShowModal={setShowModal} />
          )}
      </Layout>
    </>
  )
}

