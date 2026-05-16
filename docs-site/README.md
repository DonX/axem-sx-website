# AXEM-SX Documentation

The official documentation portal for **AXEM-SX**, a sovereignty-focused
Linux distribution based on openSUSE Leap.

Live at: **https://docs.axem-sx.org** (deployed via GitHub Pages).

Built with [MkDocs](https://www.mkdocs.org/) and the
[Material](https://squidfunk.github.io/mkdocs-material/) theme.
Bilingual (English / French) via
[mkdocs-static-i18n](https://github.com/ultrabug/mkdocs-static-i18n).

This documentation lives **inside the website repo** at
[`docs-site/`](https://github.com/DonX/axem-sx-website/tree/main/docs-site).
The deploy workflow at
[`.github/workflows/docs-deploy.yml`](../.github/workflows/docs-deploy.yml)
is path-scoped — it runs only when files under `docs-site/**` change,
so it never blocks website-only PRs.

---

## Local development

From the **repository root**:

```bash
cd docs-site

# Set up a virtual environment
python -m venv .venv
source .venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Serve locally with live reload
mkdocs serve
```

Open <http://127.0.0.1:8000> in your browser. Edits to any file under
`docs-site/docs/` will reload automatically.

---

## Adding a page

1. Create a Markdown file under the appropriate section directory,
   e.g. `docs/troubleshooting/wifi.md` for the English version.
2. Create the French sibling next to it: `docs/troubleshooting/wifi.fr.md`.
   If you don't have a translation yet, omit the file — the site will
   automatically fall back to the English version with a discreet banner.
3. Add the page to the navigation in `mkdocs.yml`.
4. Run `mkdocs build` locally to verify.

### Naming convention

This project uses the **suffix** structure for `mkdocs-static-i18n`:

| File                                  | Locale  |
|---------------------------------------|---------|
| `docs/getting-started/welcome.md`     | English (default) |
| `docs/getting-started/welcome.fr.md`  | French |

---

## Project layout

```
axem-sx-docs/
├── mkdocs.yml                   # Site configuration
├── requirements.txt             # Python dependencies
├── docs/
│   ├── index.md                 # Home page
│   ├── stylesheets/extra.css    # Wood & Gold theme overrides
│   ├── assets/                  # Logos, screenshots, diagrams
│   └── <section>/               # One directory per top-level section
└── .github/workflows/           # CI/CD (build + deploy)
```

---

## Sections

| # | Section | Status |
|---|---|---|
| 1 | Getting Started | Bootstrapped |
| 2 | Installation | Stub |
| 3 | Editions | Stub |
| 4 | Daily Use | Stub |
| 5 | Drivers & Hardware | NVIDIA bootstrapped |
| 6 | Software & Updates | Stub |
| 7 | Snapshots & Recovery | Bad-update recipe bootstrapped |
| 8 | Troubleshooting | Stub |
| 9 | Civic & Philosophy | Charter bootstrapped |
| 10 | Hardware Lab | Stub |
| 11 | Developer Docs | Stub |
| 12 | Reference | Stub |

---

## Deployment

Deployed via **GitHub Pages** by the path-scoped workflow at
[`.github/workflows/docs-deploy.yml`](../.github/workflows/docs-deploy.yml).

- **Production**: every push to `main` that touches `docs-site/**`
  triggers a build + deploy → https://docs.axem-sx.org
- **PR previews**: pull requests touching `docs-site/**` run the build
  in `--strict` mode; the artifact is available for inspection but is
  not published.

### One-time setup (already done)

1. Repository settings → **Pages** → Source: **GitHub Actions**.
2. Repository settings → **Pages** → Custom domain: `docs.axem-sx.org`,
   Enforce HTTPS enabled.
3. DNS provider: `CNAME docs.axem-sx.org → DonX.github.io.`
4. The `axem-sx-website` Vercel project continues to serve the apex
   `axem-sx.org`. The two deploys do not interfere.

---

## Contributing

This documentation is **docs-as-code**: every page is a Markdown file
in this repository. To suggest a change, click "Edit this page" at the
bottom of any page (links to GitHub) or open a pull request directly.

When submitting a PR:

- Keep the prose calm, deliberate, and pragmatic.
- Use admonitions sparingly — `!!! note`, `!!! warning`, `!!! tip`.
- Code blocks should be runnable as-is. Specify the language for syntax
  highlighting.
- If you add an English page, leave a `TODO(fr)` marker so we know the
  French version is pending.

---

## License

Documentation content is licensed under
[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
The configuration and theme overrides are MIT.
