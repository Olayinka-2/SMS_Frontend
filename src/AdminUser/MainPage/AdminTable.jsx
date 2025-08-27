import { Search, Calendar, List, SquarePen, ArrowDown } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminTable({admin}) {

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const numberOfPages = Math.ceil(admin.length / itemsPerPage);

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



  return(
    <>

<div className="border border-gray-100 p-1 bg-white rounded-t-md mt-4">
  <div className="overflow-x-auto">
    <table className="min-w-full border-collapse border border-gray-100 m-0 rounded-t-md">
      <thead>
        <tr className="border border-gray-100">
          <th className="text-left p-2">
            <div className="text-xs font-bold flex items-center gap-1">
              <p>S/N</p>
              <ArrowDown className="w-4 h-4" />
            </div>
          </th>
          <th className="text-center text-xs p-2 font-bold">User Name</th>
          <th className="text-center text-xs p-2 font-bold">Full Name</th>
          <th className="text-center text-xs p-2 font-bold">Email</th>
          <th className="text-center text-xs p-2 font-bold">Role</th>
          <th className="text-center text-xs p-2 font-bold">Status</th>
          <th className="text-center text-xs p-2 font-bold">Action</th>
        </tr>
      </thead>
      <tbody>
        {admin.slice(indexOfFirstItem, indexOfLastItem).map((adminItem, index) => (
          <tr
            key={adminItem.id}
            className={`border ${index % 2 === 0 ? "bg-gray-100" : ""}`}
          >
            <td className="px-2 py-5 text-xs text-center text-gray-600 border border-white border-l-gray-100">
              {adminItem.id}
            </td>

            <td className="px-2 py-5 text-xs text-center text-gray-600 border border-white">
              {adminItem.username}
            </td>

            <td className="border border-white text-center px-2 py-5 text-xs text-gray-600">
              {adminItem.fullName}
            </td>

            <td className="border border-white text-center px-2 py-5 text-xs text-gray-600">
              {adminItem.email}
            </td>

            <td className="border border-white text-center px-2 py-5 text-xs text-gray-600">
              {adminItem.role}
            </td>

            <td className="border border-white text-center text-xs">
              <span
                className={`px-2 py-1 rounded-xl
                  ${adminItem.status === "Active" && "text-green-500 bg-green-100"}
                  ${adminItem.status === "Inactive" && "text-red-500 bg-red-100"}
                `}
              >
                {adminItem.status}
              </span>
            </td>

            <td className="text-center px-2 py-5 text-xs text-gray-600 border border-white border-r-gray-100">
              <div className="flex justify-center items-center gap-3 cursor-pointer">
                <SquarePen className="w-5 h-5" />
                <button
                  className="text-green-500 border border-green-500 rounded-md hover:bg-green-500 hover:text-white py-1 px-4 cursor-pointer"
                  onClick={() =>
                    navigate("/admin-profile", { state: { admin: adminItem } })
                  }
                >
                  View
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <div className="border border-gray-100 m-0 p-1 rounded-b-md flex flex-row items-center justify-between gap-2">
    <div className="flex gap-3 items-center">
      <button
        className="py-1 px-4 text-green-500 border border-green-500 rounded-md hover:bg-green-500 hover:text-white cursor-pointer"
        onClick={handlePreviousClick}
      >
        Previous
      </button>
      <button
        className="py-1 px-4 text-green-500 border border-green-500 rounded-md hover:bg-green-500 hover:text-white cursor-pointer"
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
    <div>
      <p className="text-gray-500 text-xs">{`page ${currentPage} of ${numberOfPages}`}</p>
    </div>
  </div>
</div>


    </>
  )
}

