"use client";

import { FormEvent } from "react";

import { EditorDialogShell } from "@/components/editor/editor-dialog-shell";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface ProjectDialogsProps {
  currentProjectName?: string;
  isCreateOpen: boolean;
  isDeleteOpen: boolean;
  isLoading: boolean;
  isRenameOpen: boolean;
  onClose: () => void;
  onCreateSubmit: () => void | Promise<void>;
  onDeleteSubmit: () => void | Promise<void>;
  onNameChange: (value: string) => void;
  onRenameSubmit: () => void | Promise<void>;
  projectName: string;
  slugPreview: string;
}

export function ProjectDialogs({
  currentProjectName,
  isCreateOpen,
  isDeleteOpen,
  isLoading,
  isRenameOpen,
  onClose,
  onCreateSubmit,
  onDeleteSubmit,
  onNameChange,
  onRenameSubmit,
  projectName,
  slugPreview,
}: ProjectDialogsProps) {
  function handleSubmit(
    event: FormEvent<HTMLFormElement>,
    submit: () => void | Promise<void>,
  ) {
    event.preventDefault();
    void submit();
  }

  return (
    <>
      <Dialog open={isCreateOpen} onOpenChange={(open) => !open && onClose()}>
        <EditorDialogShell
          title="Create Project"
          description="Start a new architecture workspace with a project name and generated slug."
          footer={
            <>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button
                type="submit"
                form="create-project-form"
                disabled={isLoading || !projectName.trim()}
              >
                {isLoading ? "Creating..." : "Create Project"}
              </Button>
            </>
          }
        >
          <form
            id="create-project-form"
            className="space-y-4"
            onSubmit={(event) => handleSubmit(event, onCreateSubmit)}
          >
            <div className="space-y-2">
              <label
                htmlFor="create-project-name"
                className="text-sm font-medium text-copy-primary"
              >
                Project name
              </label>
              <Input
                id="create-project-name"
                value={projectName}
                onChange={(event) => onNameChange(event.target.value)}
                placeholder="Realtime Payments Platform"
                autoFocus
              />
            </div>

            <div className="rounded-2xl border border-surface-border bg-bg-subtle/70 px-4 py-3">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-copy-muted">
                Slug preview
              </p>
              <p className="mt-2 font-mono text-sm text-brand">{slugPreview}</p>
            </div>
          </form>
        </EditorDialogShell>
      </Dialog>

      <Dialog open={isRenameOpen} onOpenChange={(open) => !open && onClose()}>
        <EditorDialogShell
          title="Rename Project"
          description={
            currentProjectName
              ? `Update the project name for ${currentProjectName}.`
              : "Update the current project name."
          }
          footer={
            <>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button
                type="submit"
                form="rename-project-form"
                disabled={isLoading || !projectName.trim()}
              >
                {isLoading ? "Saving..." : "Save Changes"}
              </Button>
            </>
          }
        >
          <form
            id="rename-project-form"
            className="space-y-4"
            onSubmit={(event) => handleSubmit(event, onRenameSubmit)}
          >
            <div className="space-y-2">
              <label
                htmlFor="rename-project-name"
                className="text-sm font-medium text-copy-primary"
              >
                Project name
              </label>
              <Input
                id="rename-project-name"
                value={projectName}
                onChange={(event) => onNameChange(event.target.value)}
                autoFocus
              />
            </div>
          </form>
        </EditorDialogShell>
      </Dialog>

      <Dialog open={isDeleteOpen} onOpenChange={(open) => !open && onClose()}>
        <EditorDialogShell
          title="Delete Project"
          description={
            currentProjectName
              ? `Delete ${currentProjectName}. This mock action only removes it from the local sidebar list.`
              : "Delete this project from the local sidebar list."
          }
          footer={
            <>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button
                type="button"
                variant="destructive"
                onClick={() => void onDeleteSubmit()}
                disabled={isLoading}
              >
                {isLoading ? "Deleting..." : "Delete Project"}
              </Button>
            </>
          }
        >
          <div className="rounded-2xl border border-state-error/40 bg-destructive/10 px-4 py-3 text-sm text-copy-secondary">
            This action is destructive and cannot be undone.
          </div>
        </EditorDialogShell>
      </Dialog>
    </>
  );
}
