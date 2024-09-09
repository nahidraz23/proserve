"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useForm } from "react-hook-form";
import SignUpForm from "./SignUpForm";
import { useState } from "react";
import useAuth from "@/components/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

const SignUp = () => {
  const [userRole, setUserRole] = useState("user");
  const { toast } = useToast();

  const { user, createUser, updateUserProfile } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleSetRole = (e) => {
    reset();
    setUserRole(e);
  };

  const handleSignUp = async (data) => {
    try {
      const res = await createUser(data.email, data.password);
      toast({
        title: "Sign up successful!",
        action: <ToastAction altText="OK">OK</ToastAction>,
      });
      console.log(res);
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

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="hidden lg:flex">Sign Up</Button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Sign up your account</DialogTitle>
        </DialogHeader>

        {/* tabs */}
        <Tabs defaultValue="user">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger onClick={() => handleSetRole("user")} value="user">
              User
            </TabsTrigger>
            <TabsTrigger
              onClick={() => handleSetRole("service")}
              value="service"
            >
              Service
            </TabsTrigger>
          </TabsList>

          {/* tab-1 user form */}
          <TabsContent value="user">
            <SignUpForm
              handleSignUp={handleSignUp}
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
              reset={reset}
            />
          </TabsContent>

          {/* tab-2 service form*/}
          <TabsContent value="service">
            <SignUpForm
              handleSignUp={handleSignUp}
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
              reset={reset}
              role={"service"}
            />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default SignUp;
