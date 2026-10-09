export type Bucket = "exam12" | "degree12" | "withgrad" | "aftergrad";
export type Interest =
  | "accounts"
  | "management"
  | "markets"
  | "economics"
  | "law"
  | "government"
  | "media"
  | "hospitality"
  | "teaching"
  | "business"
  | "engineering"
  | "medicine";

export type Tag = {
  /** First bucket is where the course sits when nothing is filtered. */
  buckets: Bucket[];
  interests: Interest[];
  goodFor: string;
  avoid: string;
  needsMaths?: boolean;
};

export const bucketMeta: { id: Bucket | "all"; label: string; lede: string }[] = [
  {
    id: "all",
    label: "Everything",
    lede: "The full list. A filter only hides things. It does not delete them.",
  },
  {
    id: "exam12",
    label: "Competitive exams after 12",
    lede: "You sit these in the year you pass Class 12. The exam is the door, not the school percentage.",
  },
  {
    id: "degree12",
    label: "Degree courses after 12",
    lede: "A named degree, at a named college. Not a vague label like “a finance degree”.",
  },
  {
    id: "withgrad",
    label: "With your graduation",
    lede: "Professional courses you do while the degree is going on. CA, CS, CMA, ACCA, CFA, the US CMA.",
  },
  {
    id: "aftergrad",
    label: "After you graduate",
    lede: "The form opens only after a bachelor’s degree. CAT, ISB, RBI, the three-year LLB.",
  },
];

export const interestMeta: { id: Interest | "all"; label: string }[] = [
  { id: "all", label: "Any interest" },
  { id: "accounts", label: "Accounts and tax" },
  { id: "management", label: "Management" },
  { id: "markets", label: "Markets" },
  { id: "economics", label: "Economics and maths" },
  { id: "law", label: "Law" },
  { id: "government", label: "Government" },
  { id: "media", label: "Media and design" },
  { id: "hospitality", label: "Hotels" },
  { id: "teaching", label: "Teaching" },
  { id: "business", label: "Own business" },
  { id: "engineering", label: "Engineering" },
  { id: "medicine", label: "Medicine and health" },
];

const base: Record<string, Tag> = {
  bms: {
    buckets: ["degree12"],
    interests: ["management"],
    needsMaths: true,
    goodFor: "You want management inside Delhi University, you can handle maths in CUET, and you want a small fee.",
    avoid: "You dislike maths, or you think BMS is just a softer B.Com. It is not.",
  },
  "bba-fia": {
    buckets: ["degree12"],
    interests: ["markets", "management"],
    needsMaths: true,
    goodFor: "You want stocks, valuation and investment analysis, and you want that inside Delhi University’s fee.",
    avoid: "You want HR or marketing. This is the finance sibling of BMS, not a general BBA.",
  },
  bbe: {
    buckets: ["degree12"],
    interests: ["economics", "management"],
    needsMaths: true,
    goodFor: "You like economics and business together, and maths does not scare you.",
    avoid: "You wanted a light management course. Business Economics is closer to economics than to a party BBA.",
  },
  eco: {
    buckets: ["degree12"],
    interests: ["economics"],
    needsMaths: true,
    goodFor: "You are curious about how an economy moves, and you can score in maths.",
    avoid: "You want journal entries and a job title next year. This degree is built for a master’s.",
  },
  ipm: {
    buckets: ["exam12", "degree12"],
    interests: ["management"],
    goodFor: "The family can pay a high five-year fee, you like maths under a timer, and you want an IIM without waiting for CAT.",
    avoid: "You need a cheap degree, or you are only chasing the IIM name and will hate the first three years.",
  },
  actuary: {
    buckets: ["exam12", "withgrad"],
    interests: ["economics", "markets"],
    goodFor: "Maths is your best subject and you can study alone for years. Insurance maths interests you.",
    avoid: "You want a college life and a salary soon. These papers are a long maths apprenticeship.",
  },
  analytics: {
    buckets: ["degree12"],
    interests: ["economics"],
    needsMaths: true,
    goodFor: "You can study online without a teacher standing over you, and you want the IIT Madras data-science degree specifically.",
    avoid: "You want a hostel and a campus placement week. This degree is online. Also avoid it if you only liked the words “data science” in a reel.",
  },
  isi: {
    buckets: ["degree12", "exam12"],
    interests: ["economics"],
    needsMaths: true,
    goodFor: "Maths is the subject you would do even if nobody offered you a job.",
    avoid: "Almost everyone else. Do not make ISI your only plan.",
  },
  ca: {
    buckets: ["exam12", "withgrad"],
    interests: ["accounts"],
    goodFor: "You can study for years, accounts makes sense to you, and you are not in a hurry for a salary.",
    avoid: "You want a campus, a quick title, or you freeze on long exams. Also avoid it if you only want “CA” said at family functions.",
  },
  cs: {
    buckets: ["exam12", "withgrad"],
    interests: ["law", "accounts"],
    goodFor: "You like rules, company law and careful language more than you like ledgers.",
    avoid: "You think a company secretary buys and sells shares. That is a different job.",
  },
  cma: {
    buckets: ["exam12", "withgrad"],
    interests: ["accounts"],
    goodFor: "You like what a factory or a product actually costs, and you want a professional course beside college.",
    avoid: "You want the CA label for an audit signboard. This is cost and management accounting, not a shortcut to CA.",
  },
  acca: {
    buckets: ["exam12", "withgrad"],
    interests: ["accounts"],
    goodFor: "Your English and maths or accounts are strong, and you want an international accounting course from India.",
    avoid: "You want to sign Indian statutory audits. ACCA does not replace CA for that.",
  },
  "bcom-du": {
    buckets: ["degree12"],
    interests: ["accounts", "business"],
    goodFor: "You want the widest, cheapest respected base degree in Delhi, and you will treat CUET as the real exam.",
    avoid: "You believe a 98% board score is the admission. It is not, not anymore.",
  },
  "bcom-india": {
    buckets: ["degree12"],
    interests: ["accounts"],
    goodFor: "You want a B.Com with a real campus outside Delhi University, and you have read that college’s own rule.",
    avoid: "You are a Delhi CBSE student planning your life on a Mumbai board college. Those seats are mostly not for you.",
  },
  "mumbai-merit": {
    buckets: ["degree12"],
    interests: ["accounts"],
    goodFor: "You studied the Maharashtra board and you want HR, NM College, Mithibai, Jai Hind or KC.",
    avoid: "You are a CBSE student from Delhi or another state. Do not build the plan on these colleges.",
  },
  bba: {
    buckets: ["degree12", "exam12"],
    interests: ["management"],
    goodFor: "You want NMIMS Mumbai’s BBA, the family has priced the fee, and you will sit NPAT.",
    avoid: "You think every college with BBA in the name is NMIMS. It is not. Christ and Symbiosis are separate pages.",
  },
  "finance-ug": {
    buckets: ["degree12", "exam12"],
    interests: ["markets"],
    needsMaths: true,
    goodFor: "You want NMIMS B.Sc. Finance specifically, maths is in Class 12, and Mumbai is a real plan.",
    avoid: "You wanted a general word called finance. This page is one degree, at NMIMS, through NPAT.",
  },
  law: {
    buckets: ["exam12", "degree12"],
    interests: ["law"],
    goodFor: "You read by nature and you want law itself, for five years.",
    avoid: "You are doing it because accounts feels boring this month. The paper does not care about your accounts marks.",
  },
  cfa: {
    buckets: ["withgrad"],
    interests: ["markets"],
    goodFor: "You are in the last year of college, or you already work, and you like valuation and markets.",
    avoid: "You are in Class 11 or 12. Do not pay for a CFA registration you cannot use.",
  },
  frm: {
    buckets: ["withgrad"],
    interests: ["markets"],
    goodFor: "You are in college, you like numbers, and risk in banks interests you more than stock tips.",
    avoid: "You want a certificate to print under your school name. The letters mean little without work.",
  },
  cat: {
    buckets: ["aftergrad"],
    interests: ["management"],
    goodFor: "You can score in a degree, you can wait, and you want a management college after graduation.",
    avoid: "You want to start CAT coaching in Class 11. Finish school. Pick a degree you can score in.",
  },
  govt: {
    buckets: ["aftergrad"],
    interests: ["government"],
    goodFor: "You want RBI, SEBI, tax or audit, and you can study for a long exam after a degree.",
    avoid: "You want a government chair next year, from Class 12. The form will not open.",
  },
  banking: {
    buckets: ["aftergrad"],
    interests: ["government", "accounts"],
    goodFor: "You want a bank officer’s job and you can live where the bank sends you.",
    avoid: "You want it from Class 12, or you will refuse every city except your own.",
  },
  markets: {
    buckets: ["withgrad"],
    interests: ["markets"],
    goodFor: "You are in college and a real job needs one specific market licence.",
    avoid: "You want to collect certificates in Class 11. That is not a career.",
  },
  teach: {
    buckets: ["aftergrad"],
    interests: ["teaching"],
    goodFor: "You like the moment someone else understands, and you can stay one chapter ahead for years.",
    avoid: "You think teaching is the leftover when CA does not work. Students can tell.",
  },
  venture: {
    buckets: ["degree12", "withgrad", "aftergrad"],
    interests: ["business"],
    goodFor: "There is a real shop you can enter, or a real customer already.",
    avoid: "It is only a Class 12 speech about startups, with no degree and no accounts beside it.",
  },
};

export function tagOf(slug: string): Tag {
  return (
    allTags[slug] ?? {
      buckets: ["degree12"],
      interests: [],
      goodFor: "Read the page. If the daily work sounds like you, go on.",
      avoid: "If you only want the name, pick something else.",
    }
  );
}

export const allTags: Record<string, Tag> = { ...base };

export function registerTags(extra: Record<string, Tag>) {
  Object.assign(allTags, extra);
}
