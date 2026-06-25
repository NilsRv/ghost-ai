function normalizeClerkRoute(
  route: string | undefined,
  fallback: string,
): string {
  if (!route) {
    return fallback;
  }

  if (route.startsWith("http://") || route.startsWith("https://")) {
    return new URL(route).pathname || fallback;
  }

  return route.startsWith("/") ? route : `/${route}`;
}

export const SIGN_IN_ROUTE = normalizeClerkRoute(
  process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
  "/sign-in",
);

export const SIGN_UP_ROUTE = normalizeClerkRoute(
  process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
  "/sign-up",
);

export const PUBLIC_AUTH_ROUTES = Array.from(
  new Set([
    SIGN_IN_ROUTE,
    `${SIGN_IN_ROUTE}(.*)`,
    SIGN_UP_ROUTE,
    `${SIGN_UP_ROUTE}(.*)`,
  ]),
);
