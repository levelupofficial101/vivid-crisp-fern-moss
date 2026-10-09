import { w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as plainOf, g as useDesk, l as pathBySlug, o as fitsStream, u as paths } from "./paths-B5l3kEmT.mjs";
import { n as costLabel, r as mathsLabel } from "./types-D2VImr09.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/compare-EYP5H5CQ.js
var import_jsx_runtime = require_jsx_runtime();
var rows = [
	{
		label: "Maths",
		value: (slug) => mathsLabel[pathBySlug[slug].maths]
	},
	{
		label: "Time",
		value: (slug) => pathBySlug[slug].duration
	},
	{
		label: "Fees",
		value: (slug) => costLabel[pathBySlug[slug].cost]
	},
	{
		label: "Marks",
		value: (slug) => plainOf(slug).marks
	},
	{
		label: "Exam",
		value: (slug) => plainOf(slug).exam
	},
	{
		label: "The job",
		value: (slug) => plainOf(slug).job
	}
];
function ComparePage() {
	const compare = useDesk((state) => state.compare);
	const stream = useDesk((state) => state.stream);
	const toggleCompare = useDesk((state) => state.toggleCompare);
	const chosen = compare.filter((slug) => pathBySlug[slug]);
	const options = stream ? paths.filter((path) => fitsStream(path.slug, stream)) : paths;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl leading-tight",
				children: "The compare bench"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-normal text-muted",
				children: "Three seats. Add a course from its page with “Add to compare”, or pick one here. A fourth drops the oldest. This is how two paths sit next to each other."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid grid-cols-3 gap-2",
				children: [
					0,
					1,
					2
				].map((slot) => {
					const slug = chosen[slot];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-20 items-center justify-center rounded-2xl border px-2 text-center text-xs font-semibold " + (slug ? "border-hot bg-surface text-cream" : "border-dashed border-line text-muted"),
						children: slug ? plainOf(slug).title : `Seat ${slot + 1}`
					}, slot);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-5 block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-muted",
					children: "Add a course"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					suppressHydrationWarning: true,
					value: "",
					onChange: (event) => {
						if (event.target.value) toggleCompare(event.target.value);
					},
					className: "panel mt-1 h-12 w-full rounded-2xl px-3 text-sm text-cream",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "Select"
					}), options.map((path) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: path.slug,
						children: chosen.includes(path.slug) ? `${plainOf(path.slug).title} (added)` : plainOf(path.slug).title
					}, path.slug))]
				})]
			}),
			chosen.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-sm leading-normal text-cream",
				children: "No course added yet. Use the list above."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex flex-col gap-4",
				children: chosen.map((slug) => {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "panel p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/path/$slug",
								params: { slug },
								className: "font-display text-2xl leading-tight text-cream",
								children: plainOf(slug).title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => toggleCompare(slug),
								className: "h-11 shrink-0 text-sm text-muted",
								children: "Remove"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-4 flex flex-col gap-3",
							children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-sm text-brass",
								children: row.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-sm leading-normal text-cream",
								children: row.value(slug)
							})] }, row.label))
						})]
					}, slug);
				})
			})
		]
	});
}
//#endregion
export { ComparePage as component };
