import MobileNav from "@/components/Shared/Navbar/MobileNav";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-5 bg-black text-white fixed w-full opacity-80 flex">
      <div className="flex justify-between container">
        <Link href="/" className="font-bold text-2xl">
          ProServe<span className="text-primary">.</span>
        </Link>
        {/* desktop navbar */}
        <Navbar />
        <Button className="hidden lg:flex">Login</Button>
        {/* mobile navbar */}
        <div className="flex lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
