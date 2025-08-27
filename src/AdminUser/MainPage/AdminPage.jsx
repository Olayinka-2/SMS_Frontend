import Layout from "../../components/Layout/Layout";
import AdminTable from "./AdminTable";

import { Search, Calendar, List, SquarePen, ArrowDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { admin } from "../AdminData";

export default function AdminUser() {
  const navigate = useNavigate();

  return(
    <>
      <Layout activeTab = "Admin Users">
        <div className="min-h-screen">

          <div className="p-3 bg-white border border-gray-100">
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-xl">ADMIN USER</h1>
            </div>
            <div className="border-b border-gray-400 my-4" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-1">
              <div className="relative w-full sm:max-w-xs">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-5 pr-10 py-1 rounded border border-gray-300 focus:outline-none"
                />
                <Search className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 w-5 h-5 cursor-pointer" />
              </div>

              <div className="w-full sm:w-auto">
                <button
                  className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-500 w-full sm:w-auto"
                  onClick={() => navigate("/add-admin-users")}
                >
                  + New User
                </button>
              </div>
            </div>


              <AdminTable admin={admin} />
            </div>

          </div>
      </Layout>
    </>
  )
}

