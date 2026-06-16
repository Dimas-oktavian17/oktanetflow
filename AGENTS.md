# AGENTS.md — Oktanetflow Project Guide

This file defines conventions, structure, and rules for agents working on the Oktanetflow documentation project.

---

## 1. Project Overview

- **Type**: VitePress 2.0.0-alpha.15 documentation site
- **Primary language**: Indonesian (`id-ID`), with English (`en/`) locale
- **Package manager**: `pnpm` (strictly enforced — never use `npm` or `yarn`)
- **CSS**: Tailwind CSS v4 with shadcn-vue (New York style)
- **UI Components**: Reka UI primitives, Lucide Vue icons, shadcn-vue components
- **Key Plugins**: `vitepress-mermaid-renderer`, `@davidingplus/vitepress-image-viewer`, `@tailwindcss/vite`

---

## 2. Directory Structure

All documentation content lives under `docs/`. Respect this structure exactly:

```
docs/
├── .vitepress/
│   ├── config.mts              ← Central navigation & sidebar configuration
│   └── theme/
│       ├── components/
│       │   ├── ui/             ← shadcn-vue components (e.g., button/)
│       │   └── *.vue           ← Custom Vue components
│       ├── features/           ← Feature modules (e.g., vlsm/)
│       ├── style.css            ← Tailwind CSS variables & theme
│       ├── utils.ts             ← cn() utility for Tailwind class merging
│       └── index.ts             ← Theme entry point
├── guide/                      ← Theory, concepts, and fundamentals
│   ├── introduction.md
│   ├── essentials/
│   ├── layer-2/
│   └── layer-3/
├── ecosystem/                  ← Vendor-specific network labs
│   ├── cisco/
│   ├── mikrotik/
│   ├── juniper/
│   └── ruijie/
│       ├── index.md             ← Required category overview
│       └── labs/
│           ├── {category}/       ← e.g., routers, vlan, switch, capstone
│           │   └── lab-{NN}-{slug}.md
│           └── capstone/
├── infra/                      ← Infrastructure guides
│   ├── linux/
│   ├── vm/
│   ├── server/
│   ├── hardware/
│   └── software/
├── tools/                      ← Interactive tool pages (and future visualizations)
│   ├── index.md                 ← Tools overview (if needed)
│   └── {tool-slug}.md
├── about/
│   ├── project.md
│   ├── team.md
│   └── changelog.md
└── en/                         ← English translations (mirror root structure)
```

---

## 3. File Naming Conventions (Strict)

| Content Type | Pattern | Example |
|-------------|---------|---------|
| **Guide pages** | `{slug}.md` | `introduction.md`, `static-routing.md` |
| **Lab pages** | `lab-{NN}-{slug}.md` | `lab-01-quick-setup-open-vpn.md` |
| **Category overview** | `index.md` | `index.md` (inside any folder) |
| **Tool pages** | `{tool-slug}.md` | `vlsm.md`, `rdp-wrapper.md` |

**Rules:**
- Use **kebab-case** (hyphen-separated lowercase) for all filenames
- Lab files must be **sequentially numbered**: `lab-01-`, `lab-02-`, `lab-03-`
- Never skip numbers or use inconsistent numbering
- Use **English slugs** even when content is in Indonesian
- Always create `index.md` for new categories before adding child pages

---

## 4. Adding New Content (Primary Focus)

### 4.1 Adding Markdown Pages

1. Create the `.md` file in the correct directory per naming conventions
2. If creating a new category, add `index.md` first
3. Register the page in **`docs/.vitepress/config.mts`** (both `nav` and `sidebar`)
4. Ensure the `link` path matches the file path minus `.md` extension

### 4.2 `config.mts` Rules (Critical — Never Break)

**Navigation (`nav`) Rules:**
- Every top-level entry must have `activeMatch` matching the path
- Sub-items use `items: [{ text: "...", link: "/path/slug" }]`
- Links must match the actual file path without `.md` extension

**Sidebar Rules:**
- Sidebar keys must match the `activeMatch` pattern (e.g., `/guide/` → `/guide/` sidebar)
- Lab sections must use `base: "/path/to/labs/"` for path prefixing
- Always mirror new sidebar entries in the corresponding `nav` section
- Include `collapsed: false` for lab sections
- Always include the `index.md` link as the first item in a section
- Use the existing `base` pattern for nested lab structures (see `/ecosystem/cisco/labs/` for reference)

---

## 5. Markdown Content Standards

### 5.1 Frontmatter

Use VitePress frontmatter at the top of every `.md` file:

```yaml
---
outline: deep
---
```

or for tool pages:

```yaml
---
deep: outline
---
```

### 5.2 Badges

```markdown
<Badge type="tip" text="soon" />
```

### 5.3 Custom Containers

```markdown
::: tip Title
Your content here
:::
```

### 5.4 Vue Components in Markdown

- Use `<ComponentName />` syntax
- Components must be registered in `docs/.vitepress/theme/index.ts`
- Custom components live in `docs/.vitepress/theme/components/`

---

## 6. Adding Custom Components (Secondary Focus)

For future interactive tool visualizations in `/tools/`:

1. Create `.vue` files in `docs/.vitepress/theme/components/`
2. Register in `docs/.vitepress/theme/index.ts` via `app.component()`
3. Use `cn()` utility from `utils.ts` for Tailwind class merging
4. Follow shadcn-vue patterns for UI components
5. Use Reka UI primitives where applicable
6. Import with `@/.vitepress/theme/...` alias pattern

**Example registration:**
```ts
import { Button } from "./components/ui/button"
// ...
app.component("ButtonVue", Button)
```

---

## 7. Formatting & Best Practices

- **Indentation**: 2 spaces in `.vue` and `.ts` files
- **No trailing spaces** in `.md` files
- **Semantic line breaks** in Markdown (one sentence per line)
- **No ESLint/Prettier config** exists — follow VitePress defaults
- **Frontmatter**: always include `outline: deep` or `deep: outline`
- **Links**: use relative paths without `.md` extension (e.g., `/guide/introduction`)

---

## 8. Prohibited Actions

- **DO NOT** modify `docs/.vitepress/config.mts` without adding corresponding sidebar entries
- **DO NOT** create files outside the `docs/` directory
- **DO NOT** rename existing lab files without updating `config.mts`
- **DO NOT** use `npm` or `yarn` — only `pnpm`
- **DO NOT** modify `components.json` unless explicitly adding new shadcn components
- **DO NOT** break existing nav/sidebar structure or patterns
- **DO NOT** add new top-level nav items without updating the `sidebar` object
- **DO NOT** skip `index.md` for new categories

---

## 9. Workflow Checklist for Agents

When adding new content:
- [ ] File placed in correct directory with correct naming convention
- [ ] `index.md` created for new categories
- [ ] `config.mts` updated with nav entry (if top-level)
- [ ] `config.mts` updated with sidebar entry
- [ ] Link paths match file paths (no `.md` extension)
- [ ] Frontmatter included (`outline: deep`)
- [ ] Content follows existing Markdown patterns
- [ ] No existing files or structure were broken