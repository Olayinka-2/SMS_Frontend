import Layout from "../../../components/Layout/Layout";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import ProfileOverview from "./ProfileOverview";
import AccessPermission from "./AccessPermission";
// import { admin } from "../../AdminData";

export default function Profile() {

  const [profileTab, setProfileTab] = useState("Profile Overview");
  const navigate = useNavigate();
  const location = useLocation();
  const {admin} = location.state || {};

  const tabs = ["Profile Overview", "Access Permission", "Activity Log"];

  function handleProfileClick(tab) {
    setProfileTab(tab);

  }

  return(
    <>
      <Layout activeTab = "Admin Users">
        <div className="min-h-screen">
          <div className="bg-white rounded-md px-4 pt-4">

              <div className="flex justify-between items-center">
                  <h1 className="font-bold text-2xl">Admin User</h1>
                  <div className="flex gap-2 items-center">
                    <p className="text-gray-400 text-sm cursor-pointer"
                      onClick={() => navigate("/admin-users")}
                    >Admin User</p>
                    <p className="text-gray-400 text-sm">{">"}</p>
                    <p className="text-gray-400 text-sm">{admin.fullName}</p>
                    <p className="text-gray-400 text-sm">{">"}</p>
                    <p className="font-medium text-sm">{profileTab}</p>
                  </div>
              </div>
              <div className="border-b border-gray-300 py-4">
                <div className="flex items-center gap-3">
                  <div className="border-3 border-gray-200 rounded-full p-1 relative">
                    <div className="h-2 w-2 rounded-full bg-green-500 absolute top-0 right-2"></div>
                    <img src="imageAuthor.png" alt="frameLogo" className="rounded-full w-12 h-12" />
                  </div>
                  <div>
                    <h1 className="font-medium">{admin.fullName}</h1>
                    <p className="text-gray-500 text-sm">{admin.role}</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  {
                    tabs.map((tab, index) => (
                      <p key={index}
                        className={`cursor-pointer text-sm font-medium pb-1 my-3
                        ${tab === profileTab && 'border-b-2 border-green-500 text-green-500'}
                        `}
                        onClick={() => handleProfileClick(tab)}
                      >
                        {tab}
                      </p>
                    ))
                  }
                </div>
              </div>

          </div>

          <div className="mt-4">
            {
              profileTab === tabs[0] && <ProfileOverview admin={admin} />
            }
            {
              profileTab === tabs[1] && <AccessPermission/>
            }

          </div>
        </div>
      </Layout>
    </>
  )
}

