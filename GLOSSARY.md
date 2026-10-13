# Glossary

Plain-English definitions of terms encountered while building this lab.

- **Static rendering**: the page's HTML is fully built once, at `next build` time, and reused for every visitor until the next deploy — like food prepped before the restaurant opens and served cold/reheated to everyone who orders it.
- **Dynamic rendering**: the page's HTML is generated fresh on every request because it depends on something only known when the request arrives (like a URL search param) — like a dish cooked to order because the order itself determines what goes in it.
- **`searchParams`**: the query string values from the visitor's URL (e.g. `?q=shoes`), available to a page component only at request time, never at build time.
- **Cache Components**: a Next.js 16 rendering model, turned on with the `cacheComponents: true` config flag, where every route is dynamic by default but individual functions or components can opt back into caching — like a kitchen where every dish is made-to-order by default, except the ones you've explicitly decided to batch-prep ahead of time.
- **`use cache`**: a directive (a special string placed at the top of a function, component, or file) that marks that piece as cacheable under the Cache Components model — the label you put on the soup pot that says "keep this one pre-made, don't cook it fresh each time."
- **Partial Prerendering (PPR)**: rendering a single page as a mix of a static "shell" (served instantly) and dynamic parts that stream in afterward — like serving the pre-set table and bread basket immediately while the entrée is still being cooked.
- **Suspense boundary**: a wrapper placed around a piece of UI telling React/Next "this part might not be ready yet — show a placeholder until it is" — the gap left in the static shell where dynamic content will later stream in.
- **Fallback**: the placeholder UI shown inside a Suspense boundary while the real content is still being computed — the bread basket brought out while the kitchen finishes your order.
- **Speed Insights**: a Vercel package/dashboard feature that measures real visitors' page-load performance (Core Web Vitals) in production — a stopwatch and motion sensor placed at the dining table that measures the meal without changing how it's cooked or served.
- **LCP (Largest Contentful Paint)**: how long until the biggest visible piece of content finishes rendering — how long until the entrée (not a garnish) actually lands on the table.
- **INP (Interaction to Next Paint)**: how long the page takes to visibly respond after a user interacts with it (click, tap, keypress) — how long after waving down the waiter before they acknowledge you.
- **CLS (Cumulative Layout Shift)**: how much visible content unexpectedly jumps around after first rendering — the waiter yanking the tablecloth to reposition your glass after it's already set down, spilling your water.
