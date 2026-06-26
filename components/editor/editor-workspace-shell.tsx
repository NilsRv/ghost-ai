"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import { EditorNavbar } from "@/components/editor/editor-navbar";
import { ProjectDialogs } from "@/components/editor/project-dialogs";
import { ProjectSidebar } from "@/components/editor/project-sidebar";
import { useProjectDialogState } from "@/components/editor/use-project-dialog-state";
import { Button } from "@/components/ui/button";

export function EditorWorkspaceShell() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const projectDialogs = useProjectDialogState();

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
          myProjects={projectDialogs.ownedProjects}
          sharedProjects={projectDialogs.sharedProjects}
          onCreateProject={projectDialogs.openCreateDialog}
          onRenameProject={projectDialogs.openRenameDialog}
          onDeleteProject={projectDialogs.openDeleteDialog}
        />

        <main className="relative flex flex-1 items-stretch overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(100,87,249,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(0,200,212,0.12),transparent_24%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(58,58,66,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(58,58,66,0.18)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="relative flex flex-1 items-center justify-center p-6">
            <div className="max-w-2xl text-center">
              <h1 className="text-3xl font-medium tracking-tight text-copy-primary sm:text-4xl">
                Create a project or open an existing one
              </h1>
              <p className="mt-4 text-base text-copy-secondary sm:text-lg">
                Start a new architecture workspace, or choose a project from
                the sidebar.
              </p>
              <div className="mt-8 flex justify-center">
                <Button type="button" size="lg" onClick={projectDialogs.openCreateDialog}>
                  <Plus className="h-5 w-5" />
                  New Project
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>

      <ProjectDialogs
        isCreateOpen={projectDialogs.isCreateDialogOpen}
        isRenameOpen={projectDialogs.isRenameDialogOpen}
        isDeleteOpen={projectDialogs.isDeleteDialogOpen}
        isLoading={projectDialogs.isLoading}
        projectName={projectDialogs.projectName}
        slugPreview={projectDialogs.slugPreview}
        currentProjectName={projectDialogs.selectedProject?.name}
        onNameChange={projectDialogs.onProjectNameChange}
        onClose={projectDialogs.closeDialog}
        onCreateSubmit={projectDialogs.submitCreateProject}
        onRenameSubmit={projectDialogs.submitRenameProject}
        onDeleteSubmit={projectDialogs.submitDeleteProject}
      />
    </div>
  );
}
