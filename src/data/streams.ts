import { tagOf } from "@/data/tags";

export type StreamPick = "commerce" | "pcm" | "pcb" | "pcmb";
export type Stream = "commerce" | "pcm" | "pcb";

export const streamChoices: { id: StreamPick; label: string; line: string }[] = [
  {
    id: "commerce",
    label: "Commerce with Maths",
    line: "Accounts, business, and maths. CA, CUET, IPMAT, law, design.",
  },
  {
    id: "pcm",
    label: "Science PCM",
    line: "Physics, chemistry, maths. Engineering, research, NDA Navy and Air Force. Plus CA and law.",
  },
  {
    id: "pcb",
    label: "Science PCB",
    line: "Physics, chemistry, biology. NEET and the health doors. No JEE. CA and law still open.",
  },
  {
    id: "pcmb",
    label: "PCMB",
    line: "Maths and biology both. You can sit JEE and NEET. The list is both.",
  },
];

const extra: Record<string, Stream[]> = {};

/** Courses that need Class 12 maths even if the tag forgot the flag. */
const mathsOnly = new Set(["ipm", "actuary", "bcom-du"]);

export function registerStreams(map: Record<string, Stream[]>) {
  Object.assign(extra, map);
}

export function streamsOf(slug: string): Stream[] {
  if (extra[slug]) return extra[slug];
  if (mathsOnly.has(slug) || tagOf(slug).needsMaths) return ["commerce", "pcm"];
  return ["commerce", "pcm", "pcb"];
}

export function fitsStream(slug: string, pick: StreamPick): boolean {
  const allowed = streamsOf(slug);
  if (pick === "pcmb") return allowed.includes("pcm") || allowed.includes("pcb");
  return allowed.includes(pick);
}
