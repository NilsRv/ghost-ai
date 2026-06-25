import { SignIn } from "@clerk/nextjs";

import { AuthShell } from "@/components/auth/auth-shell";
import { clerkAppearance } from "@/lib/clerk-appearance";
import { SIGN_UP_ROUTE } from "@/lib/clerk-routes";

export default function SignInPage() {
  return (
    <AuthShell mode="sign-in">
      <SignIn
        signUpUrl={SIGN_UP_ROUTE}
        appearance={clerkAppearance}
        fallbackRedirectUrl="/editor"
      />
    </AuthShell>
  );
}
