import SignIn from "@/components/Modal/SignIn";
import SignUp from "@/components/Modal/SignUp";
import MobileNav from "@/components/Shared/Navbar/MobileNav";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Link from "next/link";

const Header = () => {
  // console.log("fixed");

  return (
    <header className="py-5 bg-black/80 fixed z-50 w-full flex">
      <div className="flex justify-between container">
        <Link href="/" className="font-bold text-2xl text-white">
          ProServe<span className="text-primary">.</span>
        </Link>
        {/* desktop navbar */}
        <Navbar />
        <div className="flex gap-3">
          <SignIn />
          <SignUp />
        </div>
        {/* mobile devices navbar */}
        <div className="flex lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
