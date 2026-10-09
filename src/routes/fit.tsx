import { createFileRoute, Link } from "@tanstack/react-router";
import { judge, labelOf, verdictOrder } from "@/data/fit";
import { paths } from "@/data/paths";
import { plainOf } from "@/data/simple";
import { fitsStream } from "@/data/streams";
import { categories } from "@/data/types";
import { marksOf, useDesk } from "@/lib/desk";

export const Route = createFileRoute("/fit")({
  component: FitPage,
  head: () => ({ meta: [{ title: "My marks — LEVEL UP Careers" }] }),
});

const fields = [
  ["tenth", "Class 10 %"],
  ["board", "Class 12 % or expected"],
  ["maths", "Maths %"],
  ["accounts", "Accounts %"],
  ["english", "English %"],
] as const;

function FitPage() {
  const desk = useDesk();
  const marks = marksOf(desk);
  const stream = desk.stream;
  const pool = stream ? paths.filter((path) => fitsStream(path.slug, stream)) : [];
  const judged = pool.map((path) => ({ path, judgement: judge(path, marks) }));
  const counts = verdictOrder.map((verdict) => ({
    verdict,
    count: judged.filter((item) => item.judgement.verdict === verdict).length,
  }));

  if (!stream) {
    return (
      <div className="pt-6">
        <h1 className="font-display text-4xl leading-tight">Pick a stream first</h1>
        <p className="mt-3 text-base leading-normal text-muted">
          Marks only make sense after the list knows whether you are commerce, PCM, PCB, or both.
        </p>
        <Link to="/" className="mt-4 inline-flex h-11 items-center font-semibold text-blue">
          Choose your stream
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-6">
      <h1 className="font-display text-4xl leading-tight">Check your marks</h1>
      <p className="mt-3 text-base leading-normal text-muted">
        Type what you have. Leave a box empty if you do not know it yet. Empty does not mean zero.
      </p>

      <div className="panel mt-5 grid grid-cols-2 gap-3 p-4">
        {fields.map(([key, label]) => (
          <label key={key} className="block">
            <span className="text-sm text-muted">{label}</span>
            <input
              suppressHydrationWarning
              inputMode="decimal"
              value={desk[key] ?? ""}
              onChange={(event) => desk.setMark(key, readPercent(event.target.value))}
              className="mt-1 h-11 w-full rounded-xl border border-line bg-bg px-3 text-cream"
            />
          </label>
        ))}
        <label className="col-span-2 block">
          <span className="text-sm text-muted">Category on the form</span>
          <select
            value={desk.category}
            onChange={(event) => desk.setCategory(event.target.value as typeof desk.category)}
            className="mt-1 h-11 w-full rounded-xl border border-line bg-bg px-3 text-cream"
          >
            {categories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {stream === "commerce" || stream === "pcmb" ? (
        <button
          type="button"
          aria-pressed={desk.hasMaths}
          onClick={() => desk.setHasMaths(!desk.hasMaths)}
          className={
            "mt-3 h-11 w-full rounded-full text-sm " +
            (desk.hasMaths ? "bg-hot text-ink" : "border border-line bg-surface text-cream")
          }
        >
          {desk.hasMaths ? "I have maths in Class 12" : "I do not have maths in Class 12"}
        </button>
      ) : null}
      {stream === "pcm" ? (
        <p className="mt-3 text-sm leading-normal text-cream">Maths is part of PCM, so the maths courses stay on this list.</p>
      ) : null}
      {stream === "pcb" ? (
        <p className="mt-3 text-sm leading-normal text-cream">
          PCB without maths. Courses that need Class 12 maths are off this list. CA, law and the health doors stay.
        </p>
      ) : null}
      {!desk.hasMaths && (stream === "commerce" || stream === "pcmb") ? (
        <p className="mt-3 text-sm leading-normal text-cream">
          If you do not have maths, Sukhdev, economics, ISI, and most data degrees close. Actuary and the five-year
          IIM course get much harder. B.Com and CA stay open.
        </p>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-2">
        {counts.map((item) => (
          <div key={item.verdict} className="panel flex h-11 items-center gap-2 rounded-full px-3">
            <span className="text-sm text-muted">{labelOf(item.verdict)}</span>
            <span className="font-display text-lg text-cream">{item.count}</span>
          </div>
        ))}
      </div>

      {verdictOrder.map((verdict) => {
        const rows = judged.filter((item) => item.judgement.verdict === verdict);
        if (rows.length === 0) return null;
        return (
          <section key={verdict} className="mt-8">
            <h2 className="font-display text-2xl">{labelOf(verdict)}</h2>
            <ul className="mt-2">
              {rows.map(({ path, judgement }) => (
                <li key={path.slug} className="panel mt-3 px-4 py-4">
                  <Link to="/path/$slug" params={{ slug: path.slug }} className="font-display text-xl text-cream">
                    {plainOf(path.slug).title}
                  </Link>
                  <p className="mt-2 text-sm leading-normal text-muted">{judgement.why}</p>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}

function readPercent(raw: string): number | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  const value = Number(trimmed);
  if (!Number.isFinite(value) || value < 0 || value > 100) return null;
  return value;
}
