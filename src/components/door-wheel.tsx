import { Link } from "@tanstack/react-router";
import { useState } from "react";
import type { StreamPick } from "@/data/streams";

const wheels: Record<StreamPick, { slug: string; label: string }[]> = {
  commerce: [
    { slug: "ca", label: "CA" },
    { slug: "cs", label: "CS" },
    { slug: "actuary", label: "Actuary" },
    { slug: "iimb-dbe", label: "IIM online" },
    { slug: "iitg-dsai", label: "Guwahati AI" },
    { slug: "law", label: "Law" },
    { slug: "design", label: "Design" },
    { slug: "analytics", label: "Madras data" },
  ],
  pcm: [
    { slug: "jee-main", label: "JEE" },
    { slug: "iiml-bsai", label: "Lucknow AI" },
    { slug: "iitg-dsai", label: "Guwahati AI" },
    { slug: "isi-bsds", label: "ISI data" },
    { slug: "pilot", label: "Pilot" },
    { slug: "uceed", label: "Design" },
    { slug: "nda", label: "NDA" },
    { slug: "analytics", label: "Madras data" },
  ],
  pcb: [
    { slug: "neet", label: "NEET" },
    { slug: "bsc-nursing", label: "Nursing" },
    { slug: "bioinfo", label: "Bio + code" },
    { slug: "iitg-dsai", label: "Guwahati AI" },
    { slug: "bpharm", label: "Pharmacy" },
    { slug: "design", label: "Design" },
    { slug: "law", label: "Law" },
    { slug: "not-mbbs", label: "Not MBBS" },
  ],
  pcmb: [
    { slug: "jee-main", label: "JEE" },
    { slug: "neet", label: "NEET" },
    { slug: "iitg-dsai", label: "Guwahati AI" },
    { slug: "isi-bsds", label: "ISI data" },
    { slug: "design", label: "Design" },
    { slug: "law", label: "Law" },
    { slug: "analytics", label: "Madras data" },
    { slug: "not-eng", label: "Not eng." },
  ],
};

export function DoorWheel({ stream }: { stream: StreamPick }) {
  const items = wheels[stream];
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [landed, setLanded] = useState<number | null>(null);
  const slice = 360 / items.length;
  const pick = landed === null ? null : items[landed];

  function spin() {
    if (spinning) return;
    const index = Math.floor(Math.random() * items.length);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setLanded(index);
      return;
    }
    setSpinning(true);
    setLanded(index);
    setRotation((prev) => {
      const current = ((prev % 360) + 360) % 360;
      const want = (360 - (index * slice + slice / 2) + 360) % 360;
      const delta = (want - current + 360) % 360;
      return prev + 1440 + delta;
    });
  }

  return (
    <div className="relative z-10 mt-4 border-t border-line pt-4">
      <p className="text-sm font-semibold text-cream">Spin a door</p>
      <p className="mt-1 text-sm leading-normal text-muted">
        A surprise from this stream only. It does not decide the career. It opens one page.
      </p>
      <div className="relative mx-auto mt-4 size-64">
        <div className="absolute top-0 left-1/2 z-10 size-3 -translate-x-1/2 rotate-45 bg-hot" />
        <div
          className={"wheel-face size-full rounded-full " + (spinning ? "wheel-spin" : "")}
          style={{ transform: `rotate(${rotation}deg)` }}
          onTransitionEnd={() => setSpinning(false)}
        />
        <div className="pointer-events-none absolute inset-16 flex items-center justify-center rounded-full bg-surface text-center">
          <span className="px-2 text-sm font-semibold text-cream">{spinning ? "…" : (pick?.label ?? "Spin")}</span>
        </div>
      </div>
      <button type="button" onClick={spin} disabled={spinning} className="tap mx-auto mt-3 flex h-12 items-center justify-center rounded-full bg-hot px-6 text-sm font-semibold text-ink">
        {spinning ? "Spinning" : "Spin"}
      </button>
      {pick && !spinning ? (
        <Link to="/path/$slug" params={{ slug: pick.slug }} className="tap mt-3 block text-center text-sm font-semibold text-blue">
          Open {pick.label}
        </Link>
      ) : null}
    </div>
  );
}
