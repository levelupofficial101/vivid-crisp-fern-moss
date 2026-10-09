import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Category, Marks, Stage } from "@/data/types";
import type { StreamPick } from "@/data/streams";

export type ThemeName = "light" | "dark";

type Desk = Marks & {
  delhi: boolean;
  theme: ThemeName;
  nightSet: boolean;
  stream: StreamPick | null;
  saved: string[];
  compare: string[];
  setStage: (stage: Stage) => void;
  setCategory: (category: Category) => void;
  setDelhi: (delhi: boolean) => void;
  setTheme: (theme: ThemeName) => void;
  setStream: (stream: StreamPick | null) => void;
  setHasMaths: (hasMaths: boolean) => void;
  setMark: (
    key: "tenth" | "board" | "maths" | "accounts" | "english",
    value: number | null,
  ) => void;
  toggleSaved: (slug: string) => void;
  toggleCompare: (slug: string) => void;
};

function paintTheme(theme: ThemeName) {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.theme = theme;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", theme === "dark" ? "#000000" : "#fafafa");
}

export const useDesk = create<Desk>()(
  persist(
    (set, get) => ({
      stage: "12",
      category: "UR",
      delhi: false,
      theme: "light",
      nightSet: false,
      stream: null,
      hasMaths: true,
      tenth: null,
      board: null,
      maths: null,
      accounts: null,
      english: null,
      saved: [],
      compare: [],
      setStage: (stage) => set({ stage }),
      setCategory: (category) => set({ category }),
      setDelhi: (delhi) => set({ delhi }),
      setTheme: (theme) => {
        paintTheme(theme);
        set({ theme });
      },
      setStream: (stream) => set({ stream, hasMaths: stream !== "pcb" }),
      setHasMaths: (hasMaths) => set({ hasMaths }),
      setMark: (key, value) => set({ [key]: value }),
      toggleSaved: (slug) => {
        const saved = get().saved;
        set({
          saved: saved.includes(slug)
            ? saved.filter((item) => item !== slug)
            : [...saved, slug],
        });
      },
      toggleCompare: (slug) => {
        const compare = get().compare;
        if (compare.includes(slug)) {
          set({ compare: compare.filter((item) => item !== slug) });
          return;
        }
        if (compare.length >= 3) {
          set({ compare: [...compare.slice(1), slug] });
          return;
        }
        set({ compare: [...compare, slug] });
      },
    }),
    {
      name: "open-ledger-desk",
      skipHydration: true,
      onRehydrateStorage: () => (state) => {
        if (!state) return;
        if (state.nightSet) {
          useDesk.setState({ theme: "light", nightSet: false });
          paintTheme("light");
          return;
        }
        paintTheme(state.theme === "dark" ? "dark" : "light");
      },
    },
  ),
);

export function marksOf(desk: Marks): Marks {
  return {
    stage: desk.stage,
    category: desk.category,
    hasMaths: desk.hasMaths,
    tenth: desk.tenth,
    board: desk.board,
    maths: desk.maths,
    accounts: desk.accounts,
    english: desk.english,
  };
}
