export type Stage = "11" | "12" | "result" | "college";
export type Category = "UR" | "EWS" | "OBC" | "SC" | "ST";
export type MathsEdge = "essential" | "strong" | "helpful" | "unused";
export type Cost = "Low" | "Medium" | "High";
export type GroupId = "maths" | "pro" | "degree" | "law" | "later";

export type Place = {
  name: string;
  where: string;
  via: string;
  note: string;
};

export type Exam = {
  name: string;
  when: string;
  papers: string;
};

export type Beat = {
  when: string;
  what: string;
  money: string;
};

export type Path = {
  slug: string;
  name: string;
  kicker: string;
  group: GroupId;
  oneLine: string;
  maths: MathsEdge;
  duration: string;
  cost: Cost;
  costNote: string;
  class11: string;
  class12: string;
  gates: { label: string; rule: string }[];
  exams: Exam[];
  how: string[];
  placesLabel: string;
  places: Place[];
  after: Beat[];
  careers: string[];
  pair: string[];
  watch: string[];
  now: Record<Stage, string[]>;
  delhi: string;
  bestIf: string;
  firstPay: string;
};

export type Marks = {
  stage: Stage;
  category: Category;
  hasMaths: boolean;
  tenth: number | null;
  board: number | null;
  maths: number | null;
  accounts: number | null;
  english: number | null;
};

export const stages: { id: Stage; label: string }[] = [
  { id: "11", label: "Class 11" },
  { id: "12", label: "Class 12" },
  { id: "result", label: "Result out" },
  { id: "college", label: "In college" },
];

export const categories: { id: Category; label: string }[] = [
  { id: "UR", label: "General" },
  { id: "EWS", label: "EWS" },
  { id: "OBC", label: "OBC-NCL" },
  { id: "SC", label: "SC" },
  { id: "ST", label: "ST" },
];

export const groups: { id: GroupId; label: string; lede: string }[] = [
  {
    id: "maths",
    label: "Needs maths",
    lede: "If you drop maths, these close.",
  },
  {
    id: "pro",
    label: "CA and CS",
    lede: "You can start these the year you pass Class 12. Keep a college degree going too.",
  },
  {
    id: "degree",
    label: "College",
    lede: "Three-year degrees. A good college now looks at an entrance test, not only your board marks.",
  },
  {
    id: "law",
    label: "Law",
    lede: "A five-year law course. The exam is CLAT. Your accounts marks do not decide the rank.",
  },
  {
    id: "later",
    label: "After college",
    lede: "Do not pay for these in school. They start in college, or after you graduate.",
  },
];

export const mathsLabel: Record<MathsEdge, string> = {
  essential: "You need maths",
  strong: "Maths helps a lot",
  helpful: "Maths is useful",
  unused: "Maths is not the main subject",
};

export const costLabel: Record<Cost, string> = {
  Low: "Fees are low",
  Medium: "Fees are in the middle",
  High: "Fees are high",
};
