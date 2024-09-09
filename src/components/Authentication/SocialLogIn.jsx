import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { Button } from "../ui/button";
import useAuth from "../hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@radix-ui/react-toast";

const SocialLogIn = () => {
  const { googleSignIn, facebookSignIn } = useAuth();
  const { toast } = useToast();

  const handleGoogleSignIn = async () => {
    try {
      const res = await googleSignIn();
      console.log(res);
      toast({
        title: "Sign in successful!",
        action: <ToastAction altText="OK">OK</ToastAction>,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: error.message,
        action: <ToastAction altText="OK">OK</ToastAction>,
      });
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      const res = await facebookSignIn();
      console.log(res);
      toast({
        title: "Sign in successful!",
        action: <ToastAction altText="OK">OK</ToastAction>,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: error.message,
        action: <ToastAction altText="OK">OK</ToastAction>,
      });
    }
  };

  return (
    <div className="flex justify-between gap-4">
      <Button onClick={handleGoogleSignIn} variant="outline" className="w-full">
        <FaGoogle className="mr-2 h-4 w-4 text-secondary" /> Login with Email
      </Button>
      <Button
        onClick={handleFacebookSignIn}
        variant="outline"
        className="w-full"
      >
        <FaFacebook className="mr-2 h-4 w-4 text-primary" /> Login with Email
      </Button>
    </div>
  );
};

export default SocialLogIn;
