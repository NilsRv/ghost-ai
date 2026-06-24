"use client";

import { Plus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

function EmptyProjectsState({ label }: { label: string }) {
  return (
    <div className="flex h-full min-h-0 flex-1 items-center justify-center rounded-2xl border border-dashed border-surface-border-subtle bg-bg-elevated/60 p-6 text-center">
      <div className="space-y-2">
        <p className="text-sm font-medium text-copy-primary">{label}</p>
        <p className="text-sm text-copy-muted">
          Projects will appear here once this workspace is connected to project
          data.
        </p>
      </div>
    </div>
  );
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <aside
      className={cn(
        "pointer-events-none absolute inset-y-0 left-0 z-20 flex w-full max-w-sm p-4 transition-transform duration-300 ease-out",
        isOpen ? "translate-x-0" : "-translate-x-[calc(100%+1rem)]",
      )}
      aria-hidden={!isOpen}
    >
      <div className="pointer-events-auto flex w-full flex-col rounded-3xl border border-surface-border bg-bg-surface/92 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur">
        <div className="flex items-center justify-between border-b border-surface-border px-5 py-4">
          <div>
            <h2 className="text-base font-medium text-copy-primary">
              Projects
            </h2>
            <p className="text-sm text-copy-muted">
              Browse owned and shared workspaces.
            </p>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            onClick={onClose}
            aria-label="Close projects sidebar"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <Tabs
          defaultValue="my-projects"
          className="flex min-h-0 flex-1 px-4 py-4"
        >
          <TabsList
            variant="line"
            className="w-full border-b border-surface-border px-1"
          >
            <TabsTrigger value="my-projects">My Projects</TabsTrigger>
            <TabsTrigger value="shared">Shared</TabsTrigger>
          </TabsList>

          <TabsContent value="my-projects" className="flex min-h-0 flex-1 pt-4">
            <EmptyProjectsState label="No personal projects yet" />
          </TabsContent>

          <TabsContent value="shared" className="flex min-h-0 flex-1 pt-4">
            <EmptyProjectsState label="No shared projects yet" />
          </TabsContent>
        </Tabs>

        <div className="border-t border-surface-border px-4 py-4">
          <Button type="button" className="w-full">
            <Plus className="h-4 w-4" />
            New Project
          </Button>
        </div>
      </div>
    </aside>
  );
}
