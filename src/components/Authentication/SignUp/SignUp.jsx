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
import { useContext, useState } from "react";
import { AuthContext } from "@/providers/AuthProvider";

const SignUp = () => {
  const [role, setRole] = useState("user");

  const { createUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleSetRole = (role) => {
    reset();
    setRole(role);
  };

  const handleSignUp = async (data) => {
    const userInfo = {
      name: data?.name,
      email: data?.name,
      role: role,
    };

    try {
      const res = await createUser(data.email, data.password);
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      alert("Sign up successful!");
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
