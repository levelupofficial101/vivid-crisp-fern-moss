import { createFileRoute, Link } from "@tanstack/react-router";
import { PathView } from "@/components/path-view";
import { pathBySlug } from "@/data/paths";
import { plainOf } from "@/data/simple";

export const Route = createFileRoute("/path/$slug")({
  component: PathPage,
  head: ({ params }) => ({
    meta: [{ title: `${pathBySlug[params.slug] ? plainOf(params.slug).title : "Course"} — LEVEL UP Careers` }],
  }),
});

function PathPage() {
  const { slug } = Route.useParams();
  const path = pathBySlug[slug];
  if (!path) {
    return (
      <div className="pt-16">
        <h1 className="font-display text-3xl">This course is not in the list.</h1>
        <Link to="/" className="mt-4 inline-flex h-11 items-center text-brass">
          Back to courses
        </Link>
      </div>
    );
  }
  return <PathView path={path} />;
}
