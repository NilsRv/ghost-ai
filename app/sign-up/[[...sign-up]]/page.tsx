import { SignUp } from "@clerk/nextjs";

import { AuthShell } from "@/components/auth/auth-shell";
import { clerkAppearance } from "@/lib/clerk-appearance";
import { SIGN_IN_ROUTE } from "@/lib/clerk-routes";

export default function SignUpPage() {
  return (
    <AuthShell mode="sign-up">
      <SignUp
        signInUrl={SIGN_IN_ROUTE}
        appearance={clerkAppearance}
        fallbackRedirectUrl="/editor"
      />
    </AuthShell>
  );
}
