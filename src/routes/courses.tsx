import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { PathCard } from "@/components/path-card";
import { paths, searchPaths } from "@/data/paths";
import { bucketMeta, tagOf, type Bucket } from "@/data/tags";

const sectionOrder: Bucket[] = ["exam12", "degree12", "withgrad", "aftergrad"];

export const Route = createFileRoute("/courses")({
  component: CoursesPage,
  head: () => ({ meta: [{ title: "All courses — LEVEL UP Careers" }] }),
});

function CoursesPage() {
  const [query, setQuery] = useState("");
  const [bucket, setBucket] = useState<Bucket | "all">("all");
  const needle = query.trim();

  const matched = useMemo(() => {
    const rows = needle ? searchPaths(needle, "all") : paths;
    return rows.filter((path) => bucket === "all" || tagOf(path.slug).buckets.includes(bucket));
  }, [needle, bucket]);

  const bucketLede = bucketMeta.find((item) => item.id === bucket)?.lede;

  return (
    <div className="pt-6">
      <h1 className="font-display text-4xl leading-tight">All courses</h1>
      <p className="mt-2 text-sm leading-normal text-muted">
        Every course, not only this stream. {paths.length} in the list. Search a name, or pick a time.
      </p>

      <label className="relative mt-4 block">
        <span className="sr-only">Search all courses</span>
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted" aria-hidden="true" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search CA, CUET, pilot, design, IIM"
          className="h-12 w-full rounded-2xl border border-line bg-raise pr-3 pl-10 text-sm text-cream placeholder:text-muted"
        />
      </label>

      <div className="scroll-none mt-3 flex gap-2 overflow-x-auto pb-1">
        {bucketMeta.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setBucket(item.id)}
            className={
              "tap h-10 shrink-0 rounded-full px-3 text-sm font-semibold " +
              (bucket === item.id ? "bg-hot text-ink" : "border border-line bg-surface text-cream")
            }
          >
            {item.label}
          </button>
        ))}
      </div>
      {bucketLede && bucket !== "all" ? <p className="mt-2 text-sm leading-normal text-muted">{bucketLede}</p> : null}

      <p className="mt-3 text-sm font-semibold text-blue">{matched.length} courses</p>

      {matched.length === 0 ? (
        <p className="panel mt-3 px-4 py-4 text-sm text-cream">Nothing with that name. Try CA, CUET, design, or pilot.</p>
      ) : needle || bucket !== "all" ? (
        <div>
          {matched.map((path) => (
            <PathCard key={path.slug} path={path} />
          ))}
        </div>
      ) : (
        sectionOrder.map((id) => {
          const meta = bucketMeta.find((item) => item.id === id);
          const rows = matched.filter((path) => tagOf(path.slug).buckets[0] === id);
          if (!meta || rows.length === 0) return null;
          return (
            <section key={id} className="mt-8">
              <div className="flex items-end justify-between gap-3">
                <h2 className="font-display text-2xl text-cream">{meta.label}</h2>
                <p className="shrink-0 text-sm font-semibold text-blue">{rows.length}</p>
              </div>
              <p className="mt-1 text-sm leading-normal text-muted">{meta.lede}</p>
              {rows.map((path) => (
                <PathCard key={path.slug} path={path} />
              ))}
            </section>
          );
        })
      )}
    </div>
  );
}
