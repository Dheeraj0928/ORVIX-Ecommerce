# 10 — Coding Standards

## TypeScript

- Strict mode on  
- Prefer explicit types at boundaries (forms, config, content)  
- Avoid `any`  

## React / Next.js

- App Router  
- Server Components by default; client only for interaction/motion/forms  
- Metadata API for SEO  
- `next/image` for images  
- Colocate page-specific sections under `components/sections/`  

## Styling

- Tailwind + CSS variables from design tokens  
- No inline style sprawl  
- shadcn primitives customized to brand tokens — don’t fight the system  

## Forms

- React Hook Form + Zod schemas in `lib/validations/`  
- Accessible labels, errors, and focus  

## Content

- Marketing copy in `content/` or config — not buried in JSX strings when reused  
- MDX blog with frontmatter: title, description, date, author, tags, category, ogImage  

## Imports

- Prefer absolute `@/` imports  
- Keep components focused; split when > ~150 lines if clarity suffers  

## Testing / checks (lazy senior)

- Non-trivial logic gets one small runnable check  
- Trivial presentational components: no ceremony  

## Git / commits

- Commit only when asked  
- No secrets in repo (`.env*`)  

## Comments

- No noise comments  
- Intentional shortcuts: `// ponytail: <ceiling> → <upgrade path>`  

## PR / change hygiene

- Smallest correct diff  
- Fix root cause in shared helpers  
- Update docs + decision log when architecture shifts  
- Update `project-status.md` on milestones  
