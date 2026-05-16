---
title: Welcome to AXEM-SX
description: >-
  An introduction to AXEM-SX — what it is, who it's for, and what
  makes it different from other Linux distributions.
---

# Welcome to AXEM-SX

AXEM-SX is a **sovereignty-focused Linux distribution** based on
[openSUSE Leap 16.0](https://get.opensuse.org/leap/). It is built and
maintained by [Golda-Global Inc.](https://golda.global), a civic-software
company.

**Read time:** ~5 minutes.

This page is the door. If you read nothing else, read this.

---

## What AXEM-SX is

A workstation operating system designed around three quiet principles:

1. **Your machine answers to you.** Administration of your computer
   stays on your computer. The Control Hub, YaST, and Cockpit all run
   locally — no cloud account, no remote console, no phone-home.
2. **Deliberate over default.** Every package, every menu entry, every
   default setting was chosen on purpose. Things that distract have
   been removed. Things that matter have been pulled forward.
3. **Calm, civic, durable.** AXEM-SX is meant to last. The visual
   language is restrained ("Wood & Gold"). The release cadence is
   patient. The infrastructure is independent.

It is not a niche curio. It runs on the same kernel, with the same
package manager (`zypper`), and the same `rpm`-based ecosystem as any
other openSUSE Leap system. The standard SUSE knowledge applies. The
standard openSUSE Build Service (OBS) packages install. What's
different is what we **chose** — and what we chose to leave out.

---

## Who it's for

| You are... | AXEM-SX is for you because... |
|---|---|
| **A Linux user tired of churn** | The base is openSUSE Leap. Stable, slow-moving, predictable. No surprise rolling updates. |
| **A small-business operator** | Local administration. No SaaS lock-in. Your data stays on disks you can hold. |
| **A creator, technical or not** | Soft Depot brings curated tools forward. The one-command install (`axem-sx-pro-full`) gives you a complete creator workstation in a single line. |
| **A reviver of older hardware** | The Light edition runs respectably on x86_64-v2 hardware from the last decade — without nagging you about subscriptions. |
| **Privacy-conscious** | No telemetry. No analytics ping. No "improve your experience" toggles to find and disable. |
| **Bilingual (EN/FR)** | First-class French support throughout the system and this documentation. |

It is **not** for you if you want:

- A bleeding-edge rolling release. Use [openSUSE Tumbleweed](https://get.opensuse.org/tumbleweed/) instead.
- A heavily customized GNOME-only experience. AXEM-SX defaults to KDE Plasma; GNOME and LXQt are options, but Plasma is where polish lives.
- An enterprise-managed deployment with central policy. AXEM-SX is for the operator who *is* the policy.

---

## What you get out of the box

The current release is **AXEM-SX 1.0.1 (Codename: Gold)**, available in
three editions:

| Edition | For | Default desktop | Slim ISO size |
|---|---|---|---|
| **Pro** | Workstation, creator, developer | KDE Plasma | ~2.4 GB |
| **Light** | Older hardware, focused work | LXQt | ~1.6 GB |
| **Gold** | Reference build, full curated stack | KDE Plasma | ~2.6 GB |

Every ISO ships **slim**. Once installed, a single command pulls in
the full curated set for that edition:

```bash
sudo zypper install axem-sx-pro-full     # for Pro
sudo zypper install axem-sx-light-full   # for Light
sudo zypper install axem-sx-gold-full    # for Gold
```

Read [The One-Command Full Experience](one-command.md) for what each
meta-package brings in.

---

## What makes AXEM-SX different — three things

### 1. The AXEM-SX Control Hub

A native Qt6 administration application that bridges your desktop
environment (KDE, LXQt, GNOME) with the system underneath. It is the
first surface a new user sees. It does not replace YaST or Cockpit; it
sits **above** them, surfacing the daily controls and pointing to the
deeper tools when they're needed. Read the [Control Hub guide](../daily-use/index.md)
in Daily Use.

### 2. Desktop Snapshot Manager *(v0.9 — early)*

A module of the Control Hub that lets you **roam between desktop
environments** without losing your data, identity, or installed
packages. KDE today, GNOME tomorrow, LXQt for a quick session on the
old laptop. One AXEM-SX, many faces.

### 3. Boh-IO *(staged, returning)*

A local AI assistant that runs on your machine, against your terminal
sessions, with no data leaving the box. Boh-IO is currently a quiet
TUI experience while we sharpen the model and the docs. It will return
to the foreground when it's ready to lead.

---

## See also

- **[The Try Guide](try-guide.md)** — boot AXEM-SX from a USB stick in 15 minutes.
- **[Your First Hour](first-hour.md)** — what to do once you've installed.
- **[The One-Command Full Experience](one-command.md)** — turn a slim install into a complete workstation.
- **[The Civic Charter](../civic/charter.md)** — the philosophy, in one page.
- **[Editions](../editions/index.md)** — Pro, Light, and Gold compared.
- [openSUSE Leap project page](https://get.opensuse.org/leap/) — the upstream base we build on.

---

Welcome aboard.
