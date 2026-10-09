import { createFileRoute, Link } from "@tanstack/react-router";
import { costLabel, mathsLabel } from "@/data/types";
import { pathBySlug, paths } from "@/data/paths";
import { plainOf } from "@/data/simple";
import { fitsStream } from "@/data/streams";
import { useDesk } from "@/lib/desk";

export const Route = createFileRoute("/compare")({
  component: ComparePage,
  head: () => ({ meta: [{ title: "Compare — LEVEL UP Careers" }] }),
});

const rows = [
  { label: "Maths", value: (slug: string) => mathsLabel[pathBySlug[slug].maths] },
  { label: "Time", value: (slug: string) => pathBySlug[slug].duration },
  { label: "Fees", value: (slug: string) => costLabel[pathBySlug[slug].cost] },
  { label: "Marks", value: (slug: string) => plainOf(slug).marks },
  { label: "Exam", value: (slug: string) => plainOf(slug).exam },
  { label: "The job", value: (slug: string) => plainOf(slug).job },
] as const;

function ComparePage() {
  const compare = useDesk((state) => state.compare);
  const stream = useDesk((state) => state.stream);
  const toggleCompare = useDesk((state) => state.toggleCompare);
  const chosen = compare.filter((slug) => pathBySlug[slug]);
  const options = stream ? paths.filter((path) => fitsStream(path.slug, stream)) : paths;

  return (
    <div className="pt-6">
      <h1 className="font-display text-4xl leading-tight">The compare bench</h1>
      <p className="mt-3 text-sm leading-normal text-muted">
        Three seats. Add a course from its page with “Add to compare”, or pick one here. A fourth drops the oldest. This is how two paths sit next to each other.
      </p>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[0, 1, 2].map((slot) => {
          const slug = chosen[slot];
          return (
            <div
              key={slot}
              className={
                "flex h-20 items-center justify-center rounded-2xl border px-2 text-center text-xs font-semibold " +
                (slug ? "border-hot bg-surface text-cream" : "border-dashed border-line text-muted")
              }
            >
              {slug ? plainOf(slug).title : `Seat ${slot + 1}`}
            </div>
          );
        })}
      </div>

      <label className="mt-5 block">
        <span className="text-sm text-muted">Add a course</span>
        <select
          suppressHydrationWarning
          value=""
          onChange={(event) => {
            if (event.target.value) toggleCompare(event.target.value);
          }}
          className="panel mt-1 h-12 w-full rounded-2xl px-3 text-sm text-cream"
        >
          <option value="">Select</option>
          {options.map((path) => (
            <option key={path.slug} value={path.slug}>
              {chosen.includes(path.slug) ? `${plainOf(path.slug).title} (added)` : plainOf(path.slug).title}
            </option>
          ))}
        </select>
      </label>

      {chosen.length === 0 ? (
        <p className="mt-8 text-sm leading-normal text-cream">No course added yet. Use the list above.</p>
      ) : (
        <div className="mt-6 flex flex-col gap-4">
          {chosen.map((slug) => {
            return (
              <article key={slug} className="panel p-4">
                <div className="flex items-start justify-between gap-3">
                  <Link to="/path/$slug" params={{ slug }} className="font-display text-2xl leading-tight text-cream">
                    {plainOf(slug).title}
                  </Link>
                  <button
                    type="button"
                    onClick={() => toggleCompare(slug)}
                    className="h-11 shrink-0 text-sm text-muted"
                  >
                    Remove
                  </button>
                </div>
                <dl className="mt-4 flex flex-col gap-3">
                  {rows.map((row) => (
                    <div key={row.label}>
                      <dt className="text-sm text-brass">{row.label}</dt>
                      <dd className="mt-1 text-sm leading-normal text-cream">{row.value(slug)}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
