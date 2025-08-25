import Layout from "../../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import { useState } from "react";

const moduleList = ["Dashboard", "HR", "Teachers", "Parents", "Students", "Messaging", "Events", "Finance", "Notice Board", "School Calender", "Subjects", "CMS", "Admin Users"];

export default function ActivityLog() {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const numberOfPages = Math.ceil(moduleList.length / itemsPerPage);

  function handleNextClick() {
    if(currentPage < numberOfPages) {
      setCurrentPage((prev) => prev + 1);
    }
  }
  function handlePreviousClick() {
    if(currentPage > 1) {
      setCurrentPage((prev) => prev - 1)
    }
  }

  const now = new Date();

  const timestamp = now.getFullYear() + "-" +
    String(now.getMonth() + 1).padStart(2, "0") + "-" +
    String(now.getDate()).padStart(2, "0") + " " +
    String(now.getHours()).padStart(2, "0") + ":" +
    String(now.getMinutes()).padStart(2, "0") + ":" +
    String(now.getSeconds()).padStart(2, "0");


  const navigate = useNavigate();

  return(
    <>
     <div className="bg-white">
              <table className="w-full border-collapse border border-gray-100 m-0 rounded-t-md">
                <thead>
                  <tr className="border border-gray-100">
                    <th className="text-left p-2">
                      <div className="text-xs font-bold flex items-center justify-center gap-1">
                        <p>S/N </p>
                        <ArrowDown className="w-4 h-4"/>
                      </div>
                    </th>
                    <th className="text-center text-xs  p-2 font-bold text-center px-2 py-5">TimeStamp</th>
                    <th className="text-center text-xs  p-2 font-bold text-center px-2 py-5"> Activity Type</th>
                  </tr>
                </thead>
                <tbody>
                  {moduleList.slice(indexOfFirstItem, indexOfLastItem).map((data, index) => (
                    <tr
                      key={data.id}
                      className={`border ${
                        index % 2 === 0 && "bg-gray-100"
                      }`}
                    >
                      <td className="border border-white text-center px-2 py-5 text-xs text-gray-600">{ indexOfFirstItem + index + 1 }</td>
                      <td className="border border-white text-center px-2 py-5 text-xs text-gray-600">
                        {timestamp}
                      </td>
                      <td className="border border-white text-center px-2 py-5 text-xs text-gray-600">
                        Full Access(Read, Write, delete)
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="border border-gray-100 m-0 p-1 rounded-b-md flex items-center justify-between" >
                <div className="flex gap-3 items-center">
                  <button className="py-1 text-sm px-3 text-green-500 border border-green-500 rounded-md  hover:bg-green-500 hover:text-white cursor-pointer" onClick={handlePreviousClick}>Previous</button>
                  <button className="py-1 text-sm px-3 text-green-500 border border-green-500 rounded-md  hover:bg-green-500 hover:text-white cursor-pointer" onClick={handleNextClick}>Next</button>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">{`page ${currentPage} of ${numberOfPages}`}</p>
                </div>
              </div>
              </div>
    </>
  )
}

