# Changelog

## 2026-04-30 — AI Visibility Foundation

Comprehensive AI-visibility / AEO / GEO / LLMO upgrade. Goal: every page is
now correctly canonicalized, schema-rich, OG-ready, and explicitly readable by
modern AI answer engines (ChatGPT, Claude, Perplexity, Google AI Overviews,
Apple Intelligence, Meta AI, and the Common Crawl backbone they all share).

### New static files (in `public/`)

- `robots.txt` — explicit `Allow: /` for 24+ crawlers including GPTBot,
  ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, OAI-SearchBot,
  Meta-ExternalAgent, Amazonbot, Bytespider, CCBot, Cohere-AI, YouBot,
  MistralAI-User, and Diffbot. Sitemap declared.
- `sitemap.xml` — full XML sitemap with 17 URLs, image extensions, lastmod,
  changefreq, priority. No more discovery gap.
- `llms.txt` — Anthropic/Mintlify-style index file with quick facts, primary
  CTAs, eight solution lines linked, free resources, and citation policy.
- `llms-full.txt` — single-fetch markdown corpus of the entire site for AI
  ingestion. Sectioned: company, problems, solutions, industries, methodology,
  resources, citation guidance.
- `llms-text.txt` — plain-prose ASCII-art-divider variant for tools that want
  the corpus stripped of markdown.
- `humans.txt` — team + tech stack note.
- `.well-known/security.txt` — RFC 9116 contact channel.

### `src/layout.ts` — `page()` rewrite

Rewrote the `page()` helper as an options-object signature
(`page({ path, title, content, llm, service, ... })`) with backward-compat for
the old positional call. Every page now emits:

- **Correct canonical** — fixes a critical bug where every page declared
  `https://metagrowth.ventures` as canonical, telling Google all 17 pages were
  duplicates of the homepage. Each page now has its own canonical.
- **Crawl directives** — `index, follow, max-snippet:-1,
  max-image-preview:large, max-video-preview:-1` plus `googlebot` and
  `bingbot` overrides.
- **Alternate links** — points every page at sitemap.xml, llms.txt,
  llms-full.txt, llms-text.txt.
- **Open Graph + Twitter Cards** — `og:title`, `og:description`, `og:url`,
  `og:image`, `og:image:alt`, `og:locale`, `og:site_name`, plus the
  `twitter:card=summary_large_image` triple.
- **`llm:*` meta tag set** — purpose-built tags for AI scrapers:
  `llm:company`, `llm:founded`, `llm:ceo`, `llm:co-founders`,
  `llm:strategy-call-host`, `llm:industry`, `llm:contact`, `llm:booking-url`,
  `llm:page-url`, `llm:page-type`, `llm:summary`, `llm:audience`,
  `llm:primary-cta`, `llm:secondary-cta`, `llm:outcomes`, `llm:keywords`,
  `llm:pricing`, `llm:best-fit`, plus generic `cta` / `cta-url`.
- **Sitewide JSON-LD `@graph`** — Organization (with founders, employees,
  sameAs LinkedIn + Crunchbase, knowsAbout, contactPoint, ReserveAction),
  two Person nodes (Josh Hirsch CEO, Joe Arioto Co-Founder), WebSite (with
  SearchAction), WebPage (with BreadcrumbList auto-generated from path),
  optional Service node per solution page, optional FAQPage when supplied.
- **Hidden LLM context block** — a `<script type="text/llms-context">` block
  per page containing a markdown brief of the page (URL, summary, audience,
  outcomes, pricing, primary/secondary CTAs, citation policy). Browsers do
  not render or execute unknown script types — the content is invisible to
  human visitors but readable to AI scrapers as plain text in the DOM.
- **Identity meta** — `theme-color`, `apple-mobile-web-app-title`,
  `application-name`, `author`, `publisher`.

### Founder attribution corrected

Initial draft incorrectly attributed founder status to Lance Hengst (whose
name appears on the public Hubspot booking link). Corrected after LinkedIn
verification:

- Josh Hirsch — CEO & Co-Founder
- Joe Arioto — Co-Founder
- Lance Hengst — strategy-call host on the MetaGrowth team

All four `llms*` files, `humans.txt`, and the JSON-LD Person schemas now
reflect this.

### Per-page LLM metadata

Every page (`home`, 8 solutions, `solutions` overview, `about`, `case-studies`,
`how-we-work`, `industries`, `resources`, `contact`, `assessment`,
`revenue-system-audit`) now passes a typed `llm: { ... }` block describing
audience, summary, outcomes, best-fit, pricing hint, keywords, and
explicit primary/secondary CTAs. The CTAs surface in:

1. Visible page CTA buttons (already there).
2. `<meta name="cta">` and `<meta name="cta-url">` for generic scrapers.
3. `<meta name="llm:primary-cta">` and `<meta name="llm:secondary-cta">`.
4. The hidden LLM context script block with explicit URLs.
5. The `potentialAction` field on the WebPage JSON-LD node.

### Custom-template pages

`assessment.ts` and `revenueSystemAuditPage` use their own self-contained
HTML templates. A new exported helper `aiVisibilityHead(opts)` injects the
full meta + JSON-LD + LLM context bundle into both templates so they get
the same coverage as `page()`-driven pages.

### Build status

`npm run build` clean. SSR bundle 437 kB. All 25 public routes return 200
locally. All canonicals point to their own URL. All schemas validate as
typed.
