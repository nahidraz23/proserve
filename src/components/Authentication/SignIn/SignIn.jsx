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
import useAuth from "@/components/hooks/useAuth";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { toast } = useToast();
  const { signInUser } = useAuth();

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
