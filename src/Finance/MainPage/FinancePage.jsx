import Layout from "../../components/Layout/Layout";
import { UserRoundCheck, Landmark } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FinancePage() {
  const navigate = useNavigate();

  const financeShortCut = [
    "Total Revenue", "Expenses", "Pending Payment", "Upcoming Payroll",
    "All Invoices", "Paid Invoices", "Unpaid Invoices", "Cancelled Invoices"
  ];

  return (
    <Layout activeTab="Finance">
      <div className="min-h-screen">

        <div className="bg-white flex flex-col md:flex-row md:justify-between md:items-center gap-3 p-3 mb-5 shadow-sm">
          <h1 className="text-2xl font-bold text-gray-800">Financial Management</h1>
          <button
            className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition w-full md:w-auto"
            onClick={() => navigate("/finance/generateInvoice")}
          >
            Generate Invoice
          </button>
        </div>

        <div className="bg-white p-4 shadow-sm rounded-lg">
          <h2 className="font-medium mb-3 text-gray-700">Quick Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div
              className="border border-green-400 rounded-lg p-4 cursor-pointer hover:bg-green-50 transition"
              onClick={() => navigate("/finance/paymentHistory")}
            >
              <div className="flex gap-2 items-center justify-center">
                <UserRoundCheck className="w-9 h-9 bg-green-200 p-2 border-2 border-green-600 rounded-full text-green-600" />
                <p className="text-gray-800 font-medium">Payment History</p>
              </div>
            </div>

            <div
              className="border border-green-400 rounded-lg p-4 cursor-pointer hover:bg-green-50 transition"
              onClick={() => navigate("/finance/staffSalary")}
            >
              <div className="flex gap-2 items-center justify-center">
                <UserRoundCheck className="w-9 h-9 bg-green-200 p-2 border-2 border-green-600 rounded-full text-green-600" />
                <p className="text-gray-800 font-medium">Staff Salaries</p>
              </div>
            </div>

            <div
              className="border border-green-400 rounded-lg p-4 cursor-pointer hover:bg-green-50 transition"
              onClick={() => navigate("/finance/invoice")}
            >
              <div className="flex gap-2 items-center justify-center">
                <UserRoundCheck className="w-9 h-9 bg-green-200 p-2 border-2 border-green-600 rounded-full text-green-600" />
                <p className="text-gray-800 font-medium">Invoices</p>
              </div>
            </div>

            <div className="border border-green-400 rounded-lg p-4 cursor-pointer hover:bg-green-50 transition">
              <div className="flex gap-2 items-center justify-center">
                <UserRoundCheck className="w-9 h-9 bg-green-200 p-2 border-2 border-green-600 rounded-full text-green-600" />
                <p className="text-gray-800 font-medium">Fee Structure</p>
              </div>
            </div>
          </div>
        </div>


        <div className="my-6 border-t border-gray-200"></div>

        <div>
          <h2 className="font-medium text-gray-700 mb-4">Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {financeShortCut.map((data, index) => (
              <div
                className="border border-gray-200 rounded-lg bg-white p-5 shadow-sm hover:shadow-md transition"
                key={index}
              >
                <div className="flex flex-col gap-2">
                  <Landmark className="w-9 h-9 bg-purple-100 p-2 border-2 border-purple-700 rounded-full text-purple-700" />
                  <p className="text-sm font-medium text-gray-600">{data}</p>
                  <p className="text-xl font-semibold text-gray-900">#130, 3000, 3000</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
