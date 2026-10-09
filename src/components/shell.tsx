import { Link, useNavigate, useRouter, useRouterState, useCanGoBack } from "@tanstack/react-router";
import { Bookmark, ChevronLeft, GitCompare, House, ListChecks, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { streamChoices } from "@/data/streams";
import { useDesk } from "@/lib/desk";
import { plainOf } from "@/data/simple";

const tabs = [
  { to: "/", label: "Home", icon: House, exact: true },
  { to: "/fit", label: "Marks", icon: ListChecks, exact: false },
  { to: "/compare", label: "Compare", icon: GitCompare, exact: false },
  { to: "/saved", label: "Saved", icon: Bookmark, exact: false },
] as const;

export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const compareCount = useDesk((state) => state.compare.length);
  const savedCount = useDesk((state) => state.saved.length);
  const theme = useDesk((state) => state.theme);
  const setTheme = useDesk((state) => state.setTheme);
  const stream = useDesk((state) => state.stream);
  const setStream = useDesk((state) => state.setStream);
  const router = useRouter();
  const navigate = useNavigate();
  const canGoBack = useCanGoBack();
  const atHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const streamMeta = streamChoices.find((item) => item.id === stream);

  useEffect(() => {
    void useDesk.persist.rehydrate();
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const heading = headingFor(pathname);

  function goHome(hash?: string, fit?: boolean) {
    setOpen(false);
    void navigate({
      to: "/",
      hash,
      resetScroll: !hash,
      search: (prev) => {
        const next = { ...(prev as Record<string, unknown>) };
        if (fit) next.fit = "1";
        return next;
      },
    });
  }

  return (
    <div className="min-h-dvh bg-bg text-cream">
      <header className="sticky top-0 z-20 border-b border-line bg-surface/95 backdrop-blur-md">
        <div className="mx-auto max-w-3xl px-3 pt-1">
          <div className="flex h-12 items-center gap-2">
            {atHome ? (
              <Link to="/" className="flex min-w-0 flex-1 items-baseline gap-1.5">
                <span className="font-display text-lg text-hot">LEVEL UP</span>
                <span className="font-display text-lg text-blue">Careers</span>
              </Link>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => {
                    if (canGoBack) router.history.back();
                    else void navigate({ to: "/" });
                  }}
                  className="flex h-11 shrink-0 items-center gap-0.5 pr-1 text-sm font-semibold text-cream"
                >
                  <ChevronLeft className="size-6 text-hot" aria-hidden="true" />
                  Back
                </button>
                <p className="min-w-0 flex-1 truncate text-center text-sm font-semibold">{heading}</p>
              </>
            )}
            <button
              type="button"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
              className="flex h-11 shrink-0 items-center gap-1 px-1 text-sm font-semibold text-cream"
            >
              {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
              Menu
            </button>
            <button
              type="button"
              aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="flex h-11 shrink-0 items-center gap-1 px-1 text-sm font-semibold text-blue"
            >
              {theme === "light" ? <Moon className="size-4" aria-hidden="true" /> : <Sun className="size-4" aria-hidden="true" />}
              {theme === "light" ? "Dark" : "Light"}
            </button>
          </div>
          <p className="text-xs leading-snug text-muted">
            Developed by <span className="font-semibold text-cream">Level Up Academy</span>
            {" — Maths Masters of Rohini & Pitampura"}
          </p>
          {atHome ? (
            <div className="mt-1 border-t border-line">
              <details>
                <summary className="flex min-h-11 items-center text-sm font-semibold text-cream">About Level Up Academy</summary>
                <div className="space-y-2 pb-3 text-sm leading-normal text-muted">
                  <p>
                    Level Up Academy — Maths Masters of Rohini & Pitampura — is a premium coaching centre for Classes 8 to
                    12, across subjects. The offline centre is in Sector 7, Rohini, on Main Metro Road, next to Naturals.
                  </p>
                  <p>It teaches about 1 lakh students a year, online and offline. CBSE, foundation, CUET and JEE.</p>
                  <p>
                    Call{" "}
                    <a href="tel:+919810213960" className="font-semibold text-blue">
                      98102 13960
                    </a>
                  </p>
                  <p>
                    Instagram{" "}
                    <a
                      href="https://www.instagram.com/levelup.academy.official/"
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-blue"
                    >
                      @levelup.academy.official
                    </a>
                  </p>
                </div>
              </details>
              <details>
                <summary className="flex min-h-11 items-center text-sm font-semibold text-cream">Founded by Vaibhav Kukreja</summary>
                <div className="space-y-2 pb-3 text-sm leading-normal text-muted">
                  <p>Vaibhav Kukreja started Level Up Academy. Before the classroom, the work looked like this.</p>
                  <ul className="list-disc space-y-1.5 pl-4">
                    <li>MBA, rank holder, Indian School of Business (ISB), Hyderabad.</li>
                    <li>B.Tech (IT). Honoured with a Distinguished Alumni Award for his achievements.</li>
                    <li>Ex Senior Consultant at EY (Ernst & Young), a Big 4 firm.</li>
                    <li>
                      Founded ElevenX Consultancy Pvt Ltd in 2018. The firm took Asia’s largest ropeway-for-urban-mobility
                      project, in Himachal Pradesh.
                    </li>
                    <li>
                      Winner of a global hackathon at MOVE, the Global Mobility Summit organised by the Government of India.
                      Awarded ₹10 lakh by Hon. Shri Narendra Modi.
                    </li>
                  </ul>
                </div>
              </details>
            </div>
          ) : (
            <div className="h-2" />
          )}
        </div>
      </header>
      {open ? (
        <div className="fixed inset-0 z-30 flex justify-end bg-bg/70" onClick={() => setOpen(false)}>
          <div
            className="flex h-dvh w-full max-w-sm flex-col gap-4 overflow-y-auto bg-surface p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="text-sm font-semibold text-muted">Stream</p>
            <p className="font-display text-2xl leading-tight text-cream">{streamMeta?.label ?? "Not chosen yet"}</p>
            <div className="flex flex-col gap-2">
              {streamChoices.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setStream(item.id);
                    goHome();
                  }}
                  className={
                    "tap min-h-12 rounded-2xl border px-3 text-left text-sm font-semibold " +
                    (stream === item.id ? "border-hot bg-hot text-ink" : "border-line text-cream")
                  }
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button type="button" onClick={() => goHome("fit", true)} className="tap h-12 rounded-full border border-line text-sm font-semibold text-blue">
              Not sure? Check which stream fits
            </button>
            <div className="border-t border-line pt-3">
              <p className="text-sm font-semibold text-muted">On this stream</p>
              <div className="mt-2 flex flex-col">
                <button type="button" onClick={() => goHome("doors")} className="tap h-11 text-left text-sm font-semibold text-cream">
                  Hidden doors
                </button>
                <button type="button" onClick={() => goHome("ai")} className="tap h-11 text-left text-sm font-semibold text-cream">
                  AI world
                </button>
                <button type="button" onClick={() => goHome("find")} className="tap h-11 text-left text-sm font-semibold text-cream">
                  Find one course
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    void navigate({
                      to: "/",
                      hash: "find",
                      search: (prev) => ({ ...(prev as Record<string, unknown>), list: "1" }),
                    });
                  }}
                  className="tap h-11 text-left text-sm font-semibold text-cream"
                >
                  Every course in this stream
                </button>
              </div>
            </div>
            <div className="mt-auto flex gap-2 border-t border-line pt-3">
              <Link to="/compare" className="tap flex h-12 flex-1 items-center justify-center rounded-full bg-hot text-sm font-semibold text-ink">
                Compare {compareCount > 0 ? `(${compareCount})` : ""}
              </Link>
              <Link to="/saved" className="tap flex h-12 flex-1 items-center justify-center rounded-full border border-line text-sm font-semibold text-cream">
                Saved {savedCount > 0 ? `(${savedCount})` : ""}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
      <main className="mx-auto w-full max-w-3xl px-4 pb-24">{children}</main>
      <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-line bg-surface/95 backdrop-blur-md">
        <ul className="mx-auto grid max-w-3xl grid-cols-4">
          {tabs.map((tab) => {
            const active = tab.exact ? pathname === tab.to : pathname.startsWith(tab.to);
            const Icon = tab.icon;
            const count = tab.to === "/compare" ? compareCount : tab.to === "/saved" ? savedCount : 0;
            return (
              <li key={tab.to}>
                <Link
                  to={tab.to}
                  className={
                    "flex h-14 flex-col items-center justify-center gap-0.5 text-xs font-medium " +
                    (active ? "text-hot" : "text-cream")
                  }
                >
                  <span className="relative">
                    <Icon className={"size-6 " + (active ? "fill-hot text-hot" : "")} aria-hidden="true" />
                    {count > 0 ? (
                      <span className="absolute -top-1.5 -right-2.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-blue px-1 text-xs font-semibold text-ink">
                        {count}
                      </span>
                    ) : null}
                  </span>
                  {tab.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

function headingFor(pathname: string): string {
  if (pathname.startsWith("/fit")) return "My marks";
  if (pathname.startsWith("/compare")) return "Compare";
  if (pathname.startsWith("/saved")) return "Saved";
  if (pathname.startsWith("/path/")) {
    const slug = pathname.slice("/path/".length);
    return plainOf(slug).title || "Course";
  }
  return "LEVEL UP Careers";
}
