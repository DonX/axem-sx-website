# Contributing to AXEM-SX

Thank you for considering a contribution. AXEM-SX is a small
project with a deliberate scope; this guide exists so your time
isn't wasted, and ours isn't either.

## The shape of the project

AXEM-SX is one of several projects of
[Golda.global](https://golda.global). 

## What we welcome

### Documentation improvements

The fastest, most welcome kind of contribution. Every page on
[docs.axem-sx.org](https://docs.axem-sx.org/) has an **"Edit this
page"** pencil at the top right. Click it, edit the Markdown,
send a pull request. We'll review it.

Typo fixes, clarifications, missing context, broken links — all
welcome.

### Bug reports

Good bug reports are precious. Please include:

- AXEM-SX version (run `cat /etc/os-release | grep VERSION`)
- The exact command or action that triggered the issue
- What you expected to happen
- What actually happened (error messages verbatim)

Open them at [Issues](https://github.com/DonX/axem-sx-website/issues).

### Translations

The documentation is bilingual (English / French) by design. However, we welcome contributions to translate our documentation and system tools into **Haitian Creole (kreyòl ayisyen)** to make our civic tech accessible to Creole-speaking communities. If you spot an issue with English or French text, or wish to submit a translation patch for Creole, a pull request is highly welcome.

### Hardware reports

If AXEM-SX runs (or doesn't run) on hardware not currently listed
in the [Hardware Lab](https://docs.axem-sx.org/hardware-lab/),
tell us. Vendor, model, kernel version, what worked, what didn't.

### Package Maintenance & OBS Recipes

AXEM-SX maintains a curated set of around 30 custom packages on the Open Build Service (OBS). We welcome contributions to these recipes:
- Submitting RPM `.spec` file improvements or version bumps.
- Resolving build failures in the local or remote OBS build chroots.
- Frame packaging ideas as an issue or submit a pull request with the spec and source patches.

## What is currently out of scope

- **New ISO editions or remixes.** The Pro, Light, and Gold
  editions are deliberate; we are not entertaining additions in
  the 1.x line.
- **Major feature requests.** Open an issue and frame it as an
  idea. We read them. We rarely promise.
- **Unfocused packaging requests** ("please add X package" without a spec file, build instructions, or community utility). We prefer requests that include a draft spec file or demonstrate clear demand.
- **Replacing curated choices.** AXEM-SX is opinionated by
  design; if a default does not suit you, the
  [Make it Yours](https://docs.axem-sx.org/make-it-yours/)
  section exists for that.

## Pull request etiquette

- One concern per PR. A typo fix and a new page should be two
  separate pull requests.
- Run `mkdocs build --strict` locally before submitting docs
  PRs. Setup instructions are in
  [`docs-site/README.md`](docs-site/README.md).
- Write the commit message in the form `area: short imperative`
  (for example, `docs: clarify zypper search vs zypper se`).
- We may take days to respond. We will respond.

## Recognition

Contributors are credited in commit history and, for substantial
work, on the
[Community page](https://docs.axem-sx.org/civic/community/).
No contributor license agreement is required.

## Financial support

If you would rather contribute money than time, see the
[Community page](https://docs.axem-sx.org/civic/community/#supporting-the-project)
for the PayPal link and QR code. Minimum contribution is $10 USD.

---

*Patient releases. Quiet maintenance. Word-of-mouth marketing.
The community matches the project.*
