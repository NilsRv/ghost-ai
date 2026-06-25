import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { SIGN_IN_ROUTE } from "@/lib/clerk-routes";

export default async function Home() {
  const { isAuthenticated } = await auth();

  if (isAuthenticated) {
    redirect("/editor");
  }

  redirect(SIGN_IN_ROUTE);
}
