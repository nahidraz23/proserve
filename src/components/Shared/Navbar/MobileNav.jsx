"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { links } from "@/lib/links";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FiAlignRight } from "react-icons/fi";
import SignInForm from "@/components/Authentication/SignIn/SignInForm";
import SignUpForm from "@/components/Authentication/SignUp/SignUpForm";

const MobileNav = ({
  handleSignIn,
  handleSignUp,
  handleSubmit,
  register,
  errors,
}) => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="text-2xl text-white">
          <FiAlignRight />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between">
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

        <SheetFooter className="flex justify-between gap-4">
          {/* sign in dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" className="w-full">
                Sign In
              </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Sign in your account</DialogTitle>
              </DialogHeader>
              {/* form here */}
              <div>
                <SignInForm
                  handleSignIn={handleSignIn}
                  handleSubmit={handleSubmit}
                  register={register}
                  errors={errors}
                />
              </div>
            </DialogContent>
          </Dialog>

          {/* sign up dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full">Sign Up</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Sign up your account</DialogTitle>
              </DialogHeader>
              <SignUpForm
                handleSignUp={handleSignUp}
                handleSubmit={handleSubmit}
                register={register}
                errors={errors}
              />
            </DialogContent>
          </Dialog>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
