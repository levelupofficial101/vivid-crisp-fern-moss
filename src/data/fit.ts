import type { Category, Marks, Path } from "@/data/types";
import { tagOf } from "@/data/tags";

export type Verdict = "open" | "stretch" | "later" | "blocked" | "need";

export type Judgement = {
  verdict: Verdict;
  why: string;
};

const verdictLabel: Record<Verdict, string> = {
  open: "You can apply",
  stretch: "Hard, but possible",
  later: "Too early",
  blocked: "These marks are not enough",
  need: "Add your marks",
};

export function labelOf(verdict: Verdict): string {
  return verdictLabel[verdict];
}

function floor(category: Category, standard: number, relaxed: number): number {
  if (category === "SC" || category === "ST") return relaxed;
  return standard;
}

function passed(board: number | null): "yes" | "no" | "unknown" {
  if (board === null) return "unknown";
  return board >= 33 ? "yes" : "no";
}

function ageLine(): string {
  return " There is also an age limit, usually under about 20. SC, ST, and students with a disability often get about five extra years. Check the date on this year's form.";
}

export function judge(path: Path, marks: Marks): Judgement {
  const { stage, category, hasMaths, tenth, board, maths, accounts, english } = marks;
  const pass = passed(board);

  switch (path.slug) {
    case "ca":
    case "cs":
    case "cma": {
      if (pass === "no") {
        return {
          verdict: "blocked",
          why: "You need to pass Class 12. The percentage itself is not the rule for the current first exam. Old coaching sites still say 50%. Check the institute's own page when you register.",
        };
      }
      return {
        verdict: "open",
        why:
          pass === "unknown"
            ? "There is no minimum Class 12 percentage on the current entry. You do have to pass Class 12 before the first exam. You can register before the result."
            : "Your Class 12 percentage does not block this. Pass the board, then the institute's own exam is what decides it.",
      };
    }
    case "acca": {
      if (english === null || (maths === null && accounts === null)) {
        return {
          verdict: "need",
          why: "Add your English marks, and either maths or accounts. ACCA looks at those, not at a general impression.",
        };
      }
      const numeric = maths ?? 0;
      const accountsOk = (accounts ?? 0) >= 65;
      const mathsOk = maths !== null && numeric >= 65;
      const englishOk = english >= 65;
      const boardOk = board === null || board >= 50;
      if (englishOk && (mathsOk || accountsOk) && boardOk) {
        return {
          verdict: "open",
          why: "This matches the usual India rule for direct entry: 65% in English, and 65% in maths or accounts, with the other subjects at 50% or above. Check ACCA's own page before you pay. Fees are in pounds.",
        };
      }
      return {
        verdict: "stretch",
        why: "Direct entry wants 65% in English and 65% in maths or accounts, and 50% in the other subjects. If you miss that, you are not shut out. You start on a lower course, Foundations in Accountancy, and climb. Check this year's rule before you pay.",
      };
    }
    case "actuary": {
      if (!hasMaths) {
        return {
          verdict: "stretch",
          why: "The entrance test may still let you in. The papers after it are hard maths. Without maths in school, do not treat this as a side certificate.",
        };
      }
      if (pass === "no") {
        return {
          verdict: "blocked",
          why: "You need to pass Class 12, with English. That is part of the Institute of Actuaries of India route.",
        };
      }
      return {
        verdict: "open",
        why: "Pass Class 12 with English, then clear ACET, their entrance test. Maths is the actual job, even when a form does not call it compulsory.",
      };
    }
    case "bms": {
      if (!hasMaths) {
        return {
          verdict: "blocked",
          why: "Sukhdev asks for maths in CUET, plus a language and a general test. If you drop maths, this closes.",
        };
      }
      return {
        verdict: "open",
        why: "Maths keeps this open. The seat comes from your CUET score, not your board percentage. Also prepare the general test. Students who only revise accounts often miss it.",
      };
    }
    case "eco": {
      if (!hasMaths) {
        return {
          verdict: "blocked",
          why: "Delhi University economics asks for one language, maths, and two other subjects. No maths, no economics honours at DU.",
        };
      }
      return {
        verdict: "open",
        why: "Maths is the required CUET paper. Accounts is not what gets you in. Scores at SRCC, Stephen's, and Hindu change every round. Prepare the paper. Do not memorise last year's cutoff.",
      };
    }
    case "isi": {
      if (!hasMaths) {
        return {
          verdict: "blocked",
          why: "ISI's test assumes you studied maths. Commerce without maths is the wrong course.",
        };
      }
      return {
        verdict: "stretch",
        why: "You can apply. The test is far harder than CBSE commerce maths. Keep a real plan beside it, such as economics, Sukhdev, or a degree plus actuarial. Do not make ISI the only plan.",
      };
    }
    case "analytics": {
      if (!hasMaths) {
        return {
          verdict: "blocked",
          why: "The data degrees a commerce student can actually enter still want maths. Many campus statistics degrees also want science subjects you did not take.",
        };
      }
      return {
        verdict: "open",
        why: "Maths keeps the honest options open, including IIT Madras' online degree in data science, and private data degrees. A full Delhi University statistics seat often wants science subjects. Read that notice before you count on it.",
      };
    }
    case "ipm": {
      const need = floor(category, 60, 55);
      const boardsKnown = tenth !== null && board !== null;
      const clears = boardsKnown && tenth >= need && board >= need;
      const age = ageLine();
      if (!hasMaths) {
        return {
          verdict: "stretch",
          why: `Most forms do not make Class 12 maths compulsory. The maths section of the paper still assumes you are fast with numbers. Without maths, this is much harder.${age}`,
        };
      }
      if (!boardsKnown) {
        return {
          verdict: "need",
          why: `Add Class 10 and Class 12 percentages, expected is fine. IIM Indore has often set no minimum. Rohtak and several others still ask about ${need}% in both Class 10 and Class 12 for your category.${age}`,
        };
      }
      if (pass === "no") {
        return {
          verdict: "blocked",
          why: "You have to pass Class 12.",
        };
      }
      if (clears) {
        return {
          verdict: "open",
          why: `You clear the ${need}% style minimum used by Rohtak and several other IIMs. General, EWS, and OBC-NCL are usually on the higher number. SC and ST are on the lower one. IIM Indore has recently had no percentage minimum at all. The paper is still what decides it.${age}`,
        };
      }
      return {
        verdict: "stretch",
        why: `Under ${need}% in Class 10 or 12, Rohtak-style IIMs are usually closed. IIM Indore has recently not used a board-percentage minimum. Check this year's form before you decide.${age}`,
      };
    }
    case "law": {
      if (board === null) {
        return {
          verdict: "need",
          why: "CLAT asks for a Class 12 percentage: about 45% for General, EWS, and OBC, and about 40% for SC and ST. The paper does not use your maths.",
        };
      }
      const need = floor(category, 45, 40);
      if (board < need) {
        return {
          verdict: "blocked",
          why: `CLAT asks for about ${need}% in Class 12 for your category. The percentage only lets you sit. It does not make the rank.`,
        };
      }
      return {
        verdict: "open",
        why: "Your marks clear the CLAT minimum. They do not decide the rank. The paper is English, current affairs, legal reasoning, logic, and Class 10 maths. NLU Delhi is a second exam, called AILET.",
      };
    }
    case "bcom-du": {
      if (pass === "no") {
        return {
          verdict: "blocked",
          why: "You must pass Class 12. After that, CUET is what gets you the seat.",
        };
      }
      return {
        verdict: "open",
        why: hasMaths
          ? "With maths, Delhi University can score you on either combination: language plus maths plus two subjects, or language plus accountancy plus two subjects. They take the better one. A 98% in the board exam does not admit you by itself."
          : "Without maths you can still use the accountancy combination for B.Com Honours. You lose Sukhdev and economics honours.",
      };
    }
    case "bcom-india":
    case "bba":
    case "finance-ug": {
      if (pass === "no") {
        return {
          verdict: "blocked",
          why: "Pass Class 12 first. Each college then adds its own entrance test or its own merit list.",
        };
      }
      return {
        verdict: "open",
        why: "You can apply once you pass. Famous Mumbai commerce colleges are mostly for Maharashtra board students. A Delhi CBSE student should not plan on them. NMIMS, Symbiosis, Christ, and St. Xavier's Mumbai are the realistic all-India forms.",
      };
    }
    case "cfa": {
      if (stage === "college") {
        return {
          verdict: "stretch",
          why: "You can sit Level 1 in the last year of a degree. Class 12 alone cannot start CFA. Passing Level 1 is not an investment-banking job.",
        };
      }
      return {
        verdict: "later",
        why: "Not a Class 12 course. Finish most of a degree first. Use these years to get maths and accounts clean. Do not pay for a CFA form you cannot use yet.",
      };
    }
    case "frm": {
      if (stage === "college") {
        return {
          verdict: "open",
          why: "You can register for the first FRM paper during college. The full title still needs relevant work afterwards. It fits next to economics, finance, or Sukhdev.",
        };
      }
      return {
        verdict: "later",
        why: "Wait for college. A Class 12 report card does not need this certificate.",
      };
    }
    case "cat":
    case "govt":
    case "banking":
    case "teach": {
      if (stage === "college") {
        return {
          verdict: "open",
          why: "These open in the last year of college, or after you graduate. Class 12 marks are not the form. A degree is. Start reading now. Pay the fee when that year's notice is out.",
        };
      }
      return {
        verdict: "later",
        why: "You need a degree first. Nothing in Class 11 or 12 replaces that. Pick a degree you can score in. Some of these jobs, including RBI Grade B, later ask for a graduation percentage.",
      };
    }
    case "markets": {
      if (stage === "11") {
        return {
          verdict: "later",
          why: "Learn how a market works. Do not collect stock-market certificates in Class 11. Most useful ones belong next to a degree, and a few need you to be 18 or a graduate.",
        };
      }
      return {
        verdict: "open",
        why: "These are licences for specific market jobs, not a degree. Research analyst, mutual funds, and equity derivatives are the ones students actually use. Check the age and education line on that paper before you book it.",
      };
    }
    case "venture": {
      return {
        verdict: "open",
        why: "There is no cutoff. There is also no salary until a customer pays. If this is the family business, learn accounts properly. If this is a startup idea in Class 12, keep one real course going beside it, such as CA, a degree, or law.",
      };
    }
    default: {
      const tag = tagOf(path.slug);
      if (tag.needsMaths && !hasMaths) {
        return {
          verdict: "blocked",
          why: "This course wants maths in Class 12. Without it, do not plan on it.",
        };
      }
      if (tag.buckets[0] === "aftergrad" && stage !== "college") {
        return {
          verdict: "later",
          why: "This starts after a bachelor’s degree. Class 12 marks are not the form. Pick a degree you can score in, then come back.",
        };
      }
      return {
        verdict: "open",
        why: "Read the rules on the course page. If a number is missing here, the official form for that year wins.",
      };
    }
  }
}

export const verdictOrder: Verdict[] = ["open", "stretch", "need", "later", "blocked"];
