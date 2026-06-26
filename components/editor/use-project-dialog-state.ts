"use client";

import { startTransition, useMemo, useState } from "react";

export interface MockProject {
  id: string;
  name: string;
  slug: string;
  role: "owner" | "collaborator";
}

type DialogType = "create" | "rename" | "delete";

interface ActiveDialog {
  type: DialogType;
  projectId?: string;
}

const INITIAL_PROJECTS: MockProject[] = [
  {
    id: "project-payments-orbit",
    name: "Payments Orbit",
    slug: "payments-orbit",
    role: "owner",
  },
  {
    id: "project-eventmesh-lab",
    name: "Event Mesh Lab",
    slug: "event-mesh-lab",
    role: "owner",
  },
  {
    id: "project-shared-warehouse",
    name: "Warehouse Control",
    slug: "warehouse-control",
    role: "collaborator",
  },
];

function slugifyProjectName(value: string) {
  const normalized = value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return normalized || "project-slug";
}

export function useProjectDialogState() {
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [activeDialog, setActiveDialog] = useState<ActiveDialog | null>(null);
  const [projectName, setProjectName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const ownedProjects = useMemo(
    () => projects.filter((project) => project.role === "owner"),
    [projects],
  );
  const sharedProjects = useMemo(
    () => projects.filter((project) => project.role === "collaborator"),
    [projects],
  );

  const selectedProject =
    activeDialog?.projectId == null
      ? null
      : projects.find((project) => project.id === activeDialog.projectId) ?? null;

  const slugPreview = useMemo(
    () => slugifyProjectName(projectName),
    [projectName],
  );

  function closeDialog() {
    setActiveDialog(null);
    setProjectName("");
    setIsLoading(false);
  }

  function openCreateDialog() {
    setActiveDialog({ type: "create" });
    setProjectName("");
    setIsLoading(false);
  }

  function openRenameDialog(projectId: string) {
    const project = projects.find((entry) => entry.id === projectId);

    if (!project) {
      return;
    }

    setActiveDialog({ type: "rename", projectId });
    setProjectName(project.name);
    setIsLoading(false);
  }

  function openDeleteDialog(projectId: string) {
    const project = projects.find((entry) => entry.id === projectId);

    if (!project) {
      return;
    }

    setActiveDialog({ type: "delete", projectId });
    setProjectName(project.name);
    setIsLoading(false);
  }

  async function submitCreateProject() {
    const trimmedName = projectName.trim();

    if (!trimmedName) {
      return;
    }

    setIsLoading(true);

    startTransition(() => {
      setProjects((currentProjects) => [
        {
          id: `project-${slugifyProjectName(trimmedName)}`,
          name: trimmedName,
          slug: slugifyProjectName(trimmedName),
          role: "owner",
        },
        ...currentProjects,
      ]);
      closeDialog();
    });
  }

  async function submitRenameProject() {
    const trimmedName = projectName.trim();

    if (!trimmedName || !selectedProject) {
      return;
    }

    setIsLoading(true);

    startTransition(() => {
      setProjects((currentProjects) =>
        currentProjects.map((project) =>
          project.id === selectedProject.id
            ? {
                ...project,
                name: trimmedName,
                slug: slugifyProjectName(trimmedName),
              }
            : project,
        ),
      );
      closeDialog();
    });
  }

  async function submitDeleteProject() {
    if (!selectedProject) {
      return;
    }

    setIsLoading(true);

    startTransition(() => {
      setProjects((currentProjects) =>
        currentProjects.filter((project) => project.id !== selectedProject.id),
      );
      closeDialog();
    });
  }

  return {
    activeDialog,
    closeDialog,
    isCreateDialogOpen: activeDialog?.type === "create",
    isDeleteDialogOpen: activeDialog?.type === "delete",
    isLoading,
    isRenameDialogOpen: activeDialog?.type === "rename",
    onProjectNameChange: setProjectName,
    openCreateDialog,
    openDeleteDialog,
    openRenameDialog,
    ownedProjects,
    projectName,
    selectedProject,
    sharedProjects,
    slugPreview,
    submitCreateProject,
    submitDeleteProject,
    submitRenameProject,
  };
}
