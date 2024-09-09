import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { Button } from "../ui/button";

const SocialLogIn = () => {
  return (
    <div className="flex justify-between gap-4">
      <Button variant="outline" className="w-full">
        <FaGoogle className="mr-2 h-4 w-4 text-secondary" /> Login with Email
      </Button>
      <Button variant="outline" className="w-full">
        <FaFacebook className="mr-2 h-4 w-4 text-primary" /> Login with Email
      </Button>
    </div>
  );
};

export default SocialLogIn;
