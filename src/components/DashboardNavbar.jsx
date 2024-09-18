"use client"
import { FaSearch, FaRegEnvelope, FaBell } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { useState } from "react";

const DashboardNavbar = () => {
  const [notificationCount, setNotificationCount] = useState(1);

  return (
    <div className="flex items-center justify-between">
      {/* Search bar */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full px-2 ring-[1.5px] ring-gray-300">
        <FaSearch size={14} />
        <input
          className="w-[200px] p-2 bg-transparent outline-none"
          type="text"
          placeholder="Search......"
        />
      </div>

      {/* Icons and user */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
          <FaRegEnvelope size={20} />
        </div>
        <div className="bg-white relative rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
          <FaBell size={20} />
          {notificationCount > 0 && (
            <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-xs text-white rounded-full">
              {notificationCount}
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <div className="bg-gray-200 rounded-full p-1 cursor-pointer">
          <MdPerson size={35} />
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
