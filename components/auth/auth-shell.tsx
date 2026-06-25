import Link from "next/link";
import type { ReactNode } from "react";
import { Blocks, FileText, Sparkles, UsersRound } from "lucide-react";

import { SIGN_IN_ROUTE, SIGN_UP_ROUTE } from "@/lib/clerk-routes";

const AUTH_FEATURES = [
  {
    title: "AI Architecture Generation",
    description:
      "Describe your system, AI maps it to nodes and edges on a live canvas.",
    icon: Sparkles,
  },
  {
    title: "Real-time Collaboration",
    description:
      "Live cursors, presence indicators, and shared node editing across your team.",
    icon: UsersRound,
  },
  {
    title: "Instant Spec Generation",
    description:
      "Export a complete Markdown technical spec directly from the canvas graph.",
    icon: FileText,
  },
];

interface AuthShellProps {
  children: ReactNode;
  mode: "sign-in" | "sign-up";
}

export function AuthShell({ children, mode }: AuthShellProps) {
  const alternateHref = mode === "sign-in" ? SIGN_UP_ROUTE : SIGN_IN_ROUTE;
  const alternateLabel =
    mode === "sign-in" ? "Create an account" : "Back to sign in";

  return (
    <main className="min-h-screen bg-bg-base text-copy-primary md:grid md:grid-cols-2">
      <section className="relative hidden min-h-screen overflow-hidden border-r border-surface-border md:flex">
        <div className="absolute inset-0 bg-bg-surface" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,var(--accent-primary-dim),transparent_22%),linear-gradient(180deg,rgba(100,87,249,0.08),transparent_40%),linear-gradient(135deg,rgba(0,200,212,0.04),transparent_62%)]" />
        <div className="absolute inset-y-0 right-0 w-px bg-surface-border" />

        <div className="relative flex w-full flex-col justify-between px-14 py-12 lg:px-20">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-[var(--primary-foreground)] shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
              <Blocks className="h-5 w-5" />
            </div>
            <span className="text-2xl font-semibold tracking-tight text-copy-primary">
              Ghost AI
            </span>
          </div>

          <div className="max-w-2xl space-y-16">
            <div className="space-y-5">
              <h1 className="max-w-xl text-5xl font-semibold leading-[1.08] tracking-tight text-copy-primary">
                Design systems at the speed of thought.
              </h1>
              <p className="max-w-2xl text-xl leading-9 text-copy-muted">
                Describe your architecture in plain English. Ghost AI maps it to
                a shared canvas your whole team can refine in real time.
              </p>
            </div>

            <ul className="space-y-8">
              {AUTH_FEATURES.map((feature) => {
                const Icon = feature.icon;

                return (
                  <li key={feature.title} className="flex gap-5">
                    <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-surface-border bg-accent-dim text-brand shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-1.5">
                      <h2 className="text-3xl font-medium tracking-tight text-copy-primary">
                        {feature.title}
                      </h2>
                      <p className="max-w-2xl text-lg leading-8 text-copy-muted">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <p className="text-sm text-copy-faint">
            {mode === "sign-in"
              ? "© 2026 Ghost AI. All rights reserved."
              : "Ghost AI workspace access is managed through Clerk."}
          </p>
        </div>
      </section>

      <section className="flex min-h-screen items-center justify-center bg-bg-base px-6 py-10 sm:px-8 lg:px-12">
        <div className="w-full max-w-[32rem] space-y-6">
          <div className="space-y-2 text-center md:hidden">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-[var(--primary-foreground)]">
              <Blocks className="h-5 w-5" />
            </div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-brand">
              Ghost AI
            </p>
            <p className="text-sm text-copy-muted">
              {mode === "sign-in" ? "New to Ghost AI?" : "Already have access?"}{" "}
              <Link
                href={alternateHref}
                className="font-medium text-brand transition-opacity hover:opacity-80"
              >
                {alternateLabel}
              </Link>
            </p>
          </div>

          <div className="rounded-3xl border border-surface-border bg-bg-surface/96 p-2 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
            {children}
          </div>
        </div>
      </section>
    </main>
  );
}
