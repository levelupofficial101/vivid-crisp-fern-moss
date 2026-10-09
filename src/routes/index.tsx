import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ChevronRight, Search } from "lucide-react";
import { useMemo } from "react";
import { PathCard } from "@/components/path-card";
import { DoorWheel } from "@/components/door-wheel";
import { StreamFit } from "@/components/stream-fit";
import { careerLanes, careers } from "@/data/catalog";
import {
  collegeChoices,
  courseChoices,
  examChoices,
  interestChoices,
  slugsForCollege,
  slugsForExam,
  slugsForInterest,
} from "@/data/lookups";
import { pathBySlug, paths, searchPaths } from "@/data/paths";
import { fromScience } from "@/data/routes";
import { plainOf } from "@/data/simple";
import { fitsStream, streamChoices, type StreamPick } from "@/data/streams";
import { bucketMeta, tagOf, type Bucket } from "@/data/tags";
import { stages } from "@/data/types";
import { useDesk } from "@/lib/desk";

const storyShort: Record<string, string> = {
  "11": "11",
  "12": "12",
  result: "Out",
  college: "Now",
};

const sectionOrder: Bucket[] = ["exam12", "degree12", "withgrad", "aftergrad"];

type SearchBy = "exam" | "college" | "course" | "interest" | "become";

type HomeSearch = {
  by?: SearchBy;
  pick?: string;
  q?: string;
  when?: Bucket | "all";
  list?: "1";
  fit?: "1";
};

const searchModes: { id: SearchBy; label: string; hint: string; placeholder: string }[] = [
  { id: "exam", label: "Exam", hint: "Tap an exam. Only the courses that exam opens will show under this box.", placeholder: "Search UCEED, CUET, CLAT, CAT" },
  { id: "college", label: "College", hint: "Tap a college. You will see what a student can study there.", placeholder: "Search Sukhdev, NMIMS, ISB, NID" },
  { id: "course", label: "Course", hint: "Type the course. Try CA, BBA, hotel, or design.", placeholder: "Search BMS, B.Com, hotel, law" },
  { id: "interest", label: "Likes", hint: "Tap what the child likes. Accounts, design, medicine.", placeholder: "Search accounts, law, design" },
  { id: "become", label: "Become", hint: "Tap the life they want. Doctor, pilot, designer. Each one opens the real path.", placeholder: "Search pilot, actuary, journalist, jewellery" },
];

const modeIds: SearchBy[] = ["exam", "college", "course", "interest", "become"];
const whenIds = ["all", "exam12", "degree12", "withgrad", "aftergrad"] as const;

function validateSearch(search: Record<string, unknown>): HomeSearch {
  const by = modeIds.find((item) => item === search.by);
  const pick = typeof search.pick === "string" && search.pick.length > 0 ? search.pick : undefined;
  const q = typeof search.q === "string" && search.q.length > 0 ? search.q : undefined;
  const when = whenIds.find((item) => item === search.when);
  const list = search.list === "1" ? "1" : undefined;
  const fit = search.fit === "1" ? "1" : undefined;
  return {
    by,
    pick,
    q,
    when: when && when !== "all" ? when : undefined,
    list,
    fit,
  };
}

export const Route = createFileRoute("/")({
  validateSearch,
  component: Home,
  head: () => ({
    meta: [{ title: "LEVEL UP Careers" }],
  }),
});

function parentQuestions(stream: StreamPick): { slug: string; title: string; line: string }[] {
  const eng = {
    slug: "not-eng",
    title: "If not engineering, then what?",
    line: "The other maths doors, and the ones that leave engineering.",
  };
  const institutes = {
    slug: "side-door",
    title: "Other ways into an IIT or an IIM",
    line: "Online degrees, design, IPM, a campus AI degree. Not only JEE Advanced and CAT.",
  };
  const mbbs = {
    slug: "not-mbbs",
    title: "If not MBBS, then what?",
    line: "The health jobs that are not doctor.",
  };
  const ca = {
    slug: "not-ca",
    title: "If not CA, then what?",
    line: "CS, CMA, law, a degree, an MBA later.",
  };
  if (stream === "pcm") return [institutes, eng];
  if (stream === "pcb") return [institutes, mbbs];
  if (stream === "pcmb") return [institutes, eng, mbbs];
  return [institutes, ca];
}

function aiLinks(stream: StreamPick): { slug: string; title: string; line: string }[] {
  const map = { slug: "ai-map", title: "The full AI map", line: "Every door, including the ones that are not yours." };
  const data = { slug: "analytics", title: "IIT Madras, data science", line: "Online. Any stream. Qualifier, not JEE." };
  const mgmt = { slug: "iitm-mgmt", title: "IIT Madras, management and data", line: "Online. Any stream. The business sibling." };
  const guwahati = { slug: "iitg-dsai", title: "IIT Guwahati, data science and AI", line: "Online. Any stream on the form. The qualifier is Class 12 maths." };
  const bsds = { slug: "isi-bsds", title: "ISI, statistical data science", line: "Delhi, Kolkata, Bengaluru. Maths and English. Not the old written test." };
  const patna = { slug: "iitp-cet", title: "IIT Patna, without JoSAA", line: "Science on the form. The class is maths and code. Not the B.Tech." };
  const jodhpur = { slug: "iitj-ai", title: "IIT Jodhpur, applied AI", line: "Maths and 60 percent. Off-campus. Not the hostel." };
  const lucknow = { slug: "iiml-bsai", title: "IIM Lucknow, AI degree", line: "Campus. PCM. Only if you qualified JEE Advanced." };
  const jee = { slug: "jee-main", title: "Computer science through JEE", line: "IITs, NITs, IIITs. PCM only." };
  const hyderabad = { slug: "ugee", title: "IIIT Hyderabad", line: "Dual degrees in computing. Their own exam. PCM." };
  const bca = { slug: "bca", title: "BCA, without JEE", line: "A coding degree if you have maths and not PCM." };
  const bio = { slug: "bioinfo", title: "Biology, then computation", line: "No Class 12 course called medical AI." };
  const dbe = { slug: "iimb-dbe", title: "IIM Bangalore, online BBA", line: "Digital business. Not a model-building degree." };
  if (stream === "pcm") return [guwahati, bsds, lucknow, jodhpur, patna, hyderabad, data, jee, map];
  if (stream === "pcb") return [data, mgmt, guwahati, bio, patna, map];
  if (stream === "pcmb") return [guwahati, bsds, lucknow, data, bio, jodhpur, patna, jee, map];
  return [guwahati, bsds, mgmt, data, bca, jodhpur, dbe, map];
}

function ledeFor(stream: StreamPick): string {
  if (stream === "pcm") {
    return "Engineering is here, and so are the other ways in. Medicine that needs biology is not.";
  }
  if (stream === "pcb") {
    return "NEET and the health doors are here. JEE is not. CA, law, design and hotels still are.";
  }
  if (stream === "pcmb") {
    return "Maths and biology, so both lists. Engineering, medicine, and the other ways into an IIT or an IIM.";
  }
  return "Commerce with maths. Start with the question, then search the rest.";
}

function class11For(stream: StreamPick): string {
  if (stream === "pcm") {
    return "Class 11 percentage is almost never the form. Do not drop physics or maths. The JEE syllabus starts this year, whether or not you join a batch.";
  }
  if (stream === "pcb") {
    return "Class 11 percentage is almost never the form. Biology is half of NEET. Do not leave it for a physics-only plan.";
  }
  if (stream === "pcmb") {
    return "Class 11 percentage is almost never the form. You are keeping both maths and biology. Dropping either one closes a whole list.";
  }
  return "Class 11 percentage is almost never used on a form. Keep maths and accounts clear. Do not drop maths if you want Sukhdev, economics, or actuarial science.";
}

function delhiFor(stream: StreamPick): string {
  if (stream === "pcm" || stream === "pcmb") {
    return "In Delhi, engineering seats at DTU, NSUT and IIIT-Delhi come from JAC, using the JEE Main rank. Fill JAC and JoSAA. They are different websites.";
  }
  if (stream === "pcb") {
    return "A Delhi student fills both MCC and Delhi’s own NEET counselling. One form does not include the other.";
  }
  return "In Delhi, a good college seat mostly comes from CUET. HR, NM College and Mithibai are mostly for Maharashtra board students. NMIMS is a different college, with its own exam.";
}

function Home() {
  const stage = useDesk((state) => state.stage);
  const setStage = useDesk((state) => state.setStage);
  const delhi = useDesk((state) => state.delhi);
  const setDelhi = useDesk((state) => state.setDelhi);
  const stream = useDesk((state) => state.stream);
  const setStream = useDesk((state) => state.setStream);
  const search = Route.useSearch();
  const navigate = useNavigate();
  const mode: SearchBy = search.by ?? "exam";
  const query = search.q ?? "";
  const picked = mode === "course" || mode === "become" ? null : (search.pick ?? null);
  const bucket: Bucket | "all" = search.when ?? "all";
  const showFull = search.list === "1";
  const showFit = search.fit === "1";

  function go(patch: HomeSearch, replace = false) {
    void navigate({
      to: "/",
      replace,
      resetScroll: false,
      search: (prev) => {
        const next = { ...prev, ...patch };
        const clean: HomeSearch = {};
        if (next.by) clean.by = next.by;
        if (next.pick) clean.pick = next.pick;
        if (next.q) clean.q = next.q;
        if (next.when && next.when !== "all") clean.when = next.when;
        if (next.list === "1") clean.list = "1";
        if (next.fit === "1") clean.fit = "1";
        return clean;
      },
    });
  }

  const allow = useMemo(() => {
    if (!stream) return null;
    return new Set(paths.filter((path) => fitsStream(path.slug, stream)).map((path) => path.slug));
  }, [stream]);

  const modeMeta = searchModes.find((item) => item.id === mode) ?? searchModes[0];
  const placeholder =
    stream === "pcm" && mode === "exam"
      ? "Search JEE, BITSAT, NDA, CUET"
      : stream === "pcb" && mode === "exam"
        ? "Search NEET, CUET, CLAT, NDA"
        : stream === "pcmb" && mode === "exam"
          ? "Search JEE, NEET, CUET, CLAT"
          : modeMeta.placeholder;

  const choices = useMemo(() => {
    const scope = allow ?? undefined;
    if (mode === "become") return [];
    if (mode === "exam") return examChoices(query, scope, stream ?? undefined);
    if (mode === "college") return collegeChoices(query, scope, stream ?? undefined);
    if (mode === "interest") return interestChoices(query, scope);
    return courseChoices(query, scope);
  }, [mode, query, allow]);

  const pickedChoice =
    mode === "course" || mode === "become"
      ? null
      : (mode === "exam"
          ? examChoices("", allow ?? undefined, stream ?? undefined)
          : mode === "college"
            ? collegeChoices("", allow ?? undefined, stream ?? undefined)
            : interestChoices("", allow ?? undefined)
        ).find((item) => item.id === picked) ?? null;

  const matched = useMemo(() => {
    let rows = mode === "course" && query.trim() ? searchPaths(query, "all") : paths;
    if (allow) rows = rows.filter((path) => allow.has(path.slug));
    if (picked && mode === "exam") {
      const keep = new Set(slugsForExam(picked, allow ?? undefined));
      rows = rows.filter((path) => keep.has(path.slug));
    }
    if (picked && mode === "college") {
      const keep = new Set(slugsForCollege(picked, allow ?? undefined));
      rows = rows.filter((path) => keep.has(path.slug));
    }
    if (picked && mode === "interest") {
      const keep = new Set(slugsForInterest(picked, allow ?? undefined));
      rows = rows.filter((path) => keep.has(path.slug));
    }
    return rows.filter((path) => bucket === "all" || tagOf(path.slug).buckets.includes(bucket));
  }, [query, mode, picked, bucket, allow]);

  const mineCount = allow?.size ?? paths.length;
  const becoming = mode === "become";
  const narrowed = bucket !== "all" || picked !== null || (mode === "course" && query.trim().length > 0);
  const showChoices = becoming ? false : mode !== "course" ? picked === null || query.trim().length > 0 : query.trim().length > 0;
  const doors = stream && stream !== "commerce" ? fromScience.filter((item) => fitsStream(item.slug, stream)) : [];
  const needle = query.trim().toLowerCase();
  const wanted = careers.filter(
    (item) =>
      pathBySlug[item.slug] &&
      stream &&
      fitsStream(item.slug, stream) &&
      (!needle || `${item.label} ${item.line} ${item.words}`.toLowerCase().includes(needle)),
  );
  const bucketLede = bucketMeta.find((item) => item.id === bucket)?.lede;

  if (!stream) {
    return (
      <div className="rise pt-5" id="fit">
        <h1 className="font-display text-3xl leading-tight text-cream">Which subjects?</h1>
        <p className="mt-2 text-base leading-normal text-muted">
          Class 10 parents start here. The courses change after you pick. You can change the stream later, from the menu.
        </p>
        <div className="mt-4">
          {showFit ? (
            <StreamFit
              onUse={(id) => {
                setStream(id);
                go({ fit: undefined });
              }}
            />
          ) : (
            <button type="button" onClick={() => go({ fit: "1" })} className="tap h-12 w-full rounded-full bg-hot px-4 text-sm font-semibold text-ink">
              Not sure? Check which stream fits
            </button>
          )}
        </div>
        <div className="mt-5 flex flex-col gap-3">
          {streamChoices.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setStream(item.id)}
              className="tap lift panel rise-in p-4 text-left"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <span className="block font-display text-2xl text-cream">{item.label}</span>
              <span className="mt-1 block text-sm leading-normal text-muted">{item.line}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const aiTitle =
    stream === "commerce" ? "AI world of commerce" : stream === "pcm" ? "AI world of PCM" : stream === "pcb" ? "AI world of PCB" : "AI world of PCMB";

  return (
    <div className="rise pt-4">
      <p className="text-sm font-semibold text-hot">{streamChoices.find((item) => item.id === stream)?.label}</p>
      <p className="mt-1 text-sm leading-normal text-muted">{ledeFor(stream)}</p>

      {showFit ? (
        <div className="mt-4" id="fit">
          <StreamFit
            onUse={(id) => {
              setStream(id);
              go({ fit: undefined });
            }}
          />
        </div>
      ) : null}

      <section id="doors" className="vault mt-4 p-4">
        <p className="text-xs font-semibold tracking-wide text-hot">Hidden doors</p>
        <h1 className="mt-1 font-display text-2xl leading-tight text-cream">If the obvious plan is not the plan</h1>
        <p className="mt-1 text-sm leading-normal text-muted">One place. These are not the full list. The full list is in Find, below.</p>
        <div className="mt-3 flex flex-col gap-2">
          {parentQuestions(stream).map((item) => (
            <Link
              key={item.slug}
              to="/path/$slug"
              params={{ slug: item.slug }}
              className="tap lift flex min-h-12 items-center gap-3 rounded-2xl bg-surface px-3 py-3"
            >
              <span className="min-w-0 flex-1">
                <span className="block font-semibold text-cream">{item.title}</span>
                <span className="mt-0.5 block text-sm leading-normal text-muted">{item.line}</span>
              </span>
              <ChevronRight className="size-5 shrink-0 text-hot" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      <section id="ai" className="ai-world mt-4 p-4">
        <div className="relative z-10">
          <p className="text-xs font-semibold tracking-wide text-blue">AI world</p>
          <h2 className="mt-1 font-display text-2xl leading-tight text-cream">{aiTitle}</h2>
          <p className="mt-1 text-sm leading-normal text-muted">Only the degrees this stream can actually enter. Swipe. A weekend certificate is not in here.</p>
          <div className="scroll-none -mx-1 mt-3 flex snap-x gap-2 overflow-x-auto px-1 pb-1">
            {aiLinks(stream).map((item) => (
              <Link
                key={item.slug}
                to="/path/$slug"
                params={{ slug: item.slug }}
                className="tap lift flex w-56 shrink-0 snap-start flex-col justify-between rounded-2xl border border-line bg-surface p-3"
              >
                <span className="block text-sm font-semibold text-cream">{item.title}</span>
                <span className="mt-2 block text-sm leading-normal text-muted">{item.line}</span>
              </Link>
            ))}
          </div>
        </div>
        <DoorWheel stream={stream} />
      </section>

      <section id="find" className="panel mt-4 p-4">
        <h2 className="font-display text-2xl leading-tight text-cream">Find one course</h2>
        <p className="mt-1 text-sm leading-normal text-muted">
          Pick how you want to look. Switching Exam and College stays on this box. It does not jump to the top.
        </p>
        <div className="scroll-none -mx-1 mt-3 flex gap-2 overflow-x-auto px-1 pb-1">
          {searchModes.map((item) => {
            const on = mode === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  if (mode === item.id && !picked && !query) return;
                  go({ by: item.id, pick: undefined, q: undefined, list: undefined });
                }}
                className={
                  "tap h-11 shrink-0 rounded-full px-4 text-sm font-semibold " +
                  (on ? "bg-hot text-ink" : "border border-line bg-bg text-cream")
                }
              >
                {item.label}
              </button>
            );
          })}
        </div>
        <p className="mt-3 text-sm leading-normal text-cream">{modeMeta.hint}</p>

        <label className="relative mt-3 block">
          <span className="sr-only">Search {modeMeta.label}</span>
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted" aria-hidden="true" />
          <input
            suppressHydrationWarning
            value={query}
            onChange={(event) => go({ q: event.target.value || undefined }, true)}
            placeholder={placeholder}
            className="h-12 w-full rounded-2xl border border-line bg-raise pr-3 pl-10 text-sm text-cream placeholder:text-muted"
          />
        </label>

        {pickedChoice ? (
          <div className="mt-3 flex items-center justify-between gap-3 rounded-2xl bg-hot px-4 py-3 text-ink">
            <span>
              <span className="block text-base font-semibold">{pickedChoice.label}</span>
              <span className="mt-0.5 block text-sm">{pickedChoice.count} courses from this</span>
            </span>
            <button type="button" onClick={() => go({ pick: undefined, q: undefined })} className="tap min-h-11 shrink-0 px-2 text-sm font-semibold">
              Clear
            </button>
          </div>
        ) : null}

        {showChoices ? (
          <div className="mt-3 max-h-72 overflow-y-auto rounded-2xl border border-line">
            {choices.length === 0 ? (
              <p className="px-4 py-4 text-sm text-cream">Nothing with that name. Try UCEED, CUET, Sukhdev, or law.</p>
            ) : (
              choices.map((item) =>
                mode === "course" ? (
                  <Link
                    key={item.id}
                    to="/path/$slug"
                    params={{ slug: item.id }}
                    className="tap flex items-center gap-3 border-b border-line px-4 py-3 last:border-b-0"
                  >
                    <span className="min-w-0">
                      <span className="block truncate font-semibold text-cream">{item.label}</span>
                      <span className="block truncate text-sm text-muted">{item.line}</span>
                    </span>
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => go({ pick: item.id, q: undefined })}
                    className="tap flex w-full items-center gap-3 border-b border-line px-4 py-3 text-left last:border-b-0"
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-semibold text-cream">{item.label}</span>
                      <span className="block truncate text-sm text-muted">{item.line}</span>
                    </span>
                    <span className="shrink-0 text-sm font-semibold text-blue">{item.count}</span>
                  </button>
                ),
              )
            )}
          </div>
        ) : null}

      {becoming ? (
        <div className="mt-5">
          <p className="text-sm font-semibold text-blue">
            {needle
              ? `${wanted.length} matches.`
              : `${wanted.length} lives. Search, or scroll a group. Each one opens the courses, the colleges, and what to do if it misses.`}
          </p>
          {wanted.length === 0 ? (
            <p className="panel mt-3 px-4 py-4 text-sm text-cream">Nothing with that name. Try actor, actuary, FDDI, pilot, or politician.</p>
          ) : needle ? (
            <ul className="mt-3">
              {wanted.map((item) => (
                <li key={item.id} className="border-b border-line">
                  <Link to="/path/$slug" params={{ slug: item.slug }} className="tap block py-3">
                    <span className="block font-semibold text-cream">{item.label}</span>
                    <span className="mt-1 block text-sm leading-normal text-muted">{item.line}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            careerLanes.map((lane) => {
              const rows = wanted.filter((item) => item.lane === lane);
              if (rows.length === 0) return null;
              return (
                <section key={lane} className="mt-6">
                  <h2 className="font-display text-2xl text-cream">{lane}</h2>
                  <ul className="mt-2">
                    {rows.map((item) => (
                      <li key={item.id} className="border-b border-line">
                        <Link to="/path/$slug" params={{ slug: item.slug }} className="tap block py-3">
                          <span className="block font-semibold text-cream">{item.label}</span>
                          <span className="mt-1 block text-sm leading-normal text-muted">{item.line}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })
          )}
        </div>
      ) : showFull || picked || (mode === "course" && query.trim().length > 0) ? (
        <>
          <div className="scroll-none mt-4 flex gap-2 overflow-x-auto pb-1">
            {bucketMeta.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => go({ when: item.id }, true)}
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

          <p className="mt-3 text-sm font-semibold text-blue">
            {`Showing ${matched.length}. Clear the filter to go back to the names.`}
          </p>

          {matched.length === 0 ? (
            <p className="panel mt-3 px-4 py-4 text-sm text-cream">Nothing in that mix. Hit Back, or try UCEED, CUET, NMIMS, NIFT.</p>
          ) : narrowed ? (
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
        </>
      ) : (
        <p className="mt-3 text-sm leading-normal text-muted">Tap one name above. The courses open here. Every course in this stream is in the menu.</p>
      )}
      </section>

      <div className="mt-8 border-t border-line pt-5">
        <p className="text-sm font-semibold text-cream">Where are you?</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {stages.map((item) => {
            const on = stage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setStage(item.id)}
                className={
                  "tap h-10 rounded-full px-3 text-sm font-semibold " +
                  (on ? "bg-hot text-ink" : "border border-line bg-surface text-cream")
                }
              >
                {storyShort[item.id]} · {item.label}
              </button>
            );
          })}
          <button
            type="button"
            aria-pressed={delhi}
            onClick={() => setDelhi(!delhi)}
            className={
              "tap h-10 rounded-full px-3 text-sm font-semibold " +
              (delhi ? "bg-blue text-ink" : "border border-line bg-surface text-cream")
            }
          >
            {delhi ? "Delhi on" : "I study in Delhi"}
          </button>
        </div>
        {stage === "11" ? <p className="mt-3 text-sm leading-normal text-muted">{class11For(stream)}</p> : null}
        {delhi ? <p className="mt-2 text-sm leading-normal text-muted">{delhiFor(stream)}</p> : null}
      </div>

      {!becoming && doors.length > 0 ? (
        <section className="mt-8">
          <h2 className="font-display text-2xl text-cream">Commerce courses you can still do</h2>
          <p className="mt-1 text-sm leading-normal text-muted">Science does not lock these. The route is on each page.</p>
          <ul className="mt-3">
            {doors.map((item) => (
              <li key={item.slug} className="border-b border-line py-3 last:border-b-0">
                <Link to="/path/$slug" params={{ slug: item.slug }} className="font-semibold text-cream">
                  {plainOf(item.slug).title}
                </Link>
                <p className="mt-1 text-sm leading-normal text-muted">{item.line}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
