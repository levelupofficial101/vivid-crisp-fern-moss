import { Link } from "@tanstack/react-router";
import { Bookmark, GitCompare } from "lucide-react";
import { pathBySlug } from "@/data/paths";
import { fallbacksFor, waysFor } from "@/data/routes";
import { plainOf } from "@/data/simple";
import { fitsStream, streamsOf } from "@/data/streams";
import { bucketMeta, tagOf } from "@/data/tags";
import { costLabel, mathsLabel, stages, type Path } from "@/data/types";
import { useDesk } from "@/lib/desk";

export function PathView({ path }: { path: Path }) {
  const stage = useDesk((state) => state.stage);
  const delhi = useDesk((state) => state.delhi);
  const compare = useDesk((state) => state.compare);
  const saved = useDesk((state) => state.saved.includes(path.slug));
  const compared = compare.includes(path.slug);
  const toggleSaved = useDesk((state) => state.toggleSaved);
  const toggleCompare = useDesk((state) => state.toggleCompare);
  const stream = useDesk((state) => state.stream);
  const stageLabel = stages.find((item) => item.id === stage)?.label ?? "now";
  const pairs = path.pair.map((slug) => pathBySlug[slug]).filter(Boolean);
  const plain = plainOf(path.slug);
  const tag = tagOf(path.slug);
  const ways = waysFor(path.slug);
  const falls = fallbacksFor(path.slug).filter((item) => !stream || fitsStream(item.slug, stream));
  const menu = path.slug === "not-eng" || path.slug === "not-mbbs" || path.slug === "not-ca";
  const where = tag.buckets
    .map((id) => bucketMeta.find((item) => item.id === id)?.label)
    .filter(Boolean)
    .join(" · ");

  return (
    <article className="pt-6">
      <h1 className="font-display text-4xl leading-tight text-cream">{plain.title}</h1>
      <p className="mt-3 text-base leading-normal text-cream">{plain.line}</p>
      <p className="mt-2 text-sm leading-normal text-muted">{plain.also}</p>

      <p className="mt-2 text-sm font-semibold text-blue">{where}</p>
      <p className="mt-1 text-sm leading-normal text-muted">{whoCan(path.slug)}</p>

      <section className="panel mt-5 p-4">
        <h2 className="font-display text-2xl leading-tight text-cream">Keep it, or put it on the bench</h2>
        <p className="mt-2 text-sm leading-normal text-muted">
          Save keeps this page for later. Compare holds up to three courses. Then open Compare at the bottom and see them side by side. Adding a fourth drops the oldest.
        </p>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((slot) => {
            const slug = compare[slot];
            const on = slug === path.slug;
            return (
              <div
                key={slot}
                className={
                  "flex h-16 items-center justify-center rounded-2xl border px-2 text-center text-xs font-semibold " +
                  (on ? "border-hot bg-hot text-ink" : slug ? "border-line bg-raise text-cream" : "border-dashed border-line text-muted")
                }
              >
                {slug ? plainOf(slug).title : `Seat ${slot + 1}`}
              </div>
            );
          })}
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => toggleSaved(path.slug)}
            className={
              "tap inline-flex h-12 items-center justify-center gap-2 rounded-full px-3 text-sm font-semibold " +
              (saved ? "bg-blue text-ink" : "border border-line text-cream")
            }
          >
            <Bookmark className={saved ? "size-4 fill-ink text-ink" : "size-4"} aria-hidden="true" />
            {saved ? "Saved" : "Save"}
          </button>
          <button
            type="button"
            onClick={() => toggleCompare(path.slug)}
            className={
              "tap inline-flex h-12 items-center justify-center gap-2 rounded-full px-3 text-sm font-semibold " +
              (compared ? "bg-hot text-ink" : "border border-line text-cream")
            }
          >
            <GitCompare className="size-4" aria-hidden="true" />
            {compared ? "On the bench" : "Add to compare"}
          </button>
        </div>
        <p className="mt-3 text-sm leading-normal text-cream">
          {compared
            ? `This course is on the bench. ${compare.length} of 3.`
            : `This course is not on the bench yet. ${compare.length} of 3.`}
          {saved ? " It is also in Saved." : ""}
        </p>
        {compare.length > 0 ? (
          <Link to="/compare" className="tap mt-2 inline-flex h-11 items-center text-sm font-semibold text-blue">
            Open compare
          </Link>
        ) : null}
      </section>

      <p className="mt-5 text-sm leading-normal text-muted">
        {asSentence(mathsLabel[path.maths])} {asSentence(path.duration)} {asSentence(costLabel[path.cost])}
      </p>

      <div className="mt-4 grid gap-3">
        <section className="panel p-4">
          <h2 className="text-sm font-semibold text-blue">Who it is good for</h2>
          <p className="mt-2 text-base leading-normal text-cream">{tag.goodFor}</p>
        </section>
        <section className="panel p-4">
          <h2 className="text-sm font-semibold text-hot">Who should avoid it</h2>
          <p className="mt-2 text-base leading-normal text-cream">{tag.avoid}</p>
        </section>
      </div>

      <section className="mt-6 flex flex-col gap-3">
        <Fact label="Marks" text={plain.marks} />
        <Fact label="Exam" text={plain.exam} />
        <Fact label="The job" text={plain.job} />
      </section>

      {ways.length > 0 ? (
        <section className="mt-6">
          <h2 className="font-display text-2xl text-cream">Ways to get here</h2>
          <p className="mt-1 text-sm leading-normal text-muted">More than one route. Open the step that matches you.</p>
          <ol className="mt-3 flex flex-col gap-3">
            {ways.map((way, index) => (
              <li key={way.title} className="panel p-4">
                <h3 className="font-display text-xl text-cream">
                  {index + 1}. {way.title}
                </h3>
                <ol className="mt-2 flex flex-col gap-1">
                  {way.steps.map((step) => (
                    <li key={step.label} className="text-sm leading-normal text-cream">
                      {step.slug && pathBySlug[step.slug] ? (
                        <Link to="/path/$slug" params={{ slug: step.slug }} className="font-semibold text-blue">
                          {step.label}
                        </Link>
                      ) : (
                        step.label
                      )}
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {falls.length > 0 ? (
        <section className="mt-6">
          <h2 className="font-display text-2xl text-cream">{menu ? "Open the one that fits" : "If this does not happen"}</h2>
          <p className="mt-1 text-sm leading-normal text-muted">
            {menu
              ? "Each of these is a real page. The exam, the marks and the colleges are on it. A drop year is not the only answer."
              : "A missed exam is not the end of the list. These are the next doors, not copies of the same seat."}
          </p>
          <ul className="mt-3 flex flex-col gap-3">
            {falls.map((item) => (
              <li key={item.slug} className="panel p-4">
                <Link to="/path/$slug" params={{ slug: item.slug }} className="font-display text-xl text-cream">
                  {plainOf(item.slug).title}
                </Link>
                <p className="mt-1 text-sm leading-normal text-muted">{item.line}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="panel mt-3 p-4">
        <h2 className="font-display text-2xl">What to do in {stageLabel}</h2>
        <ul className="mt-3 flex flex-col gap-3">
          {path.now[stage].map((item) => (
            <li key={item} className="text-sm leading-normal text-cream">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {delhi ? (
        <p className="panel mt-3 p-4 text-sm leading-normal text-cream">{path.delhi}</p>
      ) : (
        <p className="mt-3 px-1 text-sm leading-normal text-muted">
          Studying in Delhi? Turn on “I study in Delhi” on the first page.
        </p>
      )}

      <div className="mt-3 flex flex-col gap-3">
        <Fold title="The exact rules">
          <dl className="flex flex-col gap-4">
            {path.gates.map((gate) => (
              <div key={gate.label}>
                <dt className="text-sm text-brass">{gate.label}</dt>
                <dd className="mt-1 text-sm leading-normal text-cream">{gate.rule}</dd>
              </div>
            ))}
          </dl>
          <h3 className="mt-5 text-sm text-brass">Class 11</h3>
          <p className="mt-1 text-sm leading-normal text-cream">{path.class11}</p>
          <h3 className="mt-4 text-sm text-brass">Class 12</h3>
          <p className="mt-1 text-sm leading-normal text-cream">{path.class12}</p>
        </Fold>

        <Fold title="Which exam, in detail" open>
          <div className="flex flex-col gap-5">
            {path.exams.map((exam) => (
              <div key={exam.name}>
                <h3 className="font-display text-xl">{exam.name}</h3>
                <p className="mt-1 text-sm text-muted">{exam.when}</p>
                <p className="mt-2 text-sm leading-normal text-cream">{exam.papers}</p>
              </div>
            ))}
          </div>
        </Fold>

        <Fold title="How you get in">
          <ol className="flex flex-col gap-4">
            {path.how.map((step, index) => (
              <li key={step} className="flex gap-3">
                <span className="font-display text-xl text-brass">{index + 1}</span>
                <p className="text-sm leading-normal text-cream">{step}</p>
              </li>
            ))}
          </ol>
        </Fold>

        <Fold title="Colleges and places" open>
          <p className="text-sm leading-normal text-muted">{path.placesLabel}</p>
          <ol className="mt-4 flex flex-col">
            {path.places.map((place, index) => (
              <li key={place.name} className="border-t border-line py-4 first:border-t-0 first:pt-0">
                <h3 className="font-display text-xl leading-tight">
                  <span className="mr-2 text-brass">{index + 1}.</span>
                  {place.name}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {place.where}. {place.via}.
                </p>
                <p className="mt-2 text-sm leading-normal text-cream">{place.note}</p>
              </li>
            ))}
          </ol>
        </Fold>

        <Fold title="The job, year by year">
          <p className="text-sm leading-normal text-muted">
            Pay figures are a rough India range for 2026, not a promise. {path.firstPay}
          </p>
          <div className="mt-4 flex flex-col gap-5">
            {path.after.map((beat) => (
              <div key={beat.when}>
                <h3 className="text-sm text-brass">{beat.when}</h3>
                <p className="mt-1 text-sm leading-normal text-cream">{beat.what}</p>
                <p className="mt-1 text-sm leading-normal text-muted">{beat.money}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-normal text-muted">Work you can do: {path.careers.join(", ")}.</p>
        </Fold>

        <Fold title="What it costs">
          <p className="text-sm leading-normal text-cream">{path.costNote}</p>
        </Fold>

        {pairs.length > 0 ? (
          <Fold title="Often done with">
            <ul className="flex flex-col">
              {pairs.map((item) => (
                <li key={item.slug} className="border-b border-line last:border-b-0">
                  <Link to="/path/$slug" params={{ slug: item.slug }} className="block py-3">
                    <span className="font-display text-lg text-cream">{plainOf(item.slug).title}</span>
                    <span className="mt-1 block text-sm text-muted">{plainOf(item.slug).line}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Fold>
        ) : null}

        <Fold title="Before you decide">
          <ul className="flex flex-col gap-3">
            {path.watch.map((item) => (
              <li key={item} className="text-sm leading-normal text-cream">
                {item}
              </li>
            ))}
          </ul>
        </Fold>
      </div>

      <p className="mt-4 px-1 text-sm leading-normal text-muted">
        Checked in September 2026. Rules change. Read the official page before you pay a fee.
      </p>
    </article>
  );
}

function whoCan(slug: string): string {
  const open = streamsOf(slug);
  const names = [
    open.includes("commerce") ? "Commerce with Maths" : null,
    open.includes("pcm") ? "Science PCM" : null,
    open.includes("pcb") ? "Science PCB" : null,
  ].filter(Boolean);
  const both = open.includes("pcm") && open.includes("pcb");
  return `Open to ${names.join(", ")}.${both ? " PCMB sees it too." : ""}`;
}

function asSentence(text: string): string {
  const trimmed = text.trim();
  if (!trimmed) return "";
  return /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}.`;
}

function Fact({ label, text }: { label: string; text: string }) {
  return (
    <section className="panel p-4">
      <h2 className="text-sm font-medium text-brass">{label}</h2>
      <p className="mt-2 text-base leading-normal text-cream">{text}</p>
    </section>
  );
}

function Fold({ title, children, open }: { title: string; children: React.ReactNode; open?: boolean }) {
  return (
    <details className="panel px-4" open={open}>
      <summary className="flex min-h-14 items-center justify-between gap-3 py-3 font-display text-xl text-cream">
        {title}
      </summary>
      <div className="pb-4">{children}</div>
    </details>
  );
}
