import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { GrServices } from "react-icons/gr";
import { LiaUsersCogSolid } from "react-icons/lia";

const Sidebar = () => {
  return (
    <div>
      <aside className="w-full md:w-1/6 p-5 flex md:flex-col flex-row gap-4 pt-10 space-y-3">
        <Link
          className="text-xl font-bold flex items-center gap-4"
          href={"/dashboard"}
        >
          <CgProfile size={30} /> Dashboard
        </Link>
        <Link
          className="text-xl font-bold flex items-center gap-4"
          href={"/dashboard/profile"}
        >
          <CgProfile size={30} /> Profile
        </Link>
        <Link
          className="text-xl font-bold flex items-center gap-4"
          href={"/dashboard/services"}
        >
          <GrServices size={30} /> Services
        </Link>
        <Link
          className="text-xl font-bold flex items-center gap-4"
          href={"/dashboard/allUser"}
        >
          <LiaUsersCogSolid size={30} /> All User
        </Link>
        {/* Sidebar items */}
      </aside>
    </div>
  );
};

export default Sidebar;
