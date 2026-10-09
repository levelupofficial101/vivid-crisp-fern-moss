import { catalogSimple } from "@/data/catalog";
import { extraSimple } from "@/data/extra-paths";
import { gapSimple } from "@/data/gap-paths";
import { hiddenSimple } from "@/data/hidden-paths";
import { quietSimple } from "@/data/quiet-paths";
import { scienceSimple } from "@/data/science-paths";
import { worldSimple } from "@/data/world-paths";

export type Simple = {
  title: string;
  line: string;
  also: string;
  marks: string;
  exam: string;
  job: string;
  words: string;
};

export const simpleBySlug: Record<string, Simple> = {
  bms: {
    title: "BMS at Shaheed Sukhdev",
    line: "Bachelor of Management Studies at Shaheed Sukhdev College, Delhi University. You need maths.",
    also: "BBA (FIA) and Business Economics are different courses on the same campus. They have their own pages.",
    marks: "Class 11 marks are not used. Pass Class 12, and you must have maths. Your board percentage does not decide the seat.",
    exam: "The exam is CUET, the college entrance test after Class 12. You give one language, maths, and a general test. The general test is GK and puzzles, not accounts.",
    job: "Work in a company, in finance, or do an MBA later. Starting pay at Sukhdev is often around 8 to 15 lakh a year. That is a rough range, not a job offer.",
    words: "sscbs sukhdev bms bba fia bbe cuet delhi university",
  },
  eco: {
    title: "B.A. (Hons) Economics, Delhi University",
    line: "Economics honours at Delhi University. SRCC, Hindu, Hansraj, Miranda, LSR, St. Stephen’s. Not a fancy name for B.Com.",
    also: "You need maths. St. Stephen’s has an extra step after CUET. Ashoka, GIPE and Madras School of Economics are different colleges, with their own pages.",
    marks: "Class 11 marks are not on the form. Pass Class 12 with maths. A very high board percentage does not get you the seat by itself.",
    exam: "For Delhi University, the exam is CUET: one language, maths, and two other subjects. St. Stephen's also has its own extra step. Ashoka has a separate form.",
    job: "Many students do a master's after this, such as at Delhi School of Economics. A job straight after the degree is often modest. The better pay usually comes after the master's.",
    words: "eco economics honours srcc stephen hindu lsr dse cuet",
  },
  ipm: {
    title: "Five-year IIM course (IPM)",
    line: "You join an IIM after Class 12 and stay for five years. The fee is high.",
    also: "IPM means Integrated Programme in Management. It ends with an MBA from that IIM.",
    marks: "You must pass Class 10 and Class 12. IIM Indore often has no minimum percentage. IIM Rohtak and some others still ask about 60% in both (about 55% for SC and ST). There is an age limit, usually under 20. SC, ST, and students with a disability often get about five extra years.",
    exam: "There are separate papers: IPMAT Indore, IPMAT Rohtak, and JIPMAT for a few other colleges. One coaching test series does not cover all of them. The paper is fast maths and English.",
    job: "You leave with an IIM MBA. Fees over five years often run into the tens of lakhs. Talk about the money at home before you buy mock tests.",
    words: "ipm ipmat iim indore rohtak jipmat integrated",
  },
  actuary: {
    title: "Actuary",
    line: "You price risk, mostly for insurance. The Institute of Actuaries of India exams are the career. A college degree sits beside them. It does not replace them.",
    also: "This is not a three-year course. Associate is 10 subjects, often 4 to 6 years. Fellow adds specialist papers, a seminar, and 3 years of work, often 6 to 10 years from the start. Many people stop. The ones who finish are scarce and well paid.",
    marks: "Pass Class 12 with English. You can sit ACET while you are appearing. Maths is not always written as compulsory, and the papers are maths. Without maths, do not start. There is no board-percentage cutoff for ACET.",
    exam: "First, ACET: about 3 hours, 70 questions, maths, statistics, data, English and logic, pass mark 50%, no negative marking. That only makes you a student member. Then Core Principles, seven subjects: CS1, CS2, CM1, CM2, CB1, CB2, CB3. CS and CM have a written paper and a practical in Excel or R. Then Core Practices, three subjects: CP1, CP2, CP3. Those ten make you an Associate. Fellow needs two Specialist Principles, one Specialist Advanced, the India Fellowship Seminar, and three years of actuarial work. Diets run through the year. Budget a few hundred hours of study for each subject, on top of college. The 2026 policy is merging some business and communication papers and adding a data subject later. The syllabus page on actuariesindia.org wins.",
    job: "Pricing, reserving, pensions, or risk in an insurer or a consultancy. A student with a few papers often starts around 6 to 12 lakh. ACET alone pays nothing. Fellowship is the long money, and it is years away.",
    words: "actuary acet iai actuarial insurance fellow associate cs1 cm1 years",
  },
  analytics: {
    title: "IIT Madras BS in Data Science",
    line: "The online bachelor’s from IIT Madras in Data Science and Applications. One named degree. You need maths.",
    also: "It is not a campus in Chennai. You study from home. A regular B.Sc. Statistics seat at Delhi University often wants science subjects. Do not count on that.",
    marks: "Pass Class 12 with maths. A regular B.Sc. Statistics seat at many universities also wants science subjects from school. Read that line before you count on it.",
    exam: "IIT Madras runs a qualifier through the year. Any board can try. It is not CUET. If you want a campus statistics degree, read that college’s subject rule before you apply.",
    job: "Analyst roles in companies, or a master's later. The degree name alone does not get you hired. You need to be able to work with data.",
    words: "analytics data science statistics iit madras bs",
  },
  isi: {
    title: "ISI (very hard maths)",
    line: "Indian Statistical Institute, and a similar college called CMI. The exam is far above school maths.",
    also: "Most commerce students should keep a normal plan and treat this as a long shot.",
    marks: "You need maths in Class 12. Your board percentage is not what gets you in. The entrance paper is.",
    exam: "ISI and CMI have their own written tests. They are not CUET.",
    job: "Research, statistics, and very strong analytics roles if you get in. If you do not, your other applications should already be filled.",
    words: "isi cmi indian statistical institute chennai mathematical",
  },
  ca: {
    title: "CA (Chartered Accountant)",
    line: "The Indian chartered accountancy course, from ICAI. You can start after Class 12.",
    also: "Do a college degree along with it. CA is not a substitute for a campus.",
    marks: "You need to pass Class 12. There is no minimum percentage on the current Foundation route. Old sites still say 50%. That rule is out of date. Check ICAI in the month you register.",
    exam: "The first exam is CA Foundation. After that: Intermediate, then Final, plus articleship (paid training in a firm). Direct entry after graduation is a different route, with its own rules.",
    job: "Audit, tax, accounts, and finance jobs. Pay jumps after you qualify, not in the first year. Many students work in a CA firm while they study.",
    words: "ca chartered accountant icai foundation articleship",
  },
  cs: {
    title: "Company Secretary (CS)",
    line: "You look after company law, board meetings, and filings. This is not a job buying and selling shares.",
    also: "The body is ICSI. Do a college degree beside it.",
    marks: "Pass Class 12. The percentage is not the filter for the current start, CSEET. Check ICSI when you register, not a coaching poster.",
    exam: "After Class 12 you give CSEET, then the Executive and Professional stages. Students who already have a degree can often skip CSEET and start at Executive.",
    job: "Work in a company's secretarial team, a law-and-compliance role, or a CS firm. It pairs well with law or with B.Com.",
    words: "cs company secretary icsi cseet executive",
  },
  cma: {
    title: "CMA (cost accountant)",
    line: "You learn what a product, a service, or a factory actually costs. The body is ICMAI.",
    also: "The old name was cost accountant. On forms it is CMA.",
    marks: "Pass Class 12. Foundation does not ask for a high percentage. Confirm it on ICMAI's site when you register.",
    exam: "CMA Foundation, then Intermediate, then Final. Do a degree along with the papers.",
    job: "Costing, accounts, and finance roles in companies and factories. It is a solid course. It is not a shortcut around CA if you wanted CA.",
    words: "cma icmai icwa cost management accountant",
  },
  acca: {
    title: "ACCA (UK accounting)",
    line: "A British accounting qualification you can start from India. The fee is charged in pounds.",
    also: "It does not let you sign an Indian statutory audit the way a CA does.",
    marks: "For direct entry after Class 12, the usual India rule is 65% in English and 65% in maths or accounts, and 50% in the other subjects. Miss that and you can still start on a lower route, Foundations in Accountancy. Check ACCA's own page before you pay.",
    exam: "ACCA's own papers, sat at centres in Indian cities. Keep a B.Com going. Some college subjects can exempt you from papers. Use their calculator, not a counsellor's guess.",
    job: "Reporting and accounts jobs in companies that use international rules, including many offices in Bengaluru, Hyderabad, and Pune. Early pay in India is often around 6 to 12 lakh once you are well into the papers. A Dubai salary in an ad is an ad.",
    words: "acca uk ifrs fia english",
  },
  "bcom-du": {
    title: "B.Com at Delhi University",
    line: "B.Com Honours in Delhi University, including SRCC. The seat comes from CUET, not from board marks alone.",
    also: "A 98% in the board exam does not admit you by itself.",
    marks: "Class 11 marks are not used. Pass Class 12. Maths is not compulsory for B.Com, but if you have it you get a second way to be scored.",
    exam: "CUET. Delhi University takes the better of two combinations: language plus maths plus two subjects, or language plus accountancy plus two subjects. After the score, you fill a second form called CSAS. Missing that form can lose the seat.",
    job: "A B.Com from a strong college is the base. Then CA, CFA, an MBA, or a job in accounts and finance. The college name helps. It does not finish the career.",
    words: "bcom b.com honours srcc hindu hansraj du delhi university cuet csas",
  },
  "bcom-india": {
    title: "Christ, Xavier’s, Loyola, HR",
    line: "These are separate colleges, not one course. Christ has its own entrance. Loyola and St. Xavier’s Kolkata use their own rules. HR, NM College and Mithibai are mostly Maharashtra board seats.",
    also: "Each of those colleges also has its own page. Do not pick a city from a poster and call it a plan.",
    marks: "Pass Class 12. Each university then uses its own rule: an entrance test, or a merit list of its own board.",
    exam: "There is no single national exam for every B.Com. Loyola and MCC in Chennai, Christ, St. Xavier's Kolkata, and state universities all differ. Read that college's current notice.",
    job: "Same family of jobs as any B.Com: accounts, finance, family business, or a professional course beside the degree. The city and the college change the first job more than the syllabus does.",
    words: "bcom mumbai loyola christ xavier sydenham nm hr mithibai",
  },
  bba: {
    title: "NMIMS Mumbai BBA",
    line: "The BBA at NMIMS Mumbai, through NPAT. Christ and Symbiosis are different colleges with different exams.",
    also: "NMIMS has more than one campus. Mumbai is the one people mean. Rank the others separately.",
    marks: "NMIMS has asked for about 60% in Class 12 for the BBA, and maths or statistics at Class 10 or Class 12. The year’s NPAT page wins. One-attempt rules have been used. Read them.",
    exam: "NPAT, the NMIMS test. It is not CUET and not SET. Mumbai is the campus to name. Other NMIMS campuses are separate choices.",
    job: "Junior roles in marketing, operations, or finance, or an MBA later. The fee is much higher than Delhi University.",
    words: "bba nmims npat mumbai asmsoc",
  },
  "finance-ug": {
    title: "NMIMS B.Sc. Finance",
    line: "One named degree: B.Sc. Finance at NMIMS, through NPAT. Maths in Class 12 is required.",
    also: "This is not Sukhdev, and it is not a general word called finance. BBA (FIA) at Sukhdev has its own page.",
    marks: "NMIMS has asked for about 60% in Class 12 and mathematics in Class 12 for B.Sc. Finance. Class 11 is not the cutoff. Confirm the percentage and the one-attempt rule on the current NPAT page.",
    exam: "NPAT. Not CUET. Not the Sukhdev form.",
    job: "Analyst roles in Mumbai, or a CFA or MBA later. The degree is the start. It is not a trading licence.",
    words: "nmims bsc finance npat maths",
  },
  law: {
    title: "Five-year law (BA LLB)",
    line: "Law after Class 12, usually five years. You get in through an entrance test, not through accounts.",
    also: "You can do BA LLB or B.Com LLB. The job at the end is law, not a second B.Com.",
    marks: "CLAT asks for about 45% in Class 12 if you are General, EWS, or OBC, and about 40% for SC and ST. Class 11 marks are not the cutoff. Your rank does not come from board marks.",
    exam: "The main exam is CLAT. It tests English, current affairs, legal reasoning, logic, and basic maths from Class 10. NLU Delhi is a different exam, called AILET.",
    job: "Law firms, a company's legal team, or litigation. The top national law universities place better. A random private law college with a high fee is a different product.",
    words: "law clat ailet nlu llb ba bcom legal",
  },
  cfa: {
    title: "CFA (investments)",
    line: "A course for research and investments. You cannot start it properly from Class 12.",
    also: "CFA Institute runs it. Level 1 is usually sat in the last year of college.",
    marks: "Your Class 12 marks do not decide this. You need to be far enough into a degree, or already working, under their current rule.",
    exam: "Three levels. Each one is a long exam. Do not register in school.",
    job: "Research, markets, and portfolio roles after you are through the levels and have work experience. Passing Level 1 is not an investment-banking job.",
    words: "cfa charter level 1 investments",
  },
  frm: {
    title: "FRM (risk in banks)",
    line: "A risk course used by banks. Start it in college, not in school.",
    also: "FRM means Financial Risk Manager. The certificate also needs relevant work later.",
    marks: "Class 12 marks are not the filter. You can register during college.",
    exam: "Two papers. Part 1 can be sat as a student. The full title still needs work afterwards.",
    job: "Risk roles in banks and finance companies. It sits well next to economics, BMS, or a finance degree. It does not replace that degree.",
    words: "frm financial risk manager garp",
  },
  cat: {
    title: "CAT for the IIMs",
    line: "The Common Admission Test. IIMs, FMS and several other MBA colleges use it. You sit it after you have a degree, or in the final year.",
    also: "XLRI is XAT. SIBM Pune is SNAP. NMIMS MBA is NMAT. ISB is not CAT. Those have their own pages.",
    marks: "You need a bachelor's degree. A few colleges still look at Class 10 and 12 marks inside the selection, but you cannot sit the exam from school.",
    exam: "CAT, usually in the final year of college or after. It is maths, reading, and data. Your school maths helps. It is not the admission.",
    job: "Jobs after the MBA, not after Class 12. The college you join for the MBA matters more than the Class 12 college, once you are in.",
    words: "mba cat iim xat snap nmat",
  },
  govt: {
    title: "RBI Grade B",
    line: "Officer exam at the Reserve Bank of India. You need a college degree first. Do not apply from Class 12.",
    also: "SEBI Grade A, UPSC, and SSC CGL are different exams. They have their own pages.",
    marks: "You need a graduation. RBI Grade B has historically wanted about 60% in graduation for General category. Class 12 is not the form.",
    exam: "Each body has its own exam, after you graduate. There is no single paper to start in school.",
    job: "Officer jobs in RBI, SEBI, revenue, and audit services. The pay is stable. The exam is after the degree, and the seats are few.",
    words: "rbi grade b sebi upsc tax irs audit government",
  },
  banking: {
    title: "SBI PO and IBPS PO",
    line: "Probationary officer jobs. SBI has its own exam. IBPS covers many other public banks. You sit these after graduation.",
    also: "LIC AAO is an insurance officer exam, not a bank PO paper. RBI Grade B is a different page.",
    marks: "A graduate degree is the usual requirement. Class 11 and 12 percentages are not the cutoff.",
    exam: "Bank PO exams test basic maths, English, and reasoning. You prepare in the last year of college, not in Class 11.",
    job: "A probationary officer in a bank, or an officer in an insurance company. It is a real job with a known salary. It is not a startup.",
    words: "sbi po ibps lic aao bank insurance",
  },
  markets: {
    title: "NISM Series V-A and VIII",
    line: "Two small market licences. V-A is mutual funds. VIII is equity derivatives. They do not replace a degree.",
    also: "Book the paper a real job asks for. Do not collect five certificates in Class 11.",
    marks: "Some papers need you to be 18. Some need a graduate. Class 11 is too early to collect certificates.",
    exam: "Separate small exams, such as research analyst, mutual funds, and equity derivatives. Book the one a job asks for. Do not book five.",
    job: "A licence plus a degree can get you into a broking firm or a research desk. The certificate alone, with no degree, is a weak plan.",
    words: "nism series mutual fund research analyst derivatives stock market",
  },
  teach: {
    title: "B.Ed and CTET",
    line: "Teaching accounts, business studies, or economics in a school. The usual path is a degree, then a master’s, then B.Ed, then CTET or a state teacher exam.",
    also: "A coaching job is different. They hire on a demo class. College teaching later wants UGC NET.",
    marks: "Your own Class 12 marks are not the hiring rule. Colleges that train teachers set their own cutoffs later.",
    exam: "After graduation: a master's, B.Ed, and state or central teacher exams such as CTET. Coaching jobs sometimes hire earlier, on how well you can teach.",
    job: "School teacher, college faculty later, or a coaching faculty. The last one depends on how clearly you can explain, not on a single entrance rank.",
    words: "teacher b.ed ctet school commerce faculty",
  },
  venture: {
    title: "The family business",
    line: "The family shop, factory, or firm. There is no entrance exam and no degree called “entrepreneurship” that replaces the work.",
    also: "Still keep a real degree, or CA, so you have a backup if the business is slow.",
    marks: "No cutoff. Class 11 and 12 still matter because accounts and maths are what you will use on real bills.",
    exam: "None. If you also want a college seat, sit that college's exam. The business does not reserve it for you.",
    job: "You do not get a salary until a customer pays. Learn accounts properly. That is the useful part of commerce here.",
    words: "startup family business entrepreneur shop",
  },
};

export function plainOf(slug: string): Simple {
  return (
    simpleBySlug[slug] ??
    extraSimple[slug] ??
    quietSimple[slug] ??
    hiddenSimple[slug] ??
    gapSimple[slug] ??
    scienceSimple[slug] ??
    worldSimple[slug] ??
    catalogSimple[slug] ?? {
      title: slug,
      line: "",
      also: "",
      marks: "",
      exam: "",
      job: "",
      words: "",
    }
  );
}
