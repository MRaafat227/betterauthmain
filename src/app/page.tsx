import SignIn from "@/components/sign-in";
import SignUp from "@/components/sign-up";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen min-w-screen">
      <SignIn />
      <Separator />
      <SignUp />
    </div>
  );
}
