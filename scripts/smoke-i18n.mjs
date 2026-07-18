/**
 * Node smoke checks for locale path helpers (no TS / Next required).
 * Run: node scripts/smoke-i18n.mjs
 */

/** @typedef {"zh" | "en"} Locale */

/**
 * @param {string} path
 * @returns {string}
 */
function normalizePath(path) {
  if (!path || path === "/") return "/"
  const withSlash = path.startsWith("/") ? path : `/${path}`
  return withSlash.replace(/\/{2,}/g, "/")
}

/**
 * @param {Locale} locale
 * @param {string} path
 * @returns {string}
 */
function localePath(locale, path) {
  const p = normalizePath(path)
  if (locale === "zh") return p
  if (p === "/") return "/en"
  return `/en${p}`
}

/**
 * @param {string} pathname
 * @returns {string}
 */
function stripLocalePrefix(pathname) {
  const p = normalizePath(pathname)
  if (p === "/en") return "/"
  if (p.startsWith("/en/")) {
    const rest = p.slice(3)
    return rest.startsWith("/") ? rest : `/${rest}`
  }
  return p
}

/**
 * @param {string} pathname
 * @param {Locale} target
 * @returns {string}
 */
function switchLocalePath(pathname, target) {
  return localePath(target, stripLocalePrefix(pathname))
}

/**
 * @param {string} pathname
 * @returns {Locale}
 */
function localeFromPathname(pathname) {
  const p = normalizePath(pathname)
  if (p === "/en" || p.startsWith("/en/")) return "en"
  return "zh"
}

/** @type {{ name: string; actual: unknown; expected: unknown }[]} */
const cases = [
  {
    name: 'localePath("en","/work")',
    actual: localePath("en", "/work"),
    expected: "/en/work",
  },
  {
    name: 'localePath("zh","/work")',
    actual: localePath("zh", "/work"),
    expected: "/work",
  },
  {
    name: 'localePath("en","/")',
    actual: localePath("en", "/"),
    expected: "/en",
  },
  {
    name: 'localePath("zh","/")',
    actual: localePath("zh", "/"),
    expected: "/",
  },
  {
    name: 'switchLocalePath("/work/taac-2026","en")',
    actual: switchLocalePath("/work/taac-2026", "en"),
    expected: "/en/work/taac-2026",
  },
  {
    name: 'switchLocalePath("/en/work/taac-2026","zh")',
    actual: switchLocalePath("/en/work/taac-2026", "zh"),
    expected: "/work/taac-2026",
  },
  {
    name: 'localeFromPathname("/en/about")',
    actual: localeFromPathname("/en/about"),
    expected: "en",
  },
  {
    name: 'localeFromPathname("/work")',
    actual: localeFromPathname("/work"),
    expected: "zh",
  },
]

let failed = 0
for (const c of cases) {
  const ok = c.actual === c.expected
  if (!ok) {
    failed += 1
    console.error(`FAIL ${c.name}: got ${JSON.stringify(c.actual)}, expected ${JSON.stringify(c.expected)}`)
  } else {
    console.log(`OK   ${c.name} === ${JSON.stringify(c.expected)}`)
  }
}

if (failed > 0) {
  console.error(`\n${failed} check(s) failed`)
  process.exit(1)
}

console.log(`\nAll ${cases.length} smoke checks passed.`)
