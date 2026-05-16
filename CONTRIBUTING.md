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

The documentation is bilingual (English / French) by design. If
you spot a French page that reads awkwardly, or an English page
without its French sibling, an issue or PR is welcome.

We do not currently accept new language additions beyond EN/FR —
we would rather keep two languages excellent than five mediocre.

### Hardware reports

If AXEM-SX runs (or doesn't run) on hardware not currently listed
in the [Hardware Lab](https://docs.axem-sx.org/hardware-lab/),
tell us. Vendor, model, kernel version, what worked, what didn't.

## What is currently out of scope

- **New ISO editions or remixes.** The Pro, Light, and Gold
  editions are deliberate; we are not entertaining additions in
  the 1.x line.
- **Major feature requests.** Use Discussions › Ideas. We read
  them. We rarely promise.
- **Packaging requests** ("please add X to the default set") —
  same channel: Discussions › Ideas, not Issues.
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
