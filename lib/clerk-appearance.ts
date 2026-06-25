import { dark } from "@clerk/ui/themes";

export const clerkAppearance = {
  theme: dark,
  variables: {
    colorPrimary: "var(--accent-primary)",
    colorBackground: "var(--bg-surface)",
    colorInputBackground: "var(--bg-elevated)",
    colorInputText: "var(--text-primary)",
    colorText: "var(--text-primary)",
    colorTextSecondary: "var(--text-secondary)",
    colorNeutral: "var(--border-subtle)",
    colorDanger: "var(--state-error)",
    colorSuccess: "var(--state-success)",
    borderRadius: "1.75rem",
    fontFamily: "var(--font-geist-sans)",
  },
} as const;
