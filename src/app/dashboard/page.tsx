import SignOut from "@/components/sign-out";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return <div>Not authenticated</div>;
  }
  return (
    <>
      <div>welcome {session.user.email}</div>
      <SignOut />
    </>
  );
}
