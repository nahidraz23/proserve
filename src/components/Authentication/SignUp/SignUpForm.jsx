import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SocialLogIn from "../SocialLogIn";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller } from "react-hook-form";

const SignUpForm = ({ handleSubmit, handleSignUp, errors, register, control }) => {

  return (
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
            Email<span className="text-secondary">*</span>
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

        {/* password field______________________________________ */}
        <div className="space-y-2 text-start">
          <Label htmlFor="password">
            Password<span className="text-secondary"> *</span>
          </Label>
          <Input
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: true })}
          />
          {errors.password?.type === "required" && (
            <span className="text-red-500 text-sm">Password is required!</span>
          )}
        </div>

        {/* role */}
        <Controller
          name="role"
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <div className="space-y-2 text-start">
              <Label htmlFor="role">Role</Label>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup >
                    <SelectItem className="hover:bg-secondary-hover hover:rounded-xl hover:text-white hover:font-semibold" value="user">User</SelectItem>
                    <SelectItem className="hover:bg-secondary-hover hover:rounded-xl hover:text-white hover:font-semibold" value="agent">Agent</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          )}
        ></Controller>

        {/* category */}
        <Controller
          name="category"
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <div className="space-y-2 text-start">
              <Label htmlFor="role">Category</Label>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup >
                    <SelectItem className="hover:bg-secondary-hover hover:rounded-xl hover:text-white hover:font-semibold" value="car-wash">Car wash</SelectItem>
                    <SelectItem className="hover:bg-secondary-hover hover:rounded-xl hover:text-white hover:font-semibold" value="babysitter">Babysitter</SelectItem>
                    <SelectItem className="hover:bg-secondary-hover hover:rounded-xl hover:text-white hover:font-semibold" value="painting-service">Painting Service</SelectItem>
                    <SelectItem className="hover:bg-secondary-hover hover:rounded-xl hover:text-white hover:font-semibold" value="home-cleaning">Home Cleaning</SelectItem>
                    <SelectItem className="hover:bg-secondary-hover hover:rounded-xl hover:text-white hover:font-semibold" value="pest-control">Pest Control</SelectItem>
                    <SelectItem className="hover:bg-secondary-hover hover:rounded-xl hover:text-white hover:font-semibold" value="ac-servicing">AC Servicing</SelectItem>
                    <SelectItem className="hover:bg-secondary-hover hover:rounded-xl hover:text-white hover:font-semibold" value="ambulance-service">Ambulance Service</SelectItem>
                    <SelectItem className="hover:bg-secondary-hover hover:rounded-xl hover:text-white hover:font-semibold" value="nursing">Nursing</SelectItem>
                    <SelectItem className="hover:bg-secondary-hover hover:rounded-xl hover:text-white hover:font-semibold" value="tv-service">TV Service</SelectItem>
                    <SelectItem className="hover:bg-secondary-hover hover:rounded-xl hover:text-white hover:font-semibold" value="laptop-service">Laptop Service</SelectItem>
                    <SelectItem className="hover:bg-secondary-hover hover:rounded-xl hover:text-white hover:font-semibold" value="salon-care">Salon Care</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          )}
        ></Controller>
        <Button className="w-full" variant="secondary">
          Sign up
        </Button>
      </form>
      {/* social login */}
      <SocialLogIn />
    </div>
  );
};

export default SignUpForm;
