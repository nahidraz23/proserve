'use client'
import SignIn from "@/components/Authentication/SignIn/SignIn";
import SignUp from "@/components/Authentication/SignUp/SignUp";
import useAuth from "@/components/hooks/useAuth";
import MobileNav from "@/components/Shared/Navbar/MobileNav";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  const { user, logOut } = useAuth();
  console.log(user)

  const handleLogOut = () => {
    logOut()
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err.message)
    })
  }

  return (
    <header className="py-5 bg-black/80 fixed z-50 w-full flex">
      <div className="flex justify-between container">
        <Link href="/" className="font-bold text-2xl text-white">
          ProServe<span className="text-primary">.</span>
        </Link>
        {/* desktop navbar */}
        <Navbar />
        <div className="flex gap-3">
          {
            user ?
              <>
                <Button className="bg-secondary hover:text-white" onClick={handleLogOut}>
                  Log Out
                </Button>
              </>
              :
              <>
                <SignIn />
                <SignUp />
              </>
          }
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
