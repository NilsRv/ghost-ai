import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

import { PUBLIC_AUTH_ROUTES } from "@/lib/clerk-routes";

const isPublicRoute = createRouteMatcher(PUBLIC_AUTH_ROUTES);

export default clerkMiddleware(async (auth, request) => {
  if (isPublicRoute(request)) {
    return;
  }

  await auth.protect();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpg|jpeg|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
