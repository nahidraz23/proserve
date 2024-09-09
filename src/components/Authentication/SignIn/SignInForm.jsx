import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../../ui/button";
import SocialLogIn from "../SocialLogIn";

const SignInForm = ({ handleSignIn, handleSubmit, register, errors }) => {
  return (
    <div>
      <form onSubmit={handleSubmit(handleSignIn)} className="space-y-3 mb-4">
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
            <span className="text-red-500 text-sm">Password is required!</span>
          )}
        </div>
        <p className="text-end hover:underline text-sm">Forget password?</p>
        <Button className="w-full" variant="secondary">
          Sign in
        </Button>
      </form>
      {/* social login */}
      <SocialLogIn />
    </div>
  );
};

export default SignInForm;
