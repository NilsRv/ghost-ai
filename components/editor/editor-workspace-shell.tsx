"use client";

import { useState } from "react";

import { EditorNavbar } from "@/components/editor/editor-navbar";
import { ProjectSidebar } from "@/components/editor/project-sidebar";

export function EditorWorkspaceShell() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen flex-col bg-bg-base text-copy-primary">
      <EditorNavbar
        isSidebarOpen={isSidebarOpen}
        onSidebarToggle={() => setIsSidebarOpen((open) => !open)}
      />

      <div className="relative flex flex-1 overflow-hidden">
        <ProjectSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <main className="relative flex flex-1 items-stretch overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(100,87,249,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(0,200,212,0.12),transparent_24%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(58,58,66,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(58,58,66,0.18)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="relative flex flex-1 items-center justify-center p-6">
            <div className="max-w-xl rounded-3xl border border-surface-border bg-bg-surface/78 p-8 text-center shadow-[0_24px_72px_rgba(0,0,0,0.35)] backdrop-blur">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-brand">
                Editor chrome
              </p>
              <h1 className="mt-4 text-3xl font-medium tracking-tight text-copy-primary">
                Workspace framing is ready for the canvas and AI side panels.
              </h1>
              <p className="mt-4 text-base text-copy-secondary">
                The navbar and floating project sidebar now establish the shared
                shell for upcoming editor features.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
