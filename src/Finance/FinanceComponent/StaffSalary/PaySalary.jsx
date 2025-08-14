import Layout from "../../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import {teacherPayments} from "../../data"

export default function StaffSalary() {

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
                    <p className="text-gray-400 text-sm cursor-pointer"
                    onClick={() => navigate("/finance/staffSalary")}
                    >Staff Salaries</p>
                    <p className="text-gray-400 text-sm">{">"}</p>
                    <p className="font-medium text-sm">Pay Salary</p>
                  </div>
              </div>

              <div className="p-2">

                <div className="rounded-xl p-4 bg-white border border-gray-100">
                  <div className="font-bold text-lg mb-2">Pay Salary</div>
                  <form action="#">
                    <div className="flex flex-col gap-5">
                      <div className="flex gap-2">
                        <div className="flex-1 flex flex-col gap-1">
                          <label htmlFor="staffName" className="text-sm font-medium">Staff Name</label>
                            <select
                            name="staffName"
                            id="staffName"
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
                          >
                            <option value="">Staff Name</option>
                            {teacherPayments.map((teacher) => (
                              <option key={teacher.id} value={teacher.name}>
                                {teacher.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                          <label htmlFor="payDay" className="text-sm font-medium">Payment Date</label>
                          <input type="date" name="payDay" id="payDay" placeholder="Enter payment Date"
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none" />
                        </div>
                      </div>
                      <div className="flex gap-1">

                        <div className="flex-1 flex flex-col gap-1">
                          <label htmlFor="GrossSalary" className="text-sm font-medium">Gross Salary</label>
                          <input type="text" name="GrossSalary" id="GrossSalary" placeholder="Gross Salary"
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none" />
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                          <label htmlFor="Time" className="text-sm font-medium">Deductions</label>
                          <select
                            name="staffName"
                            id="staffName"
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
                          >
                            <option value="">Deductions</option>
                            {teacherPayments.map((teacher) => (
                              <option key={teacher.id} value={teacher.deductions}>
                                {teacher.deductions}
                              </option>
                            ))}
                          </select>
                        </div>

                      </div>
                      <div className="flex gap-1">
                        <div className="flex flex-col gap-1 w-1/2">
                          <label htmlFor="netSalary" className="text-sm font-medium">Net Salary</label>
                          <input type="text" name="netSalary" id="netSalary" placeholder="Net Salary"
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
                          />
                        </div>
                      </div>
                      <div>
                        <button className="py-1 px-4 bg-green-600 border border-green-500 rounded-sm  cursor-pointer hover:bg-green-500"
                        type="button"
                        >Process Salary</button>
                      </div>
                    </div>
                  </form>
                </div>

              </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

