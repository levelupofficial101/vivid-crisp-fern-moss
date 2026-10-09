import { w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as useDesk, l as pathBySlug } from "./paths-B5l3kEmT.mjs";
import { t as PathCard } from "./path-card-CXwevHE6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/saved-BORtvNzb.js
var import_jsx_runtime = require_jsx_runtime();
function SavedPage() {
	const rows = useDesk((state) => state.saved).map((slug) => pathBySlug[slug]).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl leading-tight",
			children: "Saved courses"
		}), rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 text-sm leading-normal text-muted",
			children: [
				"Nothing saved yet. Open a course and tap Save.",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "text-brass",
					children: "See all courses"
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4",
			children: rows.map((path) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PathCard, { path }, path.slug))
		})]
	});
}
//#endregion
export { SavedPage as component };
