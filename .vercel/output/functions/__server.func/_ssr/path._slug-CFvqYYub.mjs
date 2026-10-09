import { w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as plainOf, g as useDesk, h as tagOf, l as pathBySlug, m as streamsOf, o as fitsStream, t as bucketMeta } from "./paths-B5l3kEmT.mjs";
import { i as stages, n as costLabel, r as mathsLabel } from "./types-D2VImr09.mjs";
import { f as Bookmark, l as GitCompare } from "../_libs/lucide-react.mjs";
import { n as Route } from "./router-BwaJpY8C.mjs";
import { r as waysFor, t as fallbacksFor } from "./routes-D5v_vAJ_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/path._slug-CFvqYYub.js
var import_jsx_runtime = require_jsx_runtime();
function PathView({ path }) {
	const stage = useDesk((state) => state.stage);
	const delhi = useDesk((state) => state.delhi);
	const compare = useDesk((state) => state.compare);
	const saved = useDesk((state) => state.saved.includes(path.slug));
	const compared = compare.includes(path.slug);
	const toggleSaved = useDesk((state) => state.toggleSaved);
	const toggleCompare = useDesk((state) => state.toggleCompare);
	const stream = useDesk((state) => state.stream);
	const stageLabel = stages.find((item) => item.id === stage)?.label ?? "now";
	const pairs = path.pair.map((slug) => pathBySlug[slug]).filter(Boolean);
	const plain = plainOf(path.slug);
	const tag = tagOf(path.slug);
	const ways = waysFor(path.slug);
	const falls = fallbacksFor(path.slug).filter((item) => !stream || fitsStream(item.slug, stream));
	const menu = path.slug === "not-eng" || path.slug === "not-mbbs" || path.slug === "not-ca";
	const where = tag.buckets.map((id) => bucketMeta.find((item) => item.id === id)?.label).filter(Boolean).join(" · ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "pt-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl leading-tight text-cream",
				children: plain.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-base leading-normal text-cream",
				children: plain.line
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-normal text-muted",
				children: plain.also
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm font-semibold text-blue",
				children: where
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm leading-normal text-muted",
				children: whoCan(path.slug)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "panel mt-5 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl leading-tight text-cream",
						children: "Keep it, or put it on the bench"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-normal text-muted",
						children: "Save keeps this page for later. Compare holds up to three courses. Then open Compare at the bottom and see them side by side. Adding a fourth drops the oldest."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 grid grid-cols-3 gap-2",
						children: [
							0,
							1,
							2
						].map((slot) => {
							const slug = compare[slot];
							const on = slug === path.slug;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-16 items-center justify-center rounded-2xl border px-2 text-center text-xs font-semibold " + (on ? "border-hot bg-hot text-ink" : slug ? "border-line bg-raise text-cream" : "border-dashed border-line text-muted"),
								children: slug ? plainOf(slug).title : `Seat ${slot + 1}`
							}, slot);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 grid grid-cols-2 gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => toggleSaved(path.slug),
							className: "tap inline-flex h-12 items-center justify-center gap-2 rounded-full px-3 text-sm font-semibold " + (saved ? "bg-blue text-ink" : "border border-line text-cream"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, {
								className: saved ? "size-4 fill-ink text-ink" : "size-4",
								"aria-hidden": "true"
							}), saved ? "Saved" : "Save"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => toggleCompare(path.slug),
							className: "tap inline-flex h-12 items-center justify-center gap-2 rounded-full px-3 text-sm font-semibold " + (compared ? "bg-hot text-ink" : "border border-line text-cream"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitCompare, {
								className: "size-4",
								"aria-hidden": "true"
							}), compared ? "On the bench" : "Add to compare"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm leading-normal text-cream",
						children: [compared ? `This course is on the bench. ${compare.length} of 3.` : `This course is not on the bench yet. ${compare.length} of 3.`, saved ? " It is also in Saved." : ""]
					}),
					compare.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/compare",
						className: "tap mt-2 inline-flex h-11 items-center text-sm font-semibold text-blue",
						children: "Open compare"
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-5 text-sm leading-normal text-muted",
				children: [
					asSentence(mathsLabel[path.maths]),
					" ",
					asSentence(path.duration),
					" ",
					asSentence(costLabel[path.cost])
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-semibold text-blue",
						children: "Who it is good for"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-base leading-normal text-cream",
						children: tag.goodFor
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-semibold text-hot",
						children: "Who should avoid it"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-base leading-normal text-cream",
						children: tag.avoid
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6 flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Marks",
						text: plain.marks
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Exam",
						text: plain.exam
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "The job",
						text: plain.job
					})
				]
			}),
			ways.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl text-cream",
						children: "Ways to get here"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm leading-normal text-muted",
						children: "More than one route. Open the step that matches you."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-3 flex flex-col gap-3",
						children: ways.map((way, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "panel p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-display text-xl text-cream",
								children: [
									index + 1,
									". ",
									way.title
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-2 flex flex-col gap-1",
								children: way.steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "text-sm leading-normal text-cream",
									children: step.slug && pathBySlug[step.slug] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/path/$slug",
										params: { slug: step.slug },
										className: "font-semibold text-blue",
										children: step.label
									}) : step.label
								}, step.label))
							})]
						}, way.title))
					})
				]
			}) : null,
			falls.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl text-cream",
						children: menu ? "Open the one that fits" : "If this does not happen"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm leading-normal text-muted",
						children: menu ? "Each of these is a real page. The exam, the marks and the colleges are on it. A drop year is not the only answer." : "A missed exam is not the end of the list. These are the next doors, not copies of the same seat."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 flex flex-col gap-3",
						children: falls.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "panel p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/path/$slug",
								params: { slug: item.slug },
								className: "font-display text-xl text-cream",
								children: plainOf(item.slug).title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-normal text-muted",
								children: item.line
							})]
						}, item.slug))
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "panel mt-3 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-2xl",
					children: ["What to do in ", stageLabel]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 flex flex-col gap-3",
					children: path.now[stage].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "text-sm leading-normal text-cream",
						children: item
					}, item))
				})]
			}),
			delhi ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "panel mt-3 p-4 text-sm leading-normal text-cream",
				children: path.delhi
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 px-1 text-sm leading-normal text-muted",
				children: "Studying in Delhi? Turn on “I study in Delhi” on the first page."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Fold, {
						title: "The exact rules",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "flex flex-col gap-4",
								children: path.gates.map((gate) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-sm text-brass",
									children: gate.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 text-sm leading-normal text-cream",
									children: gate.rule
								})] }, gate.label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 text-sm text-brass",
								children: "Class 11"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-normal text-cream",
								children: path.class11
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-sm text-brass",
								children: "Class 12"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-normal text-cream",
								children: path.class12
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fold, {
						title: "Which exam, in detail",
						open: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col gap-5",
							children: path.exams.map((exam) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl",
									children: exam.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: exam.when
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-normal text-cream",
									children: exam.papers
								})
							] }, exam.name))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fold, {
						title: "How you get in",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "flex flex-col gap-4",
							children: path.how.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-xl text-brass",
									children: index + 1
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm leading-normal text-cream",
									children: step
								})]
							}, step))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Fold, {
						title: "Colleges and places",
						open: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-normal text-muted",
							children: path.placesLabel
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-4 flex flex-col",
							children: path.places.map((place, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "border-t border-line py-4 first:border-t-0 first:pt-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "font-display text-xl leading-tight",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "mr-2 text-brass",
											children: [index + 1, "."]
										}), place.name]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-sm text-muted",
										children: [
											place.where,
											". ",
											place.via,
											"."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-normal text-cream",
										children: place.note
									})
								]
							}, place.name))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Fold, {
						title: "The job, year by year",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm leading-normal text-muted",
								children: ["Pay figures are a rough India range for 2026, not a promise. ", path.firstPay]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex flex-col gap-5",
								children: path.after.map((beat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-sm text-brass",
										children: beat.when
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm leading-normal text-cream",
										children: beat.what
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm leading-normal text-muted",
										children: beat.money
									})
								] }, beat.when))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-5 text-sm leading-normal text-muted",
								children: [
									"Work you can do: ",
									path.careers.join(", "),
									"."
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fold, {
						title: "What it costs",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-normal text-cream",
							children: path.costNote
						})
					}),
					pairs.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fold, {
						title: "Often done with",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex flex-col",
							children: pairs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border-b border-line last:border-b-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/path/$slug",
									params: { slug: item.slug },
									className: "block py-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-lg text-cream",
										children: plainOf(item.slug).title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-sm text-muted",
										children: plainOf(item.slug).line
									})]
								})
							}, item.slug))
						})
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fold, {
						title: "Before you decide",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex flex-col gap-3",
							children: path.watch.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-sm leading-normal text-cream",
								children: item
							}, item))
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 px-1 text-sm leading-normal text-muted",
				children: "Checked in September 2026. Rules change. Read the official page before you pay a fee."
			})
		]
	});
}
function whoCan(slug) {
	const open = streamsOf(slug);
	const names = [
		open.includes("commerce") ? "Commerce with Maths" : null,
		open.includes("pcm") ? "Science PCM" : null,
		open.includes("pcb") ? "Science PCB" : null
	].filter(Boolean);
	const both = open.includes("pcm") && open.includes("pcb");
	return `Open to ${names.join(", ")}.${both ? " PCMB sees it too." : ""}`;
}
function asSentence(text) {
	const trimmed = text.trim();
	if (!trimmed) return "";
	return /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}.`;
}
function Fact({ label, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "panel p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-sm font-medium text-brass",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-base leading-normal text-cream",
			children: text
		})]
	});
}
function Fold({ title, children, open }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
		className: "panel px-4",
		open,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
			className: "flex min-h-14 items-center justify-between gap-3 py-3 font-display text-xl text-cream",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pb-4",
			children
		})]
	});
}
function PathPage() {
	const { slug } = Route.useParams();
	const path = pathBySlug[slug];
	if (!path) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl",
			children: "This course is not in the list."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			className: "mt-4 inline-flex h-11 items-center text-brass",
			children: "Back to courses"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PathView, { path });
}
//#endregion
export { PathPage as component };
