import { createFileRoute, Link } from "@tanstack/react-router";
import { PathCard } from "@/components/path-card";
import { pathBySlug } from "@/data/paths";
import { useDesk } from "@/lib/desk";

export const Route = createFileRoute("/saved")({
  component: SavedPage,
  head: () => ({ meta: [{ title: "Saved — LEVEL UP Careers" }] }),
});

function SavedPage() {
  const saved = useDesk((state) => state.saved);
  const rows = saved.map((slug) => pathBySlug[slug]).filter(Boolean);

  return (
    <div className="pt-6">
      <h1 className="font-display text-4xl leading-tight">Saved courses</h1>
      {rows.length === 0 ? (
        <p className="mt-3 text-sm leading-normal text-muted">
          Nothing saved yet. Open a course and tap Save.{" "}
          <Link to="/" className="text-brass">
            See all courses
          </Link>
        </p>
      ) : (
        <div className="mt-4">
          {rows.map((path) => (
            <PathCard key={path.slug} path={path} />
          ))}
        </div>
      )}
    </div>
  );
}
