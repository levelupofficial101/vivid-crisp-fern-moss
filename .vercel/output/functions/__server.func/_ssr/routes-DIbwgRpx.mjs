import { i as __toESM } from "../_runtime.mjs";
import { S as useNavigate, X as require_react, w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as plainOf, f as searchPaths, g as useDesk, h as tagOf, l as pathBySlug, n as careerLanes, o as fitsStream, p as streamChoices, r as careers, s as interestMeta, t as bucketMeta, u as paths } from "./paths-B5l3kEmT.mjs";
import { i as stages } from "./types-D2VImr09.mjs";
import { i as Search, u as ChevronRight } from "../_libs/lucide-react.mjs";
import { r as Route$4 } from "./router-BwaJpY8C.mjs";
import { n as fromScience } from "./routes-D5v_vAJ_.mjs";
import { t as PathCard } from "./path-card-CXwevHE6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DIbwgRpx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var wheels = {
	commerce: [
		{
			slug: "ca",
			label: "CA"
		},
		{
			slug: "cs",
			label: "CS"
		},
		{
			slug: "actuary",
			label: "Actuary"
		},
		{
			slug: "iimb-dbe",
			label: "IIM online"
		},
		{
			slug: "iitg-dsai",
			label: "Guwahati AI"
		},
		{
			slug: "law",
			label: "Law"
		},
		{
			slug: "design",
			label: "Design"
		},
		{
			slug: "analytics",
			label: "Madras data"
		}
	],
	pcm: [
		{
			slug: "jee-main",
			label: "JEE"
		},
		{
			slug: "iiml-bsai",
			label: "Lucknow AI"
		},
		{
			slug: "iitg-dsai",
			label: "Guwahati AI"
		},
		{
			slug: "isi-bsds",
			label: "ISI data"
		},
		{
			slug: "pilot",
			label: "Pilot"
		},
		{
			slug: "uceed",
			label: "Design"
		},
		{
			slug: "nda",
			label: "NDA"
		},
		{
			slug: "analytics",
			label: "Madras data"
		}
	],
	pcb: [
		{
			slug: "neet",
			label: "NEET"
		},
		{
			slug: "bsc-nursing",
			label: "Nursing"
		},
		{
			slug: "bioinfo",
			label: "Bio + code"
		},
		{
			slug: "iitg-dsai",
			label: "Guwahati AI"
		},
		{
			slug: "bpharm",
			label: "Pharmacy"
		},
		{
			slug: "design",
			label: "Design"
		},
		{
			slug: "law",
			label: "Law"
		},
		{
			slug: "not-mbbs",
			label: "Not MBBS"
		}
	],
	pcmb: [
		{
			slug: "jee-main",
			label: "JEE"
		},
		{
			slug: "neet",
			label: "NEET"
		},
		{
			slug: "iitg-dsai",
			label: "Guwahati AI"
		},
		{
			slug: "isi-bsds",
			label: "ISI data"
		},
		{
			slug: "design",
			label: "Design"
		},
		{
			slug: "law",
			label: "Law"
		},
		{
			slug: "analytics",
			label: "Madras data"
		},
		{
			slug: "not-eng",
			label: "Not eng."
		}
	]
};
function DoorWheel({ stream }) {
	const items = wheels[stream];
	const [rotation, setRotation] = (0, import_react.useState)(0);
	const [spinning, setSpinning] = (0, import_react.useState)(false);
	const [landed, setLanded] = (0, import_react.useState)(null);
	const slice = 360 / items.length;
	const pick = landed === null ? null : items[landed];
	function spin() {
		if (spinning) return;
		const index = Math.floor(Math.random() * items.length);
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setLanded(index);
			return;
		}
		setSpinning(true);
		setLanded(index);
		setRotation((prev) => {
			const current = (prev % 360 + 360) % 360;
			const delta = ((360 - (index * slice + slice / 2) + 360) % 360 - current + 360) % 360;
			return prev + 1440 + delta;
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative z-10 mt-4 border-t border-line pt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold text-cream",
				children: "Spin a door"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm leading-normal text-muted",
				children: "A surprise from this stream only. It does not decide the career. It opens one page."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto mt-4 size-64",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-1/2 z-10 size-3 -translate-x-1/2 rotate-45 bg-hot" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "wheel-face size-full rounded-full " + (spinning ? "wheel-spin" : ""),
						style: { transform: `rotate(${rotation}deg)` },
						onTransitionEnd: () => setSpinning(false)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute inset-16 flex items-center justify-center rounded-full bg-surface text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-2 text-sm font-semibold text-cream",
							children: spinning ? "…" : pick?.label ?? "Spin"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: spin,
				disabled: spinning,
				className: "tap mx-auto mt-3 flex h-12 items-center justify-center rounded-full bg-hot px-6 text-sm font-semibold text-ink",
				children: spinning ? "Spinning" : "Spin"
			}),
			pick && !spinning ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/path/$slug",
				params: { slug: pick.slug },
				className: "tap mt-3 block text-center text-sm font-semibold text-blue",
				children: ["Open ", pick.label]
			}) : null
		]
	});
}
var steps = [
	{
		key: "maths",
		prompt: "How does maths feel, honestly?",
		options: [
			{
				id: "easy",
				label: "Easy. They like it."
			},
			{
				id: "ok",
				label: "Okay, if someone teaches it."
			},
			{
				id: "hard",
				label: "A fight every week."
			}
		]
	},
	{
		key: "talk",
		prompt: "What do they actually talk about?",
		options: [
			{
				id: "business",
				label: "Money, shops, business."
			},
			{
				id: "machines",
				label: "Machines, code, how things work."
			},
			{
				id: "body",
				label: "The body, animals, hospitals."
			},
			{
				id: "making",
				label: "Drawing, clothes, videos, making."
			}
		]
	},
	{
		key: "science",
		prompt: "If they had to keep one science, which?",
		options: [
			{
				id: "physics",
				label: "Physics."
			},
			{
				id: "biology",
				label: "Biology."
			},
			{
				id: "both",
				label: "Both. Do not make me drop one."
			},
			{
				id: "neither",
				label: "Neither. Give me accounts."
			}
		]
	},
	{
		key: "stamina",
		prompt: "What kind of next few years can they handle?",
		options: [
			{
				id: "long",
				label: "Long exams for years. CA shape."
			},
			{
				id: "campus",
				label: "One rank exam, then a campus."
			},
			{
				id: "sooner",
				label: "A skill and a job sooner."
			}
		]
	},
	{
		key: "marks",
		prompt: "Class 10 marks, without the story?",
		options: [
			{
				id: "high",
				label: "Above 90 is realistic."
			},
			{
				id: "mid",
				label: "75 to 90."
			},
			{
				id: "low",
				label: "Passing is the real job right now."
			}
		]
	}
];
function recommend(answers) {
	const score = {
		commerce: 0,
		pcm: 0,
		pcb: 0,
		pcmb: 0
	};
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
	let pick = Object.entries(score).sort((a, b) => b[1] - a[1])[0][0];
	let caution = "This is a conversation starter, not a lab test. The child still has to live with the subjects for two years.";
	if (answers.maths === "hard" && (pick === "pcm" || pick === "pcmb")) {
		pick = score.pcb >= score.commerce ? "pcb" : "commerce";
		caution = "PCM needs maths every day. If maths is a fight, do not pick it to please a relative.";
	}
	if (answers.marks === "low" && (pick === "pcm" || pick === "pcb")) caution = "A rank exam is still possible, but the marks say the next year is for the basics, not for five coachings.";
	return {
		pick,
		...{
			commerce: {
				title: "Commerce with Maths",
				why: "The pull is business, accounts, or a long professional exam. Keep maths if Sukhdev, economics, or actuarial work is even a maybe."
			},
			pcm: {
				title: "Science PCM",
				why: "Machines, physics, or code, and maths is not a fight. JEE is the crowded door. It is not the only door."
			},
			pcb: {
				title: "Science PCB",
				why: "The body and biology are the subject. NEET is the doctor door. Nursing, pharmacy, and the other health jobs are still here. JEE is not."
			},
			pcmb: {
				title: "PCMB",
				why: "They want both maths and biology. The list is longer, and so is the homework. Dropping either one later closes a whole side."
			}
		}[pick],
		caution
	};
}
function StreamFit({ onUse }) {
	const [step, setStep] = (0, import_react.useState)(0);
	const [answers, setAnswers] = (0, import_react.useState)({});
	const done = step >= steps.length;
	const current = steps[step];
	const result = done ? recommend(answers) : null;
	if (result) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "panel p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold text-blue",
				children: "Stream fit"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-1 font-display text-3xl leading-tight text-cream",
				children: result.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-normal text-cream",
				children: result.why
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-normal text-muted",
				children: result.caution
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onUse(result.pick),
					className: "tap h-12 rounded-full bg-hot px-4 text-sm font-semibold text-ink",
					children: ["Use ", result.title]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						setAnswers({});
						setStep(0);
					},
					className: "tap h-11 text-sm font-semibold text-blue",
					children: "Answer again"
				})]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "panel p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm font-semibold text-blue",
				children: [
					"Stream fit · ",
					step + 1,
					" of ",
					steps.length
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-1 font-display text-2xl leading-tight text-cream",
				children: current.prompt
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-col gap-2",
				children: current.options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						setAnswers((prev) => ({
							...prev,
							[current.key]: option.id
						}));
						setStep((value) => value + 1);
					},
					className: "tap lift min-h-12 rounded-2xl border border-line bg-surface px-4 py-3 text-left text-sm font-semibold text-cream",
					children: option.label
				}, option.id))
			})
		]
	});
}
var word = (text) => new RegExp(`\\b${text}\\b`, "i");
var examRules = [
	{
		id: "jee-main",
		label: "JEE Main",
		line: "NITs, IIITs, and the ticket to Advanced. PCM.",
		test: (s) => /jee main/i.test(s)
	},
	{
		id: "jee-adv",
		label: "JEE Advanced",
		line: "The IIT exam. PCM. You need JEE Main first.",
		test: (s) => /jee advanced/i.test(s)
	},
	{
		id: "bitsat",
		label: "BITSAT",
		line: "BITS Pilani, Goa and Hyderabad.",
		test: (s) => /bitsat/i.test(s)
	},
	{
		id: "ugee",
		label: "UGEE",
		line: "IIIT Hyderabad’s own exam.",
		test: (s) => word("ugee").test(s)
	},
	{
		id: "viteee",
		label: "VITEEE",
		line: "VIT.",
		test: (s) => /viteee/i.test(s)
	},
	{
		id: "met",
		label: "MET",
		line: "Manipal engineering.",
		test: (s) => word("met").test(s)
	},
	{
		id: "comedk",
		label: "COMEDK",
		line: "Bangalore private engineering colleges.",
		test: (s) => /comedk/i.test(s)
	},
	{
		id: "kcet",
		label: "KCET",
		line: "Karnataka engineering. Domicile matters.",
		test: (s) => word("kcet").test(s)
	},
	{
		id: "wbjee",
		label: "WBJEE",
		line: "Jadavpur and the other West Bengal colleges.",
		test: (s) => /wbjee/i.test(s)
	},
	{
		id: "mhtcet",
		label: "MHT-CET",
		line: "Maharashtra engineering.",
		test: (s) => /mht[-\s]?cet/i.test(s)
	},
	{
		id: "eamcet",
		label: "EAMCET",
		line: "Andhra Pradesh and Telangana.",
		test: (s) => /eamcet|eapcet/i.test(s)
	},
	{
		id: "tnea",
		label: "TNEA",
		line: "Tamil Nadu. Marks, not a separate entrance.",
		test: (s) => word("tnea").test(s)
	},
	{
		id: "keam",
		label: "KEAM",
		line: "Kerala engineering.",
		test: (s) => word("keam").test(s)
	},
	{
		id: "gujcet",
		label: "GUJCET",
		line: "Gujarat, including DAIICT.",
		test: (s) => /gujcet/i.test(s)
	},
	{
		id: "ojee",
		label: "OJEE",
		line: "Odisha engineering.",
		test: (s) => word("ojee").test(s)
	},
	{
		id: "bcece",
		label: "BCECE",
		line: "Bihar engineering.",
		test: (s) => word("bcece").test(s)
	},
	{
		id: "srmjeee",
		label: "SRMJEEE",
		line: "SRM.",
		test: (s) => /srmjeee/i.test(s)
	},
	{
		id: "aeee",
		label: "AEEE",
		line: "Amrita.",
		test: (s) => word("aeee").test(s)
	},
	{
		id: "kiitee",
		label: "KIITEE",
		line: "KIIT.",
		test: (s) => /kiitee/i.test(s)
	},
	{
		id: "nata",
		label: "NATA",
		line: "Architecture.",
		test: (s) => word("nata").test(s)
	},
	{
		id: "imu",
		label: "IMU CET",
		line: "Merchant navy. Not the Indian Navy.",
		test: (s) => /imu/i.test(s)
	},
	{
		id: "tes",
		label: "TES",
		line: "Army technical entry after Class 12. PCM.",
		test: (s) => word("tes").test(s)
	},
	{
		id: "navy12",
		label: "Navy 10+2 B.Tech",
		line: "The Navy’s own technical entry. PCM.",
		test: (s) => /navy 10\+2/i.test(s)
	},
	{
		id: "iat",
		label: "IISER Aptitude Test",
		line: "IISERs, and a channel into IISc. Science, not commerce.",
		test: (s) => /iiser/i.test(s)
	},
	{
		id: "nest",
		label: "NEST",
		line: "NISER and CEBS.",
		test: (s) => word("nest").test(s)
	},
	{
		id: "neet",
		label: "NEET",
		line: "MBBS and the other medical seats. PCB.",
		test: (s) => /neet/i.test(s) && !/neet[-\s]?pg/i.test(s)
	},
	{
		id: "neetpg",
		label: "NEET-PG",
		line: "After MBBS. INI-CET is the other paper.",
		test: (s) => /neet[-\s]?pg|ini-cet/i.test(s)
	},
	{
		id: "aiims-para",
		label: "AIIMS paramedical",
		line: "Allied health. Not the MBBS form.",
		test: (s) => /aiims paramedical/i.test(s)
	},
	{
		id: "gpat",
		label: "GPAT",
		line: "Pharmacy master’s, after B.Pharm.",
		test: (s) => word("gpat").test(s)
	},
	{
		id: "nfat",
		label: "NFAT",
		line: "National Forensic Sciences University.",
		test: (s) => word("nfat").test(s)
	},
	{
		id: "gate",
		label: "GATE",
		line: "After an engineering degree. M.Tech and PSUs.",
		test: (s) => word("gate").test(s)
	},
	{
		id: "jam",
		label: "IIT JAM",
		line: "An IIT master’s after a B.Sc.",
		test: (s) => word("jam").test(s)
	},
	{
		id: "ese",
		label: "ESE",
		line: "Engineering services, after a B.Tech.",
		test: (s) => word("ese").test(s)
	},
	{
		id: "barc",
		label: "BARC",
		line: "The atomic research training scheme.",
		test: (s) => /barc/i.test(s)
	},
	{
		id: "isro",
		label: "ISRO",
		line: "Scientist entry, after a degree.",
		test: (s) => /isro/i.test(s)
	},
	{
		id: "jest",
		label: "JEST and TIFR",
		line: "Research, after a science degree.",
		test: (s) => /jest|tifr/i.test(s)
	},
	{
		id: "gatb",
		label: "GAT-B",
		line: "Biotechnology master’s, after a B.Sc.",
		test: (s) => /gat-b/i.test(s)
	},
	{
		id: "dgca",
		label: "DGCA",
		line: "Pilot or aircraft maintenance. Not a college rank list.",
		test: (s) => /dgca/i.test(s)
	},
	{
		id: "ndri",
		label: "NDRI",
		line: "Dairy technology at Karnal.",
		test: (s) => /ndri/i.test(s)
	},
	{
		id: "aiish",
		label: "AIISH",
		line: "Speech and hearing.",
		test: (s) => /aiish/i.test(s)
	},
	{
		id: "pharmd",
		label: "Pharm.D entrance",
		line: "The six-year pharmacy degree.",
		test: (s) => /pharm\.?d/i.test(s)
	},
	{
		id: "ncert",
		label: "NCERT CEE",
		line: "The teaching degree at the RIEs.",
		test: (s) => /ncert/i.test(s)
	},
	{
		id: "leet",
		label: "LEET",
		line: "Second-year B.Tech after a diploma.",
		test: (s) => /leet|jeecup/i.test(s)
	},
	{
		id: "aai",
		label: "AAI ATC",
		line: "Air traffic control, after a degree.",
		test: (s) => /\baai\b|\batc\b/i.test(s)
	},
	{
		id: "uceed",
		label: "UCEED",
		line: "B.Des at the IITs. Commerce can sit this.",
		test: (s) => word("uceed").test(s)
	},
	{
		id: "nid",
		label: "NID DAT",
		line: "National Institute of Design.",
		test: (s) => word("dat").test(s) || s.toLowerCase().includes("nid")
	},
	{
		id: "nift",
		label: "NIFT",
		line: "Fashion, textile, leather, accessory, knitwear, communication.",
		test: (s) => word("nift").test(s)
	},
	{
		id: "fddi",
		label: "FDDI AIST",
		line: "Footwear and leather design.",
		test: (s) => /fddi|\baist\b/i.test(s)
	},
	{
		id: "iimb-dbe",
		label: "IIM Bangalore BBA",
		line: "The online digital-business degree. Not CAT.",
		test: (s) => /iimb dbe|dbe entrance/i.test(s)
	},
	{
		id: "iimk-bms",
		label: "IIM Kozhikode BMS",
		line: "Their undergraduate aptitude test. Not IPMAT.",
		test: (s) => /iimk bms/i.test(s)
	},
	{
		id: "nism",
		label: "NISM",
		line: "Market licences. One series, not a degree.",
		test: (s) => /\bnism\b/i.test(s)
	},
	{
		id: "nchm",
		label: "NCHM JEE",
		line: "Hotel management at the government IHMs.",
		test: (s) => s.toLowerCase().includes("nchm")
	},
	{
		id: "cuet-pg",
		label: "CUET-PG",
		line: "After graduation. Law at Delhi University, DSE, and others.",
		test: (s) => /cuet[-\s]?pg/i.test(s)
	},
	{
		id: "cuet",
		label: "CUET",
		line: "After Class 12. Delhi University and other universities.",
		test: (s) => /cuet/i.test(s) && !/cuet[-\s]?pg/i.test(s)
	},
	{
		id: "ipmat-indore",
		label: "IPMAT Indore",
		line: "Five-year IIM Indore course.",
		test: (s) => /ipmat indore/i.test(s)
	},
	{
		id: "ipmat-rohtak",
		label: "IPMAT Rohtak",
		line: "A different paper from Indore.",
		test: (s) => /ipmat rohtak/i.test(s)
	},
	{
		id: "jipmat",
		label: "JIPMAT",
		line: "IIM Jammu and IIM Bodh Gaya.",
		test: (s) => word("jipmat").test(s)
	},
	{
		id: "npat",
		label: "NPAT",
		line: "NMIMS. Not Narsee Monjee College.",
		test: (s) => word("npat").test(s)
	},
	{
		id: "set",
		label: "SET",
		line: "Symbiosis Entrance Test.",
		test: (s) => word("set").test(s)
	},
	{
		id: "christ",
		label: "Christ entrance",
		line: "Christ University, Bengaluru.",
		test: (s) => /christ/i.test(s)
	},
	{
		id: "clat",
		label: "CLAT",
		line: "Five-year law at the NLUs.",
		test: (s) => word("clat").test(s)
	},
	{
		id: "ailet",
		label: "AILET",
		line: "NLU Delhi. Not CLAT.",
		test: (s) => word("ailet").test(s)
	},
	{
		id: "slat",
		label: "SLAT",
		line: "Symbiosis law schools.",
		test: (s) => word("slat").test(s)
	},
	{
		id: "ca",
		label: "CA Foundation",
		line: "ICAI. The first CA exam.",
		test: (s) => /ca foundation|icai/i.test(s)
	},
	{
		id: "cseet",
		label: "CSEET",
		line: "The first Company Secretary exam.",
		test: (s) => word("cseet").test(s)
	},
	{
		id: "cma",
		label: "CMA Foundation",
		line: "Cost and management accounting. Not CA.",
		test: (s) => /cma foundation|icmai/i.test(s)
	},
	{
		id: "acet",
		label: "ACET",
		line: "The first actuarial exam in India.",
		test: (s) => word("acet").test(s)
	},
	{
		id: "nda",
		label: "NDA",
		line: "Armed forces at 18. Army wing takes commerce.",
		test: (s) => word("nda").test(s)
	},
	{
		id: "ipu",
		label: "IPU CET",
		line: "Guru Gobind Singh Indraprastha University.",
		test: (s) => /ipu/i.test(s)
	},
	{
		id: "jamia",
		label: "Jamia entrance",
		line: "Jamia Millia Islamia’s own papers.",
		test: (s) => /jamia/i.test(s)
	},
	{
		id: "isi",
		label: "ISI admission test",
		line: "Statistics and maths. Very hard.",
		test: (s) => /isi admission|isi test/i.test(s)
	},
	{
		id: "cmi",
		label: "CMI entrance",
		line: "Chennai Mathematical Institute.",
		test: (s) => word("cmi").test(s)
	},
	{
		id: "iitm",
		label: "IIT Madras qualifier",
		line: "Online BS degrees. Not JEE.",
		test: (s) => /iit madras/i.test(s)
	},
	{
		id: "iitj",
		label: "IIT Jodhpur qualifier",
		line: "Off-campus applied AI. Maths. Not JEE Advanced.",
		test: (s) => /iit jodhpur/i.test(s)
	},
	{
		id: "iitg",
		label: "IIT Guwahati qualifier",
		line: "Online data science and AI. The test is mathematics.",
		test: (s) => /iit guwahati/i.test(s)
	},
	{
		id: "iitp",
		label: "IIT Patna CET",
		line: "Continuing education. Not JoSAA.",
		test: (s) => /iit patna cet|iitp-sat/i.test(s)
	},
	{
		id: "gcet",
		label: "GCET",
		line: "GIPE, Pune.",
		test: (s) => word("gcet").test(s)
	},
	{
		id: "cat",
		label: "CAT",
		line: "MBA after a degree. The IIM exam.",
		test: (s) => word("cat").test(s)
	},
	{
		id: "xat",
		label: "XAT",
		line: "XLRI and other colleges.",
		test: (s) => word("xat").test(s)
	},
	{
		id: "snap",
		label: "SNAP",
		line: "Symbiosis MBA colleges.",
		test: (s) => word("snap").test(s)
	},
	{
		id: "nmat",
		label: "NMAT",
		line: "NMIMS MBA.",
		test: (s) => word("nmat").test(s)
	},
	{
		id: "micat",
		label: "MICAT",
		line: "MICA, for communication and advertising.",
		test: (s) => word("micat").test(s)
	},
	{
		id: "cmat",
		label: "CMAT",
		line: "MBA colleges that are not the IIMs.",
		test: (s) => word("cmat").test(s)
	},
	{
		id: "mahcet",
		label: "MAH-MBA CET",
		line: "JBIMS and other Mumbai MBA seats.",
		test: (s) => /mah-mba|mms cet|mah cet/i.test(s)
	},
	{
		id: "gmat",
		label: "GMAT",
		line: "ISB and some other postgraduate courses.",
		test: (s) => word("gmat").test(s)
	},
	{
		id: "rbi",
		label: "RBI Grade B",
		line: "Reserve Bank, after a degree.",
		test: (s) => /rbi grade b/i.test(s)
	},
	{
		id: "sebi",
		label: "SEBI Grade A",
		line: "The markets regulator.",
		test: (s) => /sebi/i.test(s)
	},
	{
		id: "sbipo",
		label: "SBI PO",
		line: "State Bank officer, after a degree.",
		test: (s) => /sbi po/i.test(s)
	},
	{
		id: "ibps",
		label: "IBPS PO",
		line: "Public-sector bank officer.",
		test: (s) => /ibps/i.test(s)
	},
	{
		id: "ssc",
		label: "SSC CGL",
		line: "Central government posts, including audit.",
		test: (s) => /ssc cgl|cgl/i.test(s)
	},
	{
		id: "upsc",
		label: "UPSC CSE",
		line: "Civil services. Not CAPF, and not NDA.",
		test: (s) => /upsc cse|civil service/i.test(s)
	},
	{
		id: "ies",
		label: "Indian Economic Service",
		line: "After an economics master’s.",
		test: (s) => /upsc ies|\bies\b/i.test(s)
	},
	{
		id: "cds",
		label: "CDS",
		line: "Armed forces academies, after a degree.",
		test: (s) => word("cds").test(s)
	},
	{
		id: "nabard",
		label: "NABARD Grade A",
		line: "Rural and development banking.",
		test: (s) => /nabard/i.test(s)
	},
	{
		id: "lic",
		label: "LIC AAO",
		line: "Insurance officer.",
		test: (s) => /lic aao/i.test(s)
	},
	{
		id: "ctet",
		label: "CTET",
		line: "School teaching eligibility.",
		test: (s) => word("ctet").test(s)
	},
	{
		id: "net",
		label: "UGC NET",
		line: "After a master’s, for college teaching.",
		test: (s) => /ugc net|\bnet\b/i.test(s)
	},
	{
		id: "afcat",
		label: "AFCAT",
		line: "Air Force after a degree.",
		test: (s) => word("afcat").test(s)
	},
	{
		id: "capf",
		label: "CAPF",
		line: "Assistant Commandant. UPSC, but not the IAS exam.",
		test: (s) => word("capf").test(s)
	}
];
var pcm = ["pcm"];
var pcb = ["pcb"];
var science = ["pcm", "pcb"];
var mathsStreams = ["commerce", "pcm"];
var examStreams = {
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
	iitg: [
		"commerce",
		"pcm",
		"pcb"
	],
	iitp: science
};
function shownFor(allowed, pick) {
	if (!allowed || !pick) return true;
	if (pick === "pcmb") return allowed.includes("pcm") || allowed.includes("pcb");
	return allowed.includes(pick);
}
function examBlob(slug) {
	const path = paths.find((item) => item.slug === slug);
	if (!path) return "";
	return path.exams.map((exam) => exam.name).join(" | ");
}
var slugsByExam = /* @__PURE__ */ new Map();
for (const rule of examRules) slugsByExam.set(rule.id, []);
for (const path of paths) {
	const blob = examBlob(path.slug);
	for (const rule of examRules) if (rule.test(blob)) slugsByExam.get(rule.id)?.push(path.slug);
}
function examChoices(query, allow, pick) {
	const q = query.trim().toLowerCase();
	return examRules.filter((rule) => shownFor(examStreams[rule.id], pick)).map((rule) => ({
		id: rule.id,
		label: rule.label,
		line: rule.line,
		count: (slugsByExam.get(rule.id) ?? []).filter((slug) => !allow || allow.has(slug)).length
	})).filter((item) => item.count > 0).filter((item) => !q || `${item.label} ${item.line}`.toLowerCase().includes(q));
}
function slugsForExam(id, allow) {
	const slugs = slugsByExam.get(id) ?? [];
	return allow ? slugs.filter((slug) => allow.has(slug)) : slugs;
}
var colleges = [
	{
		id: "sukhdev",
		label: "Shaheed Sukhdev",
		line: "Delhi University",
		test: (s) => /sukhdev|sscbs/.test(s)
	},
	{
		id: "srcc",
		label: "SRCC",
		line: "Delhi University",
		test: (s) => /srcc|shri ram college/.test(s)
	},
	{
		id: "hindu",
		label: "Hindu College",
		line: "Delhi University",
		test: (s) => /hindu college/.test(s)
	},
	{
		id: "hansraj",
		label: "Hansraj College",
		line: "Delhi University",
		test: (s) => /hansraj/.test(s)
	},
	{
		id: "miranda",
		label: "Miranda House",
		line: "Delhi University",
		test: (s) => /miranda/.test(s)
	},
	{
		id: "lsr",
		label: "Lady Shri Ram",
		line: "Delhi University",
		test: (s) => /lady shri ram|\blsr\b/.test(s)
	},
	{
		id: "stephens",
		label: "St. Stephen’s",
		line: "Delhi University",
		test: (s) => /stephen/.test(s)
	},
	{
		id: "kmc",
		label: "Kirori Mal",
		line: "Delhi University",
		test: (s) => /kirori mal/.test(s)
	},
	{
		id: "ramjas",
		label: "Ramjas",
		line: "Delhi University",
		test: (s) => /ramjas/.test(s)
	},
	{
		id: "du",
		label: "Delhi University",
		line: "CUET, then the college list",
		test: (s) => /delhi university|\bdu\b/.test(s)
	},
	{
		id: "nmims",
		label: "NMIMS",
		line: "Narsee Monjee Institute. NPAT or NMAT.",
		test: (s) => /nmims/.test(s)
	},
	{
		id: "nmcollege",
		label: "Narsee Monjee College",
		line: "Mumbai. Not NMIMS.",
		test: (s) => /narsee monjee college|nm college/.test(s)
	},
	{
		id: "hr",
		label: "HR College",
		line: "Mumbai",
		test: (s) => /hr college|h\.r\./.test(s)
	},
	{
		id: "mithibai",
		label: "Mithibai",
		line: "Mumbai",
		test: (s) => /mithibai/.test(s)
	},
	{
		id: "xavier",
		label: "St. Xavier’s",
		line: "Kolkata and other campuses named on the page",
		test: (s) => /xavier/.test(s)
	},
	{
		id: "christ",
		label: "Christ University",
		line: "Bengaluru",
		test: (s) => /christ/.test(s)
	},
	{
		id: "symbiosis",
		label: "Symbiosis",
		line: "SET, SNAP or SLAT",
		test: (s) => /symbiosis|scms/.test(s)
	},
	{
		id: "spjain",
		label: "SP Jain",
		line: "The undergraduate school and SPJIMR are different",
		test: (s) => /sp jain|spjain|spjimr/.test(s)
	},
	{
		id: "isb",
		label: "ISB",
		line: "After a degree",
		test: (s) => /\bisb\b/.test(s)
	},
	{
		id: "iimindore",
		label: "IIM Indore",
		line: "IPM and the MBA",
		test: (s) => /iim indore/.test(s)
	},
	{
		id: "iima",
		label: "IIM Ahmedabad",
		line: "MBA, through CAT",
		test: (s) => /iim ahmedabad/.test(s)
	},
	{
		id: "fms",
		label: "FMS",
		line: "Delhi University MBA",
		test: (s) => /\bfms\b/.test(s)
	},
	{
		id: "xlri",
		label: "XLRI",
		line: "Jamshedpur. XAT.",
		test: (s) => /xlri/.test(s)
	},
	{
		id: "jbims",
		label: "JBIMS",
		line: "Mumbai. Maharashtra CET.",
		test: (s) => /jbims/.test(s)
	},
	{
		id: "iift",
		label: "IIFT",
		line: "Delhi and Kolkata",
		test: (s) => /iift/.test(s)
	},
	{
		id: "ashoka",
		label: "Ashoka University",
		line: "Sonepat",
		test: (s) => /ashoka/.test(s)
	},
	{
		id: "flame",
		label: "FLAME",
		line: "Pune",
		test: (s) => /flame/.test(s)
	},
	{
		id: "gipe",
		label: "GIPE",
		line: "Pune",
		test: (s) => /gipe/.test(s)
	},
	{
		id: "mse",
		label: "Madras School of Economics",
		line: "Chennai",
		test: (s) => /madras school|\bmse\b/.test(s)
	},
	{
		id: "isi",
		label: "ISI",
		line: "Kolkata, Bengaluru, Delhi",
		test: (s) => /\bisi\b/.test(s)
	},
	{
		id: "cmi",
		label: "CMI",
		line: "Chennai",
		test: (s) => /\bcmi\b/.test(s)
	},
	{
		id: "nid",
		label: "NID",
		line: "Ahmedabad and the newer NIDs",
		test: (s) => /\bnid\b/.test(s)
	},
	{
		id: "nift",
		label: "NIFT",
		line: "Every campus in the brochure",
		test: (s) => /nift/.test(s)
	},
	{
		id: "fddi",
		label: "FDDI",
		line: "Footwear and leather. Noida and the other campuses",
		test: (s) => /fddi/.test(s)
	},
	{
		id: "iigj",
		label: "IIGJ",
		line: "Jewellery",
		test: (s) => /iigj/.test(s)
	},
	{
		id: "iicd",
		label: "IICD",
		line: "Jaipur. Craft and jewellery",
		test: (s) => /iicd/.test(s)
	},
	{
		id: "iimb",
		label: "IIM Bangalore",
		line: "The MBA, and the online BBA",
		test: (s) => /iim bangalore|iimb/.test(s)
	},
	{
		id: "iimk",
		label: "IIM Kozhikode",
		line: "The BMS, and the MBA later",
		test: (s) => /iim kozhikode|iimk/.test(s)
	},
	{
		id: "igrua",
		label: "IGRUA",
		line: "The government flying academy",
		test: (s) => /igrua/.test(s)
	},
	{
		id: "iitb",
		label: "IIT Bombay",
		line: "Design, through UCEED",
		test: (s) => /iit bombay/.test(s)
	},
	{
		id: "iitd",
		label: "IIT Delhi",
		line: "Design, through UCEED",
		test: (s) => /iit delhi/.test(s)
	},
	{
		id: "iitm",
		label: "IIT Madras",
		line: "Online data science degree",
		test: (s) => /iit madras/.test(s)
	},
	{
		id: "iitg",
		label: "IIT Guwahati",
		line: "Online data science and AI",
		test: (s) => /iit guwahati/.test(s)
	},
	{
		id: "iitp",
		label: "IIT Patna",
		line: "CET bachelor’s. Not the JEE B.Tech",
		test: (s) => /iit patna/.test(s)
	},
	{
		id: "pusa",
		label: "IHM Pusa",
		line: "Delhi. NCHM JEE.",
		test: (s) => /pusa|ihm /.test(s)
	},
	{
		id: "jamia",
		label: "Jamia Millia Islamia",
		line: "Delhi",
		test: (s) => /jamia/.test(s)
	},
	{
		id: "ipu",
		label: "IP University",
		line: "Delhi",
		test: (s) => /\bipu\b|indraprastha/.test(s)
	},
	{
		id: "dse",
		label: "Delhi School of Economics",
		line: "After a degree",
		test: (s) => /delhi school of economics|\bdse\b/.test(s)
	},
	{
		id: "dfs",
		label: "Department of Financial Studies",
		line: "Delhi University. Not FMS.",
		test: (s) => /financial studies|\bdfs\b/.test(s)
	},
	{
		id: "igidr",
		label: "IGIDR",
		line: "Mumbai",
		test: (s) => /igidr/.test(s)
	},
	{
		id: "tiss",
		label: "TISS",
		line: "Mumbai and other campuses",
		test: (s) => /tiss/.test(s)
	},
	{
		id: "irma",
		label: "IRMA",
		line: "Anand",
		test: (s) => /irma/.test(s)
	},
	{
		id: "iifm",
		label: "IIFM",
		line: "Bhopal",
		test: (s) => /iifm/.test(s)
	},
	{
		id: "nibm",
		label: "NIBM",
		line: "Pune",
		test: (s) => /nibm/.test(s)
	},
	{
		id: "mica",
		label: "MICA",
		line: "Ahmedabad",
		test: (s) => /mica/.test(s)
	},
	{
		id: "mdi",
		label: "MDI",
		line: "Gurgaon",
		test: (s) => /\bmdi\b/.test(s)
	},
	{
		id: "loyola",
		label: "Loyola",
		line: "Chennai",
		test: (s) => /loyola/.test(s)
	},
	{
		id: "nlsiu",
		label: "NLSIU",
		line: "Bengaluru. CLAT.",
		test: (s) => /nlsiu/.test(s)
	},
	{
		id: "nlud",
		label: "NLU Delhi",
		line: "AILET, not CLAT",
		test: (s) => /nlu delhi/.test(s)
	},
	{
		id: "jgls",
		label: "Jindal Global Law School",
		line: "Sonipat",
		test: (s) => /jgls|jindal/.test(s)
	},
	{
		id: "iimc",
		label: "IIMC",
		line: "Delhi. After a degree.",
		test: (s) => /iimc/.test(s)
	},
	{
		id: "krea",
		label: "Krea",
		line: "Sri City",
		test: (s) => /krea/.test(s)
	},
	{
		id: "snu",
		label: "Shiv Nadar",
		line: "Greater Noida",
		test: (s) => /shiv nadar/.test(s)
	},
	{
		id: "icai",
		label: "ICAI",
		line: "CA. Not a college.",
		test: (s) => /icai/.test(s)
	},
	{
		id: "manipal",
		label: "Manipal",
		line: "Engineering and health sciences",
		test: (s) => /manipal|wgsha/.test(s)
	},
	{
		id: "bits",
		label: "BITS",
		line: "Pilani, Goa, Hyderabad",
		test: (s) => /bits/.test(s)
	},
	{
		id: "iith",
		label: "IIIT Hyderabad",
		line: "UGEE, and sometimes JEE",
		test: (s) => /iiit hyderabad/.test(s)
	},
	{
		id: "aiims",
		label: "AIIMS",
		line: "Through NEET now",
		test: (s) => /aiims/.test(s)
	},
	{
		id: "afmc",
		label: "AFMC",
		line: "Pune. NEET, then their screening",
		test: (s) => /afmc/.test(s)
	},
	{
		id: "cmc",
		label: "CMC Vellore",
		line: "NEET, then their process",
		test: (s) => /cmc vellore|\bcmc\b/.test(s)
	},
	{
		id: "iiser",
		label: "IISER",
		line: "The aptitude test",
		test: (s) => /iiser/.test(s)
	},
	{
		id: "iisc",
		label: "IISc",
		line: "Bengaluru. Research",
		test: (s) => /iisc/.test(s)
	},
	{
		id: "niser",
		label: "NISER",
		line: "NEST",
		test: (s) => /niser/.test(s)
	},
	{
		id: "jadavpur",
		label: "Jadavpur",
		line: "WBJEE",
		test: (s) => /jadavpur/.test(s)
	},
	{
		id: "dtu",
		label: "DTU",
		line: "Delhi. JAC, from JEE Main",
		test: (s) => /\bdtu\b/.test(s)
	},
	{
		id: "nsut",
		label: "NSUT",
		line: "Delhi. JAC",
		test: (s) => /nsut/.test(s)
	},
	{
		id: "nfsu",
		label: "NFSU",
		line: "Forensic science",
		test: (s) => /nfsu|forensic/.test(s)
	},
	{
		id: "nit",
		label: "NITs",
		line: "JEE Main",
		test: (s) => /\bnits?\b/.test(s)
	},
	{
		id: "vit",
		label: "VIT",
		line: "VITEEE",
		test: (s) => /\bvit\b/.test(s)
	},
	{
		id: "iist",
		label: "IIST",
		line: "ISRO’s college. JEE Advanced",
		test: (s) => /iist/.test(s)
	},
	{
		id: "aiish",
		label: "AIISH",
		line: "Mysuru. Speech and hearing",
		test: (s) => /aiish/.test(s)
	},
	{
		id: "ndri",
		label: "NDRI",
		line: "Karnal. Dairy technology",
		test: (s) => /ndri/.test(s)
	},
	{
		id: "daiict",
		label: "DAIICT",
		line: "Gandhinagar",
		test: (s) => /daiict/.test(s)
	},
	{
		id: "anna",
		label: "Anna University",
		line: "TNEA",
		test: (s) => /anna university/.test(s)
	},
	{
		id: "spa",
		label: "SPA",
		line: "Planning and architecture",
		test: (s) => /school of planning|\bspa\b/.test(s)
	},
	{
		id: "irwin",
		label: "Lady Irwin",
		line: "Delhi. Nutrition and home science",
		test: (s) => /lady irwin/.test(s)
	},
	{
		id: "rie",
		label: "RIE",
		line: "NCERT. The teaching degree",
		test: (s) => /regional institute of education|\brie\b/.test(s)
	},
	{
		id: "nirtar",
		label: "NIRTAR",
		line: "Cuttack. Occupational therapy",
		test: (s) => /nirtar/.test(s)
	},
	{
		id: "ict",
		label: "ICT Mumbai",
		line: "Chemical technology. MHT-CET",
		test: (s) => /\bict\b/.test(s)
	}
];
function collegeBlob(slug) {
	const path = paths.find((item) => item.slug === slug);
	if (!path) return "";
	const plain = plainOf(slug);
	return [
		path.name,
		plain.title,
		plain.line,
		plain.words,
		...path.places.map((place) => `${place.name} ${place.where}`)
	].join(" | ").toLowerCase();
}
var slugsByCollege = /* @__PURE__ */ new Map();
for (const rule of colleges) {
	const hits = paths.filter((path) => rule.test(collegeBlob(path.slug))).map((path) => path.slug);
	slugsByCollege.set(rule.id, hits);
}
var collegeStreams = {
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
	nirtar: pcb
};
function collegeChoices(query, allow, pick) {
	const q = query.trim().toLowerCase();
	return colleges.filter((rule) => shownFor(collegeStreams[rule.id], pick)).map((rule) => ({
		id: rule.id,
		label: rule.label,
		line: rule.line,
		count: (slugsByCollege.get(rule.id) ?? []).filter((slug) => !allow || allow.has(slug)).length
	})).filter((item) => item.count > 0).filter((item) => !q || `${item.label} ${item.line}`.toLowerCase().includes(q));
}
function slugsForCollege(id, allow) {
	const slugs = slugsByCollege.get(id) ?? [];
	return allow ? slugs.filter((slug) => allow.has(slug)) : slugs;
}
function interestChoices(query, allow) {
	const q = query.trim().toLowerCase();
	return interestMeta.filter((item) => item.id !== "all").map((item) => ({
		id: item.id,
		label: item.label,
		line: "Courses tagged with this interest",
		count: paths.filter((path) => (!allow || allow.has(path.slug)) && tagOf(path.slug).interests.includes(item.id)).length
	})).filter((item) => item.count > 0).filter((item) => !q || item.label.toLowerCase().includes(q));
}
function slugsForInterest(id, allow) {
	return paths.filter((path) => (!allow || allow.has(path.slug)) && tagOf(path.slug).interests.includes(id)).map((path) => path.slug);
}
function courseChoices(query, allow) {
	const q = query.trim().toLowerCase();
	if (!q) return [];
	return paths.filter((path) => !allow || allow.has(path.slug)).map((path) => {
		const plain = plainOf(path.slug);
		return {
			id: path.slug,
			label: plain.title,
			line: plain.line,
			count: 1
		};
	}).filter((item) => `${item.label} ${item.line}`.toLowerCase().includes(q)).slice(0, 12);
}
var storyShort = {
	"11": "11",
	"12": "12",
	result: "Out",
	college: "Now"
};
var sectionOrder = [
	"exam12",
	"degree12",
	"withgrad",
	"aftergrad"
];
var searchModes = [
	{
		id: "exam",
		label: "Exam",
		hint: "Tap an exam. Only the courses that exam opens will show under this box.",
		placeholder: "Search UCEED, CUET, CLAT, CAT"
	},
	{
		id: "college",
		label: "College",
		hint: "Tap a college. You will see what a student can study there.",
		placeholder: "Search Sukhdev, NMIMS, ISB, NID"
	},
	{
		id: "course",
		label: "Course",
		hint: "Type the course. Try CA, BBA, hotel, or design.",
		placeholder: "Search BMS, B.Com, hotel, law"
	},
	{
		id: "interest",
		label: "Likes",
		hint: "Tap what the child likes. Accounts, design, medicine.",
		placeholder: "Search accounts, law, design"
	},
	{
		id: "become",
		label: "Become",
		hint: "Tap the life they want. Doctor, pilot, designer. Each one opens the real path.",
		placeholder: "Search pilot, actuary, journalist, jewellery"
	}
];
function parentQuestions(stream) {
	const eng = {
		slug: "not-eng",
		title: "If not engineering, then what?",
		line: "The other maths doors, and the ones that leave engineering."
	};
	const institutes = {
		slug: "side-door",
		title: "Other ways into an IIT or an IIM",
		line: "Online degrees, design, IPM, a campus AI degree. Not only JEE Advanced and CAT."
	};
	const mbbs = {
		slug: "not-mbbs",
		title: "If not MBBS, then what?",
		line: "The health jobs that are not doctor."
	};
	const ca = {
		slug: "not-ca",
		title: "If not CA, then what?",
		line: "CS, CMA, law, a degree, an MBA later."
	};
	if (stream === "pcm") return [institutes, eng];
	if (stream === "pcb") return [institutes, mbbs];
	if (stream === "pcmb") return [
		institutes,
		eng,
		mbbs
	];
	return [institutes, ca];
}
function aiLinks(stream) {
	const map = {
		slug: "ai-map",
		title: "The full AI map",
		line: "Every door, including the ones that are not yours."
	};
	const data = {
		slug: "analytics",
		title: "IIT Madras, data science",
		line: "Online. Any stream. Qualifier, not JEE."
	};
	const mgmt = {
		slug: "iitm-mgmt",
		title: "IIT Madras, management and data",
		line: "Online. Any stream. The business sibling."
	};
	const guwahati = {
		slug: "iitg-dsai",
		title: "IIT Guwahati, data science and AI",
		line: "Online. Any stream on the form. The qualifier is Class 12 maths."
	};
	const bsds = {
		slug: "isi-bsds",
		title: "ISI, statistical data science",
		line: "Delhi, Kolkata, Bengaluru. Maths and English. Not the old written test."
	};
	const patna = {
		slug: "iitp-cet",
		title: "IIT Patna, without JoSAA",
		line: "Science on the form. The class is maths and code. Not the B.Tech."
	};
	const jodhpur = {
		slug: "iitj-ai",
		title: "IIT Jodhpur, applied AI",
		line: "Maths and 60 percent. Off-campus. Not the hostel."
	};
	const lucknow = {
		slug: "iiml-bsai",
		title: "IIM Lucknow, AI degree",
		line: "Campus. PCM. Only if you qualified JEE Advanced."
	};
	const jee = {
		slug: "jee-main",
		title: "Computer science through JEE",
		line: "IITs, NITs, IIITs. PCM only."
	};
	const hyderabad = {
		slug: "ugee",
		title: "IIIT Hyderabad",
		line: "Dual degrees in computing. Their own exam. PCM."
	};
	const bca = {
		slug: "bca",
		title: "BCA, without JEE",
		line: "A coding degree if you have maths and not PCM."
	};
	const bio = {
		slug: "bioinfo",
		title: "Biology, then computation",
		line: "No Class 12 course called medical AI."
	};
	const dbe = {
		slug: "iimb-dbe",
		title: "IIM Bangalore, online BBA",
		line: "Digital business. Not a model-building degree."
	};
	if (stream === "pcm") return [
		guwahati,
		bsds,
		lucknow,
		jodhpur,
		patna,
		hyderabad,
		data,
		jee,
		map
	];
	if (stream === "pcb") return [
		data,
		mgmt,
		guwahati,
		bio,
		patna,
		map
	];
	if (stream === "pcmb") return [
		guwahati,
		bsds,
		lucknow,
		data,
		bio,
		jodhpur,
		patna,
		jee,
		map
	];
	return [
		guwahati,
		bsds,
		mgmt,
		data,
		bca,
		jodhpur,
		dbe,
		map
	];
}
function ledeFor(stream) {
	if (stream === "pcm") return "Engineering is here, and so are the other ways in. Medicine that needs biology is not.";
	if (stream === "pcb") return "NEET and the health doors are here. JEE is not. CA, law, design and hotels still are.";
	if (stream === "pcmb") return "Maths and biology, so both lists. Engineering, medicine, and the other ways into an IIT or an IIM.";
	return "Commerce with maths. Start with the question, then search the rest.";
}
function class11For(stream) {
	if (stream === "pcm") return "Class 11 percentage is almost never the form. Do not drop physics or maths. The JEE syllabus starts this year, whether or not you join a batch.";
	if (stream === "pcb") return "Class 11 percentage is almost never the form. Biology is half of NEET. Do not leave it for a physics-only plan.";
	if (stream === "pcmb") return "Class 11 percentage is almost never the form. You are keeping both maths and biology. Dropping either one closes a whole list.";
	return "Class 11 percentage is almost never used on a form. Keep maths and accounts clear. Do not drop maths if you want Sukhdev, economics, or actuarial science.";
}
function delhiFor(stream) {
	if (stream === "pcm" || stream === "pcmb") return "In Delhi, engineering seats at DTU, NSUT and IIIT-Delhi come from JAC, using the JEE Main rank. Fill JAC and JoSAA. They are different websites.";
	if (stream === "pcb") return "A Delhi student fills both MCC and Delhi’s own NEET counselling. One form does not include the other.";
	return "In Delhi, a good college seat mostly comes from CUET. HR, NM College and Mithibai are mostly for Maharashtra board students. NMIMS is a different college, with its own exam.";
}
function Home() {
	const stage = useDesk((state) => state.stage);
	const setStage = useDesk((state) => state.setStage);
	const delhi = useDesk((state) => state.delhi);
	const setDelhi = useDesk((state) => state.setDelhi);
	const stream = useDesk((state) => state.stream);
	const setStream = useDesk((state) => state.setStream);
	const search = Route$4.useSearch();
	const navigate = useNavigate();
	const mode = search.by ?? "exam";
	const query = search.q ?? "";
	const picked = mode === "course" || mode === "become" ? null : search.pick ?? null;
	const bucket = search.when ?? "all";
	const showFull = search.list === "1";
	const showFit = search.fit === "1";
	function go(patch, replace = false) {
		navigate({
			to: "/",
			replace,
			resetScroll: false,
			search: (prev) => {
				const next = {
					...prev,
					...patch
				};
				const clean = {};
				if (next.by) clean.by = next.by;
				if (next.pick) clean.pick = next.pick;
				if (next.q) clean.q = next.q;
				if (next.when && next.when !== "all") clean.when = next.when;
				if (next.list === "1") clean.list = "1";
				if (next.fit === "1") clean.fit = "1";
				return clean;
			}
		});
	}
	const allow = (0, import_react.useMemo)(() => {
		if (!stream) return null;
		return new Set(paths.filter((path) => fitsStream(path.slug, stream)).map((path) => path.slug));
	}, [stream]);
	const modeMeta = searchModes.find((item) => item.id === mode) ?? searchModes[0];
	const placeholder = stream === "pcm" && mode === "exam" ? "Search JEE, BITSAT, NDA, CUET" : stream === "pcb" && mode === "exam" ? "Search NEET, CUET, CLAT, NDA" : stream === "pcmb" && mode === "exam" ? "Search JEE, NEET, CUET, CLAT" : modeMeta.placeholder;
	const choices = (0, import_react.useMemo)(() => {
		const scope = allow ?? void 0;
		if (mode === "become") return [];
		if (mode === "exam") return examChoices(query, scope, stream ?? void 0);
		if (mode === "college") return collegeChoices(query, scope, stream ?? void 0);
		if (mode === "interest") return interestChoices(query, scope);
		return courseChoices(query, scope);
	}, [
		mode,
		query,
		allow
	]);
	const pickedChoice = mode === "course" || mode === "become" ? null : (mode === "exam" ? examChoices("", allow ?? void 0, stream ?? void 0) : mode === "college" ? collegeChoices("", allow ?? void 0, stream ?? void 0) : interestChoices("", allow ?? void 0)).find((item) => item.id === picked) ?? null;
	const matched = (0, import_react.useMemo)(() => {
		let rows = mode === "course" && query.trim() ? searchPaths(query, "all") : paths;
		if (allow) rows = rows.filter((path) => allow.has(path.slug));
		if (picked && mode === "exam") {
			const keep = new Set(slugsForExam(picked, allow ?? void 0));
			rows = rows.filter((path) => keep.has(path.slug));
		}
		if (picked && mode === "college") {
			const keep = new Set(slugsForCollege(picked, allow ?? void 0));
			rows = rows.filter((path) => keep.has(path.slug));
		}
		if (picked && mode === "interest") {
			const keep = new Set(slugsForInterest(picked, allow ?? void 0));
			rows = rows.filter((path) => keep.has(path.slug));
		}
		return rows.filter((path) => bucket === "all" || tagOf(path.slug).buckets.includes(bucket));
	}, [
		query,
		mode,
		picked,
		bucket,
		allow
	]);
	allow?.size ?? paths.length;
	const becoming = mode === "become";
	const narrowed = bucket !== "all" || picked !== null || mode === "course" && query.trim().length > 0;
	const showChoices = becoming ? false : mode !== "course" ? picked === null || query.trim().length > 0 : query.trim().length > 0;
	const doors = stream && stream !== "commerce" ? fromScience.filter((item) => fitsStream(item.slug, stream)) : [];
	const needle = query.trim().toLowerCase();
	const wanted = careers.filter((item) => pathBySlug[item.slug] && stream && fitsStream(item.slug, stream) && (!needle || `${item.label} ${item.line} ${item.words}`.toLowerCase().includes(needle)));
	const bucketLede = bucketMeta.find((item) => item.id === bucket)?.lede;
	if (!stream) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rise pt-5",
		id: "fit",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl leading-tight text-cream",
				children: "Which subjects?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-base leading-normal text-muted",
				children: "Class 10 parents start here. The courses change after you pick. You can change the stream later, from the menu."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: showFit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StreamFit, { onUse: (id) => {
					setStream(id);
					go({ fit: void 0 });
				} }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => go({ fit: "1" }),
					className: "tap h-12 w-full rounded-full bg-hot px-4 text-sm font-semibold text-ink",
					children: "Not sure? Check which stream fits"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 flex flex-col gap-3",
				children: streamChoices.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setStream(item.id),
					className: "tap lift panel rise-in p-4 text-left",
					style: { animationDelay: `${index * 70}ms` },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-display text-2xl text-cream",
						children: item.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-sm leading-normal text-muted",
						children: item.line
					})]
				}, item.id))
			})
		]
	});
	const aiTitle = stream === "commerce" ? "AI world of commerce" : stream === "pcm" ? "AI world of PCM" : stream === "pcb" ? "AI world of PCB" : "AI world of PCMB";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rise pt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold text-hot",
				children: streamChoices.find((item) => item.id === stream)?.label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm leading-normal text-muted",
				children: ledeFor(stream)
			}),
			showFit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				id: "fit",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StreamFit, { onUse: (id) => {
					setStream(id);
					go({ fit: void 0 });
				} })
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "doors",
				className: "vault mt-4 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-wide text-hot",
						children: "Hidden doors"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 font-display text-2xl leading-tight text-cream",
						children: "If the obvious plan is not the plan"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm leading-normal text-muted",
						children: "One place. These are not the full list. The full list is in Find, below."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-col gap-2",
						children: parentQuestions(stream).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/path/$slug",
							params: { slug: item.slug },
							className: "tap lift flex min-h-12 items-center gap-3 rounded-2xl bg-surface px-3 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-semibold text-cream",
									children: item.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 block text-sm leading-normal text-muted",
									children: item.line
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
								className: "size-5 shrink-0 text-hot",
								"aria-hidden": "true"
							})]
						}, item.slug))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "ai",
				className: "ai-world mt-4 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-wide text-blue",
							children: "AI world"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-display text-2xl leading-tight text-cream",
							children: aiTitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-normal text-muted",
							children: "Only the degrees this stream can actually enter. Swipe. A weekend certificate is not in here."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "scroll-none -mx-1 mt-3 flex snap-x gap-2 overflow-x-auto px-1 pb-1",
							children: aiLinks(stream).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/path/$slug",
								params: { slug: item.slug },
								className: "tap lift flex w-56 shrink-0 snap-start flex-col justify-between rounded-2xl border border-line bg-surface p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm font-semibold text-cream",
									children: item.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-2 block text-sm leading-normal text-muted",
									children: item.line
								})]
							}, item.slug))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoorWheel, { stream })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "find",
				className: "panel mt-4 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl leading-tight text-cream",
						children: "Find one course"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm leading-normal text-muted",
						children: "Pick how you want to look. Switching Exam and College stays on this box. It does not jump to the top."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "scroll-none -mx-1 mt-3 flex gap-2 overflow-x-auto px-1 pb-1",
						children: searchModes.map((item) => {
							const on = mode === item.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									if (mode === item.id && !picked && !query) return;
									go({
										by: item.id,
										pick: void 0,
										q: void 0,
										list: void 0
									});
								},
								className: "tap h-11 shrink-0 rounded-full px-4 text-sm font-semibold " + (on ? "bg-hot text-ink" : "border border-line bg-bg text-cream"),
								children: item.label
							}, item.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-normal text-cream",
						children: modeMeta.hint
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "relative mt-3 block",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "sr-only",
								children: ["Search ", modeMeta.label]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
								className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								suppressHydrationWarning: true,
								value: query,
								onChange: (event) => go({ q: event.target.value || void 0 }, true),
								placeholder,
								className: "h-12 w-full rounded-2xl border border-line bg-raise pr-3 pl-10 text-sm text-cream placeholder:text-muted"
							})
						]
					}),
					pickedChoice ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center justify-between gap-3 rounded-2xl bg-hot px-4 py-3 text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-base font-semibold",
							children: pickedChoice.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-0.5 block text-sm",
							children: [pickedChoice.count, " courses from this"]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => go({
								pick: void 0,
								q: void 0
							}),
							className: "tap min-h-11 shrink-0 px-2 text-sm font-semibold",
							children: "Clear"
						})]
					}) : null,
					showChoices ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 max-h-72 overflow-y-auto rounded-2xl border border-line",
						children: choices.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-4 py-4 text-sm text-cream",
							children: "Nothing with that name. Try UCEED, CUET, Sukhdev, or law."
						}) : choices.map((item) => mode === "course" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/path/$slug",
							params: { slug: item.id },
							className: "tap flex items-center gap-3 border-b border-line px-4 py-3 last:border-b-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate font-semibold text-cream",
									children: item.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate text-sm text-muted",
									children: item.line
								})]
							})
						}, item.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => go({
								pick: item.id,
								q: void 0
							}),
							className: "tap flex w-full items-center gap-3 border-b border-line px-4 py-3 text-left last:border-b-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate font-semibold text-cream",
									children: item.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate text-sm text-muted",
									children: item.line
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "shrink-0 text-sm font-semibold text-blue",
								children: item.count
							})]
						}, item.id))
					}) : null,
					becoming ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-blue",
							children: needle ? `${wanted.length} matches.` : `${wanted.length} lives. Search, or scroll a group. Each one opens the courses, the colleges, and what to do if it misses.`
						}), wanted.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "panel mt-3 px-4 py-4 text-sm text-cream",
							children: "Nothing with that name. Try actor, actuary, FDDI, pilot, or politician."
						}) : needle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3",
							children: wanted.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border-b border-line",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/path/$slug",
									params: { slug: item.slug },
									className: "tap block py-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-semibold text-cream",
										children: item.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-sm leading-normal text-muted",
										children: item.line
									})]
								})
							}, item.id))
						}) : careerLanes.map((lane) => {
							const rows = wanted.filter((item) => item.lane === lane);
							if (rows.length === 0) return null;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "mt-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-2xl text-cream",
									children: lane
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-2",
									children: rows.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "border-b border-line",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/path/$slug",
											params: { slug: item.slug },
											className: "tap block py-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block font-semibold text-cream",
												children: item.label
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-1 block text-sm leading-normal text-muted",
												children: item.line
											})]
										})
									}, item.id))
								})]
							}, lane);
						})]
					}) : showFull || picked || mode === "course" && query.trim().length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "scroll-none mt-4 flex gap-2 overflow-x-auto pb-1",
							children: bucketMeta.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => go({ when: item.id }, true),
								className: "tap h-10 shrink-0 rounded-full px-3 text-sm font-semibold " + (bucket === item.id ? "bg-hot text-ink" : "border border-line bg-surface text-cream"),
								children: item.label
							}, item.id))
						}),
						bucketLede && bucket !== "all" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-normal text-muted",
							children: bucketLede
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm font-semibold text-blue",
							children: `Showing ${matched.length}. Clear the filter to go back to the names.`
						}),
						matched.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "panel mt-3 px-4 py-4 text-sm text-cream",
							children: "Nothing in that mix. Hit Back, or try UCEED, CUET, NMIMS, NIFT."
						}) : narrowed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: matched.map((path) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PathCard, { path }, path.slug)) }) : sectionOrder.map((id) => {
							const meta = bucketMeta.find((item) => item.id === id);
							const rows = matched.filter((path) => tagOf(path.slug).buckets[0] === id);
							if (!meta || rows.length === 0) return null;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "mt-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-end justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "font-display text-2xl text-cream",
											children: meta.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "shrink-0 text-sm font-semibold text-blue",
											children: rows.length
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm leading-normal text-muted",
										children: meta.lede
									}),
									rows.map((path) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PathCard, { path }, path.slug))
								]
							}, id);
						})
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-normal text-muted",
						children: "Tap one name above. The courses open here. Every course in this stream is in the menu."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 border-t border-line pt-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-cream",
						children: "Where are you?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex flex-wrap gap-2",
						children: [stages.map((item) => {
							const on = stage === item.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setStage(item.id),
								className: "tap h-10 rounded-full px-3 text-sm font-semibold " + (on ? "bg-hot text-ink" : "border border-line bg-surface text-cream"),
								children: [
									storyShort[item.id],
									" · ",
									item.label
								]
							}, item.id);
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": delhi,
							onClick: () => setDelhi(!delhi),
							className: "tap h-10 rounded-full px-3 text-sm font-semibold " + (delhi ? "bg-blue text-ink" : "border border-line bg-surface text-cream"),
							children: delhi ? "Delhi on" : "I study in Delhi"
						})]
					}),
					stage === "11" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-normal text-muted",
						children: class11For(stream)
					}) : null,
					delhi ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-normal text-muted",
						children: delhiFor(stream)
					}) : null
				]
			}),
			!becoming && doors.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl text-cream",
						children: "Commerce courses you can still do"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm leading-normal text-muted",
						children: "Science does not lock these. The route is on each page."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3",
						children: doors.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border-b border-line py-3 last:border-b-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/path/$slug",
								params: { slug: item.slug },
								className: "font-semibold text-cream",
								children: plainOf(item.slug).title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-normal text-muted",
								children: item.line
							})]
						}, item.slug))
					})
				]
			}) : null
		]
	});
}
//#endregion
export { Home as component };
