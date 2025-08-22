import Layout from "../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { admin } from "../AdminData";

export default function AddAdminUser() {

  const navigate = useNavigate();

  return(
    <>
      <Layout activeTab = "Admin Users">
        <div className="min-h-screen">
          <div className="bg-white rounded-md p-4">
              <div className="flex justify-between items-center mb-4">
                  <h1 className="font-bold text-2xl">Add Admin User</h1>
                  <div className="flex gap-4 items-center">
                    <p className="text-gray-400 text-sm cursor-pointer"
                      onClick={() => navigate("/admin-users")}
                    >Admin User</p>
                    <p className="text-gray-400 text-sm">{">"}</p>
                    <p className="font-medium text-sm">Add Admin Users</p>
                  </div>
              </div>

              <div className="p-2">

                <div className="rounded-xl p-4 bg-white border border-gray-100">
                  <form action="#">
                    <div className="flex flex-col gap-5">
                      <div className="flex gap-2">
                        <div className="flex-1 flex flex-col gap-1">
                          <label htmlFor="userName" className="text-sm font-medium">User Name</label>
                          <input type="text" name="userName" id="userName" placeholder="User name"
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none" />
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                          <label htmlFor="fullName" className="text-sm font-medium">Full Name</label>
                          <input type="text" name="fullName" id="fullName" placeholder="Full name"
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none" />
                        </div>
                      </div>

                      <div className="flex gap-1">
                        <div className="flex-1 flex flex-col gap-1">
                          <label htmlFor="email" className="text-sm font-medium">Email</label>
                          <input type="email" name="email" id="email" placeholder="Email"
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none" />
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                          <label htmlFor="Role" className="text-sm font-medium">Role</label>
                          <select
                            name="Role"
                            id="Role"
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
                          >
                            <option value="">Role</option>
                            {admin.map((admin) => (
                              <option key={admin.id} value={admin.role}>
                                {admin.role}
                              </option>
                            ))}
                          </select>
                        </div>

                      </div>

                      <div className="flex gap-1">
                        <div className="flex flex-col gap-1 w-1/2">
                          <label htmlFor="activity" className="text-sm font-medium">Activity (Active/in-active)</label>
                          <select
                            name="activity"
                            id="activity"
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
                          >
                            <option value="">Select Status</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                          </select>

                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <button className="py-2 px-8 border border-green-500 text-green-500 rounded-sm  cursor-pointer hover:bg-green-500 hover:text-white"
                        type="button"
                        >Add Module Permission</button>
                        <button className="py-2 px-5 bg-green-500 border border-green-500 rounded-sm  cursor-pointer hover:bg-green-600"
                        type="button"
                        >Add User</button>
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

