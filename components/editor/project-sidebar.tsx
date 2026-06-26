"use client";

import { Pencil, Plus, Trash2, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import type { MockProject } from "@/components/editor/use-project-dialog-state";

interface ProjectSidebarProps {
  isOpen: boolean;
  myProjects: MockProject[];
  onCreateProject: () => void;
  onClose?: () => void;
  onDeleteProject: (projectId: string) => void;
  onRenameProject: (projectId: string) => void;
  sharedProjects: MockProject[];
}

function EmptyProjectsState({
  description,
  label,
}: {
  description: string;
  label: string;
}) {
  return (
    <div className="flex h-full min-h-0 flex-1 items-center justify-center rounded-2xl border border-dashed border-surface-border-subtle bg-bg-elevated/60 p-6 text-center">
      <div className="space-y-2">
        <p className="text-sm font-medium text-copy-primary">{label}</p>
        <p className="text-sm text-copy-muted">
          {description}
        </p>
      </div>
    </div>
  );
}

function ProjectList({
  projects,
  onDeleteProject,
  onRenameProject,
  showActions,
}: {
  onDeleteProject: (projectId: string) => void;
  onRenameProject: (projectId: string) => void;
  projects: MockProject[];
  showActions: boolean;
}) {
  return (
    <div className="flex flex-col gap-3">
      {projects.map((project) => (
        <div
          key={project.id}
          className="rounded-2xl border border-surface-border bg-bg-elevated/70 px-4 py-3"
        >
          <div className="flex items-start gap-3">
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-copy-primary">
                {project.name}
              </p>
              <p className="mt-1 font-mono text-xs text-copy-muted">
                /{project.slug}
              </p>
            </div>

            {showActions ? (
              <div className="flex items-center gap-1">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  onClick={() => onRenameProject(project.id)}
                  aria-label={`Rename ${project.name}`}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  onClick={() => onDeleteProject(project.id)}
                  aria-label={`Delete ${project.name}`}
                >
                  <Trash2 className="h-4 w-4 text-state-error" />
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ProjectSidebar({
  isOpen,
  myProjects,
  onClose,
  onCreateProject,
  onDeleteProject,
  onRenameProject,
  sharedProjects,
}: ProjectSidebarProps) {
  return (
    <>
      <button
        type="button"
        className={cn(
          "absolute inset-0 z-10 bg-black/50 transition-opacity duration-300 md:hidden",
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        onClick={onClose}
        aria-label="Close projects sidebar"
      />

      <aside
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 z-20 flex w-full max-w-sm p-4 transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "-translate-x-[calc(100%+1rem)]",
        )}
        aria-hidden={!isOpen}
        inert={!isOpen}
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

            <TabsContent
              value="my-projects"
              className="flex min-h-0 flex-1 pt-4"
            >
              {myProjects.length > 0 ? (
                <ProjectList
                  projects={myProjects}
                  showActions
                  onRenameProject={onRenameProject}
                  onDeleteProject={onDeleteProject}
                />
              ) : (
                <EmptyProjectsState
                  label="No personal projects yet"
                  description="Create a project to start your first architecture workspace."
                />
              )}
            </TabsContent>

            <TabsContent value="shared" className="flex min-h-0 flex-1 pt-4">
              {sharedProjects.length > 0 ? (
                <ProjectList
                  projects={sharedProjects}
                  showActions={false}
                  onRenameProject={onRenameProject}
                  onDeleteProject={onDeleteProject}
                />
              ) : (
                <EmptyProjectsState
                  label="No shared projects yet"
                  description="Collaborator projects will appear here when someone invites you in."
                />
              )}
            </TabsContent>
          </Tabs>

          <div className="border-t border-surface-border px-4 py-4">
            <Button type="button" className="w-full" onClick={onCreateProject}>
              <Plus className="h-4 w-4" />
              New Project
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}
