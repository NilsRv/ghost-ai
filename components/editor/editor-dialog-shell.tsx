"use client";

import * as React from "react";

import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface EditorDialogShellProps
  extends React.ComponentProps<typeof DialogContent> {
  title: string;
  description?: string;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

export function EditorDialogShell({
  title,
  description,
  footer,
  children,
  className,
  ...props
}: EditorDialogShellProps) {
  return (
    <DialogContent
      className={cn(
        "rounded-3xl border border-surface-border bg-bg-elevated p-0 text-copy-primary shadow-[0_32px_96px_rgba(0,0,0,0.55)]",
        className,
      )}
      {...props}
    >
      <div className="space-y-6 p-6">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-lg text-copy-primary">
            {title}
          </DialogTitle>
          {description ? (
            <DialogDescription className="text-copy-secondary">
              {description}
            </DialogDescription>
          ) : null}
        </DialogHeader>

        {children}
      </div>

      {footer ? (
        <DialogFooter className="rounded-b-3xl border-surface-border bg-bg-subtle/70 text-copy-secondary">
          {footer}
        </DialogFooter>
      ) : null}
    </DialogContent>
  );
}
