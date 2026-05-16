---
title: NVIDIA Setup
description: >-
  Installing the proprietary NVIDIA driver on AXEM-SX, cleanly and
  without surprises. Wayland and X11 covered.
---

# NVIDIA Setup

NVIDIA's proprietary driver is needed for hardware acceleration on
most NVIDIA GPUs. AXEM-SX makes this straightforward.

**Time required:** about 10 minutes (plus one reboot).
**You'll need:** an internet connection and root access.

!!! note "Work in progress"

    The full step-by-step is being written and tested across recent
    GeForce, Quadro, and RTX cards. The short version below covers
    the standard openSUSE Leap path, which works on AXEM-SX without
    modification.

## The short version (NVIDIA-supplied repository)

```bash
# Add NVIDIA's openSUSE repository
sudo zypper addrepo --refresh \
  https://download.nvidia.com/opensuse/leap/16.0 NVIDIA

# Refresh repositories (accept the GPG key when prompted)
sudo zypper refresh

# Install the recommended driver bundle for your GPU generation
sudo zypper install-new-recommends --repo NVIDIA
```

Reboot. Verify with:

```bash
nvidia-smi
```

You should see your GPU listed. If you do, you're done.

## Wayland vs X11

On Plasma 6 with a recent NVIDIA driver, **Wayland works**. On older
hardware or older drivers, the X11 session is more reliable. Both
sessions are available at the SDDM login screen — pick the one that
works for you and stick with it.

## What the long version will cover

- Choosing G06 vs G05 vs G04 driver branches by GPU generation
- Hybrid laptops (Intel + NVIDIA) and PRIME render offload
- Disabling the open-source `nouveau` driver cleanly
- Recovering from a black screen after the install
- Removing the NVIDIA stack and going back to nouveau

---

## See also

- **[Drivers & Hardware](index.md)** — index of the drivers section.
- **[Recovering from a Bad Update](../snapshots/bad-update.md)** — your safety net if the install goes sideways.
- **[Third-Party Repositories](../software/third-party-repos.md)** — how the NVIDIA repo fits with Packman and OBS.
- [openSUSE: SDB:NVIDIA drivers](https://en.opensuse.org/SDB:NVIDIA_drivers) — the upstream reference, deeper than this page.
- [NVIDIA's openSUSE driver repository](https://download.nvidia.com/opensuse/leap/) — the source we add directly.
