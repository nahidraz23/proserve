import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SocialLogIn from "../SocialLogIn";

const Form = ({ handleSignUp, handleSubmit, errors, register }) => {
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
            <span className="text-red-500 text-sm">Password is required!</span>
          )}
        </div>
        {/* social login */}
        <SocialLogIn />
        <Button className="w-full" variant="secondary">
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default Form;
