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

const SignIn = () => {
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
          <form className="space-y-3">
            <div className="space-y-2 text-start">
              <Label htmlFor="email">Email</Label>
              <Input type="email" placeholder="Enter your email" />
            </div>
            <div className="space-y-2 text-start">
              <Label htmlFor="password">Password</Label>
              <Input type="text" placeholder="Enter your password" />
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
