"use client";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { GrServices } from "react-icons/gr";
import { MdOutlinePayments } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";

const Sidebar = () => {
  const userRole = "agent";
  return (
    <div className="h-full bg-gradient-to-b from-purple-500 to-primary text-white">
      <aside className="w-full p-5 flex flex-col gap-6 pt-10">
        {userRole === "admin" && (
          <>
            <Link href="/dashboard">
              <div className="text-lg font-semibold flex items-center gap-4 transition-all duration-300 hover:bg-primary p-3 rounded-md hover:scale-105">
                <MdDashboard size={25} /> Dashboard
              </div>
            </Link>

            <Link href="/dashboard/admin/profile">
              <div className="text-lg font-semibold flex items-center gap-4 transition-all duration-300 hover:bg-primary p-3 rounded-md hover:scale-105">
                <CgProfile size={25} /> Profile
              </div>
            </Link>

            <Link href="/dashboard/admin/services">
              <div className="text-lg font-semibold flex items-center gap-4 transition-all duration-300 hover:bg-primary p-3 rounded-md hover:scale-105">
                <GrServices size={25} /> Services
              </div>
            </Link>

            <Link href="/dashboard/admin/allUser">
              <div className="text-lg font-semibold flex items-center gap-4 transition-all duration-300 hover:bg-primary p-3 rounded-md hover:scale-105">
                <LiaUsersCogSolid size={25} /> All User
              </div>
            </Link>
          </>
        )}
        {userRole === "user" && (
          <>
            <Link href="/dashboard">
              <div className="text-lg font-semibold flex items-center gap-4 transition-all duration-300 hover:bg-primary p-3 rounded-md hover:scale-105">
                <MdDashboard size={25} /> Dashboard
              </div>
            </Link>

            <Link href="/dashboard/user/profile">
              <div className="text-lg font-semibold flex items-center gap-4 transition-all duration-300 hover:bg-primary p-3 rounded-md hover:scale-105">
                <CgProfile size={25} /> Profile
              </div>
            </Link>

            <Link href="/dashboard/user/myServices">
              <div className="text-lg font-semibold flex items-center gap-4 transition-all duration-300 hover:bg-primary p-3 rounded-md hover:scale-105">
                <GrServices size={25} /> My Services
              </div>
            </Link>

            <Link href="/dashboard/user/paymentHistory">
              <div className="text-lg font-semibold flex items-center gap-4 transition-all duration-300 hover:bg-primary p-3 rounded-md hover:scale-105">
                <MdOutlinePayments size={25} /> Payment History
              </div>
            </Link>
          </>
        )}
        {userRole === "agent" && (
          <>
            <Link href="/dashboard">
              <div className="text-lg font-semibold flex items-center gap-4 transition-all duration-300 hover:bg-primary p-3 rounded-md hover:scale-105">
                <MdDashboard size={25} /> Dashboard
              </div>
            </Link>

            <Link href="/dashboard/agent/profile">
              <div className="text-lg font-semibold flex items-center gap-4 transition-all duration-300 hover:bg-primary p-3 rounded-md hover:scale-105">
                <CgProfile size={25} /> Profile
              </div>
            </Link>

            <Link href="/dashboard/agent/serviceRequests">
              <div className="text-lg font-semibold flex items-center gap-4 transition-all duration-300 hover:bg-primary p-3 rounded-md hover:scale-105">
                <GrServices size={25} />
                Services Requests
              </div>
            </Link>

            <Link href="/dashboard/agent/myServices">
              <div className="text-lg font-semibold flex items-center gap-4 transition-all duration-300 hover:bg-primary p-3 rounded-md hover:scale-105">
                <MdDesignServices size={25} /> My Services
              </div>
            </Link>
          </>
        )}
      </aside>
    </div>
  );
};

export default Sidebar;
