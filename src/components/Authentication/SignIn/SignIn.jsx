"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useForm } from "react-hook-form";
import SignInForm from "./SignInForm";

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
          {/* sign in form */}
          <SignInForm
            handleSignIn={handleSignIn}
            handleSubmit={handleSubmit}
            register={register}
            errors={errors}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignIn;
