"use client";

import { FiAlignRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { links } from "@/lib/links";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  // console.log(pathname);

  return (
    <nav className="flex justify-between py-5 bg-black text-white fixed w-full opacity-80">
      <h1 className="font-bold text-2xl">
        ProServe<span className="text-primary"></span>
      </h1>
      <div className="hidden lg:flex gap-8 items-center">
        {links.map((link) => (
          <Link
            href={link.path}
            key={link.path}
            className={`capitalize font-medium hover:text-primary hover:border-b-2 hover:border-primary transition-all ${
              link.path === pathname && "border-b-2 border-primary text-primary"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <Button className="hidden lg:flex">Login</Button>

      {/* mobile nav contents here */}
      <div className="flex lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="text-2xl">
              <FiAlignRight />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="mb-6">
                ProServe<span className="text-primary">.</span>
              </SheetTitle>
              <SheetDescription>
                <div className="flex flex-col gap-8">
                  {links.map((link) => (
                    <Link
                      href={link.path}
                      key={link.path}
                      className={`capitalize hover:text-primary hover:border-primary transition-all ${
                        link.path === pathname && "text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetDescription>
            </SheetHeader>

            <SheetFooter>
              <SheetClose asChild>
                <Button>Login</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
