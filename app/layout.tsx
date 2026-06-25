import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { ui } from "@clerk/ui";
import { Geist, Geist_Mono } from "next/font/google";

import { clerkAppearance } from "@/lib/clerk-appearance";
import { SIGN_IN_ROUTE, SIGN_UP_ROUTE } from "@/lib/clerk-routes";

import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Ghost AI",
  description: "Ghost AI collaborative system design workspace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full`}
    >
      <body className="min-h-full flex flex-col">
        <ClerkProvider
          ui={ui}
          appearance={clerkAppearance}
          signInUrl={SIGN_IN_ROUTE}
          signUpUrl={SIGN_UP_ROUTE}
        >
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
