import { catalogPaths } from "@/data/catalog";
import { extraPaths } from "@/data/extra-paths";
import { gapPaths } from "@/data/gap-paths";
import { hiddenPaths } from "@/data/hidden-paths";
import { quietPaths } from "@/data/quiet-paths";
import { plainOf } from "@/data/simple";
import { tagOf } from "@/data/tags";
import type { GroupId, Path } from "@/data/types";
import { morePaths } from "@/data/more-paths";
import { sciencePaths } from "@/data/science-paths";
import { worldPaths } from "@/data/world-paths";

const now = (
  a: string[],
  b: string[],
  c: string[],
  d: string[],
): Path["now"] => ({ "11": a, "12": b, result: c, college: d });

const listed: Path[] = [
  {
    slug: "bms",
    name: "BMS at Shaheed Sukhdev",
    kicker: "One course. CUET. Maths.",
    group: "maths",
    oneLine:
      "Bachelor of Management Studies at Shaheed Sukhdev College, Delhi University. Maths is required. FIA and Business Economics are different courses.",
    maths: "essential",
    duration: "3 years",
    cost: "Low",
    costNote:
      "DU college fee is small. The real bill is CUET coaching, if you buy it, and a year of rent if you are not already in Delhi.",
    class11:
      "Class 11 percentage is not on the CUET form. It is the year you find out whether maths is real for you. If applied maths or core maths is shaky now, BMS becomes a wish.",
    class12:
      "No famous board-percentage cutoff anymore. You must pass Class 12, and you must have Mathematics or Applied Mathematics. The rank is the CUET score: one language, Maths or Applied Maths, and the General Test.",
    gates: [
      { label: "Class 11", rule: "Not used. Pass the year so the school promotes you." },
      { label: "Class 12", rule: "Pass, with Mathematics or Applied Mathematics." },
      { label: "Board %", rule: "Not the admission. Eligibility is a pass. The seat is a CUET score." },
      { label: "Entrance", rule: "CUET-UG. Language + Maths/Applied Maths + General Test." },
    ],
    exams: [
      {
        name: "CUET-UG",
        when: "Usually May, in the Class 12 year. Form much earlier — watch nta.ac.in.",
        papers: "One language from List A, Mathematics or Applied Mathematics, and Section III (General Test): GK, current affairs, mental ability, numerical ability.",
      },
    ],
    how: [
      "Keep maths. Applied Mathematics is accepted for this combination. Do not drop it in a panic about Accounts.",
      "In the CUET form, select the BMS / BBA (FIA) / BBE combination exactly. A wrong subject map is a silent rejection.",
      "Prepare the General Test on purpose. It is not 'whatever you know from Instagram'.",
      "Sit CUET. Delhi University's CSAS portal is a second form after the score. Missing that deadline loses the seat even with a great score.",
      "Fill SSCBS preferences with a clear order: BMS, BBA (FIA) and BBE are different courses on the same campus. Read what each one studies before you rank them.",
    ],
    placesLabel: "The campus that matters, then the nine doors students confuse with it",
    places: [
      { name: "SSCBS — BMS", where: "Delhi", via: "CUET", note: "The course people mean when they say Sukhdev. Management, not a softer B.Com." },
      { name: "SSCBS — BBA (FIA)", where: "Delhi", via: "CUET", note: "Financial Investment Analysis. The nerdier sibling. Best fit if markets and valuation interest you more than HR." },
      { name: "SSCBS — BBE", where: "Delhi", via: "CUET", note: "Business Economics. Closer to an economics degree than to a BBA. Maths still compulsory." },
      { name: "SRCC — B.Com (Hons)", where: "Delhi", via: "CUET", note: "Not BMS. The usual alternative if Sukhdev's cutoff does not land. Different subject map." },
      { name: "Hindu — B.Com (Hons)", where: "Delhi", via: "CUET", note: "Same story. A degree pivot, not a BMS seat." },
      { name: "St. Stephen's — Economics", where: "Delhi", via: "CUET + interview", note: "Only if you want economics more than management. Stephen's adds its own process." },
      { name: "NMIMS Mumbai — BBA / B.Sc Finance", where: "Mumbai", via: "NPAT", note: "The private all-India peer. Different exam, higher fee." },
      { name: "IIM Indore — IPM", where: "Indore", via: "IPMAT", note: "Five-year integrated management. Harder paper, much higher fee, an IIM name at the end." },
      { name: "Christ University — BBA", where: "Bengaluru", via: "Christ entrance", note: "A national private campus. Not a DU degree." },
      { name: "Ashoka — Economics / Finance", where: "Sonepat", via: "Ashoka test + essays", note: "Liberal education, not BMS. Aid exists. Do not compare the fee with DU." },
    ],
    after: [
      { when: "Right after", what: "Summer internships in finance, research or a startup ops role. FIA students lean toward markets; BMS is wider.", money: "Intern stipends are small. Do not budget your life on them." },
      { when: "Year 3", what: "Campus roles in finance, analytics, consulting-adjacent jobs — or you leave to sit CAT, CFA Level 1, or a master's.", money: "Top-college placement averages often land roughly ₹8–15 lakh. The right tail is real and thin." },
      { when: "Year 7", what: "Corporate finance, product, markets, or an MBA from an IIM. The Sukhdev name still opens alumni doors; it does not promote you.", money: "A wide band. The people who kept a skill (modelling, research, code) pull away from the people who only kept the degree." },
      { when: "The ceiling", what: "CFO track, portfolio roles, or founding something. FIA plus CFA is a known corridor. BMS plus a general MBA is the other.", money: "Not printable. Depends whether you stayed a generalist." },
    ],
    careers: ["Corporate finance", "Markets and research", "Analytics", "Consulting support", "MBA later", "CFA beside the degree"],
    pair: ["bcom-du", "eco", "ipm", "cfa", "markets"],
    watch: [
      "SSCBS is small. The cutoff feels personal because very few seats exist. Have a B.Com (Hons) preference list ready.",
      "Other DU colleges have started management-sounding courses. Read the year's CSAS bulletin. Reputation still concentrates at Sukhdev.",
      "General Test plus maths is a different revision plan from Accounts and Business Studies. Your school pre-boards will not cover it.",
    ],
    now: now(
      ["Do not drop maths.", "Start a light General Test habit: one newspaper, one numerical set a week.", "Accounts still matters for the rest of your life. Do not abandon it for 'aptitude'."],
      ["Confirm the CUET subject combination on NTA's bulletin, not on a coaching poster.", "Register for CUET on time. The late fee is the cheap part; a missed form is the expensive part.", "Sit every school maths test as if it were the domain paper."],
      ["Build the CSAS preference list the week the portal opens.", "If the score is short of Sukhdev, take the best B.Com (Hons) you can and start a professional course. Do not take a drop only for BMS unless the rest of the plan is empty.", "Recheck spot rounds. They move."],
      ["You are already in. Use the campus: internships, the FIA crowd if that is your course, and one hard skill.", "CFA Level 1 belongs in the final year, not in semester one.", "If you hate the course by year 2, an MBA later is the usual repair. A random diploma is not."],
    ),
    delhi:
      "This is the Delhi student's management degree. You do not need a state domicile. You need a CUET score and a CSAS form.",
    bestIf: "You like maths enough to be tested on it, and you want management or markets without leaving Delhi University's fee.",
    firstPay: "Campus offers at Sukhdev often sit in a rough ₹8–15 lakh band. Many students skip the job and sit for CFA or CAT.",
  },
  {
    slug: "eco",
    name: "B.A. (Hons) Economics, Delhi University",
    kicker: "CUET. Maths. Not a fancy B.Com.",
    group: "maths",
    oneLine:
      "B.A. (Hons) Economics at Delhi University. SRCC, Hindu, Hansraj, St. Stephen’s and the others. Maths is required. CUET decides the seat.",
    maths: "essential",
    duration: "3 years",
    cost: "Low",
    costNote: "DU is cheap. Ashoka is not — ask about aid before you fall in love with the campus photos.",
    class11:
      "Class 11 marks are not on the CUET form. Functions, graphs and statistics from this year come back in the first month of college. If you are surviving maths by memorising steps, say so now.",
    class12:
      "Pass Class 12 with Mathematics or Applied Mathematics. Delhi University's combination is one language + Maths/Applied Maths + any two List B subjects. Merit is the CUET score, not the board percentage.",
    gates: [
      { label: "Class 11", rule: "Not an official cutoff. It predicts whether first-year microeconomics will hurt." },
      { label: "Class 12", rule: "Pass, with Mathematics or Applied Mathematics studied." },
      { label: "Board %", rule: "DU's floor is a pass. The famous colleges need a very high CUET maths-inclusive score." },
      { label: "Entrance", rule: "CUET-UG for DU. Separate tests for Ashoka, and a much harder one for ISI later or for a bachelor's there." },
    ],
    exams: [
      {
        name: "CUET-UG",
        when: "Class 12 year, usually May.",
        papers: "Language + Mathematics or Applied Mathematics + two other domains. Economics as a domain helps you, but maths is the compulsory one.",
      },
      {
        name: "St. Stephen's additional process",
        when: "After CUET, for Stephen's seats.",
        papers: "Stephen's does not admit on CUET alone. There is an aptitude / interview layer. Read that year's college notice.",
      },
      {
        name: "Ashoka Aptitude Test",
        when: "School-leaver cycle, rounds through the year.",
        papers: "A separate application: test, essays, school grades as context. Not CUET.",
      },
    ],
    how: [
      "Treat maths as the main CUET paper, not as the subject you hope they will prorate away.",
      "Pick two other domains you can actually score. Accountancy, Economics, Business Studies are natural. A random fourth subject is how people leak marks.",
      "Apply to DU through CSAS after the score. Preference order matters more than people admit.",
      "If you want Stephen's, track their own form. Missing it is not something CUET fixes.",
      "If you want Ashoka or a private economics degree, that is a second calendar. Start essays early.",
    ],
    placesLabel: "Ten campuses where this degree has a reputation",
    places: [
      { name: "St. Stephen's College", where: "Delhi", via: "CUET + college process", note: "The name people argue about. Small batch. Not a pure score list." },
      { name: "SRCC", where: "Delhi", via: "CUET", note: "Yes, SRCC has Economics Honours, not only B.Com. Recent general scores have sat in the high 800s and above. The number moves every round." },
      { name: "Hindu College", where: "Delhi", via: "CUET", note: "Same band as the top of north campus. Have it high on the list if Stephen's and SRCC are the dream." },
      { name: "Lady Shri Ram College", where: "Delhi", via: "CUET", note: "Women. Economics here is as fought-over as the north campus men's colleges." },
      { name: "Miranda House", where: "Delhi", via: "CUET", note: "Women. Strong economics cohort." },
      { name: "Hansraj College", where: "Delhi", via: "CUET", note: "The next cut of north campus. Still a serious classroom." },
      { name: "Kirori Mal College", where: "Delhi", via: "CUET", note: "Same map, a step down the score list, not a step down in effort required." },
      { name: "Ramjas College", where: "Delhi", via: "CUET", note: "Worth a high preference if the top four miss. Check the year's CSAS list rather than a blog's 'tier'." },
      { name: "Ashoka University", where: "Sonepat", via: "Own admission", note: "Different degree culture, different bill. Aid is part of the real fee." },
      { name: "St. Xavier's College", where: "Kolkata", via: "College process", note: "One of the non-DU classics. Confirm the current admission rule. Presidency and the Chennai colleges (MCC, Loyola) are the wider non-Delhi set." },
    ],
    after: [
      { when: "Right after", what: "You can work, but the degree is built for a master's: Delhi School of Economics, ISI MSQE, Ashoka, or a foreign master's later.", money: "A job at 21 is often ₹5–10 lakh unless the college placement is unusually strong. Many do not take it." },
      { when: "Year 3", what: "Internships in research, policy, analytics, or a bank's economics desk. Publish nothing fake. Learn statistics properly.", money: "Still training money." },
      { when: "Year 6", what: "Master's done or nearly done. Roles in consulting, analytics, macro research, policy, or a PhD track.", money: "After a good master's, metro packages often start around the early teens of lakhs and spread fast." },
      { when: "The ceiling", what: "Chief economist rooms are tiny. The livable ceiling is a serious analytics, policy or finance career. DSE and ISI are the Indian names that still change that ceiling.", money: "Do not quote a CFO salary for an economics degree. That is a different corridor." },
    ],
    careers: ["Economic research", "Analytics", "Policy", "Consulting", "Data-heavy finance", "Master's at DSE or ISI"],
    pair: ["bms", "isi", "actuary", "analytics", "cfa"],
    watch: [
      "Delhi School of Economics is a master's. It is not this bachelor's. People mix the names up in counselling and then fill the wrong form.",
      "If you dislike graphs and proofs, you will be miserable by semester two. B.Com will treat you more kindly.",
      "Stephen's, Ashoka and DU are three applications. Budget the forms.",
    ],
    now: now(
      ["Stay in maths. Start reading one chart a week — a newspaper's economy page, not a motivation reel.", "Get comfortable with graphs. The subject is pictures plus algebra.", "Do not drop English. You will write."],
      ["Lock the CUET combination: language, maths, and two domains you can score.", "If Stephen's is on the list, read their current additional process in September, not after results.", "Ashoka's early round uses Class 11 marks as context. Send a clean transcript, not a panic explanation."],
      ["Fill CSAS with a real preference order. A low preference is how a good score lands in the wrong college.", "If the score misses the top colleges, a lower DU economics seat plus a master's plan beats a random private BBA.", "Do not retake a whole year only to chase SRCC unless economics is the entire point of the next decade."],
      ["Learn statistics and one tool: sheets at a serious level, then R or Python. The degree will not force the tool.", "The master's application is the real second entrance. Track DSE, ISI MSQE, and foreign deadlines from year 2.", "A CFA beside Eco Honours is possible and often a distraction from the master's that would have paid more."],
    ),
    delhi:
      "DU economics is an all-India CUET seat. No Delhi quota to hide behind, and no domicile wall either. You compete with the country.",
    bestIf: "You are more curious about how an economy moves than about journal entries, and your maths can carry a CUET paper.",
    firstPay: "Often modest at graduation. The pay shows up after a master's, not on the convocation day.",
  },
  {
    slug: "ipm",
    name: "IPM at the IIMs",
    kicker: "Five years, one exam, an IIM at the end",
    group: "maths",
    oneLine:
      "A five-year course at an IIM, starting after Class 12. The fee is high.",
    maths: "strong",
    duration: "5 years",
    cost: "High",
    costNote:
      "Tuition over five years at an older IIM commonly runs into the tens of lakhs. This is a family conversation before it is a mock-test conversation.",
    class11:
      "Not on the form as a percentage. The Quant section is built from the maths you either learned this year or did not. Class 10 marks do matter at several IIMs — dig that marksheet out.",
    class12:
      "Pass Class 12 in any stream. IIM Indore has recently set no minimum percentage. IIM Rohtak and several others still ask about 60% in Class 10 and Class 12 (about 55% for SC, ST and PwD). OBC-NCL often does not get that relaxation. The year's brochure wins.",
    gates: [
      { label: "Class 10", rule: "Several IIMs want about 60% (55% SC/ST/PwD). Indore has often wanted only a pass." },
      { label: "Class 11", rule: "Not a cutoff. It is your Quant preparation." },
      { label: "Class 12", rule: "Pass. Same percentage split as Class 10, depending on the IIM. Appearing students may apply." },
      { label: "Age", rule: "Hard gate. Usually born on or after 1 August of the year that keeps you under about 20. SC/ST/PwD get about five years. Check the date before you pay." },
      { label: "Stream", rule: "Open. Maths is not always compulsory. The paper assumes speed with numbers anyway." },
    ],
    exams: [
      {
        name: "IPMAT Indore",
        when: "Usually in the summer of the Class 12 year.",
        papers: "Quantitative Ability, including short answers, and Verbal Ability. The short answers punish guessing. Indore's score is also used by some other IIMs — read which ones this year.",
      },
      {
        name: "IPMAT Rohtak",
        when: "A different paper, a different form, often a close date.",
        papers: "Its own mix of quant, verbal and logical reasoning. Do not assume one mock series covers both.",
      },
      {
        name: "JIPMAT",
        when: "The paper for IIM Jammu and IIM Bodh Gaya.",
        papers: "Quant, data interpretation and logical reasoning, verbal. A third calendar.",
      },
    ],
    how: [
      "Check your date of birth against this year's brochure before you buy a course.",
      "Pull Class 10 marks. If they are under the floor a given IIM prints, that IIM is shut even if Class 12 is brilliant.",
      "Register separately for Indore, Rohtak and JIPMAT. They are not one form.",
      "Practice short-answer quant. MCQ habit from school tests is not enough for Indore.",
      "After the call, the interview is a second exam. Know why management, without reciting a coaching answer.",
    ],
    placesLabel: "The IPM list that is real, and the peers students sit beside it",
    places: [
      { name: "IIM Indore", where: "Indore", via: "IPMAT Indore", note: "The original. Five years. The brand the others are compared with." },
      { name: "IIM Rohtak", where: "Rohtak", via: "IPMAT Rohtak", note: "Separate paper. Percentage floor is usually stricter than Indore's." },
      { name: "IIM Ranchi", where: "Ranchi", via: "Often IPMAT Indore", note: "Uses a shared score some years. Confirm the cycle. Do not assume." },
      { name: "IIM Jammu", where: "Jammu", via: "JIPMAT", note: "Newer campus. Judge the latest placement report, not the IIM acronym alone." },
      { name: "IIM Bodh Gaya", where: "Bodh Gaya", via: "JIPMAT", note: "Same warning. A real seat, a younger alumni network." },
      { name: "Newer IIMs", where: "Various", via: "Whichever paper they join", note: "The list grows. If it is not in that year's brochure, it does not exist yet." },
      { name: "SSCBS BMS", where: "Delhi", via: "CUET", note: "The three-year, low-fee alternative if IPM's cost or age gate fails." },
      { name: "NMIMS Mumbai BBA", where: "Mumbai", via: "NPAT", note: "Three years, private, all-India. Not an IIM degree." },
      { name: "Christ BBA", where: "Bengaluru", via: "Christ entrance", note: "A solid private undergraduate, not an integrated MBA." },
      { name: "A normal degree + CAT", where: "Later", via: "CAT", note: "The classic repair. Three years of B.Com or Eco, then a two-year MBA. Often wiser if the IPM fee is a strain." },
    ],
    after: [
      { when: "Years 1–3", what: "An undergraduate management education on an IIM campus. Some programmes allow an exit with a bachelor's — read that rule before you need it.", money: "You are paying, not earning. Internships start to matter from year 2." },
      { when: "Year 5", what: "Final placements with the MBA cohort, with the caveats in that year's report. Roles in consulting, finance, general management, product.", money: "IIM Indore IPM finals have recently sat in the mid-twenties of lakhs as an average. That is not a promise and not a year-1 salary. Read the report." },
      { when: "Year 10", what: "You are an IIM alumni with five extra years of work versus a two-year MBA joiner. That head start is the product you bought.", money: "Management bands. The campus gets you in. The work keeps you." },
      { when: "The ceiling", what: "Same ceiling as a good two-year MBA: leadership roles, consulting partners, founders. IPM does not add a magical sixth door.", money: "Unset. Lifestyle cost of the fee is the part families undercount." },
    ],
    careers: ["General management", "Consulting", "Finance", "Product", "Marketing"],
    pair: ["bms", "bba", "cat", "cfa"],
    watch: [
      "Three papers, three forms. Students prepare for 'IPMAT' and discover Rohtak is a different exam in April.",
      "The age cutoff is colder than the percentage cutoff. Coaching centres stay vague about it because the course is already sold.",
      "Do not dual-track IPM with CA in your head. The calendars fight. If you want CA, take a degree that tolerates articleship.",
    ],
    now: now(
      ["Check the age rule with your actual date of birth.", "Quant, every week. Not only in the summer before the exam.", "Read. Verbal is half of Indore and students leave it till the end."],
      ["Register for each IPMAT you are eligible for. Eligibility first, dreams second.", "If Class 10 is below 60%, ask each IIM's current brochure whether you are even allowed to pay.", "Keep CUET alive as the other plan. IPM is a small number of seats."],
      ["Interview preparation is not a personality makeover. Have two real reasons and one real book.", "If the call does not come, start the degree. A drop year for IPM alone is a high-risk use of a year.", "Talk about the fee with the person who will pay it, using the official number."],
      ["You are inside. The exit option, if you hate it, has a date. Know the date.", "Internships on this campus matter more than one more online certificate.", "CA on top of IPM is usually a no."],
    ),
    delhi:
      "No domicile advantage. A Delhi student sits the same paper as everyone else. Rohtak is geographically close and still not a Delhi-quota college.",
    bestIf: "The family can carry the fee without drama, you like maths under a timer, and you want management without waiting for CAT.",
    firstPay: "Nothing in year 1. The figure people quote is the year-5 placement average. Read that report, then divide nothing — it is not a stipend.",
  },
  {
    slug: "actuary",
    name: "Actuarial science",
    kicker: "The highest maths ceiling in commerce",
    group: "maths",
    oneLine:
      "You price risk for insurers. ACET gets you in. Associate is 10 subjects, often 4 to 6 years. Fellow is longer, with 3 years of work. The college name is not the career.",
    maths: "essential",
    duration: "About 4–6 years to Associate, often 6–10 years to Fellow",
    cost: "Medium",
    costNote:
      "Institute of Actuaries of India fees are real but saner than a private foreign track. SOA (US) and IFoA (UK) cost more and matter if you want to leave India later.",
    class11:
      "No one asks for the percentage. Calculus, probability and the habit of sitting with a problem for an hour start here. If maths is your weakest subject, do not pick this to look rare.",
    class12:
      "Pass Class 12 with English. You may sit ACET in the year you appear. Maths is the job even when a form does not print it as compulsory. There is no board-percentage floor.",
    gates: [
      { label: "Class 12", rule: "Pass, with English. Maths in practice." },
      { label: "ACET", rule: "The entrance. About 3 hours. Pass mark 50%. No negative marking. This only makes you a student." },
      { label: "Associate", rule: "7 Core Principles plus 3 Core Practices. Ten subjects. Often 4 to 6 years, beside a degree." },
      { label: "Fellow", rule: "Two specialist principles, one specialist advanced, the fellowship seminar, and 3 years of relevant work." },
    ],
    exams: [
      {
        name: "ACET",
        when: "Several windows a year. You can sit it in Class 12. Confirm the date on actuariesindia.org.",
        papers:
          "Mathematics, statistics, data interpretation, English, logical reasoning. About 70 questions, 100 marks, 3 hours, pass at 50%, no negative marking. Clearing it does not make you an actuary.",
      },
      {
        name: "Core Principles",
        when: "After you are a student member. Most people take these across 2 to 4 years, one or two papers a diet.",
        papers:
          "Seven subjects: CS1 and CS2 (statistics), CM1 and CM2 (actuarial and financial maths), CB1, CB2 and CB3 (business, economics, management). CS and CM have a written paper and a practical paper in Excel or R. Plan a few hundred hours of study for each.",
      },
      {
        name: "Core Practices, then Associate",
        when: "After the principles. Often around years 4 to 6 if you keep sitting.",
        papers:
          "CP1 Actuarial Practice, CP2 Modelling Practice, CP3 Communications Practice. Ten subjects in all, and you are an Associate of the Institute (AIAI). The 2026 education policy is folding some of the business and communication papers together. Read the year’s syllabus before you buy last year’s book.",
      },
      {
        name: "Specialist papers, then Fellow",
        when: "After Associate. Often years 6 to 10, while you are working.",
        papers:
          "Pick two Specialist Principles (life, health, pensions, investments, general insurance, or enterprise risk) and one Specialist Advanced. Then the India Fellowship Seminar, and 3 years of relevant actuarial work. That is Fellowship (FIAI). A data-science subject is being added to the early papers from a later diet. The institute’s page is the list.",
      },
    ],
    how: [
      "Sit ACET. Do not first buy a three-year ‘actuarial science’ degree and hope the papers are included.",
      "The week you clear ACET, become a student member. The clock is the exam diet, not an orientation day.",
      "Do an ordinary degree beside it: economics, BMS, B.Sc, or B.Com. Employers and some visas still want a bachelor’s.",
      "Sit one or two subjects a diet while college maths is still warm. A few hundred hours each. Do not book four to feel serious.",
      "Associate is the first qualification people respect. Fellow is the second mountain, with real work experience, not another classroom.",
      "UK (IFoA) and US (SOA) letters are a later, more expensive choice. Start with the Indian institute unless the foreign fee is already decided at home.",
    ],
    placesLabel: "The institute is the college. These are the rooms that hire",
    places: [
      { name: "Institute of Actuaries of India", where: "Mumbai / national", via: "ACET", note: "The Indian route. Start here unless a parent has already done the foreign-fee maths." },
      { name: "IFoA", where: "UK body, sat from India", via: "Its own entry", note: "The London-facing letters. More expensive. Exemptions and diet rules differ." },
      { name: "SOA", where: "US body, sat from India", via: "Its own exams", note: "The American letters. Same warning on cost." },
      { name: "LIC and the public insurers", where: "India", via: "Papers plus their hiring", note: "A classic Indian employer of actuarial students." },
      { name: "WTW, Mercer, Aon, Milliman", where: "Metro consultancies", via: "Papers plus internship", note: "The consulting names students should recognise." },
      { name: "Swiss Re, Munich Re and other reinsurers", where: "India desks", via: "Papers", note: "Smaller teams, serious work." },
      { name: "General insurance pricing teams", where: "Private insurers", via: "Papers", note: "Motor, health, commercial. This is the day job, not a stock-market fantasy." },
      { name: "Big 4 risk and actuarial groups", where: "Metros", via: "Papers plus degree", note: "Possible. Not automatic from ACET." },
      { name: "Pensions practices", where: "Consultancies", via: "Specialist papers later", note: "A quieter, well-paid corner. Few students know it exists." },
      { name: "A B.Sc Actuarial campus", where: "Private universities", via: "Their entrance", note: "Useful as a timetable. Useless if you are not clearing institute papers. Do not pay a premium only for the word actuarial on a prospectus." },
    ],
    after: [
      { when: "ACET", what: "You are a student member. Nothing about your job title has changed.", money: "Zero. Do not celebrate with a foreign-body registration." },
      { when: "A few Core Principles", what: "Internships and junior analyst roles start to open. You are still in college, or you should be.", money: "Often around ₹6–12 lakh once the papers and a degree are both moving. Not after ACET alone." },
      { when: "Associate", what: "Ten subjects done. You can be trusted with more of the actual pricing or reserving work.", money: "Moves past a normal commerce fresher. The teens are a fair way to think about it, and the employer still varies." },
      { when: "Fellow", what: "Specialist papers, the seminar, and three years of work. Appointed-actuary and senior pricing roles live here, not at year two.", money: "Among the best-paid people who started from this stream. Slow on purpose." },
    ],
    careers: ["Insurance pricing", "Pensions", "Risk consulting", "Reinsurance", "Data-heavy finance"],
    pair: ["eco", "analytics", "bms", "cfa"],
    watch: [
      "The dropout rate is the feature people hide. It is a professional exam diet, closer to CA in stamina than to a BBA in vibe.",
      "A private college that promises 'placements in actuarial' without paper counts is selling a degree, not the profession.",
      "Maths here means probability and financial maths, not the board chapter on matrices done once.",
    ],
    now: now(
      ["Stay ahead of the school maths syllabus instead of level with it.", "Try one probability chapter for fun. If you hate it, believe yourself.", "Do not register for three foreign bodies because a reel said actuarial pays crores."],
      ["Sit ACET this cycle if the maths is honest.", "Pick a degree you can attend. Papers will eat the evenings.", "Budget the first three diets before the first celebration."],
      ["Membership first. One subject, not four.", "If ACET does not clear, retry. Do not invent a shame story around one attempt.", "Start CS1 or CM1 while the board maths is fresh. The practical paper is Excel or R, not a theory chapter."],
      ["One diet at a time beside the semester.", "Associate is ten subjects. Count them.", "An internship after two or three papers tells you if the office is yours. Fellowship is a later decision, with three years of work."],
    ),
    delhi:
      "ACET is national. Delhi has coaching and a few employer desks. You do not need to move to Mumbai to start. You may move later for the job.",
    bestIf: "Maths is your best subject, you can study alone for years, and insurance puzzles you more than it bores you.",
    firstPay: "ACET itself pays nothing. A student actuary with a few papers often starts around ₹6–12 lakh. The large money is for people who stay.",
  },
  {
    slug: "analytics",
    name: "IIT Madras BS in Data Science",
    kicker: "An online IIT degree. The qualifier is the door.",
    group: "maths",
    oneLine:
      "The BS in Data Science and Applications from IIT Madras. Online lectures, exams in person. Any stream can apply. The qualifier is the door, not JEE.",
    maths: "essential",
    duration: "3–4 years",
    cost: "Medium",
    costNote:
      "IIT Madras BS is unusually affordable for the name. Private analytics degrees are priced like private BBAs. Read the fee table, not the placement banner.",
    class11:
      "Unused on forms. Used in the qualifier exams and in the first statistics course. Probability from Class 11 is not optional homework.",
    class12:
      "The institute says any stream can apply after Class 12. The qualifier is mathematical. If you have not studied maths, that paper is the hard part. Management and data science is the sibling for business. Electronic systems and aeronautics want physics and maths.",
    gates: [
      { label: "Class 11", rule: "Not a cutoff." },
      { label: "Class 12", rule: "Maths studied. A pass. Some science degrees want physics or chemistry too." },
      { label: "Board %", rule: "Depends on the campus. The IIT Madras route cares about the qualifier more than the board trophy." },
      { label: "Entrance", rule: "IIT Madras BS qualifier, CUET where the bulletin allows your subjects, or the private university's own test." },
    ],
    exams: [
      {
        name: "IIT Madras BS Qualifier",
        when: "Cycles through the year. You can start after Class 12.",
        papers: "Online degree in Data Science and Applications. The qualifier is the entrance. Maths is the preparation that counts.",
      },
      {
        name: "CUET-UG",
        when: "Class 12 year.",
        papers: "Only if the specific statistics or computer science programme lists a combination you can legally sit. Read the DU bulletin with your subjects in hand.",
      },
      {
        name: "Private entrances",
        when: "Christ, NMIMS, Ashoka and others, on their own dates.",
        papers: "Usually aptitude plus maths. NPAT is the NMIMS one.",
      },
    ],
    how: [
      "Write down your Class 12 subjects. Cross out every B.Sc that demands physics. Grieve quickly and move on.",
      "Apply to the IIT Madras BS if you can study online without a principal watching you. It is a real IIT credential and easy to abandon. Discipline is the entrance after the qualifier.",
      "If you want a campus, shortlist analytics degrees that say 'maths at 10+2', not 'PCM'.",
      "Learn spreadsheets properly in the first summer. Then SQL. Then one language.",
      "Keep a commerce or economics degree if the analytics campus is weak. Skills transfer. A fake 'AI specialisation' on a prospectus does not.",
    ],
    placesLabel: "Doors a commerce-with-maths student can actually knock on",
    places: [
      { name: "IIT Madras — BS Data Science", where: "Online, from anywhere", via: "Qualifier", note: "The most serious low-drama option. An online degree. You must be able to study without a corridor full of friends." },
      { name: "Christ University", where: "Bengaluru", via: "Christ entrance", note: "B.Sc and BBA analytics variants exist. Check which one accepts commerce maths this year." },
      { name: "NMIMS", where: "Mumbai and other campuses", via: "NPAT", note: "Data science and finance-adjacent degrees. Fee is private-university fee." },
      { name: "Ashoka University", where: "Sonepat", via: "Own admission", note: "Economics, CS, or a combination. Not a placement mill. Aid matters." },
      { name: "Shiv Nadar University", where: "Greater Noida", via: "Own test", note: "Worth a look for economics and data. Confirm subject rules." },
      { name: "Ahmedabad University", where: "Ahmedabad", via: "Own process", note: "A newer academic campus with economics and analytics routes." },
      { name: "FLAME University", where: "Pune", via: "Own process", note: "Small, expensive, liberal. Finance and data exist. Not a mass campus." },
      { name: "DU B.Sc Statistics / CS", where: "Delhi", via: "CUET", note: "Often a science-subject combination. Treat as closed until the bulletin names your subjects." },
      { name: "ISI — B.Stat / B.Math", where: "Kolkata and others", via: "ISI admission test", note: "Listed fully under the ISI card. Included here so you do not forget it exists." },
      { name: "A B.Com or Eco degree + skills", where: "Anywhere", via: "CUET or college", note: "The unfashionable route that still produces analysts. The degree is the passport. SQL and statistics are the job." },
    ],
    after: [
      { when: "Right after", what: "Analyst roles: marketing analytics, risk analytics, ops, research support. Your portfolio of small projects matters as much as the degree title.", money: "Fresher analysts outside the dream campuses often start around ₹4–9 lakh. The IIT Madras name and proof of skill can lift that." },
      { when: "Year 3 of work", what: "You either become the person who can frame a question and clean data, or you remain a dashboard operator.", money: "The split is large. Skill beats the original college by now." },
      { when: "A master's", what: "ISI, IITs, or a foreign MS. This is where a commerce start catches the science students, if the maths held.", money: "After a strong master's the first job often moves into the teens." },
      { when: "The ceiling", what: "Data science lead, quant-adjacent roles, product analytics. True quant trading is a different and harsher filter.", money: "High for the few who kept the maths. Ordinary for certificate collectors." },
    ],
    careers: ["Analyst", "Data science later", "Risk analytics", "Marketing analytics", "Research support"],
    pair: ["eco", "isi", "actuary", "bms", "cfa"],
    watch: [
      "Most 'AI and data science' degrees sold to commerce students are a BBA with a Python workshop. Read the semester list.",
      "The IIT Madras degree is easy to enrol in and easy to ghost. Ghosting is not a credential.",
      "You will compete with engineering graduates. Your edge is business sense plus maths, not a claim that commerce is 'basically the same'.",
    ],
    now: now(
      ["Maths, properly. One spreadsheet model of something you care about — a small shop, a sports table, the school fest.", "Do not buy a data-science diploma in Class 11.", "Notice whether you like the messy part or only the idea."],
      ["Check the IIT Madras qualifier date.", "For every campus B.Sc, read the required subjects once, slowly.", "Keep CUET maths alive so Eco Honours and BMS stay open too."],
      ["If science B.Sc is shut, do not spend the summer angry. Enrol in a degree that wants you.", "Start SQL. It is less romantic than machine learning and more useful in the first job.", "A portfolio of three clean projects beats a twelve-week certificate."],
      ["Pick one stack and get bored of being bad at it, then get good.", "Internships that let you touch real tables, even unpaid for a short burst, teach more than another MOOC.", "A master's application in year 3 is the lever. Plan the exams it needs."],
    ),
    delhi:
      "IIT Madras BS does not care that you live in Pitampura. DU's campus statistics degrees might, via subject rules. Private NCR campuses exist — compare their fees with the online IIT degree before you default to the nearest one.",
    bestIf: "You like patterns more than ledgers, you will actually study online or on a campus, and you are willing to learn tools engineers learned earlier.",
    firstPay: "A wide ₹4–9 lakh fresher band is honest. Brand and proof move it. Certificates do not.",
  },
  {
    slug: "isi",
    name: "ISI and the pure-maths outlier",
    kicker: "Only if maths is the subject, not the support",
    group: "maths",
    oneLine:
      "ISI and CMI. Very hard maths exams for B.Stat and B.Math. The four-year statistical data science degree is a different form, and it does not use that written test. Most commerce students should not make either one the only plan.",
    maths: "essential",
    duration: "3 years, if you get in",
    cost: "Low",
    costNote: "ISI's own stipend and fees, if you are admitted, are the opposite of a private university. The expensive part is the preparation you may waste.",
    class11:
      "Irrelevant as a percentage. Deeply relevant as content. The admission test is not a harder version of your school unit test. It is a different sport.",
    class12:
      "You need mathematics at 10+2 and a pass. Commerce as a stream is not a ban. The syllabus gap is the ban, for most people.",
    gates: [
      { label: "Class 11", rule: "Not used." },
      { label: "Class 12", rule: "Mathematics studied. Pass the board." },
      { label: "Board %", rule: "Not the famous filter. The admission test is." },
      { label: "Entrance", rule: "ISI admission test. CMI has its own. These are not CUET." },
    ],
    exams: [
      {
        name: "ISI Admission Test",
        when: "In the Class 12 year. Notification on isical.ac.in.",
        papers: "Mathematics at a level close to a serious science entrance, with a statistical flavour for B.Stat. Subjective questions. Guesswork does not travel.",
      },
      {
        name: "CMI entrance",
        when: "Its own date.",
        papers: "Mathematics and, for some programmes, computer science. Chennai Mathematical Institute. Same warning.",
      },
    ],
    how: [
      "Be honest for a week. Can you do maths problems you have not seen, without a teacher in the room? If no, this is not a personality flaw. It is a no.",
      "If yes, start past-paper practice beside school, not instead of a backup.",
      "Keep CUET Economics or BMS as the plan that will actually happen.",
      "Do not drop Accounts to chase an engineering entrance. That is a different Class 11.",
      "If the test goes badly, you still have a commerce life. That was the point of the backup.",
    ],
    placesLabel: "The short list. It is short because the standard is the list",
    places: [
      { name: "ISI Kolkata — B.Stat", where: "Kolkata", via: "ISI test", note: "The statistics bachelor's people mean when they say the written test." },
      { name: "ISI Bangalore — B.Math", where: "Bengaluru", via: "ISI test", note: "The mathematics bachelor's. Same written test. Not the data-science form." },
      { name: "ISI — statistical data science", where: "Delhi, Kolkata, Bengaluru", via: "CUET, or a JEE Main score if you sat it", note: "Four years. You attend the centre. 25 seats each in the 2026 prospectus. Different page." },
      { name: "CMI", where: "Chennai", via: "CMI entrance", note: "Mathematics and computer science. A peer of ISI in toughness, not a safety college." },
      { name: "Ashoka — mathematics / CS", where: "Sonepat", via: "Ashoka admission", note: "A rigorous private option if the ISI test is a reach and the family can pay or get aid." },
      { name: "DU Economics Honours", where: "Delhi", via: "CUET", note: "The respectable landing if ISI says no. Not a consolation prize if economics is what you wanted anyway." },
      { name: "IIT Madras BS Data Science", where: "Online", via: "Qualifier", note: "A rigorous backup you can start without clearing ISI." },
      { name: "Actuarial papers", where: "IAI", via: "ACET", note: "The commerce-native way to use the same maths hunger." },
    ],
    after: [
      { when: "If you get in", what: "Three years of statistics or mathematics with a stipend culture, then almost always a strong master's or a selective job.", money: "The stipend is support, not a salary. The salary arrives later and is real." },
      { when: "Master's", what: "ISI's own master's, research, quant roles, or top analytics.", money: "Among the strongest early salaries available to a maths student in India." },
      { when: "If you do not get in", what: "You return to the commerce plan you kept alive. The attempt cost you time, not your life.", money: "Whatever the backup degree pays." },
      { when: "The ceiling", what: "Research, quant, senior data science, academia. A different ceiling from CA.", money: "High, for a tiny cohort." },
    ],
    careers: ["Statistics", "Quant-adjacent roles", "Research", "Data science", "Academia"],
    pair: ["eco", "analytics", "actuary", "isi-bsds"],
    watch: [
      "This card exists so the map is honest about the ceiling. It is not the default recommendation for a commerce classroom.",
      "Coaching that promises ISI to a student scoring 70 in school maths is not coaching.",
      "Never make ISI the only form you fill.",
    ],
    now: now(
      ["Do one past paper under a timer. The feeling you have afterwards is the data.", "Tell a parent it is an attempt, not a decision to leave commerce.", "Keep Accounts. You may need the degree it belongs to."],
      ["Fill ISI and CMI if the past papers were encouraging. Fill CUET anyway.", "Do not vanish from school pre-boards. A failed Class 12 hurts every other door.", "Sleep. These papers reward a clear head more than a heroic week."],
      ["If the roll number did not turn into a seat, start the backup in the same week. No mourning semester.", "You can try related master's exams later from an economics or statistics degree.", "Do not pay for a second drop year unless a teacher who has seen your script says the gap is close."],
      ["Too late for this bachelor's. Master's routes from a strong eco or stats degree still exist. That is a year-3 conversation."],
    ),
    delhi:
      "The exam is national. There is no Delhi centre advantage at bachelor's level worth planning around. Sit it from home.",
    bestIf: "Maths is the subject you would do if nobody offered you a career. Everyone else should admire this door and not walk through it.",
    firstPay: "Admission is the prize. Pay comes after the degree, and for those who finish, it is strong. For those who only attempt, it is zero — which is fine.",
  },
  {
    slug: "ca",
    name: "Chartered Accountancy",
    kicker: "ICAI — the default professional course, not the only one",
    group: "pro",
    oneLine:
      "Chartered Accountancy, from ICAI. You need to pass Class 12. There is no minimum percentage right now.",
    maths: "helpful",
    duration: "About 4.5–5 years if every group clears on time. Most people take longer.",
    cost: "Low",
    costNote:
      "ICAI's own registration is the small bill. Coaching in Delhi is the large one, and it is optional. Articleship is paid, thinly.",
    class11:
      "Not on ICAI's form. Foundation's accounting paper is cruel to a student whose Class 11 accounts was memorised. Maths helps the quantitative paper. It does not replace accounts.",
    class12:
      "Pass Class 12 from a recognised board, any stream. ICAI's current Foundation route does not set a percentage. You may register after Class 10, but you sit the exam only after you have passed Class 12. Old websites still say 50%. Read the prospectus on icai.org the month you register.",
    gates: [
      { label: "Class 11", rule: "Not a cutoff." },
      { label: "Class 12", rule: "Pass, any stream. Appearing students may register; the marksheet has to reach ICAI before the exam rule they print." },
      { label: "Board %", rule: "No minimum on the current Foundation route." },
      { label: "Direct entry", rule: "After graduation: about 55% for commerce graduates and about 60% for others, straight into Intermediate. Or via the Intermediate level of CS or CMA. This is a later door, not a Class 12 door." },
    ],
    exams: [
      {
        name: "CA Foundation",
        when: "Several times a year. Register on the ICAI SSP portal.",
        papers: "Accounting, Business Laws, Quantitative Aptitude (maths, logical reasoning, statistics), Business Economics. Maths students have an edge on one paper, not on the course.",
      },
      {
        name: "CA Intermediate",
        when: "After Foundation, or via direct entry after graduation.",
        papers: "Two groups, under the new scheme a tighter set than the old eight-paper memory. Both groups, plus the training rules, before you are in the Final corridor.",
      },
      {
        name: "Articleship and Final",
        when: "Articleship is about two years under the new scheme. Final sits around it, on ICAI's calendar.",
        papers: "The last exam diet, plus the work. The work is not a formality. It is where you either become hireable or only become 'cleared'.",
      },
    ],
    how: [
      "Register on ICAI's portal. Keep the Class 10 certificate — they use it for date of birth.",
      "Decide the attempt with a calendar, not with a coaching centre's batch start date.",
      "Enrol in a bachelor's the same year. IGNOU, SOL, or a regular college. Government exams and many visas want a degree even if ICAI calls you qualified.",
      "If you join a regular college, ask about attendance before you join articleship. The collision is famous and avoidable.",
      "Clear Foundation. Then Intermediate. Do not buy Final books in Class 12.",
    ],
    placesLabel: "There is one institute. These are the rooms the letters open",
    places: [
      { name: "ICAI", where: "National", via: "Foundation", note: "The only body that makes you a CA in India. There is no 'top college for CA'." },
      { name: "Deloitte, PwC, EY, KPMG", where: "Metros", via: "Articleship and later hiring", note: "The Big 4. Stipend first, a job if you qualify and they want you. Not the only good training." },
      { name: "Grant Thornton, BDO and other firms", where: "Metros", via: "Articleship", note: "Often better work exposure than the brand you were chasing." },
      { name: "A small or mid firm", where: "Your city", via: "Articleship", note: "You see the whole file. You do not see a campus. Both facts matter." },
      { name: "Industry finance teams", where: "FMCG, manufacturing, startups", via: "After qualifying", note: "FP&A, controllership, tax. The CFO corridor starts here, slowly." },
      { name: "Own practice", where: "Anywhere", via: "After qualifying, with a member's rules", note: "A real business. Clients do not appear because you cleared." },
      { name: "Transaction advisory and valuation", where: "Firms", via: "After qualifying, plus a finance skill", note: "Possible. CA alone is not an investment-banking seat." },
      { name: "A degree college beside it", where: "SRCC down to IGNOU", note: "SRCC plus articleship is a timetable fight. SOL or IGNOU is what most articled students actually attend. Pick with your eyes open.", via: "CUET or open university" },
      { name: "Overseas pathways", where: "Later", via: "ICAI MoUs, or ACCA exemptions", note: "A conversation after you qualify, not a reason to start." },
      { name: "Teaching CA", where: "Coaching centres", via: "After you can teach a paper", note: "A legitimate career. Do not start it instead of articleship." },
    ],
    after: [
      { when: "Articleship", what: "You work in a firm and study. The stipend is small on purpose.", money: "Think monthly stipend, not CTC. Big 4 pays more than a tiny firm and still is not a salary you build a life on." },
      { when: "Newly qualified", what: "Audit, tax, accounts, internal audit, or industry finance.", money: "A metro fresher package often lands around ₹8–18 lakh. Rank-holders and deals roles sit above. Small-city practice sits below." },
      { when: "Year 7", what: "Manager in a firm, or a finance lead in a company. Practice owners have a client book instead of a designation.", money: "A wide band, commonly the high teens to the thirties in metros if you stayed in the work." },
      { when: "The ceiling", what: "Partner, CFO, a serious practice, or a pivot into deals if you added valuation, an MBA, or unusual exposure.", money: "Partner and CFO numbers are real and not the median. Do not sell a student the ceiling." },
    ],
    careers: ["Audit", "Tax", "Industry finance", "Practice", "FP&A", "Internal audit"],
    pair: ["bcom-du", "bcom-india", "cma", "acca", "govt"],
    watch: [
      "Registering is not starting. Students frame the registration mail and then fail Foundation because nobody studied.",
      "Multiple attempts are normal. The brochure duration is a first-attempt fantasy. Plan the year you will actually use.",
      "CA plus full CMA plus CS is how people collect prospectuses and clear nothing. Pick one main diet.",
    ],
    now: now(
      ["Make Class 11 accounts clean. Rewrite, do not highlight.", "Maths: keep it, for Paper 3 and for every other door.", "Do not buy a full CA coaching stack in September of Class 11 unless the accounts base is already calm."],
      ["Register if you are sure. You can still sit other entrances.", "Pick the Foundation attempt that does not collide with board practicals.", "Tell the family the honest duration: five years is a good outcome, not a delay."],
      ["If you passed Class 12, the percentage does not change this door.", "Choose the degree in the same month. Waiting 'till Foundation is over' is how the degree never starts.", "Join a firm only when ICAI's articleship rules say you can. Not before, as free labour with a promise."],
      ["If you are already graduating, look at direct entry only if the graduation percentage meets it. Otherwise Foundation still exists.", "Do not restart CA in the final year because campus placements scared you, unless you will actually sit the papers.", "A qualified CA who cannot explain a balance sheet out loud wasted the letters. Practice speaking the work."],
    ),
    delhi:
      "ICAI's northern region is used to Delhi students. Coaching is everywhere and uneven. Articleship openings cluster in the NCR firms and in the Big 4 offices. You do not need to move to start.",
    bestIf: "You can study law and accounts for years, you are not in a hurry to draw a salary, and you want a credential India still recognises without a famous college.",
    firstPay: "Articleship is a stipend. A newly qualified CA in a metro firm or company often sees about ₹8–18 lakh. That range is a door, not a quote.",
  },
  {
    slug: "cs",
    name: "Company Secretary",
    kicker: "ICSI — law, governance, the board and the filings",
    group: "pro",
    oneLine:
      "Company Secretary. The work is company law, board meetings, and filings. It is not a share-market course.",
    maths: "unused",
    duration: "About 3–4 years if exams and training cooperate",
    cost: "Low",
    costNote: "ICSI registration and exam fees are the official bill. Coaching is extra. Training is part of the course, not a hobby.",
    class11:
      "Not a cutoff. If you already hate reading long rules, believe that signal. This course is reading.",
    class12:
      "Pass Class 12 from a recognised board. CSEET is the entrance for school-leavers. Graduates can usually skip CSEET and enter the Executive programme. There is no serious national story in which a 95% board score makes you a CS.",
    gates: [
      { label: "Class 11", rule: "Not used." },
      { label: "Class 12", rule: "Pass. Then CSEET, unless you are already a graduate — graduates generally enter Executive directly." },
      { label: "Board %", rule: "Not the filter. CSEET has its own pass mark." },
      { label: "Training", rule: "After the exams, practical training is compulsory before membership. A CS without it is not a CS." },
    ],
    exams: [
      {
        name: "CSEET",
        when: "Several sessions a year, after Class 12.",
        papers: "Business communication, legal aptitude, economic and business environment, current affairs. Objective, and easier to underestimate than to clear well.",
      },
      {
        name: "CS Executive",
        when: "After CSEET, or directly after graduation.",
        papers: "Corporate law, company law, tax, securities, and the setting-up of business. This is where the course becomes a profession.",
      },
      {
        name: "CS Professional",
        when: "After Executive.",
        papers: "The final academic group, then training and membership. Listed companies must appoint a company secretary. That sentence is the labour market.",
      },
    ],
    how: [
      "Register with ICSI for CSEET if you are a Class 12 student.",
      "If you already have a degree by the time you decide, ask ICSI whether you skip CSEET. Do not sit an exam you are exempt from.",
      "Read a bare act slowly once before you pay for coaching. If the page makes you angry, choose CA or a degree instead.",
      "Clear Executive, then Professional.",
      "Plan training where a real company secretary sits, not only where a certificate is easy.",
    ],
    placesLabel: "One institute. Ten rooms that actually employ the letters",
    places: [
      { name: "ICSI", where: "National", via: "CSEET", note: "The only route to the Indian CS qualification." },
      { name: "Listed-company secretarial teams", where: "Metros and large HQs", via: "Membership", note: "The core job. Boards, ROC, SEBI, stock-exchange filings." },
      { name: "A practising company secretary", where: "Any city", via: "A certificate of practice", note: "You serve companies that cannot justify a full-time CS. A real small firm." },
      { name: "Law-firm corporate teams", where: "Delhi, Mumbai, Bengaluru", via: "CS plus drafting skill", note: "Closer to corporate law than to accounts. Pairs well with an LLB later." },
      { name: "Big 4 governance and risk", where: "Metros", via: "Membership", note: "Possible. You are not competing for the audit article seat. Different team." },
      { name: "In-house counsel corridor", where: "Large companies", via: "CS, often plus an LLB", note: "The combination students mean when they say 'CS and law'." },
      { name: "Startups that just got serious", where: "NCR, Bengaluru, Mumbai", via: "Membership", note: "The first CS hire is a grown-up moment for a company. The seat is lonely and useful." },
      { name: "Banks and NBFCs compliance", where: "National", via: "Membership", note: "Secretarial plus a wall of regulation. Stable, specific." },
      { name: "Registrar and advisory boutiques", where: "Cities", via: "Practice", note: "Filings, incorporations, due diligence support." },
      { name: "A degree beside it", where: "B.Com or LLB", via: "CUET or CLAT", note: "B.Com is the easy pair. A law degree is the pair that changes the ceiling. Not both at full intensity in year 1." },
    ],
    after: [
      { when: "Trainee", what: "You learn filings by doing them. The romance is limited. The competence is not.", money: "Training stipends vary from modest to slightly less modest." },
      { when: "Newly associated member", what: "Executive or assistant company secretary, or a junior in a practice.", money: "Often about ₹6–12 lakh in a company in a metro. Practice income starts lower and depends on clients." },
      { when: "Year 8", what: "Company secretary of a mid-size company, or a senior associate in a firm. The KMP designation is a legal appointment, not a LinkedIn mood.", money: "A wide, respectable band. Listed-company CS roles pay for the responsibility." },
      { when: "The ceiling", what: "CS of a large listed company, a governance partner, or a corporate lawyer if you added the LLB and the drafting years.", money: "Senior KMP pay is high and rare. Most members have a solid professional life below that headline." },
    ],
    careers: ["Company secretary", "Corporate compliance", "Governance", "Corporate law support", "Practice"],
    pair: ["law", "bcom-du", "ca", "govt"],
    watch: [
      "Students pick CS because someone said it is 'easier than CA'. The pass rates do not support a lazy version of that sentence. The work is also different. Easier is the wrong axis.",
      "Maths will not help you here. Do not choose it to use your maths. Choose BMS, Eco, IPM or actuarial for that.",
      "Current affairs in CSEET is a real paper. It is not something you cover the night before.",
    ],
    now: now(
      ["Read one chapter of a company-law primer. Notice your own reaction.", "Keep maths anyway, for every other door on this map.", "Do not register for CA, CS and CMA in the same month."],
      ["If CS is the choice, register for CSEET and give it a proper attempt, not a 'let's see'.", "English writing matters. Start writing one clean page a week.", "Keep a degree plan. Membership plus no bachelor's is an avoidable problem."],
      ["CSEET, then Executive. In that order.", "Pick B.Com or an integrated law programme with your eyes open about timetables.", "If you scored very high and love reading, look at CLAT as the other legal life, not as a duplicate of CS."],
      ["Graduates: check the CSEET exemption and enter Executive if you are exempt.", "A CS beside a job is possible and slow. Protect the exam leave before you promise your manager.", "If you want court work, this is the wrong course. Get an LLB."],
    ),
    delhi:
      "ICSI's Delhi setup and the NCR company HQs make this a natural Delhi profession. Company secretarial jobs cluster where companies are registered and managed. You are already in the right city.",
    bestIf: "You like rules, language and responsibility, and you want a defined corporate role more than you want a balance sheet.",
    firstPay: "A new member in a metro company often starts around ₹6–12 lakh. The training year is not that number.",
  },
  {
    slug: "cma",
    name: "Cost & Management Accountant",
    kicker: "ICMAI — costing, MIS, factories, decisions",
    group: "pro",
    oneLine:
      "Cost accounting, from ICMAI. You learn what a product or a factory really costs.",
    maths: "strong",
    duration: "About 3–4 years with the practical training",
    cost: "Low",
    costNote: "Institute fees are moderate. Coaching is optional. The practical training requirement is time, which is also money.",
    class11:
      "Not a cutoff. Costing is a different muscle from financial accounts. If Class 11 accounts is a mess, fix it before you add another institute.",
    class12:
      "Pass Class 12, any stream. No minimum percentage for Foundation. Graduates can enter Intermediate under ICMAI's rules. A pass at CA Foundation or CS Foundation level can also open Intermediate — check the current prospectus before you rely on that sentence.",
    gates: [
      { label: "Class 11", rule: "Not used." },
      { label: "Class 12", rule: "Pass from a recognised board. Appearing students should confirm the current 'result awaited' rule." },
      { label: "Board %", rule: "No minimum for Foundation." },
      { label: "Training", rule: "Practical training, often around 15 months, before you are done. Budget it." },
    ],
    exams: [
      {
        name: "CMA Foundation",
        when: "After Class 12, on ICMAI's diet.",
        papers: "Business laws and communication, financial and cost accounting, business mathematics and statistics, business economics and management. Maths is a real paper here.",
      },
      {
        name: "CMA Intermediate",
        when: "After Foundation or via the graduate / exemption door.",
        papers: "Two groups: costing, accounting, tax, law, and the decision tools. This is the spine of the course.",
      },
      {
        name: "CMA Final",
        when: "After Intermediate, with training rules observed.",
        papers: "Strategic cost, performance, corporate laws, and the elective. Membership follows the rules, not the last exam alone.",
      },
    ],
    how: [
      "Register for Foundation on ICMAI's portal if you have passed, or are allowed to appear.",
      "Do a degree beside it. Same reason as CA: the letters are not always a bachelor's in the eyes of a government form.",
      "Clear Foundation, then both Intermediate groups.",
      "Use the maths. Students who chose commerce with maths and then refuse the quantitative papers have picked the wrong institute.",
      "Aim the training at a factory, an FMCG plant, or a cost consultancy — not at a random filing shop.",
    ],
    placesLabel: "One institute. The industry rooms that recognise it",
    places: [
      { name: "ICMAI", where: "National", via: "Foundation", note: "The body. Formerly ICWAI. The letters people still mix up with CA." },
      { name: "Manufacturing finance teams", where: "Industrial towns and metros", via: "Membership", note: "Costing, MIS, inventory, performance. The home ground." },
      { name: "FMCG and consumer companies", where: "Metros", via: "Membership", note: "Product costing and management accounts." },
      { name: "Infrastructure and energy", where: "Project sites and HQs", via: "Membership", note: "Project cost control. Less glamorous, very real." },
      { name: "Consulting cost practices", where: "Cities", via: "Membership", note: "Smaller than the Big 4 audit machine. Often better aligned to the syllabus." },
      { name: "Big 4 advisory", where: "Metros", via: "Membership plus a degree", note: "Possible, not the default article. You may need to explain the letters to a recruiter who only knows CA." },
      { name: "Own cost practice", where: "Cities", via: "Certificate of practice", note: "Cost audit and advisory, where the law requires it." },
      { name: "PSU finance", where: "National", via: "Their recruitment, CMA often listed", note: "Watch notifications. CMA is explicitly named more often than students think." },
      { name: "A plant in year 1 of training", where: "Wherever the factory is", via: "Training", note: "Go once. A CMA who has never seen a shop floor is a theory." },
      { name: "Paired with a degree", where: "B.Com or engineering-adjacent business", via: "College", note: "B.Com is the natural pair. An MBA later is common and not mandatory." },
    ],
    after: [
      { when: "Training", what: "You learn costing where costs actually happen.", money: "Stipend territory." },
      { when: "Newly qualified", what: "Management accountant, cost executive, MIS, internal reporting.", money: "Often about ₹7–14 lakh in industry. A wide, honest band." },
      { when: "Year 8", what: "Costing head, commercial finance, plant controller.", money: "The twenties are reachable in good companies. Titles vary more than the work." },
      { when: "The ceiling", what: "CFO of an industrial company, or a specialised cost consultant. Less 'brand me' than CA, sometimes more useful inside a factory.", money: "Company-dependent. Do not borrow CA-partner folklore." },
    ],
    careers: ["Cost accounting", "MIS", "Management accounting", "Plant finance", "PSU finance"],
    pair: ["ca", "bcom-du", "analytics", "cat"],
    watch: [
      "Do not sit CA and CMA as a double full-time identity in Class 12. The syllabi rhyme and the calendars do not.",
      "If your picture of success is a signboard that says 'tax consultant', this is the slower route to it. CA matches that picture better.",
      "Maths and statistics in Foundation are not decorative. Commerce-with-maths students should score there, not fear the paper.",
    ],
    now: now(
      ["Fix accounting basics.", "Keep maths sharp on purpose — this institute will test it.", "Visit one factory or a serious shop floor video is a poor substitute. A real visit, if an uncle can arrange it, changes the decision."],
      ["Choose CMA or CA as the main attempt. You may respect both. You may register for one.", "Calendar the Foundation diet against the board exams.", "Enrol for a degree in parallel."],
      ["Foundation first.", "If you are a graduate by now with the required marks, ask about Intermediate entry and do not romanticise repeating Foundation.", "Pick training for the work, not for the city you already like."],
      ["A CMA beside a job in industry is a natural pair. Use the company's own numbers as your textbook.", "Do not add CFA in the same quarter you add a CMA group.", "If the work bores you after Intermediate, stop and switch. Sunk fees are cheaper than five bored years."],
    ),
    delhi:
      "You can study from Delhi. The factories that make the training interesting are often outside the ring road. Be willing to go.",
    bestIf: "You like numbers attached to real operations — what a product costs, what a plant wastes — more than you like tax law.",
    firstPay: "Newly qualified hires in industry often fall around ₹7–14 lakh. Training stipends are a different, smaller number.",
  },
  {
    slug: "acca",
    name: "ACCA",
    kicker: "UK letters, sat from India",
    group: "pro",
    oneLine:
      "A UK accounting qualification you can start from India. English and maths or accounts marks matter.",
    maths: "helpful",
    duration: "3–4 years for all papers from scratch, beside a degree",
    cost: "High",
    costNote:
      "Fees are charged in pounds. Add coaching in rupees. This is not an ICAI-priced course. Say the annual number out loud before you register.",
    class11:
      "Not on ACCA's form. The accounts base you build now is the only reason Applied Knowledge will feel fair.",
    class12:
      "ACCA's published India route for direct entry after Class 12: five subjects, at least three taken in Class 12, including English and Mathematics or Accounts; 65% in English; 65% in Maths or Accounts; 50% in the rest. Miss it and the Foundations in Accountancy route still exists. Confirm on accaglobal.com. The page moves.",
    gates: [
      { label: "Class 11", rule: "Not a cutoff." },
      { label: "Class 12 direct", rule: "65% English and 65% in Maths or Accounts, 50% in the others, on ACCA's India rule. Verify before paying." },
      { label: "If you miss 65%", rule: "Foundations in Accountancy, then up. Slower, not banned." },
      { label: "After a degree", rule: "A recognised bachelor's can enter with exemptions. B.Com (Hons) from a mapped university often removes the first few papers. The map is university-specific." },
    ],
    exams: [
      {
        name: "Applied Knowledge",
        when: "As soon as you are registered, on ACCA's computer-based windows.",
        papers: "Business and Technology, Management Accounting, Financial Accounting. Three papers. Do not call the whole qualification '13' without knowing these are the start.",
      },
      {
        name: "Applied Skills",
        when: "After the knowledge papers, or with exemptions.",
        papers: "Law, tax, reporting, audit, performance, financial management. The middle, and the bulk of the work.",
      },
      {
        name: "Strategic Professional",
        when: "Last.",
        papers: "Essentials plus options. Then practical experience, recorded properly, or you are not an affiliate who can move to membership.",
      },
    ],
    how: [
      "Check the entry rule with your actual subject marks, on ACCA's site, not on a coaching landing page.",
      "Register, sit Applied Knowledge, and enrol in a bachelor's. Exemptions later depend on that degree's map.",
      "Keep a record of work experience from the first legal job. The PER is how people lose a year at the end.",
      "Decide why UK letters. If the answer is 'Instagram said CA is saturated', that is not a reason. If the answer is a specific firm, a specific country, or a parent abroad, it might be.",
      "Compare the remaining papers with ICAI if you are also flirting with CA. Doing both from zero is how bank accounts die.",
    ],
    placesLabel: "Not a college list. Where the letters are read",
    places: [
      { name: "ACCA", where: "Global body", via: "Its registration", note: "The qualification. Centres in Indian cities deliver the exams." },
      { name: "Big 4 India", where: "Metros", via: "Papers plus a degree", note: "They know the letters. They still hire CAs in larger numbers. You compete; you do not skip the queue." },
      { name: "MNCs and GCCs", where: "Bengaluru, Hyderabad, Pune, NCR", via: "Papers", note: "Shared-service and controlling teams that report in IFRS. This is the Indian home of ACCA." },
      { name: "IFRS reporting roles", where: "Large companies", via: "Strategic Professional", note: "Where the syllabus matches the Monday morning." },
      { name: "A move to the UK or the Gulf", where: "Later", via: "Membership plus visa rules", note: "Possible and not packaged with the registration. Immigration rules are a separate exam." },
      { name: "Industry FP&A", where: "Metros", via: "Membership", note: "Management accounting papers help here more than audit folklore." },
      { name: "A mapped Indian university", where: "DU, Mumbai, others", via: "Their degree", note: "Exemptions are a property of the syllabus ACCA has assessed. Ask for the exemption calculator result, not a counsellor's 'usually four'." },
      { name: "Internal audit", where: "Companies", via: "Papers", note: "A steady room. Less glory, more employment." },
      { name: "Practice in India", where: "Limited", via: "Membership", note: "ACCA is not a substitute for ICAI if your dream is an Indian statutory audit signboard. Know that before you start." },
      { name: "Paired B.Com", where: "Anywhere respectable", via: "College admission", note: "Do it. Exemptions, visas, and government forms all become simpler." },
    ],
    after: [
      { when: "Part-qualified", what: "You can work. Say which papers are left. 'ACCA student' alone is a weak line.", money: "Often ₹4–8 lakh while papers remain, in a relevant role. Sometimes nothing, if you only study." },
      { when: "Affiliate", what: "Papers done, experience still being signed off.", money: "A step up. In India, about ₹6–12 lakh is a common early band, higher in a GCC with IFRS work." },
      { when: "Member, year 6", what: "Reporting, FP&A, audit in a firm that values the letters, or a role outside India if the visa exists.", money: "The teens are reasonable in India. UK salaries are UK salaries — they require being hired in the UK." },
      { when: "The ceiling", what: "Finance director of an MNC desk, a reporting lead, a Gulf contract. Not, by default, partner of an Indian statutory audit firm.", money: "Role-based. The pound fee was the entry cost of this ceiling, not a guarantee." },
    ],
    careers: ["IFRS reporting", "Management accounting", "MNC finance", "Internal audit", "Roles outside India later"],
    pair: ["bcom-du", "bcom-india", "ca", "analytics"],
    watch: [
      "You cannot sign a typical Indian statutory audit as an ACCA instead of a CA. If that was the dream, you are in the wrong card.",
      "Coaching ads quote Dubai salaries in dirhams beside a Class 12 student's photo. That is advertising.",
      "The 65% rule is specific. A 90% in Business Studies does not repair a 60 in English.",
    ],
    now: now(
      ["Protect English marks. This is one of the few courses where that sentence is technical, not moral.", "Protect Maths or Accounts, whichever is stronger. You need one of them at the direct-entry level.", "Ignore any plan that says you will 'finish ACCA before the neighbours finish CA' as a personality contest."],
      ["Check the percentage rule with your pre-board reality. If English is at 55 with two months to go, the direct door is in danger. Study English.", "Still sit CUET or your college entrance. ACCA is not a campus.", "Ask the coaching centre for the fee in writing, including what is not included."],
      ["If you cleared 65/65/50, you may register. If you did not, ask about FIA instead of arguing with the website.", "Start the degree in the same admission cycle.", "Book one paper. Not four 'to motivate yourself'."],
      ["Run the exemption calculator on your exact university.", "Do not pay for a paper you are exempt from.", "Record practical experience as you work. Reconstructing it in year 4 is miserable."],
    ),
    delhi:
      "Exam centres and coaching exist in Delhi. The stronger ACCA job market in India is also in the GCC-style offices of Bengaluru, Hyderabad and Pune. Delhi works. Do not assume it is the densest market.",
    bestIf: "You want international accounting letters, your English and Maths or Accounts can clear the entry rule, and you are not trying to replace a CA practice in India.",
    firstPay: "In India, early relevant jobs often sit around ₹6–12 lakh once you are well through the papers. The foreign number is not included.",
  },
];

export const paths: Path[] = [
  ...listed,
  ...morePaths,
  ...extraPaths,
  ...quietPaths,
  ...hiddenPaths,
  ...gapPaths,
  ...sciencePaths,
  ...worldPaths,
  ...catalogPaths,
];

export const pathBySlug: Record<string, Path> = Object.fromEntries(
  paths.map((path) => [path.slug, path]),
);

export function searchPaths(query: string, group: GroupId | "all"): Path[] {
  const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  return paths.filter((path) => {
    if (group !== "all" && path.group !== group) return false;
    if (words.length === 0) return true;
    const plain = plainOf(path.slug);
    const tag = tagOf(path.slug);
    const hay = [
      path.name,
      path.kicker,
      path.oneLine,
      path.bestIf,
      path.delhi,
      plain.title,
      plain.line,
      plain.also,
      plain.words,
      tag.goodFor,
      tag.avoid,
      ...path.careers,
      ...path.exams.map((exam) => exam.name),
      ...path.places.map((place) => `${place.name} ${place.where}`),
    ]
      .join(" ")
      .toLowerCase();
    return words.every((word) => hay.includes(word));
  });
}
