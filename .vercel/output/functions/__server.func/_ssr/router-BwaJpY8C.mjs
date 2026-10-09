import { i as __toESM } from "../_runtime.mjs";
import { C as useRouter, S as useNavigate, X as require_react, _ as Outlet, b as createRootRoute, d as Scripts, f as HeadContent, g as createRouter, m as useRouterState, p as useCanGoBack, v as lazyRouteComponent, w as require_jsx_runtime, x as Link, y as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as plainOf, g as useDesk, l as pathBySlug, p as streamChoices } from "./paths-B5l3kEmT.mjs";
import { a as Moon, c as House, d as ChevronLeft, f as Bookmark, l as GitCompare, n as TriangleAlert, o as Menu, r as Sun, s as ListChecks, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BwaJpY8C.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var tabs = [
	{
		to: "/",
		label: "Home",
		icon: House,
		exact: true
	},
	{
		to: "/fit",
		label: "Marks",
		icon: ListChecks,
		exact: false
	},
	{
		to: "/compare",
		label: "Compare",
		icon: GitCompare,
		exact: false
	},
	{
		to: "/saved",
		label: "Saved",
		icon: Bookmark,
		exact: false
	}
];
function Shell({ children }) {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const compareCount = useDesk((state) => state.compare.length);
	const savedCount = useDesk((state) => state.saved.length);
	const theme = useDesk((state) => state.theme);
	const setTheme = useDesk((state) => state.setTheme);
	const stream = useDesk((state) => state.stream);
	const setStream = useDesk((state) => state.setStream);
	const router = useRouter();
	const navigate = useNavigate();
	const canGoBack = useCanGoBack();
	const atHome = pathname === "/";
	const [open, setOpen] = (0, import_react.useState)(false);
	const streamMeta = streamChoices.find((item) => item.id === stream);
	(0, import_react.useEffect)(() => {
		useDesk.persist.rehydrate();
	}, []);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	const heading = headingFor(pathname);
	function goHome(hash, fit) {
		setOpen(false);
		navigate({
			to: "/",
			hash,
			resetScroll: !hash,
			search: (prev) => {
				const next = { ...prev };
				if (fit) next.fit = "1";
				return next;
			}
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-20 border-b border-line bg-surface/95 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl px-3 pt-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex h-12 items-center gap-2",
							children: [
								atHome ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/",
									className: "flex min-w-0 flex-1 items-baseline gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-lg text-hot",
										children: "LEVEL UP"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-lg text-blue",
										children: "Careers"
									})]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										if (canGoBack) router.history.back();
										else navigate({ to: "/" });
									},
									className: "flex h-11 shrink-0 items-center gap-0.5 pr-1 text-sm font-semibold text-cream",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
										className: "size-6 text-hot",
										"aria-hidden": "true"
									}), "Back"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "min-w-0 flex-1 truncate text-center text-sm font-semibold",
									children: heading
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									"aria-expanded": open,
									"aria-label": open ? "Close menu" : "Open menu",
									onClick: () => setOpen((value) => !value),
									className: "flex h-11 shrink-0 items-center gap-1 px-1 text-sm font-semibold text-cream",
									children: [open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
										className: "size-5",
										"aria-hidden": "true"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
										className: "size-5",
										"aria-hidden": "true"
									}), "Menu"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									"aria-label": theme === "light" ? "Switch to dark mode" : "Switch to light mode",
									onClick: () => setTheme(theme === "light" ? "dark" : "light"),
									className: "flex h-11 shrink-0 items-center gap-1 px-1 text-sm font-semibold text-blue",
									children: [theme === "light" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {
										className: "size-4",
										"aria-hidden": "true"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {
										className: "size-4",
										"aria-hidden": "true"
									}), theme === "light" ? "Dark" : "Light"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs leading-snug text-muted",
							children: [
								"Developed by ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-cream",
									children: "Level Up Academy"
								}),
								" — Maths Masters of Rohini & Pitampura"
							]
						}),
						atHome ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 border-t border-line",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
								className: "flex min-h-11 items-center text-sm font-semibold text-cream",
								children: "About Level Up Academy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2 pb-3 text-sm leading-normal text-muted",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Level Up Academy — Maths Masters of Rohini & Pitampura — is a premium coaching centre for Classes 8 to 12, across subjects. The offline centre is in Sector 7, Rohini, on Main Metro Road, next to Naturals." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "It teaches about 1 lakh students a year, online and offline. CBSE, foundation, CUET and JEE." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										"Call",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "tel:+919810213960",
											className: "font-semibold text-blue",
											children: "98102 13960"
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										"Instagram",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "https://www.instagram.com/levelup.academy.official/",
											target: "_blank",
											rel: "noreferrer",
											className: "font-semibold text-blue",
											children: "@levelup.academy.official"
										})
									] })
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
								className: "flex min-h-11 items-center text-sm font-semibold text-cream",
								children: "Founded by Vaibhav Kukreja"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2 pb-3 text-sm leading-normal text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Vaibhav Kukreja started Level Up Academy. Before the classroom, the work looked like this." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "list-disc space-y-1.5 pl-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "MBA, rank holder, Indian School of Business (ISB), Hyderabad." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "B.Tech (IT). Honoured with a Distinguished Alumni Award for his achievements." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Ex Senior Consultant at EY (Ernst & Young), a Big 4 firm." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Founded ElevenX Consultancy Pvt Ltd in 2018. The firm took Asia’s largest ropeway-for-urban-mobility project, in Himachal Pradesh." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Winner of a global hackathon at MOVE, the Global Mobility Summit organised by the Government of India. Awarded ₹10 lakh by Hon. Shri Narendra Modi." })
									]
								})]
							})] })]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2" })
					]
				})
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-30 flex justify-end bg-bg/70",
				onClick: () => setOpen(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-dvh w-full max-w-sm flex-col gap-4 overflow-y-auto bg-surface p-4",
					onClick: (event) => event.stopPropagation(),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-muted",
							children: "Stream"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl leading-tight text-cream",
							children: streamMeta?.label ?? "Not chosen yet"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col gap-2",
							children: streamChoices.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									setStream(item.id);
									goHome();
								},
								className: "tap min-h-12 rounded-2xl border px-3 text-left text-sm font-semibold " + (stream === item.id ? "border-hot bg-hot text-ink" : "border-line text-cream"),
								children: item.label
							}, item.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => goHome("fit", true),
							className: "tap h-12 rounded-full border border-line text-sm font-semibold text-blue",
							children: "Not sure? Check which stream fits"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-line pt-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-muted",
								children: "On this stream"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex flex-col",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => goHome("doors"),
										className: "tap h-11 text-left text-sm font-semibold text-cream",
										children: "Hidden doors"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => goHome("ai"),
										className: "tap h-11 text-left text-sm font-semibold text-cream",
										children: "AI world"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => goHome("find"),
										className: "tap h-11 text-left text-sm font-semibold text-cream",
										children: "Find one course"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => {
											setOpen(false);
											navigate({
												to: "/",
												hash: "find",
												search: (prev) => ({
													...prev,
													list: "1"
												})
											});
										},
										className: "tap h-11 text-left text-sm font-semibold text-cream",
										children: "Every course in this stream"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-auto flex gap-2 border-t border-line pt-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/compare",
								className: "tap flex h-12 flex-1 items-center justify-center rounded-full bg-hot text-sm font-semibold text-ink",
								children: ["Compare ", compareCount > 0 ? `(${compareCount})` : ""]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/saved",
								className: "tap flex h-12 flex-1 items-center justify-center rounded-full border border-line text-sm font-semibold text-cream",
								children: ["Saved ", savedCount > 0 ? `(${savedCount})` : ""]
							})]
						})
					]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "mx-auto w-full max-w-3xl px-4 pb-24",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed inset-x-0 bottom-0 z-20 border-t border-line bg-surface/95 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mx-auto grid max-w-3xl grid-cols-4",
					children: tabs.map((tab) => {
						const active = tab.exact ? pathname === tab.to : pathname.startsWith(tab.to);
						const Icon = tab.icon;
						const count = tab.to === "/compare" ? compareCount : tab.to === "/saved" ? savedCount : 0;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: tab.to,
							className: "flex h-14 flex-col items-center justify-center gap-0.5 text-xs font-medium " + (active ? "text-hot" : "text-cream"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-6 " + (active ? "fill-hot text-hot" : ""),
									"aria-hidden": "true"
								}), count > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -top-1.5 -right-2.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-blue px-1 text-xs font-semibold text-ink",
									children: count
								}) : null]
							}), tab.label]
						}) }, tab.to);
					})
				})
			})
		]
	});
}
function headingFor(pathname) {
	if (pathname.startsWith("/fit")) return "My marks";
	if (pathname.startsWith("/compare")) return "Compare";
	if (pathname.startsWith("/saved")) return "Saved";
	if (pathname.startsWith("/path/")) {
		const slug = pathname.slice(6);
		return plainOf(slug).title || "Course";
	}
	return "LEVEL UP Careers";
}
var styles_default = "/assets/styles-COUlKlRk.css";
var APP_NAME = "LEVEL UP Careers";
var Route$5 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Every college degree and professional course after Commerce with Maths in India."
			},
			{
				name: "theme-color",
				content: "#fafafa"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: "(function(){try{var r=JSON.parse(localStorage.getItem(\"open-ledger-desk\")||\"{}\");var s=r&&r.state;if(s&&s.nightSet)return;var t=s&&s.theme;if(t===\"dark\"){document.documentElement.setAttribute(\"data-theme\",\"dark\");var m=document.querySelector('meta[name=\"theme-color\"]');if(m)m.setAttribute(\"content\",\"#000000\");}}catch(e){}})();" } })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$4 = () => import("./routes-DIbwgRpx.mjs");
var modeIds = [
	"exam",
	"college",
	"course",
	"interest",
	"become"
];
var whenIds = [
	"all",
	"exam12",
	"degree12",
	"withgrad",
	"aftergrad"
];
function validateSearch(search) {
	const by = modeIds.find((item) => item === search.by);
	const pick = typeof search.pick === "string" && search.pick.length > 0 ? search.pick : void 0;
	const q = typeof search.q === "string" && search.q.length > 0 ? search.q : void 0;
	const when = whenIds.find((item) => item === search.when);
	const list = search.list === "1" ? "1" : void 0;
	const fit = search.fit === "1" ? "1" : void 0;
	return {
		by,
		pick,
		q,
		when: when && when !== "all" ? when : void 0,
		list,
		fit
	};
}
var Route$4 = createFileRoute("/")({
	validateSearch,
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({ meta: [{ title: "LEVEL UP Careers" }] })
});
var $$splitComponentImporter$3 = () => import("./compare-EYP5H5CQ.mjs");
var Route$3 = createFileRoute("/compare")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [{ title: "Compare — LEVEL UP Careers" }] })
});
var $$splitComponentImporter$2 = () => import("./fit-BIgRQx0r.mjs");
var Route$2 = createFileRoute("/fit")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: "My marks — LEVEL UP Careers" }] })
});
var $$splitComponentImporter$1 = () => import("./saved-BORtvNzb.mjs");
var Route$1 = createFileRoute("/saved")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({ meta: [{ title: "Saved — LEVEL UP Careers" }] })
});
var $$splitComponentImporter = () => import("./path._slug-CFvqYYub.mjs");
var Route = createFileRoute("/path/$slug")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: ({ params }) => ({ meta: [{ title: `${pathBySlug[params.slug] ? plainOf(params.slug).title : "Course"} — LEVEL UP Careers` }] })
});
var rootRouteChildren = {
	IndexRoute: Route$4.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	CompareRoute: Route$3.update({
		id: "/compare",
		path: "/compare",
		getParentRoute: () => Route$5
	}),
	FitRoute: Route$2.update({
		id: "/fit",
		path: "/fit",
		getParentRoute: () => Route$5
	}),
	SavedRoute: Route$1.update({
		id: "/saved",
		path: "/saved",
		getParentRoute: () => Route$5
	}),
	PathSlugRoute: Route.update({
		id: "/path/$slug",
		path: "/path/$slug",
		getParentRoute: () => Route$5
	})
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { Route as n, Route$4 as r, router_exports as t };
