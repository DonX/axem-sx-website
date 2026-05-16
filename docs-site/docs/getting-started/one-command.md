---
title: The One-Command Full Experience
description: >-
  How a slim AXEM-SX install becomes a fully curated workstation in a
  single zypper command — and what that command actually pulls in.
---

# The One-Command Full Experience

Every AXEM-SX ISO ships **slim** — only the essentials needed to boot,
install, and reach the network. The full curated experience is one
command away after install.

**Read time:** ~4 minutes.

## The command

Pick the meta-package that matches your edition:

```bash
sudo zypper install axem-sx-pro-full     # Pro    — workstation, creator, developer
sudo zypper install axem-sx-light-full   # Light  — older hardware, focused work
sudo zypper install axem-sx-gold-full    # Gold   — reference build, full curated stack
```

That's it. zypper resolves the dependency graph and pulls in the
curated set — applications, codecs, fonts, themes, and Control Hub
modules — for that edition.

!!! tip "Run this once, then forget about it"

    The meta-package is installed once. Future updates flow normally
    through `sudo zypper update`. You don't need to re-run the
    `-full` install unless you've removed the meta-package.

## What each meta-package brings

!!! note "Work in progress"

    The full per-edition manifest will live here, broken down by
    category — productivity, creative, development, codecs, fonts.
    Until it's published, see the
    [release notes for 1.0.1](https://axem-sx.com/release-notes) on
    the website for the high-level summary.

## Why slim ISOs at all?

Three reasons:

1. **Faster downloads.** A 2.4 GB ISO is friendlier than a 6 GB one,
   especially over modest connections.
2. **Fresher software.** What gets pulled in by `-full` is whatever
   the repos hold *today*, not whatever was current when the ISO was
   built.
3. **Tier choice.** You can install the Pro ISO and pull in the Light
   meta-package if you change your mind, or vice versa.

---

## See also

- **[Editions](../editions/index.md)** — what Pro, Light, and Gold each include.
- **[Your First Hour](first-hour.md)** — where this command fits in the post-install flow.
- **[The Zypper Universe](../software/zypper-universe.md)** — how `zypper install` actually works.
- **[Daily Commands](../software/daily-commands.md)** — the zypper one-liners you'll type later.
- [openSUSE Build Service](https://build.opensuse.org/) — where AXEM-SX meta-packages are built and hosted.
