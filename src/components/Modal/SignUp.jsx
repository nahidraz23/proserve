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

const SignUp = () => {
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
          <form className="space-y-3">
            <div className="space-y-2 text-start">
              <Label htmlFor="name">Name</Label>
              <Input type="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2 text-start">
              <Label htmlFor="email">Email</Label>
              <Input type="text" placeholder="Enter your email" />
            </div>
            <div className="space-y-2 text-start">
              <Label htmlFor="photo">Photo URL</Label>
              <Input type="text" placeholder="Enter your photo url" />
            </div>
            <div className="space-y-2 text-start">
              <Label htmlFor="password">Password</Label>
              <Input type="text" placeholder="Enter your password" />
            </div>

            <Button>Sign up</Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignUp;
