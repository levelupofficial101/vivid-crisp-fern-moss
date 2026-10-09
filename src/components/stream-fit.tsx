import { useState } from "react";
import type { StreamPick } from "@/data/streams";

type Maths = "easy" | "ok" | "hard";
type Talk = "business" | "machines" | "body" | "making";
type Science = "physics" | "biology" | "both" | "neither";
type Stamina = "long" | "campus" | "sooner";
type Marks = "high" | "mid" | "low";

type Answers = {
  maths?: Maths;
  talk?: Talk;
  science?: Science;
  stamina?: Stamina;
  marks?: Marks;
};

const steps: {
  key: keyof Answers;
  prompt: string;
  options: { id: string; label: string }[];
}[] = [
  {
    key: "maths",
    prompt: "How does maths feel, honestly?",
    options: [
      { id: "easy", label: "Easy. They like it." },
      { id: "ok", label: "Okay, if someone teaches it." },
      { id: "hard", label: "A fight every week." },
    ],
  },
  {
    key: "talk",
    prompt: "What do they actually talk about?",
    options: [
      { id: "business", label: "Money, shops, business." },
      { id: "machines", label: "Machines, code, how things work." },
      { id: "body", label: "The body, animals, hospitals." },
      { id: "making", label: "Drawing, clothes, videos, making." },
    ],
  },
  {
    key: "science",
    prompt: "If they had to keep one science, which?",
    options: [
      { id: "physics", label: "Physics." },
      { id: "biology", label: "Biology." },
      { id: "both", label: "Both. Do not make me drop one." },
      { id: "neither", label: "Neither. Give me accounts." },
    ],
  },
  {
    key: "stamina",
    prompt: "What kind of next few years can they handle?",
    options: [
      { id: "long", label: "Long exams for years. CA shape." },
      { id: "campus", label: "One rank exam, then a campus." },
      { id: "sooner", label: "A skill and a job sooner." },
    ],
  },
  {
    key: "marks",
    prompt: "Class 10 marks, without the story?",
    options: [
      { id: "high", label: "Above 90 is realistic." },
      { id: "mid", label: "75 to 90." },
      { id: "low", label: "Passing is the real job right now." },
    ],
  },
];

function recommend(answers: Required<Answers>): { pick: StreamPick; title: string; why: string; caution: string } {
  const score = { commerce: 0, pcm: 0, pcb: 0, pcmb: 0 };
  if (answers.maths === "easy") {
    score.pcm += 2;
    score.pcmb += 2;
    score.commerce += 1;
  } else if (answers.maths === "ok") {
    score.commerce += 2;
    score.pcm += 1;
    score.pcmb += 1;
  } else {
    score.pcb += 2;
    score.commerce += 1;
  }
  if (answers.talk === "business") score.commerce += 3;
  if (answers.talk === "machines") {
    score.pcm += 3;
    score.pcmb += 1;
  }
  if (answers.talk === "body") {
    score.pcb += 3;
    score.pcmb += 1;
  }
  if (answers.talk === "making") {
    score.commerce += 1;
    score.pcm += 1;
  }
  if (answers.science === "physics") score.pcm += 3;
  if (answers.science === "biology") score.pcb += 3;
  if (answers.science === "both") score.pcmb += 4;
  if (answers.science === "neither") score.commerce += 3;
  if (answers.stamina === "long") score.commerce += 2;
  if (answers.stamina === "campus") {
    score.pcm += 1;
    score.pcb += 1;
  }
  if (answers.stamina === "sooner") score.commerce += 1;
  if (answers.marks === "high") {
    score.pcm += 1;
    score.pcmb += 1;
  }
  if (answers.science === "both" && answers.maths !== "hard") score.pcmb += 2;

  let pick = (Object.entries(score) as [StreamPick, number][]).sort((a, b) => b[1] - a[1])[0][0];
  let caution = "This is a conversation starter, not a lab test. The child still has to live with the subjects for two years.";
  if (answers.maths === "hard" && (pick === "pcm" || pick === "pcmb")) {
    pick = score.pcb >= score.commerce ? "pcb" : "commerce";
    caution = "PCM needs maths every day. If maths is a fight, do not pick it to please a relative.";
  }
  if (answers.marks === "low" && (pick === "pcm" || pick === "pcb")) {
    caution = "A rank exam is still possible, but the marks say the next year is for the basics, not for five coachings.";
  }

  const copy: Record<StreamPick, { title: string; why: string }> = {
    commerce: {
      title: "Commerce with Maths",
      why: "The pull is business, accounts, or a long professional exam. Keep maths if Sukhdev, economics, or actuarial work is even a maybe.",
    },
    pcm: {
      title: "Science PCM",
      why: "Machines, physics, or code, and maths is not a fight. JEE is the crowded door. It is not the only door.",
    },
    pcb: {
      title: "Science PCB",
      why: "The body and biology are the subject. NEET is the doctor door. Nursing, pharmacy, and the other health jobs are still here. JEE is not.",
    },
    pcmb: {
      title: "PCMB",
      why: "They want both maths and biology. The list is longer, and so is the homework. Dropping either one later closes a whole side.",
    },
  };
  return { pick, ...copy[pick], caution };
}

export function StreamFit({ onUse }: { onUse: (stream: StreamPick) => void }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const done = step >= steps.length;
  const current = steps[step];
  const result = done ? recommend(answers as Required<Answers>) : null;

  if (result) {
    return (
      <div className="panel p-4">
        <p className="text-sm font-semibold text-blue">Stream fit</p>
        <h2 className="mt-1 font-display text-3xl leading-tight text-cream">{result.title}</h2>
        <p className="mt-2 text-sm leading-normal text-cream">{result.why}</p>
        <p className="mt-2 text-sm leading-normal text-muted">{result.caution}</p>
        <div className="mt-4 flex flex-col gap-2">
          <button type="button" onClick={() => onUse(result.pick)} className="tap h-12 rounded-full bg-hot px-4 text-sm font-semibold text-ink">
            Use {result.title}
          </button>
          <button
            type="button"
            onClick={() => {
              setAnswers({});
              setStep(0);
            }}
            className="tap h-11 text-sm font-semibold text-blue"
          >
            Answer again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="panel p-4">
      <p className="text-sm font-semibold text-blue">
        Stream fit · {step + 1} of {steps.length}
      </p>
      <h2 className="mt-1 font-display text-2xl leading-tight text-cream">{current.prompt}</h2>
      <div className="mt-3 flex flex-col gap-2">
        {current.options.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => {
              setAnswers((prev) => ({ ...prev, [current.key]: option.id }));
              setStep((value) => value + 1);
            }}
            className="tap lift min-h-12 rounded-2xl border border-line bg-surface px-4 py-3 text-left text-sm font-semibold text-cream"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
