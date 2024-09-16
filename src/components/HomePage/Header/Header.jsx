"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import useAuth from "@/hooks/useAuth";
import MobileNav from "@/components/Shared/Navbar/MobileNav";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import SignInForm from "@/components/Authentication/SignIn/SignInForm";
import SignUpForm from "@/components/Authentication/SignUp/SignUpForm";
import useAxiosPublic from "@/hooks/useAxiosPublic";

const Header = () => {
  const { toast } = useToast();
  const axiosPublic = useAxiosPublic();
  const { user, createUser, signInUser, updateUserProfile, logOut } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control
  } = useForm();

  const handleSignUp = async (data) => {
    const name = data.name;
    const email = data.email;
    const role = data.role;
    let completed_service = 0;
    let isActive = "active";
    let category = data.category;


    const user = {name, email, role, completed_service, isActive, category}
    console.log(user)
    try {
      const res = await createUser(data.email, data.password);
      const result = await axiosPublic.post('/api/users', user)
      if (result.data.insertedId) {
        toast({
          title: "Sign up successful!",
          action: <ToastAction altText="OK">OK</ToastAction>,
        });
      }
      // console.log(result);
      await updateUserProfile(user?.displayName, user?.photoURL);
    } catch (error) {
      toast({
        variant: "destructive",
        title: error.message,
        action: <ToastAction altText="OK">OK</ToastAction>,
      });
      console.log(error);
    }
  };

  const handleSignIn = async (data) => {
    try {
      const res = await signInUser(data.email, data.password);
      toast({
        title: "Sign in successful!",
        action: <ToastAction altText="OK">OK</ToastAction>,
      });
      console.log(res);
    } catch (error) {
      toast({
        variant: "destructive",
        title: error.message,
        action: <ToastAction altText="OK">OK</ToastAction>,
      });
      console.log(error);
    }
  };

  const handleLogOut = () => {
    logOut()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <header className="py-5 bg-black/80 fixed z-50 w-full flex">
      <div className="flex justify-between container">
        <Link href="/" className="font-bold text-2xl text-white">
          ProServe<span className="text-primary">.</span>
        </Link>
        {/* desktop navbar */}
        <Navbar />
        <div className="flex gap-3">
          {user ? (
            <>
              <Button
                className="bg-secondary hover:text-white hidden lg:flex"
                onClick={handleLogOut}
              >
                Log Out
              </Button>
            </>
          ) : (
            <>
              {/* sign in dialog */}
              <Dialog>
                <DialogTrigger asChild className="hidden lg:flex">
                  <Button variant="secondary">Sign In</Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Sign in your account</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    {/* sign in form */}
                    <SignInForm
                      handleSignIn={handleSignIn}
                      handleSubmit={handleSubmit}
                      register={register}
                      errors={errors}
                      reset={reset}
                    />
                  </div>
                </DialogContent>
              </Dialog>

              {/* sign up dialog */}
              <Dialog>
                <DialogTrigger asChild className="hidden lg:flex">
                  <Button>Sign Up</Button>
                </DialogTrigger>
                <DialogContent className="">
                  <DialogHeader>
                    <DialogTitle>Sign up your account</DialogTitle>
                  </DialogHeader>

                  <SignUpForm
                    handleSignUp={handleSignUp}
                    handleSubmit={handleSubmit}
                    register={register}
                    errors={errors}
                    reset={reset}
                    control={control}
                  />
                </DialogContent>
              </Dialog>
            </>
          )}
        </div>

        {/* mobile devices navbar */}
        <div className="flex lg:hidden">
          <MobileNav
            handleSignIn={handleSignIn}
            handleSignUp={handleSignUp}
            handleSubmit={handleSubmit}
            register={register}
            errors={errors}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
