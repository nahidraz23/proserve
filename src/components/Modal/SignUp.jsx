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

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    console.log(data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="hidden lg:flex">Sign Up</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Sign up your account</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* login form */}
          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-3">
            {/* name field______________________________________ */}
            <div className="space-y-2 text-start">
              <Label htmlFor="name">
                Name<span className="text-secondary"> *</span>
              </Label>
              <Input
                type="name"
                placeholder="Enter your name"
                {...register("name", {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z\s.]+$/i,
                })}
              />
              {errors.name?.type === "required" && (
                <span className="text-red-500 text-sm">Name is required!</span>
              )}
              {errors.name && errors.name.type === "pattern" && (
                <span className="text-red-500 text-sm">
                  Name should use only letters and spaces.
                </span>
              )}
              {errors.name && errors.name.type === "maxLength" && (
                <span className="text-red-500 text-sm">
                  Name should be less than 20 characters.
                </span>
              )}
            </div>

            {/* email field______________________________________*/}
            <div className="space-y-2 text-start">
              <Label htmlFor="email">
                Email<span className="text-secondary"> *</span>
              </Label>
              <Input
                type="text"
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

            {/* photo field______________________________________ */}
            <div className="space-y-2 text-start">
              <Label htmlFor="photo">Photo URL</Label>
              <Input
                type="text"
                placeholder="Enter your photo url"
                {...register("photoURl")}
              />
            </div>

            {/* password field______________________________________ */}
            <div className="space-y-2 text-start">
              <Label htmlFor="password">
                Password<span className="text-secondary"> *</span>
              </Label>
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

            <Button>Sign up</Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignUp;
