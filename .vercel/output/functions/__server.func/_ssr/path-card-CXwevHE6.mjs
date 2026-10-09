import { w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as plainOf, g as useDesk } from "./paths-B5l3kEmT.mjs";
import { r as mathsLabel } from "./types-D2VImr09.mjs";
import { f as Bookmark, u as ChevronRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/path-card-CXwevHE6.js
var import_jsx_runtime = require_jsx_runtime();
function PathCard({ path, note }) {
	const saved = useDesk((state) => state.saved.includes(path.slug));
	const toggleSaved = useDesk((state) => state.toggleSaved);
	const plain = plainOf(path.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "panel lift mt-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/path/$slug",
			params: { slug: path.slug },
			className: "flex items-start gap-2 px-4 pt-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-display text-xl leading-tight text-cream",
						children: plain.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-sm leading-normal text-muted",
						children: plain.line
					}),
					note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-2 block text-sm font-medium text-blue",
						children: note
					}) : null
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
				className: "mt-1 size-5 shrink-0 text-muted",
				"aria-hidden": "true"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between pr-1 pl-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "py-3 text-sm text-cream",
				children: [
					path.duration,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: " · "
					}),
					mathsLabel[path.maths]
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-pressed": saved,
				"aria-label": saved ? `Remove ${plain.title} from saved` : `Save ${plain.title}`,
				onClick: () => toggleSaved(path.slug),
				className: "flex size-11 items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, {
					className: saved ? "size-5 fill-hot text-hot" : "size-5 text-cream",
					"aria-hidden": "true"
				})
			})]
		})]
	});
}
//#endregion
export { PathCard as t };
