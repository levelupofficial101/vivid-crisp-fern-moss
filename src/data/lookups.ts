import { paths } from "@/data/paths";
import { plainOf } from "@/data/simple";
import type { Stream, StreamPick } from "@/data/streams";
import { interestMeta, tagOf, type Interest } from "@/data/tags";

export type Choice = {
  id: string;
  label: string;
  line: string;
  count: number;
};

type Rule = {
  id: string;
  label: string;
  line: string;
  test: (name: string) => boolean;
};

const word = (text: string) => new RegExp(`\\b${text}\\b`, "i");

const examRules: Rule[] = [
  { id: "jee-main", label: "JEE Main", line: "NITs, IIITs, and the ticket to Advanced. PCM.", test: (s) => /jee main/i.test(s) },
  { id: "jee-adv", label: "JEE Advanced", line: "The IIT exam. PCM. You need JEE Main first.", test: (s) => /jee advanced/i.test(s) },
  { id: "bitsat", label: "BITSAT", line: "BITS Pilani, Goa and Hyderabad.", test: (s) => /bitsat/i.test(s) },
  { id: "ugee", label: "UGEE", line: "IIIT Hyderabad’s own exam.", test: (s) => word("ugee").test(s) },
  { id: "viteee", label: "VITEEE", line: "VIT.", test: (s) => /viteee/i.test(s) },
  { id: "met", label: "MET", line: "Manipal engineering.", test: (s) => word("met").test(s) },
  { id: "comedk", label: "COMEDK", line: "Bangalore private engineering colleges.", test: (s) => /comedk/i.test(s) },
  { id: "kcet", label: "KCET", line: "Karnataka engineering. Domicile matters.", test: (s) => word("kcet").test(s) },
  { id: "wbjee", label: "WBJEE", line: "Jadavpur and the other West Bengal colleges.", test: (s) => /wbjee/i.test(s) },
  { id: "mhtcet", label: "MHT-CET", line: "Maharashtra engineering.", test: (s) => /mht[-\s]?cet/i.test(s) },
  { id: "eamcet", label: "EAMCET", line: "Andhra Pradesh and Telangana.", test: (s) => /eamcet|eapcet/i.test(s) },
  { id: "tnea", label: "TNEA", line: "Tamil Nadu. Marks, not a separate entrance.", test: (s) => word("tnea").test(s) },
  { id: "keam", label: "KEAM", line: "Kerala engineering.", test: (s) => word("keam").test(s) },
  { id: "gujcet", label: "GUJCET", line: "Gujarat, including DAIICT.", test: (s) => /gujcet/i.test(s) },
  { id: "ojee", label: "OJEE", line: "Odisha engineering.", test: (s) => word("ojee").test(s) },
  { id: "bcece", label: "BCECE", line: "Bihar engineering.", test: (s) => word("bcece").test(s) },
  { id: "srmjeee", label: "SRMJEEE", line: "SRM.", test: (s) => /srmjeee/i.test(s) },
  { id: "aeee", label: "AEEE", line: "Amrita.", test: (s) => word("aeee").test(s) },
  { id: "kiitee", label: "KIITEE", line: "KIIT.", test: (s) => /kiitee/i.test(s) },
  { id: "nata", label: "NATA", line: "Architecture.", test: (s) => word("nata").test(s) },
  { id: "imu", label: "IMU CET", line: "Merchant navy. Not the Indian Navy.", test: (s) => /imu/i.test(s) },
  { id: "tes", label: "TES", line: "Army technical entry after Class 12. PCM.", test: (s) => word("tes").test(s) },
  { id: "navy12", label: "Navy 10+2 B.Tech", line: "The Navy’s own technical entry. PCM.", test: (s) => /navy 10\+2/i.test(s) },
  { id: "iat", label: "IISER Aptitude Test", line: "IISERs, and a channel into IISc. Science, not commerce.", test: (s) => /iiser/i.test(s) },
  { id: "nest", label: "NEST", line: "NISER and CEBS.", test: (s) => word("nest").test(s) },
  { id: "neet", label: "NEET", line: "MBBS and the other medical seats. PCB.", test: (s) => /neet/i.test(s) && !/neet[-\s]?pg/i.test(s) },
  { id: "neetpg", label: "NEET-PG", line: "After MBBS. INI-CET is the other paper.", test: (s) => /neet[-\s]?pg|ini-cet/i.test(s) },
  { id: "aiims-para", label: "AIIMS paramedical", line: "Allied health. Not the MBBS form.", test: (s) => /aiims paramedical/i.test(s) },
  { id: "gpat", label: "GPAT", line: "Pharmacy master’s, after B.Pharm.", test: (s) => word("gpat").test(s) },
  { id: "nfat", label: "NFAT", line: "National Forensic Sciences University.", test: (s) => word("nfat").test(s) },
  { id: "gate", label: "GATE", line: "After an engineering degree. M.Tech and PSUs.", test: (s) => word("gate").test(s) },
  { id: "jam", label: "IIT JAM", line: "An IIT master’s after a B.Sc.", test: (s) => word("jam").test(s) },
  { id: "ese", label: "ESE", line: "Engineering services, after a B.Tech.", test: (s) => word("ese").test(s) },
  { id: "barc", label: "BARC", line: "The atomic research training scheme.", test: (s) => /barc/i.test(s) },
  { id: "isro", label: "ISRO", line: "Scientist entry, after a degree.", test: (s) => /isro/i.test(s) },
  { id: "jest", label: "JEST and TIFR", line: "Research, after a science degree.", test: (s) => /jest|tifr/i.test(s) },
  { id: "gatb", label: "GAT-B", line: "Biotechnology master’s, after a B.Sc.", test: (s) => /gat-b/i.test(s) },
  { id: "dgca", label: "DGCA", line: "Pilot or aircraft maintenance. Not a college rank list.", test: (s) => /dgca/i.test(s) },
  { id: "ndri", label: "NDRI", line: "Dairy technology at Karnal.", test: (s) => /ndri/i.test(s) },
  { id: "aiish", label: "AIISH", line: "Speech and hearing.", test: (s) => /aiish/i.test(s) },
  { id: "pharmd", label: "Pharm.D entrance", line: "The six-year pharmacy degree.", test: (s) => /pharm\.?d/i.test(s) },
  { id: "ncert", label: "NCERT CEE", line: "The teaching degree at the RIEs.", test: (s) => /ncert/i.test(s) },
  { id: "leet", label: "LEET", line: "Second-year B.Tech after a diploma.", test: (s) => /leet|jeecup/i.test(s) },
  { id: "aai", label: "AAI ATC", line: "Air traffic control, after a degree.", test: (s) => /\baai\b|\batc\b/i.test(s) },
  { id: "uceed", label: "UCEED", line: "B.Des at the IITs. Commerce can sit this.", test: (s) => word("uceed").test(s) },
  { id: "nid", label: "NID DAT", line: "National Institute of Design.", test: (s) => word("dat").test(s) || s.toLowerCase().includes("nid") },
  { id: "nift", label: "NIFT", line: "Fashion, textile, leather, accessory, knitwear, communication.", test: (s) => word("nift").test(s) },
  { id: "fddi", label: "FDDI AIST", line: "Footwear and leather design.", test: (s) => /fddi|\baist\b/i.test(s) },
  { id: "iimb-dbe", label: "IIM Bangalore BBA", line: "The online digital-business degree. Not CAT.", test: (s) => /iimb dbe|dbe entrance/i.test(s) },
  { id: "iimk-bms", label: "IIM Kozhikode BMS", line: "Their undergraduate aptitude test. Not IPMAT.", test: (s) => /iimk bms/i.test(s) },
  { id: "nism", label: "NISM", line: "Market licences. One series, not a degree.", test: (s) => /\bnism\b/i.test(s) },
  { id: "nchm", label: "NCHM JEE", line: "Hotel management at the government IHMs.", test: (s) => s.toLowerCase().includes("nchm") },
  { id: "cuet-pg", label: "CUET-PG", line: "After graduation. Law at Delhi University, DSE, and others.", test: (s) => /cuet[-\s]?pg/i.test(s) },
  { id: "cuet", label: "CUET", line: "After Class 12. Delhi University and other universities.", test: (s) => /cuet/i.test(s) && !/cuet[-\s]?pg/i.test(s) },
  { id: "ipmat-indore", label: "IPMAT Indore", line: "Five-year IIM Indore course.", test: (s) => /ipmat indore/i.test(s) },
  { id: "ipmat-rohtak", label: "IPMAT Rohtak", line: "A different paper from Indore.", test: (s) => /ipmat rohtak/i.test(s) },
  { id: "jipmat", label: "JIPMAT", line: "IIM Jammu and IIM Bodh Gaya.", test: (s) => word("jipmat").test(s) },
  { id: "npat", label: "NPAT", line: "NMIMS. Not Narsee Monjee College.", test: (s) => word("npat").test(s) },
  { id: "set", label: "SET", line: "Symbiosis Entrance Test.", test: (s) => word("set").test(s) },
  { id: "christ", label: "Christ entrance", line: "Christ University, Bengaluru.", test: (s) => /christ/i.test(s) },
  { id: "clat", label: "CLAT", line: "Five-year law at the NLUs.", test: (s) => word("clat").test(s) },
  { id: "ailet", label: "AILET", line: "NLU Delhi. Not CLAT.", test: (s) => word("ailet").test(s) },
  { id: "slat", label: "SLAT", line: "Symbiosis law schools.", test: (s) => word("slat").test(s) },
  { id: "ca", label: "CA Foundation", line: "ICAI. The first CA exam.", test: (s) => /ca foundation|icai/i.test(s) },
  { id: "cseet", label: "CSEET", line: "The first Company Secretary exam.", test: (s) => word("cseet").test(s) },
  { id: "cma", label: "CMA Foundation", line: "Cost and management accounting. Not CA.", test: (s) => /cma foundation|icmai/i.test(s) },
  { id: "acet", label: "ACET", line: "The first actuarial exam in India.", test: (s) => word("acet").test(s) },
  { id: "nda", label: "NDA", line: "Armed forces at 18. Army wing takes commerce.", test: (s) => word("nda").test(s) },
  { id: "ipu", label: "IPU CET", line: "Guru Gobind Singh Indraprastha University.", test: (s) => /ipu/i.test(s) },
  { id: "jamia", label: "Jamia entrance", line: "Jamia Millia Islamia’s own papers.", test: (s) => /jamia/i.test(s) },
  { id: "isi", label: "ISI admission test", line: "Statistics and maths. Very hard.", test: (s) => /isi admission|isi test/i.test(s) },
  { id: "cmi", label: "CMI entrance", line: "Chennai Mathematical Institute.", test: (s) => word("cmi").test(s) },
  { id: "iitm", label: "IIT Madras qualifier", line: "Online BS degrees. Not JEE.", test: (s) => /iit madras/i.test(s) },
  { id: "iitj", label: "IIT Jodhpur qualifier", line: "Off-campus applied AI. Maths. Not JEE Advanced.", test: (s) => /iit jodhpur/i.test(s) },
  { id: "iitg", label: "IIT Guwahati qualifier", line: "Online data science and AI. The test is mathematics.", test: (s) => /iit guwahati/i.test(s) },
  { id: "iitp", label: "IIT Patna CET", line: "Continuing education. Not JoSAA.", test: (s) => /iit patna cet|iitp-sat/i.test(s) },
  { id: "gcet", label: "GCET", line: "GIPE, Pune.", test: (s) => word("gcet").test(s) },
  { id: "cat", label: "CAT", line: "MBA after a degree. The IIM exam.", test: (s) => word("cat").test(s) },
  { id: "xat", label: "XAT", line: "XLRI and other colleges.", test: (s) => word("xat").test(s) },
  { id: "snap", label: "SNAP", line: "Symbiosis MBA colleges.", test: (s) => word("snap").test(s) },
  { id: "nmat", label: "NMAT", line: "NMIMS MBA.", test: (s) => word("nmat").test(s) },
  { id: "micat", label: "MICAT", line: "MICA, for communication and advertising.", test: (s) => word("micat").test(s) },
  { id: "cmat", label: "CMAT", line: "MBA colleges that are not the IIMs.", test: (s) => word("cmat").test(s) },
  { id: "mahcet", label: "MAH-MBA CET", line: "JBIMS and other Mumbai MBA seats.", test: (s) => /mah-mba|mms cet|mah cet/i.test(s) },
  { id: "gmat", label: "GMAT", line: "ISB and some other postgraduate courses.", test: (s) => word("gmat").test(s) },
  { id: "rbi", label: "RBI Grade B", line: "Reserve Bank, after a degree.", test: (s) => /rbi grade b/i.test(s) },
  { id: "sebi", label: "SEBI Grade A", line: "The markets regulator.", test: (s) => /sebi/i.test(s) },
  { id: "sbipo", label: "SBI PO", line: "State Bank officer, after a degree.", test: (s) => /sbi po/i.test(s) },
  { id: "ibps", label: "IBPS PO", line: "Public-sector bank officer.", test: (s) => /ibps/i.test(s) },
  { id: "ssc", label: "SSC CGL", line: "Central government posts, including audit.", test: (s) => /ssc cgl|cgl/i.test(s) },
  { id: "upsc", label: "UPSC CSE", line: "Civil services. Not CAPF, and not NDA.", test: (s) => /upsc cse|civil service/i.test(s) },
  { id: "ies", label: "Indian Economic Service", line: "After an economics master’s.", test: (s) => /upsc ies|\bies\b/i.test(s) },
  { id: "cds", label: "CDS", line: "Armed forces academies, after a degree.", test: (s) => word("cds").test(s) },
  { id: "nabard", label: "NABARD Grade A", line: "Rural and development banking.", test: (s) => /nabard/i.test(s) },
  { id: "lic", label: "LIC AAO", line: "Insurance officer.", test: (s) => /lic aao/i.test(s) },
  { id: "ctet", label: "CTET", line: "School teaching eligibility.", test: (s) => word("ctet").test(s) },
  { id: "net", label: "UGC NET", line: "After a master’s, for college teaching.", test: (s) => /ugc net|\bnet\b/i.test(s) },
  { id: "afcat", label: "AFCAT", line: "Air Force after a degree.", test: (s) => word("afcat").test(s) },
  { id: "capf", label: "CAPF", line: "Assistant Commandant. UPSC, but not the IAS exam.", test: (s) => word("capf").test(s) },
];

const pcm: Stream[] = ["pcm"];
const pcb: Stream[] = ["pcb"];
const science: Stream[] = ["pcm", "pcb"];
const mathsStreams: Stream[] = ["commerce", "pcm"];
const allStreams: Stream[] = ["commerce", "pcm", "pcb"];

const examStreams: Record<string, Stream[]> = {
  "jee-main": pcm,
  "jee-adv": pcm,
  bitsat: pcm,
  ugee: pcm,
  viteee: pcm,
  met: pcm,
  comedk: pcm,
  kcet: pcm,
  wbjee: pcm,
  mhtcet: pcm,
  eamcet: pcm,
  tnea: pcm,
  keam: pcm,
  gujcet: pcm,
  ojee: pcm,
  bcece: pcm,
  srmjeee: pcm,
  aeee: pcm,
  kiitee: pcm,
  nata: pcm,
  imu: pcm,
  tes: pcm,
  navy12: pcm,
  iat: science,
  nest: science,
  neet: pcb,
  neetpg: pcb,
  "aiims-para": pcb,
  gate: pcm,
  jam: science,
  ese: pcm,
  barc: pcm,
  isro: pcm,
  jest: pcm,
  gatb: science,
  dgca: pcm,
  ndri: pcm,
  leet: pcm,
  aai: pcm,
  gpat: science,
  nfat: science,
  pharmd: science,
  acet: mathsStreams,
  isi: mathsStreams,
  cmi: mathsStreams,
  "ipmat-indore": mathsStreams,
  "ipmat-rohtak": mathsStreams,
  jipmat: mathsStreams,
  iitj: mathsStreams,
  iitg: allStreams,
  iitp: science,
};

function shownFor(allowed: Stream[] | undefined, pick?: StreamPick): boolean {
  if (!allowed || !pick) return true;
  if (pick === "pcmb") return allowed.includes("pcm") || allowed.includes("pcb");
  return allowed.includes(pick);
}

function examBlob(slug: string): string {
  const path = paths.find((item) => item.slug === slug);
  if (!path) return "";
  return path.exams.map((exam) => exam.name).join(" | ");
}

const slugsByExam = new Map<string, string[]>();
for (const rule of examRules) slugsByExam.set(rule.id, []);
for (const path of paths) {
  const blob = examBlob(path.slug);
  for (const rule of examRules) {
    if (rule.test(blob)) slugsByExam.get(rule.id)?.push(path.slug);
  }
}

export function examChoices(query: string, allow?: ReadonlySet<string>, pick?: StreamPick): Choice[] {
  const q = query.trim().toLowerCase();
  return examRules
    .filter((rule) => shownFor(examStreams[rule.id], pick))
    .map((rule) => ({
      id: rule.id,
      label: rule.label,
      line: rule.line,
      count: (slugsByExam.get(rule.id) ?? []).filter((slug) => !allow || allow.has(slug)).length,
    }))
    .filter((item) => item.count > 0)
    .filter((item) => !q || `${item.label} ${item.line}`.toLowerCase().includes(q));
}

export function slugsForExam(id: string, allow?: ReadonlySet<string>): string[] {
  const slugs = slugsByExam.get(id) ?? [];
  return allow ? slugs.filter((slug) => allow.has(slug)) : slugs;
}

type CollegeRule = { id: string; label: string; line: string; test: (blob: string) => boolean };

const colleges: CollegeRule[] = [
  { id: "sukhdev", label: "Shaheed Sukhdev", line: "Delhi University", test: (s) => /sukhdev|sscbs/.test(s) },
  { id: "srcc", label: "SRCC", line: "Delhi University", test: (s) => /srcc|shri ram college/.test(s) },
  { id: "hindu", label: "Hindu College", line: "Delhi University", test: (s) => /hindu college/.test(s) },
  { id: "hansraj", label: "Hansraj College", line: "Delhi University", test: (s) => /hansraj/.test(s) },
  { id: "miranda", label: "Miranda House", line: "Delhi University", test: (s) => /miranda/.test(s) },
  { id: "lsr", label: "Lady Shri Ram", line: "Delhi University", test: (s) => /lady shri ram|\blsr\b/.test(s) },
  { id: "stephens", label: "St. Stephen’s", line: "Delhi University", test: (s) => /stephen/.test(s) },
  { id: "kmc", label: "Kirori Mal", line: "Delhi University", test: (s) => /kirori mal/.test(s) },
  { id: "ramjas", label: "Ramjas", line: "Delhi University", test: (s) => /ramjas/.test(s) },
  { id: "du", label: "Delhi University", line: "CUET, then the college list", test: (s) => /delhi university|\bdu\b/.test(s) },
  { id: "nmims", label: "NMIMS", line: "Narsee Monjee Institute. NPAT or NMAT.", test: (s) => /nmims/.test(s) },
  { id: "nmcollege", label: "Narsee Monjee College", line: "Mumbai. Not NMIMS.", test: (s) => /narsee monjee college|nm college/.test(s) },
  { id: "hr", label: "HR College", line: "Mumbai", test: (s) => /hr college|h\.r\./.test(s) },
  { id: "mithibai", label: "Mithibai", line: "Mumbai", test: (s) => /mithibai/.test(s) },
  { id: "xavier", label: "St. Xavier’s", line: "Kolkata and other campuses named on the page", test: (s) => /xavier/.test(s) },
  { id: "christ", label: "Christ University", line: "Bengaluru", test: (s) => /christ/.test(s) },
  { id: "symbiosis", label: "Symbiosis", line: "SET, SNAP or SLAT", test: (s) => /symbiosis|scms/.test(s) },
  { id: "spjain", label: "SP Jain", line: "The undergraduate school and SPJIMR are different", test: (s) => /sp jain|spjain|spjimr/.test(s) },
  { id: "isb", label: "ISB", line: "After a degree", test: (s) => /\bisb\b/.test(s) },
  { id: "iimindore", label: "IIM Indore", line: "IPM and the MBA", test: (s) => /iim indore/.test(s) },
  { id: "iima", label: "IIM Ahmedabad", line: "MBA, through CAT", test: (s) => /iim ahmedabad/.test(s) },
  { id: "fms", label: "FMS", line: "Delhi University MBA", test: (s) => /\bfms\b/.test(s) },
  { id: "xlri", label: "XLRI", line: "Jamshedpur. XAT.", test: (s) => /xlri/.test(s) },
  { id: "jbims", label: "JBIMS", line: "Mumbai. Maharashtra CET.", test: (s) => /jbims/.test(s) },
  { id: "iift", label: "IIFT", line: "Delhi and Kolkata", test: (s) => /iift/.test(s) },
  { id: "ashoka", label: "Ashoka University", line: "Sonepat", test: (s) => /ashoka/.test(s) },
  { id: "flame", label: "FLAME", line: "Pune", test: (s) => /flame/.test(s) },
  { id: "gipe", label: "GIPE", line: "Pune", test: (s) => /gipe/.test(s) },
  { id: "mse", label: "Madras School of Economics", line: "Chennai", test: (s) => /madras school|\bmse\b/.test(s) },
  { id: "isi", label: "ISI", line: "Kolkata, Bengaluru, Delhi", test: (s) => /\bisi\b/.test(s) },
  { id: "cmi", label: "CMI", line: "Chennai", test: (s) => /\bcmi\b/.test(s) },
  { id: "nid", label: "NID", line: "Ahmedabad and the newer NIDs", test: (s) => /\bnid\b/.test(s) },
  { id: "nift", label: "NIFT", line: "Every campus in the brochure", test: (s) => /nift/.test(s) },
  { id: "fddi", label: "FDDI", line: "Footwear and leather. Noida and the other campuses", test: (s) => /fddi/.test(s) },
  { id: "iigj", label: "IIGJ", line: "Jewellery", test: (s) => /iigj/.test(s) },
  { id: "iicd", label: "IICD", line: "Jaipur. Craft and jewellery", test: (s) => /iicd/.test(s) },
  { id: "iimb", label: "IIM Bangalore", line: "The MBA, and the online BBA", test: (s) => /iim bangalore|iimb/.test(s) },
  { id: "iimk", label: "IIM Kozhikode", line: "The BMS, and the MBA later", test: (s) => /iim kozhikode|iimk/.test(s) },
  { id: "igrua", label: "IGRUA", line: "The government flying academy", test: (s) => /igrua/.test(s) },
  { id: "iitb", label: "IIT Bombay", line: "Design, through UCEED", test: (s) => /iit bombay/.test(s) },
  { id: "iitd", label: "IIT Delhi", line: "Design, through UCEED", test: (s) => /iit delhi/.test(s) },
  { id: "iitm", label: "IIT Madras", line: "Online data science degree", test: (s) => /iit madras/.test(s) },
  { id: "iitg", label: "IIT Guwahati", line: "Online data science and AI", test: (s) => /iit guwahati/.test(s) },
  { id: "iitp", label: "IIT Patna", line: "CET bachelor’s. Not the JEE B.Tech", test: (s) => /iit patna/.test(s) },
  { id: "pusa", label: "IHM Pusa", line: "Delhi. NCHM JEE.", test: (s) => /pusa|ihm /.test(s) },
  { id: "jamia", label: "Jamia Millia Islamia", line: "Delhi", test: (s) => /jamia/.test(s) },
  { id: "ipu", label: "IP University", line: "Delhi", test: (s) => /\bipu\b|indraprastha/.test(s) },
  { id: "dse", label: "Delhi School of Economics", line: "After a degree", test: (s) => /delhi school of economics|\bdse\b/.test(s) },
  { id: "dfs", label: "Department of Financial Studies", line: "Delhi University. Not FMS.", test: (s) => /financial studies|\bdfs\b/.test(s) },
  { id: "igidr", label: "IGIDR", line: "Mumbai", test: (s) => /igidr/.test(s) },
  { id: "tiss", label: "TISS", line: "Mumbai and other campuses", test: (s) => /tiss/.test(s) },
  { id: "irma", label: "IRMA", line: "Anand", test: (s) => /irma/.test(s) },
  { id: "iifm", label: "IIFM", line: "Bhopal", test: (s) => /iifm/.test(s) },
  { id: "nibm", label: "NIBM", line: "Pune", test: (s) => /nibm/.test(s) },
  { id: "mica", label: "MICA", line: "Ahmedabad", test: (s) => /mica/.test(s) },
  { id: "mdi", label: "MDI", line: "Gurgaon", test: (s) => /\bmdi\b/.test(s) },
  { id: "loyola", label: "Loyola", line: "Chennai", test: (s) => /loyola/.test(s) },
  { id: "nlsiu", label: "NLSIU", line: "Bengaluru. CLAT.", test: (s) => /nlsiu/.test(s) },
  { id: "nlud", label: "NLU Delhi", line: "AILET, not CLAT", test: (s) => /nlu delhi/.test(s) },
  { id: "jgls", label: "Jindal Global Law School", line: "Sonipat", test: (s) => /jgls|jindal/.test(s) },
  { id: "iimc", label: "IIMC", line: "Delhi. After a degree.", test: (s) => /iimc/.test(s) },
  { id: "krea", label: "Krea", line: "Sri City", test: (s) => /krea/.test(s) },
  { id: "snu", label: "Shiv Nadar", line: "Greater Noida", test: (s) => /shiv nadar/.test(s) },
  { id: "icai", label: "ICAI", line: "CA. Not a college.", test: (s) => /icai/.test(s) },
  { id: "manipal", label: "Manipal", line: "Engineering and health sciences", test: (s) => /manipal|wgsha/.test(s) },
  { id: "bits", label: "BITS", line: "Pilani, Goa, Hyderabad", test: (s) => /bits/.test(s) },
  { id: "iith", label: "IIIT Hyderabad", line: "UGEE, and sometimes JEE", test: (s) => /iiit hyderabad/.test(s) },
  { id: "aiims", label: "AIIMS", line: "Through NEET now", test: (s) => /aiims/.test(s) },
  { id: "afmc", label: "AFMC", line: "Pune. NEET, then their screening", test: (s) => /afmc/.test(s) },
  { id: "cmc", label: "CMC Vellore", line: "NEET, then their process", test: (s) => /cmc vellore|\bcmc\b/.test(s) },
  { id: "iiser", label: "IISER", line: "The aptitude test", test: (s) => /iiser/.test(s) },
  { id: "iisc", label: "IISc", line: "Bengaluru. Research", test: (s) => /iisc/.test(s) },
  { id: "niser", label: "NISER", line: "NEST", test: (s) => /niser/.test(s) },
  { id: "jadavpur", label: "Jadavpur", line: "WBJEE", test: (s) => /jadavpur/.test(s) },
  { id: "dtu", label: "DTU", line: "Delhi. JAC, from JEE Main", test: (s) => /\bdtu\b/.test(s) },
  { id: "nsut", label: "NSUT", line: "Delhi. JAC", test: (s) => /nsut/.test(s) },
  { id: "nfsu", label: "NFSU", line: "Forensic science", test: (s) => /nfsu|forensic/.test(s) },
  { id: "nit", label: "NITs", line: "JEE Main", test: (s) => /\bnits?\b/.test(s) },
  { id: "vit", label: "VIT", line: "VITEEE", test: (s) => /\bvit\b/.test(s) },
  { id: "iist", label: "IIST", line: "ISRO’s college. JEE Advanced", test: (s) => /iist/.test(s) },
  { id: "aiish", label: "AIISH", line: "Mysuru. Speech and hearing", test: (s) => /aiish/.test(s) },
  { id: "ndri", label: "NDRI", line: "Karnal. Dairy technology", test: (s) => /ndri/.test(s) },
  { id: "daiict", label: "DAIICT", line: "Gandhinagar", test: (s) => /daiict/.test(s) },
  { id: "anna", label: "Anna University", line: "TNEA", test: (s) => /anna university/.test(s) },
  { id: "spa", label: "SPA", line: "Planning and architecture", test: (s) => /school of planning|\bspa\b/.test(s) },
  { id: "irwin", label: "Lady Irwin", line: "Delhi. Nutrition and home science", test: (s) => /lady irwin/.test(s) },
  { id: "rie", label: "RIE", line: "NCERT. The teaching degree", test: (s) => /regional institute of education|\brie\b/.test(s) },
  { id: "nirtar", label: "NIRTAR", line: "Cuttack. Occupational therapy", test: (s) => /nirtar/.test(s) },
  { id: "ict", label: "ICT Mumbai", line: "Chemical technology. MHT-CET", test: (s) => /\bict\b/.test(s) },
];

function collegeBlob(slug: string): string {
  const path = paths.find((item) => item.slug === slug);
  if (!path) return "";
  const plain = plainOf(slug);
  return [path.name, plain.title, plain.line, plain.words, ...path.places.map((place) => `${place.name} ${place.where}`)]
    .join(" | ")
    .toLowerCase();
}

const slugsByCollege = new Map<string, string[]>();
for (const rule of colleges) {
  const hits = paths.filter((path) => rule.test(collegeBlob(path.slug))).map((path) => path.slug);
  slugsByCollege.set(rule.id, hits);
}

const collegeStreams: Record<string, Stream[]> = {
  bits: pcm,
  iith: pcm,
  iiser: science,
  iisc: science,
  niser: science,
  jadavpur: pcm,
  dtu: pcm,
  nsut: pcm,
  nit: pcm,
  vit: pcm,
  iist: pcm,
  ndri: pcm,
  anna: pcm,
  ict: pcm,
  daiict: pcm,
  isi: mathsStreams,
  iitp: science,
  aiims: pcb,
  afmc: pcb,
  cmc: pcb,
  aiish: pcb,
  nirtar: pcb,
};

export function collegeChoices(query: string, allow?: ReadonlySet<string>, pick?: StreamPick): Choice[] {
  const q = query.trim().toLowerCase();
  return colleges
    .filter((rule) => shownFor(collegeStreams[rule.id], pick))
    .map((rule) => ({
      id: rule.id,
      label: rule.label,
      line: rule.line,
      count: (slugsByCollege.get(rule.id) ?? []).filter((slug) => !allow || allow.has(slug)).length,
    }))
    .filter((item) => item.count > 0)
    .filter((item) => !q || `${item.label} ${item.line}`.toLowerCase().includes(q));
}

export function slugsForCollege(id: string, allow?: ReadonlySet<string>): string[] {
  const slugs = slugsByCollege.get(id) ?? [];
  return allow ? slugs.filter((slug) => allow.has(slug)) : slugs;
}

export function interestChoices(query: string, allow?: ReadonlySet<string>): Choice[] {
  const q = query.trim().toLowerCase();
  return interestMeta
    .filter((item) => item.id !== "all")
    .map((item) => ({
      id: item.id,
      label: item.label,
      line: "Courses tagged with this interest",
      count: paths.filter(
        (path) =>
          (!allow || allow.has(path.slug)) && tagOf(path.slug).interests.includes(item.id as Interest),
      ).length,
    }))
    .filter((item) => item.count > 0)
    .filter((item) => !q || item.label.toLowerCase().includes(q));
}

export function slugsForInterest(id: string, allow?: ReadonlySet<string>): string[] {
  return paths
    .filter((path) => (!allow || allow.has(path.slug)) && tagOf(path.slug).interests.includes(id as Interest))
    .map((path) => path.slug);
}

export function courseChoices(query: string, allow?: ReadonlySet<string>): Choice[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return paths
    .filter((path) => !allow || allow.has(path.slug))
    .map((path) => {
      const plain = plainOf(path.slug);
      return { id: path.slug, label: plain.title, line: plain.line, count: 1 };
    })
    .filter((item) => `${item.label} ${item.line}`.toLowerCase().includes(q))
    .slice(0, 12);
}
