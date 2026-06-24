import { Sparkles, Wand2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-base px-6 py-10 text-copy-primary">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="rounded-3xl border border-surface-border bg-bg-surface/80 p-8 shadow-[0_0_0_1px_var(--border-default)] backdrop-blur">
          <div className="mb-4 inline-flex items-center gap-2 rounded-xl border border-surface-border bg-accent-dim px-3 py-1 text-sm text-brand">
            <Sparkles className="h-4 w-4" />
            Design system foundation
          </div>
          <h1 className="max-w-3xl text-4xl font-medium tracking-tight">
            Ghost AI now has its core dark-theme UI primitives wired and ready
            for feature work.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-copy-secondary">
            This page intentionally imports and renders every required primitive
            so the foundation can be verified end to end.
          </p>
        </header>

        <Tabs defaultValue="components" className="gap-6">
          <TabsList
            variant="line"
            className="border-b border-surface-border px-1"
          >
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="tokens">Tokens</TabsTrigger>
          </TabsList>

          <TabsContent value="components">
            <div className="grid gap-6 lg:grid-cols-[1.35fr_0.9fr]">
              <Card className="rounded-2xl border border-surface-border bg-bg-surface">
                <CardHeader>
                  <CardTitle>AI prompt composer</CardTitle>
                  <CardDescription>
                    Button, input, textarea, dialog, and tabs are all active on
                    this screen.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Describe the architecture you want to map" />
                  <Textarea
                    placeholder="Example: design a multi-tenant event-driven analytics platform with ingestion, processing, storage, and reporting layers."
                    className="min-h-36"
                  />
                  <div className="flex flex-wrap gap-3">
                    <Button>
                      <Wand2 className="h-4 w-4" />
                      Generate architecture
                    </Button>
                    <Button variant="outline">Import starter system</Button>
                    <Dialog>
                      <DialogTrigger render={<Button variant="secondary" />}>
                        Preview dialog
                      </DialogTrigger>
                      <DialogContent className="rounded-3xl border border-surface-border bg-bg-elevated text-copy-primary">
                        <DialogHeader>
                          <DialogTitle>AI generation settings</DialogTitle>
                          <DialogDescription>
                            The generated dialog component is rendering against
                            the project dark theme tokens.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-3">
                          <Input placeholder="System name" />
                          <Textarea
                            placeholder="Additional constraints and context"
                            className="min-h-28"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border border-surface-border bg-bg-surface">
                <CardHeader>
                  <CardTitle>Scrollable activity</CardTitle>
                  <CardDescription>
                    ScrollArea is mounted with the same surface and text tokens.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-72 rounded-2xl border border-surface-border-subtle bg-bg-elevated p-4">
                    <div className="space-y-3">
                      {[
                        "Project created",
                        "Starter template imported",
                        "Prompt submitted",
                        "AI task queued",
                        "Nodes generated",
                        "Collaborator joined room",
                        "Spec export requested",
                        "Markdown saved",
                      ].map((event, index) => (
                        <div
                          key={event}
                          className="rounded-xl border border-surface-border bg-bg-surface p-3"
                        >
                          <p className="text-sm text-copy-primary">{event}</p>
                          <p className="mt-1 text-xs text-copy-muted">
                            Event #{index + 1} in the workspace activity stream.
                          </p>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
                <CardFooter className="border-surface-border bg-bg-subtle/60 text-copy-secondary">
                  All requested primitives import without errors.
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="tokens">
            <Card className="rounded-2xl border border-surface-border bg-bg-surface">
              <CardHeader>
                <CardTitle>Theme tokens</CardTitle>
                <CardDescription>
                  Project CSS variables are mapped into Tailwind utilities and
                  shadcn component tokens.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-3">
                {[
                  ["Base", "bg-bg-base"],
                  ["Surface", "bg-bg-surface"],
                  ["Elevated", "bg-bg-elevated"],
                  ["Subtle", "bg-bg-subtle"],
                  ["Brand", "bg-brand"],
                  ["AI", "bg-ai"],
                ].map(([label, tone]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-surface-border p-4"
                  >
                    <div className={`h-16 rounded-xl ${tone}`} />
                    <p className="mt-3 text-sm text-copy-primary">{label}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
