import { Search, Calendar, List, SquarePen, ArrowDown } from "lucide-react";
import { useState } from "react";

// const moduleList = [
//   "Dashboard", "HR", "Teachers", "Parents", "Students",
//   "Messaging", "Events", "Finance", "Notice Board",
//   "School Calendar", "Subjects", "CMS", "Admin Users"
// ];

export default function AccessPermission() {

  const module = ["Dashboard", "HR", "Teachers", "Parents", "Students", "Messaging", "Events", "Finance", "Notice Board", "School Calender", "Subjects", "CMS", "Admin Users"];

  return(
    <>
      <div className="bg-white p-3">
      <table className="w-full border-collapse border border-gray-100 m-0 rounded-t-md">
        <thead>
          <tr className="border border-gray-100">
            <th className="text-center text-xs  p-2 font-bold text-center px-2 py-5 w-1/2">Module</th>
            <th className="text-center text-xs  p-2 font-bold text-center px-2 py-5 w-1/2"> Access Level</th>
          </tr>
        </thead>
        <tbody>
          {module.map((data, index) => (
            <tr
              key={index}
              className={`border ${
                index % 2 === 0 && "bg-gray-100"
              }`}
            >
              <td className="border border-white text-center px-2 py-5 text-xs text-gray-600">
                {data}
              </td>
              <td className="border border-white text-center px-2 py-5 text-xs text-gray-600">
                Full Access(Edit, View, Delete)
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  )
}

