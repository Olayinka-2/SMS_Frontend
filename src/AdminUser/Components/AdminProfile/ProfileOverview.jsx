export default function ProfileOverview({admin}) {

  return(
    <>
      <div className="bg-white p-3 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <p className="text-sm font-medium mb-2">Full Name</p>
            <div className="text-gray-400 border border-gray-400 text-sm p-2 rounded">
              {admin.fullName}
            </div>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium mb-2">Position/Role</p>
            <div className="text-gray-400 border border-gray-400 text-sm p-2 rounded">
              {admin.role}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <p className="text-sm font-medium mb-2">Email Address</p>
            <div className="text-gray-400 border border-gray-400 text-sm p-2 rounded">
              {admin.email}
            </div>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium mb-2">Phone Number</p>
            <div className="text-gray-400 border border-gray-400 text-sm p-2 rounded">
              {admin.phone}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <div className="w-1/2">
            <p className="text-sm font-medium mb-2">Last Login</p>
            <div className="text-gray-400 border border-gray-400 text-sm p-1 rounded">
              Yesterday
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

