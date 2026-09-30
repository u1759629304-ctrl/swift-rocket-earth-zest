import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main className="sr-only">
      <h1>Map Studio Pro</h1>
    </main>
  );
}
