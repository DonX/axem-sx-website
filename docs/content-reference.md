# AXEM-SX Reference Documentation

# Source: NotebookLLM — February 2026

# Use this file as the canonical content reference for all website pages.

## Identity

- **Name**: AXEM-SX 0.9 (Founders Preview)
- **Codename**: Founders Preview
- **Base**: openSUSE Leap 16.0 (Pre-Release)
- **Architecture**: x86_64 (v2) only — strictly post-2009 CPUs
- **Philosophy**: Sovereignty · Discipline · Long-Cycle Reliability
- **Tagline**: The Digital Workshop
- **Positioning**: "Built on openSUSE Leap 16.0. A restrained Linux environment for sustained, serious work."

## The Material Metaphor (Core Aesthetic Philosophy)

> "In an era where software interfaces are increasingly abstract, flat, and detached, AXEM-SX reintroduces material metaphors."

- Wood & Gold UI is not merely a theme — it is a signal of equilibrium
- Wood textures remind the user that computing is a human activity rooted in the physical world
- Designed to reduce digital fatigue
- Just as a carpenter respects their workbench, AXEM-SX respects your screen as a space for craftsmanship, not consumption

## Boh-IO — The Flagship Feature

- **Full Name**: Bridge Our Humanities with Input & Output
- **Architecture**: "Sidecar" — Bash shell (left pane) + local AI advisor (right pane)
- **AI Model**: phi3:mini (3.8B parameters) via local Ollama instance
- **Privacy**: No data sent to cloud — command history exists ONLY in RAM, wiped on window close
- **Philosophy**: Reflection after action, not automation

### Boh-IO Commands

- `boh explain` — breaks down last command into plain English
- `boh safer` — suggests less risky version of last command
- `boh teach` — mini-lesson on the tool being used
- `boh undo` — writes corrective command to Sidecar (never executes automatically)
- `boh dry-run on` — turns prompt orange, rewrites destructive commands to safe equivalents (rm → ls)

### Boh-IO Constraints

- NO full-screen TUI apps inside Boh-IO (vim, htop, tmux not supported — use Konsole instead)
- No permanent history — wiped on close
- The AI NEVER types into the shell — strict pane separation

## Technical Architecture

- **Display**: Wayland ONLY — Xorg removed from installer
- **Legacy App Support**: XWayland for older apps
- **Administration**: Control Hub (AXEM-SX curated YaST + Cockpit at localhost:9090) — YaST is preserved and curated, NOT removed
- **Audio**: PipeWire (replaces PulseAudio)
- **Networking**: NetworkManager ONLY (wicked removed)
- **Security**: Root login via password DISABLED — SSH key required
- **SELinux**: Enforcing mode (not AppArmor)
- **/tmp**: RAM disk (tmpfs) — cleared on every reboot
- **AI**: Offline only — no remote services enabled by default
- **32-bit**: REMOVED — strictly 64-bit

## Pre-Applied Fixes (vs. base Leap 16.0)

- **Docker + KVM conflict**: Firewall backend forced to iptables — Docker and libvirt work side-by-side immediately
- **Zypper bad repo**: If "non-functioning repository" error appears → run `zypper rr 1`
- **NVIDIA**: Automated open driver + user-space drivers — "Boot-to-Studio" guarantee

## Release Notes v0.9 Highlights

- NVIDIA: Automated open driver installation — troubleshoot with `nomodeset` on black screens
- Audio: PipeWire default, replacing PulseAudio
- Architecture: x86-64-v2 only — older CPUs will CRASH the kernel
- /tmp: tmpfs — cleared every reboot
- Known: Gray line glitch in Cockpit storage UI for zFCP disks (cosmetic only)
- Known: Bad repository after install → `zypper rr 1`

## Target Audience

- Builders, architects, engineers, long-cycle thinkers
- Creators who value independence, mastery, and stability
- "Civic-minded" users who reject data exfiltration

## Localization Roadmap

- English (primary)
- French — "l'atelier" metaphor works powerfully
- Spanish
- Haitian Creole — strong statement of digital inclusion
- Note: Avoid overly formal "academic" tone in translations — keep "accessible and workshop-like"

## Pages Needed

- [x] Homepage (hero, features, wood dock, footer)
- [ ] About — Philosophy / Sovereignty / Material Metaphor
- [ ] Features — Boh-IO deep-dive + Control Hub + Console AI + Soft Depot
- [ ] Release Notes — 0.9 Founders Preview
- [ ] Docs (future)
