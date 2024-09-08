"use client";

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

import { FiAlignRight } from "react-icons/fi";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="text-2xl text-white">
          <FiAlignRight />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="mb-6">
            <Link href="/">
              ProServe<span className="text-primary">.</span>
            </Link>
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
  );
};

export default MobileNav;
