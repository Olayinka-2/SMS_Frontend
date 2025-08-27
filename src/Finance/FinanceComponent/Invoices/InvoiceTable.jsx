import { ArrowDown, SquarePen } from "lucide-react";
import {useState} from "react";

import { invoiceData } from "../../data";

export default function Table() {


  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const numberOfPages = Math.ceil(invoiceData.length / itemsPerPage);

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
    <div className="mt-5">
    <div className="w-full overflow-x-auto rounded-t-md">
      <table className="w-full border-collapse border border-gray-100 min-w-[800px]">
        <thead>
          <tr className="border border-gray-100">
            <th className="text-left p-2">
              <div className="text-xs font-bold flex items-center gap-1">
                <p>S/N</p>
                <ArrowDown className="w-4 h-4" />
              </div>
            </th>
            <th className="text-center text-xs p-2 font-bold">Invoice ID</th>
            <th className="text-center text-xs p-2 font-bold">Invoiced To (Parent)</th>
            <th className="text-center text-xs p-2 font-bold">Due Date</th>
            <th className="text-center text-xs p-2 font-bold">Amount</th>
            <th className="text-center text-xs p-2 font-bold">Created On</th>
            <th className="text-center text-xs p-2 font-bold">Status</th>
            <th className="text-center text-xs p-2 font-bold">Action</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.slice(indexOfFirstItem, indexOfLastItem).map((data, index) => (
            <tr
              key={data.id}
              className={`border ${index % 2 === 0 ? "bg-gray-50" : ""}`}
            >
              <td className="px-2 py-5 text-xs text-center text-gray-600 border border-white border-l-gray-100">
                {data.id}
              </td>
              <td className="px-2 py-5 text-xs text-center text-gray-600 border border-white">
                {data.invoiceId}
              </td>
              <td className="border border-white text-center px-2 py-5 text-xs text-gray-600">
                {data.invoicedTo}
              </td>
              <td className="border border-white text-center px-2 py-5 text-xs text-gray-600">
                {data.dueDate}
              </td>
              <td className="border border-white text-center px-2 py-5 text-xs text-gray-600">
                {data.amount}
              </td>
              <td className="border border-white text-center px-2 py-5 text-xs text-gray-600">
                {data.createdOn}
              </td>
              <td className="border border-white text-center text-xs">
                <span
                  className={`px-2 py-1 rounded-xl
                    ${data.status === "Paid" && "text-green-500 bg-green-100"}
                    ${data.status === "Overdue" && "text-yellow-600 bg-yellow-100"}
                    ${data.status === "Cancelled" && "text-red-500 bg-red-100"}
                  `}
                >
                  {data.status}
                </span>
              </td>
              <td className="text-center px-2 py-5 text-xs text-gray-600 border border-white border-r-gray-100">
                <div className="flex justify-center items-center gap-3 cursor-pointer">
                  <SquarePen className="w-5 h-5" />
                  <button className="text-green-500 border border-green-500 rounded-md hover:bg-green-500 hover:text-white py-1 px-4 cursor-pointer">
                    View
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


      <div className="border border-gray-100 m-0 p-1 rounded-b-md flex items-center justify-between p-5" >
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

