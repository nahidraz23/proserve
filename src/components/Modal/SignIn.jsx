"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useForm } from "react-hook-form";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = (data) => {
    console.log(data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="hidden lg:flex">
          Sign In
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Sign in your account</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* login form */}
          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-3">
            {/* email field______________________________________*/}
            <div className="space-y-2 text-start">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: true,
                  pattern: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]+$/i,
                })}
              />
              {errors.email?.type === "required" && (
                <span className="text-red-500 text-sm">
                  Email address is required,{" "}
                </span>
              )}
              {errors.email && (
                <span className="text-red-500 text-sm">
                  Enter a valid email address!
                </span>
              )}
            </div>

            {/* password field______________________________________*/}
            <div className="space-y-2 text-start">
              <Label htmlFor="password">Password</Label>
              <Input
                type="text"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />
              {errors.password?.type === "required" && (
                <span className="text-red-500 text-sm">
                  Password is required!
                </span>
              )}
            </div>
            <p className="text-end hover:underline">Forget password?</p>
            <Button variant="secondary">Sign in</Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignIn;
