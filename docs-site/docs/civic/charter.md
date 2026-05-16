---
title: The Civic Charter
description: >-
  The short version of the philosophy behind AXEM-SX — what we
  promise, what we stand for, and why we built it.
---

# The Civic Charter

This is the short version. One page, plain prose. The longer
treatments will live in this section as they're written; the Charter
is the anchor.

**Read time:** ~6 minutes.

---

## The problem we are answering

Computing has, slowly and quietly, slid into a posture where the
machine on your desk answers to someone else.

- Your operating system phones home.
- Your "settings" live in a cloud account.
- Your administration tool wants you to sign in.
- Your editor reads your code on a remote server before showing it
  back to you.
- Your printer asks for a subscription.

This is normal now. We do not think it should be.

AXEM-SX is built on the premise that **the machine in front of you
should answer to you, on its own, without help from anyone else's
computer.** That principle is not nostalgia. It is engineering — and
politics.

---

## Five promises

### 1. No telemetry. Ever.

AXEM-SX does not collect, transmit, or aggregate usage data. There is
no "anonymous statistics" toggle to find and disable. There is nothing
to disable, because there is nothing collecting.

When the system needs to reach the internet — for updates, for time,
for repository metadata — it does so for a stated reason, and only for
that reason. The destinations are listed in the
[Reference](../reference/index.md) section.

### 2. Local administration, by default.

The Control Hub runs on your machine. YaST runs on your machine.
Cockpit runs on your machine, served at `localhost:9090`. None of them
require a cloud account. None of them call out to validate a license,
fetch a policy, or "sync" anything.

If you want to manage your machine from a different machine, that's
your choice — and it stays a choice you make, not a default we set.

### 3. Curation over abundance.

We choose. The default application set, the default theme, the default
keyboard shortcut for the application launcher — these are decisions,
not accidents. When you install AXEM-SX, you are receiving an opinion.

You are also free to overrule that opinion. Every default can be
changed. The base is openSUSE Leap; the package universe is the same.
What we give you is a *starting point* that respects your time.

### 4. Patient releases.

We do not ship for novelty. AXEM-SX 1.0 was a long time coming, and
1.0.1 is a deliberate point release — not a marketing event. When a
new version arrives, it arrives because something is genuinely
better. When it doesn't, the silence is also a service to you.

### 5. Independent infrastructure.

Our code lives on
[GitHub](https://github.com/DonX/axem-sx-website), our packages on the
[openSUSE Build Service](https://build.opensuse.org/), our website
on infrastructure we control. We are not exposed to the policy of any
single platform. If any of these go away, we have a path off them.

---

## Three stands

### We stand for calm computing.

Software at its best is quiet. AXEM-SX has no notification center
for itself. The desktop will not nudge you to rate it, share it, or
"complete your profile." Your attention belongs to your work — and
the most respectful thing software can do is stay out of the way
until you ask for it.

### We stand for local agency.

Your machine is the seat of authority for your own work. Storage,
sync, backup, and authentication run locally by default — because
those are decisions about your data, and they belong to you. Cloud
services remain genuinely useful, and AXEM-SX makes the cloud-flavored
alternatives easy to add when you choose them. The default simply
sits where your hands are.

### We stand for sustained work.

Value flows from the work itself, not from gates placed around it.
AXEM-SX is free of charge and free in the four-freedoms sense — every
part of the system is yours to use, study, modify, and share. The
Pro, Light, and Gold editions are *curatorial* differences, not
commercial tiers. Our work is supported by people who choose to
support it, on their own terms.

---

## What we ask of you

Nothing required. But if any of this resonates:

- **Use it.** That is the highest compliment.
- **Tell us what's wrong.** Bugs, rough edges, broken sentences in
  this documentation. Open an issue on GitHub. We read them.
- **Improve a page.** Click "Edit this page" at the top of any
  documentation page. The Markdown is right there.
- **Tell someone else.** Word-of-mouth is the only marketing we
  trust.

---

## Who we are

AXEM-SX is a project of **[Golda-Global Inc.](https://golda.global)**,
a civic-software company. We are a small team. Our work is supported
by those who share its intent, never by capital that comes with
conditions. It is meant to outlast our attention to it.

---

*This Charter is a living document. It will be updated when our
practice changes. It will deepen with experience; it will not be
softened for convenience.*

---

## See also

- **[Welcome to AXEM-SX](../getting-started/welcome.md)** — what the Charter is built into.
- **[The One-Command Full Experience](../getting-started/one-command.md)** — how curation looks in practice.
- **[Reference](../reference/index.md)** — the network destinations and update channels we use.
- [Free Software Foundation: the four freedoms](https://www.gnu.org/philosophy/free-sw.html) — the framework we mean by "free."
- [openSUSE's project values](https://en.opensuse.org/openSUSE:Guiding_principles) — the upstream culture we build on.
