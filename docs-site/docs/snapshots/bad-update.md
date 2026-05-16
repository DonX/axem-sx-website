---
title: Recovering from a Bad Update
description: >-
  How to roll back AXEM-SX to a known-good state after an update that
  broke something — using snapper from a running session or from GRUB.
---

# Recovering from a Bad Update

AXEM-SX uses **Btrfs** with **snapper** configured at install time.
Every `zypper` transaction creates a *pre* and *post* snapshot
automatically. That means: **almost no system-level update is
truly fatal.** You can roll back.

**Read time:** ~5 minutes.

This page is the calm reassurance article. Read it before you need it.

## If the system still boots

Open a terminal:

```bash
# List recent snapshots
sudo snapper list

# Roll back to the last known-good snapshot (replace N with its number)
sudo snapper rollback N

# Reboot
sudo reboot
```

After reboot, the system is exactly as it was at snapshot N. The
broken transaction is undone.

## If the system won't boot

At the GRUB menu, choose **"Start bootloader from a read-only snapshot"**.
GRUB lists every available snapshot. Pick one from before the bad
update — typically the most recent one with a date earlier than your
last `zypper` call.

The system boots into that snapshot. Once you're in:

```bash
sudo snapper rollback
sudo reboot
```

That promotes the snapshot you just booted to be the new running
system.

!!! note "Work in progress"

    A more complete version of this page will cover: per-`/home`
    snapshots, manual snapshot creation before risky changes, GRUB
    snapshot pruning, and the difference between `snapper rollback`
    and `zypper rollback`.

## What snapshots cover, and what they don't

| Covered | Not covered |
|---|---|
| `/` (the whole root filesystem) | `/home` (by default — separate config) |
| Installed packages | External drives |
| System configuration in `/etc` | Browser profiles synced to a cloud |
| Kernel and bootloader changes | Files outside Btrfs subvolumes |

For documents and personal data, you still need a real backup. Snapper
is for the *system*, not your work.

---

## See also

- **[Snapshots & Recovery](index.md)** — index of the snapshots section.
- **[The Zypper Universe](../software/zypper-universe.md)** — why `zypper` and snapper are designed to work together.
- **[Your First Hour](../getting-started/first-hour.md)** — read this *before* your first big update.
- [openSUSE: Snapper](https://en.opensuse.org/Portal:Snapper) — the upstream portal for snapper.
- [snapper(8) manual page](https://manpages.opensuse.org/Tumbleweed/snapper/snapper.8.en.html) — the full command reference.
