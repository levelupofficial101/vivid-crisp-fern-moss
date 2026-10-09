import { catalogFalls, catalogWays } from "@/data/catalog";
import { pathBySlug } from "@/data/paths";
import { plainOf } from "@/data/simple";
import { tagOf } from "@/data/tags";
import { worldFalls, worldWays } from "@/data/world-paths";

export type Step = { label: string; slug?: string };
export type Way = { title: string; steps: Step[] };
export type Fallback = { slug: string; line: string };

export const waysIn: Record<string, Way[]> = {
  "jee-adv": [
    {
      title: "The IIT path",
      steps: [
        { label: "JEE Main", slug: "jee-main" },
        { label: "Qualify", slug: "jee-adv" },
        { label: "JEE Advanced", slug: "jee-adv" },
        { label: "JoSAA" },
      ],
    },
    {
      title: "If Advanced does not happen",
      steps: [
        { label: "Use the JEE Main rank", slug: "jee-main" },
        { label: "NIT, IIIT or GFTI" },
        { label: "JAC Delhi if you are from Delhi", slug: "jee-main" },
      ],
    },
    {
      title: "A parallel campus",
      steps: [
        { label: "BITSAT", slug: "bitsat" },
        { label: "BITS Pilani, Goa or Hyderabad" },
      ],
    },
    {
      title: "The computer-science door people forget",
      steps: [
        { label: "UGEE", slug: "ugee" },
        { label: "IIIT Hyderabad" },
      ],
    },
    {
      title: "Research instead of engineering",
      steps: [
        { label: "IISER Aptitude Test", slug: "iiser" },
        { label: "or NEST", slug: "nest" },
      ],
    },
    {
      title: "The long way back to an IIT",
      steps: [
        { label: "B.Sc through CUET", slug: "cuet-bsc" },
        { label: "Then GATE or a master’s exam", slug: "gate" },
      ],
    },
  ],
  neet: [
    {
      title: "MBBS",
      steps: [
        { label: "NEET", slug: "neet" },
        { label: "MCC and your state counselling" },
        { label: "Government medical college" },
      ],
    },
    {
      title: "Armed forces doctor",
      steps: [
        { label: "NEET", slug: "neet" },
        { label: "AFMC’s own notice", slug: "afmc" },
      ],
    },
    {
      title: "CMC Vellore",
      steps: [
        { label: "NEET", slug: "neet" },
        { label: "Their form", slug: "cmc" },
      ],
    },
    {
      title: "Dentistry, if MBBS is out of reach",
      steps: [
        { label: "Same NEET score", slug: "neet" },
        { label: "BDS counselling", slug: "bds" },
      ],
    },
    {
      title: "AYUSH",
      steps: [
        { label: "Same NEET score", slug: "neet" },
        { label: "AYUSH counselling", slug: "ayush" },
      ],
    },
    {
      title: "Veterinary",
      steps: [
        { label: "Same NEET score", slug: "neet" },
        { label: "Veterinary counselling", slug: "bvsc" },
      ],
    },
  ],
  nda: [
    {
      title: "Army, any stream",
      steps: [{ label: "UPSC NDA", slug: "nda" }, { label: "SSB and medical" }, { label: "NDA Khadakwasla" }],
    },
    {
      title: "Navy or Air Force",
      steps: [
        { label: "Only with physics and maths", slug: "nda" },
        { label: "Same NDA exam" },
      ],
    },
    {
      title: "Army technical, PCM, if NDA is not the fit",
      steps: [{ label: "10+2 TES", slug: "tes" }, { label: "SSB" }],
    },
  ],
  "jee-main": [
    {
      title: "The national counselling",
      steps: [
        { label: "JEE Main", slug: "jee-main" },
        { label: "JoSAA for NITs, IIITs and GFTIs" },
        { label: "CSAB if seats remain" },
      ],
    },
    {
      title: "Delhi colleges, if Delhi is home",
      steps: [
        { label: "The same JEE Main rank", slug: "jee-main" },
        { label: "JAC Delhi for DTU, NSUT and IIIT-Delhi" },
      ],
    },
    {
      title: "The IIT attempt",
      steps: [
        { label: "Qualify JEE Main", slug: "jee-main" },
        { label: "JEE Advanced", slug: "jee-adv" },
        { label: "JoSAA again, for the IITs" },
      ],
    },
    {
      title: "A campus that ignores the JEE rank",
      steps: [
        { label: "BITSAT", slug: "bitsat" },
        { label: "or UGEE for IIIT Hyderabad", slug: "ugee" },
        { label: "or VIT and Manipal", slug: "viteee" },
      ],
    },
    {
      title: "Your state’s own colleges",
      steps: [
        { label: "The state paper, if you have domicile", slug: "state-eng" },
        { label: "Or the private exams you have priced", slug: "private-eng" },
      ],
    },
    {
      title: "Leave engineering",
      steps: [
        { label: "IISER, if research is the real wish", slug: "iiser" },
        { label: "or a B.Sc. now and an IIT master’s later", slug: "cuet-bsc" },
      ],
    },
  ],
  ca: [
    {
      title: "Start the year you pass Class 12",
      steps: [
        { label: "Any stream, including science" },
        { label: "Register for CA Foundation", slug: "ca" },
        { label: "Join a degree the same year" },
      ],
    },
    {
      title: "If you never studied accounts",
      steps: [
        { label: "Foundation teaches it from the start", slug: "ca" },
        { label: "Give one honest attempt" },
        { label: "Keep the college seat even if the attempt slips" },
      ],
    },
    {
      title: "Direct entry after a degree",
      steps: [
        { label: "Finish graduation" },
        { label: "Check whether ICAI still lets your marks skip Foundation", slug: "ca" },
        { label: "Enter Intermediate" },
      ],
    },
    {
      title: "If CA is the wrong profession",
      steps: [
        { label: "Company Secretary", slug: "cs" },
        { label: "or cost accounting", slug: "cma" },
      ],
    },
  ],
  law: [
    {
      title: "Five-year law, any stream",
      steps: [
        { label: "CLAT", slug: "law" },
        { label: "Then the NLU list" },
      ],
    },
    {
      title: "NLU Delhi",
      steps: [{ label: "AILET, which is not CLAT", slug: "law" }],
    },
    {
      title: "A private law school",
      steps: [{ label: "SLAT, or that college’s own test", slug: "law" }],
    },
    {
      title: "After a degree",
      steps: [
        { label: "A three-year LLB", slug: "law" },
        { label: "Often CUET-PG for Delhi University" },
      ],
    },
  ],
  "bcom-du": [
    {
      title: "If you already have accounts",
      steps: [
        { label: "CUET with the B.Com combination", slug: "bcom-du" },
        { label: "SRCC, Hindu, and the rest of the list" },
      ],
    },
    {
      title: "If you are PCM and you never studied accounts",
      steps: [
        { label: "Check whether that year’s CUET map accepts maths in place of accounts", slug: "bcom-du" },
        { label: "Only then fill B.Com (Hons)" },
        { label: "If it does not, take a B.Sc. or look at CA instead", slug: "ca" },
      ],
    },
  ],
  ipm: [
    {
      title: "IIM Indore",
      steps: [
        { label: "IPMAT Indore", slug: "ipm" },
        { label: "The interview" },
      ],
    },
    {
      title: "The other IIMs",
      steps: [
        { label: "IPMAT Rohtak is a different paper", slug: "ipm" },
        { label: "JIPMAT is a third paper" },
      ],
    },
    {
      title: "If you are from PCM",
      steps: [
        { label: "You can sit it. The paper is fast maths.", slug: "ipm" },
        { label: "Price the five years before the mock tests" },
      ],
    },
    {
      title: "The later door",
      steps: [
        { label: "Any degree now" },
        { label: "CAT after graduation", slug: "cat" },
      ],
    },
  ],
  eco: [
    {
      title: "Delhi University",
      steps: [
        { label: "You need maths", slug: "eco" },
        { label: "CUET" },
        { label: "SRCC, Hindu, Stephen’s and the others" },
      ],
    },
    {
      title: "If maths is the subject you love",
      steps: [
        { label: "ISI is a different exam", slug: "isi" },
        { label: "Do not make it the only form" },
      ],
    },
  ],
  uceed: [
    {
      title: "Design at an IIT",
      steps: [
        { label: "UCEED", slug: "uceed" },
        { label: "Check which campuses take your stream" },
      ],
    },
    {
      title: "If the IIT list is closed to you",
      steps: [
        { label: "NID", slug: "nid" },
        { label: "or NIFT", slug: "nift" },
      ],
    },
  ],
  iiser: [
    {
      title: "The aptitude test",
      steps: [
        { label: "IAT", slug: "iiser" },
        { label: "The seven IISERs" },
      ],
    },
    {
      title: "IISc’s bachelor’s",
      steps: [
        { label: "IAT, or a strong JEE Advanced rank", slug: "jee-adv" },
        { label: "Read IISc’s own rule that year", slug: "iiser" },
      ],
    },
    {
      title: "The smaller research door",
      steps: [
        { label: "NEST", slug: "nest" },
        { label: "NISER or CEBS" },
      ],
    },
    {
      title: "If you want an IIT later instead",
      steps: [
        { label: "A B.Sc. now", slug: "cuet-bsc" },
        { label: "IIT JAM in the final year", slug: "jam" },
      ],
    },
  ],
  "cuet-bsc": [
    {
      title: "A campus B.Sc.",
      steps: [
        { label: "CUET", slug: "cuet-bsc" },
        { label: "The university’s subject map" },
      ],
    },
    {
      title: "Then an IIT master’s",
      steps: [
        { label: "Finish the B.Sc.", slug: "cuet-bsc" },
        { label: "IIT JAM", slug: "jam" },
      ],
    },
    {
      title: "Then research",
      steps: [
        { label: "JEST or TIFR if you are PCM", slug: "jest" },
        { label: "GAT-B if you moved into biotechnology", slug: "gatb" },
      ],
    },
  ],
  gate: [
    {
      title: "M.Tech at an IIT or an NIT",
      steps: [
        { label: "A B.Tech in the matching branch", slug: "gate" },
        { label: "GATE" },
        { label: "COAP or CCMT" },
      ],
    },
    {
      title: "A public-sector job",
      steps: [
        { label: "The same GATE paper", slug: "gate" },
        { label: "ONGC, IOCL, NTPC and the others, when they recruit" },
      ],
    },
    {
      title: "The research institutes",
      steps: [
        { label: "BARC", slug: "barc" },
        { label: "or ISRO’s own notice", slug: "isro" },
      ],
    },
  ],
  pilot: [
    {
      title: "The only sane order",
      steps: [
        { label: "Class 1 medical first", slug: "pilot" },
        { label: "Then a flying school" },
        { label: "Then DGCA papers and hours" },
        { label: "An airline hires later, if it is hiring" },
      ],
    },
    {
      title: "If the medical says no",
      steps: [
        { label: "Stop paying", slug: "pilot" },
        { label: "Aircraft maintenance is a different job", slug: "ame" },
      ],
    },
  ],
  "not-eng": [
    {
      title: "Still engineering, just not the picture in your head",
      steps: [
        { label: "Use the JEE Main rank", slug: "jee-main" },
        { label: "BITSAT or IIIT Hyderabad in the same season", slug: "bitsat" },
        { label: "Your state, if you have the domicile", slug: "state-eng" },
        { label: "A diploma, then lateral entry, only if the rank is empty", slug: "leet" },
      ],
    },
    {
      title: "You liked maths, not machines",
      steps: [
        { label: "ISI or CMI", slug: "isi" },
        { label: "Actuarial science", slug: "actuary" },
        { label: "Economics, if you can write as well as calculate", slug: "eco" },
        { label: "IIT Madras data science, online", slug: "analytics" },
        { label: "A B.Sc. now, an IIT master’s later", slug: "cuet-bsc" },
      ],
    },
    {
      title: "You want to build something people can see",
      steps: [
        { label: "Architecture", slug: "nata" },
        { label: "Planning at SPA", slug: "planning" },
        { label: "Design at the IITs", slug: "uceed" },
      ],
    },
    {
      title: "You want a uniform, or the sea",
      steps: [
        { label: "NDA", slug: "nda" },
        { label: "Army TES, if NDA is not the fit", slug: "tes" },
        { label: "The Navy’s own 10+2 B.Tech", slug: "navy-tech" },
        { label: "Merchant navy", slug: "imu" },
      ],
    },
    {
      title: "You want a profession, not a branch",
      steps: [
        { label: "CA, even from science", slug: "ca" },
        { label: "Law", slug: "law" },
        { label: "The five-year IIM course, if the fee is real", slug: "ipm" },
        { label: "An MBA much later", slug: "cat" },
      ],
    },
    {
      title: "You want research, or a classroom",
      steps: [
        { label: "IISER", slug: "iiser" },
        { label: "NISER or CEBS", slug: "nest" },
        { label: "The NCERT teaching degree", slug: "rie" },
      ],
    },
  ],
  "not-mbbs": [
    {
      title: "Still health, still this year’s NEET score",
      steps: [
        { label: "Fill the state counselling anyway", slug: "neet" },
        { label: "Dentistry", slug: "bds" },
        { label: "AYUSH, only if you want that medicine", slug: "ayush" },
        { label: "Veterinary", slug: "bvsc" },
      ],
    },
    {
      title: "A hospital job that is not called doctor",
      steps: [
        { label: "Nursing", slug: "bsc-nursing" },
        { label: "Pharmacy, the degree", slug: "bpharm" },
        { label: "The two-year diploma, if money is the wall", slug: "dpharm" },
        { label: "Physiotherapy", slug: "bpt" },
        { label: "Occupational therapy", slug: "bot" },
        { label: "Speech and hearing", slug: "baslp" },
        { label: "The other allied degrees, named properly", slug: "allied" },
      ],
    },
    {
      title: "The lab, the field, or food",
      steps: [
        { label: "Biomedical science", slug: "biomed" },
        { label: "Nutrition", slug: "nutrition" },
        { label: "Forensic science", slug: "nfsu" },
        { label: "Agriculture", slug: "agri" },
        { label: "Forestry", slug: "forestry" },
        { label: "Research at an IISER", slug: "iiser" },
      ],
    },
    {
      title: "Leave health entirely",
      steps: [
        { label: "CA", slug: "ca" },
        { label: "Law", slug: "law" },
        { label: "Design", slug: "uceed" },
        { label: "Hotels", slug: "nchm" },
        { label: "NDA, Army wing", slug: "nda" },
      ],
    },
  ],
  "not-ca": [
    {
      title: "A different professional course",
      steps: [
        { label: "Company Secretary", slug: "cs" },
        { label: "Cost accounting", slug: "cma" },
        { label: "ACCA, if the percentage rule is met", slug: "acca" },
        { label: "Actuarial science, only with real maths", slug: "actuary" },
      ],
    },
    {
      title: "Keep the degree and change the job",
      steps: [
        { label: "B.Com at Delhi University", slug: "bcom-du" },
        { label: "Economics", slug: "eco" },
        { label: "BMS, if maths is strong", slug: "bms" },
        { label: "Law, if you like reading more than ledgers", slug: "law" },
      ],
    },
    {
      title: "Management, now or later",
      steps: [
        { label: "The five-year IIM course", slug: "ipm" },
        { label: "NMIMS, if that was the college you wanted", slug: "bba" },
        { label: "CAT after the degree", slug: "cat" },
      ],
    },
    {
      title: "A job the government prints",
      steps: [
        { label: "The officer exams after graduation", slug: "govt" },
        { label: "Bank officer exams", slug: "banking" },
      ],
    },
  ],
  planning: [
    {
      title: "The SPA route",
      steps: [
        { label: "JEE Main Paper 2, the planning paper", slug: "planning" },
        { label: "SPA Delhi, then the other SPAs" },
      ],
    },
    {
      title: "If you actually wanted to draw buildings",
      steps: [
        { label: "Architecture, NATA and Paper 2A", slug: "nata" },
      ],
    },
    {
      title: "If you wanted design, not cities",
      steps: [{ label: "UCEED", slug: "uceed" }],
    },
  ],
  leet: [
    {
      title: "Only after a plain B.Tech is impossible",
      steps: [
        { label: "Look at the JEE rank first", slug: "jee-main" },
        { label: "Then the state colleges", slug: "state-eng" },
        { label: "Diploma, then LEET", slug: "leet" },
      ],
    },
  ],
  rie: [
    {
      title: "The NCERT route",
      steps: [
        { label: "Check your state’s seats", slug: "rie" },
        { label: "NCERT entrance" },
        { label: "A B.Sc. B.Ed. at an RIE" },
      ],
    },
    {
      title: "If you want the science without the classroom",
      steps: [{ label: "A B.Sc. through CUET", slug: "cuet-bsc" }],
    },
  ],
};

export const fromScience: { slug: string; line: string }[] = [
  {
    slug: "ca",
    line: "Any stream. Register for CA Foundation after Class 12. Accounts starts from zero if you never studied it. Keep a college degree beside it.",
  },
  {
    slug: "cs",
    line: "Any stream. Company Secretary starts with CSEET. It is company law, not a science paper.",
  },
  {
    slug: "cma",
    line: "Any stream. Cost accounting, done beside a degree.",
  },
  {
    slug: "law",
    line: "Any stream. CLAT does not look at your physics marks. AILET and SLAT are separate forms.",
  },
  {
    slug: "uceed",
    line: "Design at several IITs. A few campuses want PCM or PCB specifically. The page says which.",
  },
  {
    slug: "nchm",
    line: "Hotel management at the government IHMs. Any stream.",
  },
  {
    slug: "nda",
    line: "Army wing takes PCB and PCM. Navy and Air Force need physics and maths. If it misses, the fallbacks are on that page.",
  },
  {
    slug: "bcom-du",
    line: "PCM can often use maths in the CUET map. PCB without maths or accounts usually cannot. Read the year’s combination.",
  },
  {
    slug: "eco",
    line: "Economics at Delhi University needs maths in CUET.",
  },
  {
    slug: "bms",
    line: "BMS at Shaheed Sukhdev needs maths.",
  },
  {
    slug: "ipm",
    line: "The five-year IIM course. Fast maths. PCM can sit it. PCB without maths should not.",
  },
  {
    slug: "actuary",
    line: "Only if maths is a real strength. The papers go on for years.",
  },
  {
    slug: "analytics",
    line: "The IIT Madras online data-science degree. You need maths. It is not a hostel.",
  },
  {
    slug: "isi",
    line: "ISI and CMI. A very hard maths exam. Only if you would do maths with no job attached.",
  },
  {
    slug: "cat",
    line: "After any bachelor’s degree. School stream stops mattering. Do not pay for CAT in Class 12.",
  },
];

export const fallbacksOf: Record<string, Fallback[]> = {
  nda: [
    { slug: "tes", line: "PCM only. The Army’s other Class 12 door. Often no written exam, then SSB." },
    { slug: "navy-tech", line: "PCM only. The Navy’s own 10+2 B.Tech. Not NDA, and not the merchant navy." },
    { slug: "cds", line: "After a degree. Army, Navy and Air Force academies. This is the grown-up NDA." },
    { slug: "afcat", line: "Air Force after graduation. Ground duty can take a degree that is not engineering." },
    { slug: "capf", line: "Assistant Commandant in the central police forces, after a degree." },
    { slug: "imu", line: "PCM. Merchant navy, not the Indian Navy. A different life at sea." },
    { slug: "jee-main", line: "PCM. Take an engineering seat now. CDS or a technical entry can come later." },
    { slug: "not-eng", line: "If the uniform was the point and the exam was not, read the whole “if not engineering” list too." },
  ],
  "jee-adv": [
    { slug: "jee-main", line: "The same season. NITs, IIITs and GFTIs use this rank." },
    { slug: "bitsat", line: "BITS. A different paper and a higher fee." },
    { slug: "ugee", line: "IIIT Hyderabad. Fill it. JEE does not apply for you." },
    { slug: "wbjee", line: "Jadavpur, if you can live with the quota." },
    { slug: "comedk", line: "RVCE and the other Bangalore private colleges." },
    { slug: "iiser", line: "Leave engineering and take the research degree." },
    { slug: "nest", line: "NISER or CEBS. Small, serious, easy to miss." },
    { slug: "cuet-bsc", line: "A B.Sc now, and an IIT master’s later through JAM or a research exam." },
    { slug: "state-eng", line: "Your state’s own colleges, if you actually have the domicile." },
    { slug: "private-eng", line: "SRM, Amrita, KIIT, and the JEE colleges people forget, such as Thapar and LNMIIT." },
    { slug: "nata", line: "Architecture, if a building interests you more than a branch code." },
  ],
  "jee-main": [
    { slug: "not-eng", line: "If the rank is not an IIT and the family is asking “then what?”, this is the full list." },
    { slug: "bitsat", line: "Sit it in the same season." },
    { slug: "ugee", line: "IIIT Hyderabad’s own exam." },
    { slug: "viteee", line: "VIT." },
    { slug: "met", line: "Manipal engineering." },
    { slug: "wbjee", line: "Jadavpur, if the quota works for you." },
    { slug: "comedk", line: "Bangalore private colleges. No domicile needed." },
    { slug: "state-eng", line: "KEAM, GUJCET and the other state papers. Domicile usually applies." },
    { slug: "private-eng", line: "The private exams, after you have priced them." },
    { slug: "planning", line: "Planning at SPA. A different JEE paper. Not B.Tech." },
    { slug: "leet", line: "Diploma, then a B.Tech in year two. Longer, and only if the rank is empty." },
    { slug: "iiser", line: "Research, if the engineering rank is not the life you want." },
    { slug: "actuary", line: "If maths was the only part you liked." },
    { slug: "rie", line: "A public teaching degree, if a classroom is an honest yes." },
    { slug: "ca", line: "A profession. Science students can start Foundation." },
  ],
  neet: [
    { slug: "not-mbbs", line: "If the government seat is gone and the private fee is a house, this is the full list." },
    { slug: "bds", line: "Dentistry, on the same score." },
    { slug: "ayush", line: "Ayurveda, homeopathy and the other AYUSH degrees. Only if you want that system." },
    { slug: "bvsc", line: "Veterinary. Fill that counselling. The MBBS form does not include it." },
    { slug: "bsc-nursing", line: "Nursing. A profession, not a joke." },
    { slug: "bpharm", line: "Pharmacy. Often a state exam, not NEET." },
    { slug: "dpharm", line: "The two-year diploma, if a four-year fee is the wall." },
    { slug: "bpt", line: "Physiotherapy." },
    { slug: "bot", line: "Occupational therapy. NIRTAR is the institute people miss." },
    { slug: "baslp", line: "Speech and hearing. AIISH Mysuru is the campus this field respects." },
    { slug: "nutrition", line: "Dietetics. Lady Irwin, through CUET. Not NEET." },
    { slug: "biomed", line: "Biomedical science at Delhi University. A lab, not a ward." },
    { slug: "allied", line: "Optometry, lab, radiology. Name the exact course." },
    { slug: "nfsu", line: "Forensic science at NFSU." },
    { slug: "iiser", line: "Research, if the hospital was never the real wish." },
    { slug: "psych-rci", line: "Psychology now. The clinical licence is a later degree." },
    { slug: "agri", line: "Agriculture through CUET." },
    { slug: "forestry", line: "Forestry now. The forest service is a later UPSC exam." },
  ],
  bitsat: [
    { slug: "jee-main", line: "The same season. A different counselling." },
    { slug: "ugee", line: "IIIT Hyderabad." },
    { slug: "private-eng", line: "If the BITS fee was the problem, price these before you join them." },
    { slug: "iiser", line: "Research, if the branch on offer is not the life you want." },
  ],
  pilot: [
    { slug: "ame", line: "Maintain aircraft instead of flying them. Still needs physics and maths." },
    { slug: "imu", line: "A life at sea, in the merchant navy. Not an airline." },
    { slug: "jee-main", line: "An engineering degree, if the medical or the money stopped the cockpit." },
  ],
  ca: [
    { slug: "not-ca", line: "If CA is the family plan and it is already hurting, this is the full list." },
    { slug: "cs", line: "Company Secretary, if law and rules fit you better than audit." },
    { slug: "cma", line: "Cost accounting. A different institute, a different job." },
    { slug: "acca", line: "Only if English and maths or accounts clear their percentage rule. It does not replace an Indian audit licence." },
    { slug: "bcom-du", line: "Keep the degree. A failed Foundation attempt is not a failed life." },
    { slug: "law", line: "If the statutes were the part you liked, and the accounts were not." },
    { slug: "cat", line: "After the degree, if management was the real aim." },
  ],
  "not-eng": [
    { slug: "jee-main", line: "Still engineering. NITs, IIITs, and a Delhi JAC seat use this rank." },
    { slug: "bitsat", line: "BITS. A different paper. A higher fee. Talk about the fee first." },
    { slug: "ugee", line: "IIIT Hyderabad. Research-heavy computer science. Its own exam." },
    { slug: "state-eng", line: "Your state’s colleges. Domicile is the catch." },
    { slug: "private-eng", line: "SRM, Amrita, KIIT, and the JEE colleges people forget: Thapar, LNMIIT, DAIICT." },
    { slug: "leet", line: "Diploma, then second-year B.Tech. Longer. Honest. Not an IIT." },
    { slug: "nata", line: "Architecture. Maths plus drawing." },
    { slug: "planning", line: "Urban planning at SPA. The course engineering counsellors forget." },
    { slug: "uceed", line: "Design at the IITs." },
    { slug: "iiser", line: "A research degree. Not a placement week." },
    { slug: "nest", line: "NISER or CEBS." },
    { slug: "cuet-bsc", line: "A B.Sc. now. IIT JAM can come later." },
    { slug: "isi", line: "ISI and CMI. Only if maths is the thing you would do anyway." },
    { slug: "actuary", line: "Insurance maths. Years of papers. Very few people finish, and the ones who do are paid." },
    { slug: "analytics", line: "IIT Madras online data science. Needs maths. No hostel." },
    { slug: "eco", line: "Economics. Needs maths. The master’s is where it usually pays." },
    { slug: "ipm", line: "Five years at an IIM. High fee. Fast maths." },
    { slug: "ca", line: "CA Foundation. Science can start. Accounts will be new." },
    { slug: "law", line: "CLAT. Your physics marks do not help you." },
    { slug: "nda", line: "Army, Navy or Air Force at 18. The written paper still has maths." },
    { slug: "tes", line: "Army technical entry. Often no written exam, then SSB." },
    { slug: "navy-tech", line: "The Navy’s own 10+2 B.Tech. Not the merchant navy." },
    { slug: "imu", line: "Merchant navy. A different life at sea." },
    { slug: "pilot", line: "Commercial pilot. Do the medical first. The money is serious." },
    { slug: "ame", line: "Maintain aircraft. Cheaper than flying them. Still a licence." },
    { slug: "rie", line: "NCERT’s teaching degree. Public, four years, a real classroom." },
    { slug: "ndri", line: "Dairy technology at Karnal. PCM. A public campus people skip." },
    { slug: "nfsu", line: "Forensic science." },
    { slug: "nchm", line: "Government hotel schools. Any stream, including PCM." },
    { slug: "jam", line: "Later. An IIT master’s after a B.Sc." },
    { slug: "atc", line: "Later. Air traffic control, after a degree with physics and maths." },
    { slug: "gate", line: "Later. If you do take an engineering degree and want a PSU or an M.Tech." },
    { slug: "cat", line: "Later. An MBA after any degree. Not a Class 12 form." },
  ],
  "not-mbbs": [
    { slug: "neet", line: "Still fill the counselling. A state seat sometimes appears after the panic." },
    { slug: "bds", line: "Dentistry, on the same NEET score. A dentist, not a failed doctor." },
    { slug: "ayush", line: "Ayurveda, homeopathy and the rest. Only if you will practise that system." },
    { slug: "bvsc", line: "Veterinary. Separate counselling. Real government jobs." },
    { slug: "bsc-nursing", line: "Nursing. AIIMS has its own notice. Some states use NEET." },
    { slug: "bpharm", line: "The pharmacy degree. Often a state exam." },
    { slug: "pharmd", line: "Six years. Clinical pharmacy. Not a medical doctorate." },
    { slug: "dpharm", line: "Two years. A registered pharmacy role. Check the council approval." },
    { slug: "bpt", line: "Physiotherapy." },
    { slug: "bot", line: "Occupational therapy. Look at NIRTAR, not only the local college." },
    { slug: "allied", line: "Optometry, lab technology, radiology. Pick one name." },
    { slug: "baslp", line: "Speech and hearing. AIISH Mysuru." },
    { slug: "nutrition", line: "Dietetics and home science. Lady Irwin if you are looking at Delhi." },
    { slug: "biomed", line: "Biomedical science. A DU lab degree, through CUET." },
    { slug: "nfsu", line: "Forensic science at NFSU." },
    { slug: "psych-rci", line: "Psychology. The licence to treat is a later, recognised course." },
    { slug: "agri", line: "Agriculture. Public colleges. A job the state actually has." },
    { slug: "forestry", line: "Forestry now. Indian Forest Service only after a degree." },
    { slug: "iiser", line: "Research. PCB can sit the IISER test." },
    { slug: "cuet-bsc", line: "A plain B.Sc. in a good college. Underrated because it has no costume." },
    { slug: "gatb", line: "Later. A biotechnology master’s after the B.Sc." },
    { slug: "ca", line: "Leave health. CA does not ask for biology." },
    { slug: "law", line: "Leave health. CLAT does not ask for NEET." },
    { slug: "uceed", line: "Design. Some IIT campuses take PCB." },
    { slug: "nchm", line: "Hotels. Any stream." },
    { slug: "nda", line: "Army wing. Navy and Air Force want maths." },
  ],
  "not-ca": [
    { slug: "cs", line: "Company Secretary. Law and companies. Not a smaller CA." },
    { slug: "cma", line: "Cost accounting. Factories and costs." },
    { slug: "acca", line: "International papers. Does not let you sign an Indian statutory audit." },
    { slug: "actuary", line: "Only with serious maths. A long apprenticeship." },
    { slug: "cfa", line: "Markets. In the last year of college, not in Class 11." },
    { slug: "frm", line: "Risk, usually in banks. Also not a school exam." },
    { slug: "uscma", line: "The American management accounting course. Read what it does not let you sign." },
    { slug: "bcom-du", line: "The degree. CUET. Cheap, and it keeps every later door open." },
    { slug: "bcom-india", line: "A B.Com outside Delhi, if that city is actually yours." },
    { slug: "eco", line: "Economics. Needs maths. A master’s usually follows." },
    { slug: "bms", line: "BMS at Shaheed Sukhdev. Needs maths." },
    { slug: "bba", line: "NMIMS BBA, if the fee has been discussed." },
    { slug: "finance-ug", line: "NMIMS B.Sc. Finance. Needs maths." },
    { slug: "ipm", line: "Five years at an IIM. Do the fee conversation first." },
    { slug: "law", line: "Five-year law, through CLAT." },
    { slug: "analytics", line: "IIT Madras data science. Needs maths." },
    { slug: "isi", line: "Only if maths is the whole point." },
    { slug: "cat", line: "MBA after the degree." },
    { slug: "govt", line: "UPSC and the other officer exams, after graduation." },
    { slug: "banking", line: "Bank officer, after a degree." },
    { slug: "markets", line: "A licence plus a degree. Not a certificate collection in school." },
    { slug: "teach", line: "Teach accounts or economics. Degree, then B.Ed, then the teacher exam." },
  ],
};

const menus = new Set(["not-eng", "not-mbbs", "not-ca"]);

function clip(text: string): string {
  const one = text.split(". ")[0] ?? text;
  if (one.length <= 180) return one.endsWith(".") ? one : `${one}.`;
  return `${one.slice(0, 177)}…`;
}

export function waysFor(slug: string): Way[] {
  const written = waysIn[slug] ?? worldWays[slug] ?? catalogWays[slug];
  if (written && written.length > 0) return written;
  const path = pathBySlug[slug];
  if (!path) return [];
  const ways: Way[] = [];
  const direct = path.how.slice(0, 4).map((text) => ({ label: clip(text) }));
  if (direct.length > 0) ways.push({ title: "The direct way", steps: direct });
  const alts = path.pair
    .filter((item) => pathBySlug[item])
    .slice(0, 3)
    .map((item) => ({ label: plainOf(item).title, slug: item }));
  if (alts.length > 0) ways.push({ title: "Other ways into a similar life", steps: alts });
  const later = path.now.college[0];
  if (later) ways.push({ title: "If you are already in college", steps: [{ label: clip(later) }] });
  return ways;
}

export function fallbacksFor(slug: string): Fallback[] {
  const own = fallbacksOf[slug] ?? worldFalls[slug] ?? catalogFalls[slug] ?? [];
  if (menus.has(slug)) return own;
  const tag = tagOf(slug);
  const early = tag.buckets.some((bucket) => bucket === "exam12" || bucket === "degree12" || bucket === "withgrad");
  const head: Fallback[] = [];
  if (early && tag.interests.includes("engineering")) {
    head.push({ slug: "not-eng", line: "The parent question, in full: if not engineering, then what?" });
  }
  if (early && tag.interests.includes("medicine")) {
    head.push({ slug: "not-mbbs", line: "The parent question, in full: if not MBBS, then what?" });
  }
  if (early && tag.interests.includes("accounts")) {
    head.push({ slug: "not-ca", line: "The parent question, in full: if not CA, then what?" });
  }
  const extra: Fallback[] = [];
  const path = pathBySlug[slug];
  if (path && head.length + own.length < 4) {
    for (const pair of path.pair) {
      extra.push({ slug: pair, line: plainOf(pair).line });
      if (head.length + own.length + extra.length >= 8) break;
    }
  }
  const seen = new Set<string>([slug]);
  const out: Fallback[] = [];
  for (const item of [...head, ...own, ...extra]) {
    if (seen.has(item.slug) || !pathBySlug[item.slug]) continue;
    seen.add(item.slug);
    out.push(item);
  }
  return out;
}
