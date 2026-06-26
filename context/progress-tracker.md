# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- Completed feature unit 04

## Current Goal

- Project dialogs and the `/editor` home flow are implemented with mock data.

## Completed

- Installed and configured `shadcn/ui` for the Next.js app.
- Added `lucide-react` and the shared `cn()` helper in `lib/utils.ts`.
- Generated the required UI primitives: Button, Card, Dialog, Input, Tabs, Textarea, and ScrollArea.
- Reworked `app/globals.css` to use the project dark theme tokens and map them into shadcn/Tailwind utilities.
- Wired Geist Sans and Geist Mono through `next/font/google` in the root layout.
- Added a homepage showcase that imports and renders every required primitive for verification.
- Added a reusable editor navbar with left, center, and right sections plus sidebar toggle state support.
- Added a floating project sidebar shell with slide-in behavior, tabs, empty states, and a full-width `New Project` action.
- Added a reusable editor dialog shell component styled against the project dark theme tokens for future dialogs.
- Replaced the homepage showcase with an editor workspace shell that verifies the chrome components together.
- Installed `@clerk/ui` and configured `ClerkProvider` in the root layout with the bundled Clerk UI and the app token-based dark appearance overrides.
- Added protected auth routing with root `proxy.ts`, public Clerk auth paths, and home-route redirects based on signed-in state.
- Created minimal Clerk sign-in and sign-up pages that follow the feature spec layout and reuse the existing CSS variable theme.
- Moved the editor workspace shell to `/editor` and added Clerk’s built-in `UserButton` to the navbar.
- Refined the auth shell to a 50/50 desktop layout with a branded left-side panel that better matches the target reference.
- Replaced the editor placeholder center card with the `/editor` home screen prompt and wired its `New Project` CTA into the dialog flow.
- Added a dedicated project dialog state hook with mock owned/shared projects, live slug preview, and local create/rename/delete behavior.
- Wired sidebar create, rename, and delete actions into project dialogs while hiding project item actions for collaborator-owned entries.
- Added a mobile sidebar scrim so tapping outside the floating panel closes it on small screens.

## In Progress

- None.

## Next Up

- Start the next feature spec that builds on project selection and mock editor home interactions.

## Open Questions

- Add unresolved product or implementation questions here.

## Architecture Decisions

- Kept generated `components/ui/*` foundation files unchanged after `shadcn` generation and applied project-specific theming only at the app layer.

## Session Notes

- Auth implementation is based on `context/feature-specs/03-auth.md`.
- Project dialog implementation is based on `context/feature-specs/04-project-dialogs.md`.
- `npm run build` passes.
- `npm run lint` passes.
