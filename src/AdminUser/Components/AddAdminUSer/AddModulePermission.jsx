import Layout from "../../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import { admin } from "../../AdminData";
import { useState } from "react";

import AddAdminModal from "./AddAdminModal";

const moduleList = ["Dashboard", "HR", "Teachers", "Parents", "Students", "Messaging", "Events", "Finance", "Notice Board", "School Calender", "Subjects", "CMS", "Admin Users"];

export default function AddModulePermission() {

  const navigate = useNavigate();

  return(
    <>
      <Layout activeTab = "Admin Users">
        <div className="min-h-screen">
          <div className="bg-white rounded-md p-4">
              <div className="flex justify-between items-center mb-4">
                  <h1 className="font-bold text-2xl">Add Admin User</h1>
                  <div className="flex gap-2 items-center">
                    <p className="text-gray-400 text-sm cursor-pointer"
                      onClick={() => navigate("/admin-users")}
                    >Admin User</p>
                    <p className="text-gray-400 text-sm">{">"}</p>
                    <p className="text-gray-400 text-sm cursor-pointer"
                    onClick={() => navigate("/add-admin-users")}
                    >Add Admin Users</p>
                    <p className="text-gray-400 text-sm">{">"}</p>
                    <p className="font-medium text-sm">Add Module Permission</p>
                  </div>
              </div>

              <div>
              <table className="w-full border-collapse border border-gray-100 m-0 rounded-t-md">
                <thead>
                  <tr className="border border-gray-100">
                    <th className="text-left p-2">
                      <div className="text-xs font-bold flex items-center gap-1">
                        <p>S/N </p>
                        <ArrowDown className="w-4 h-4"/>
                      </div>
                    </th>
                    <th className="text-center text-xs  p-2 font-bold text-center px-2 py-5">Module</th>
                    <th className="text-center text-xs  p-2 font-bold text-center px-2 py-5"> Edit</th>
                    <th className="text-center text-xs  p-2 font-bold text-center px-2 py-5"> View</th>
                    <th className="text-center text-xs  p-2 font-bold text-center px-2 py-5"> Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {moduleList.map((data, index) => (
                    <tr
                      key={data.id}
                      className={`border ${
                        index % 2 === 0 && "bg-gray-100"
                      }`}
                    >
                      <td className="border border-white text-center px-2 py-5 text-xs text-gray-600">{index + 1 }</td>
                      <td className="border border-white text-center px-2 py-5 text-xs text-gray-600">
                        {data}
                      </td>
                      <td className="border border-white text-center px-2 py-5 text-xs text-gray-600">
                        <input type="checkbox" name="edit" id="edit" />
                      </td>
                      <td className="border border-white text-center px-2 py-5 text-xs text-gray-600">
                      <input type="checkbox" name="view" id="view" />
                      </td>
                      <td className="border border-white text-center px-2 py-5 text-xs text-gray-600">
                      <input type="checkbox" name="delete" id="delete" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

