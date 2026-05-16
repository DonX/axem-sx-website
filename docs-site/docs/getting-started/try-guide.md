---
title: The Try Guide
description: >-
  Five steps from "I want to try AXEM-SX" to a running live system.
  No installation required.
---

# The Try Guide

Five steps from curious to logged in. You won't change a thing on
your existing machine — this is a **live** session that runs entirely
from a USB stick.

**Time required:** about 15 minutes.
**You'll need:** a USB stick (8 GB or larger) and a computer that
can boot from USB.

---

## Step 1 — Download an ISO

Go to **[axem-sx.com/downloads](https://axem-sx.com/downloads)** and
pick an edition:

| Edition | Pick this if... |
|---|---|
| **Pro** | You want a modern workstation. KDE Plasma, full creator stack. |
| **Light** | Your machine is older or you want something quieter. LXQt, leaner. |
| **Gold** | You want the reference build — what we run on our own desks. |

Each download is a **slim ISO** (~1.6 to ~2.6 GB). The full curated
software set is pulled in *after* installation by a single command.
The live session you're about to boot will already feel complete.

!!! tip "Verify the download"

    Each ISO is published with a SHA-256 checksum. We strongly
    recommend you verify before flashing. The Downloads page shows
    the expected hash next to each file.

    ```bash
    sha256sum axem-sx-pro-1.0.1.iso
    ```

---

## Step 2 — Write the ISO to a USB stick

The flashing tool depends on the operating system you're on right now.

=== "Linux"

    Use **GNOME Disks** (`gnome-disks`), **KDE ISO Image Writer**, or
    the command line:

    ```bash
    # Replace /dev/sdX with your USB stick's device path.
    # Triple-check with `lsblk` first. The wrong path will erase the
    # wrong drive.
    sudo dd if=axem-sx-pro-1.0.1.iso of=/dev/sdX bs=4M status=progress conv=fsync
    ```

=== "macOS"

    Use **balenaEtcher** ([balena.io/etcher](https://www.balena.io/etcher/))
    — it's the gentlest path. Drag the ISO in, pick the USB stick,
    confirm.

=== "Windows"

    Use **Rufus** ([rufus.ie](https://rufus.ie/)) or **balenaEtcher**.
    For Rufus, choose **DD Image** mode when prompted.

!!! warning "This erases the USB stick"

    Whatever was on the USB stick before will be gone. Move anything
    important off it first.

---

## Step 3 — Boot from the USB stick

Reboot your computer with the USB stick plugged in, then enter the
**boot menu**. The key depends on the manufacturer:

| Manufacturer | Boot menu key |
|---|---|
| Dell | F12 |
| HP | F9 or Esc |
| Lenovo | F12 (or Fn+F12) |
| ASUS | F8 or Esc |
| Acer | F12 |
| MSI | F11 |
| Apple (Intel Mac) | hold Option/Alt at chime |
| Generic / unknown | F2 / F10 / Del → BIOS, set USB as first boot |

Pick the USB stick from the list. AXEM-SX will boot into a menu —
choose **"Boot AXEM-SX live"** (the default).

!!! note "Secure Boot"

    AXEM-SX is signed and works under Secure Boot on most modern
    machines. If your system refuses to boot the USB, try disabling
    Secure Boot in BIOS as a quick test. We'll help you re-enable it
    after installation.

---

## Step 4 — Log in

The live system boots straight to the login screen.

| Field | Value |
|---|---|
| Username | `axem` |
| Password | `axem` |

That's it. You're in.

---

## Step 5 — Look around

Take twenty minutes. Try these:

- :material-application: Open the **Application Launcher** (bottom-left
  corner) and browse the menu. Notice what's there — and what isn't.
- :material-tune: Open the **AXEM-SX Control Hub** from the launcher.
  This is your daily admin surface.
- :material-folder-open: Open **Files** and look at the home folder
  layout.
- :material-web: Open **Firefox** and confirm internet works.
- :material-terminal: Open **Konsole** and try `neofetch` to see what
  you're running on.

Nothing you do in the live session will persist after a reboot. It's
safe to explore, click around, and break things.

---

## What's next

If AXEM-SX feels right, **install it**:

- [Installation Guide](../installation/index.md) — partitioning, dual-boot,
  full disk, encryption.
- [Your First Hour](first-hour.md) — what to do once you're on the
  installed system.

If AXEM-SX isn't for you — that's fine too. Eject the USB and we wish
you well. The Linux ecosystem is wide, and choice is the point.

---

## See also

- **[Welcome to AXEM-SX](welcome.md)** — what AXEM-SX is and isn't.
- **[The Civic Charter](../civic/charter.md)** — why we built it.
- **[Editions](../editions/index.md)** — Pro, Light, and Gold compared.
- **[Your First Hour](first-hour.md)** — the next 60 minutes after install.
- [openSUSE Leap downloads](https://get.opensuse.org/leap/) — upstream Leap ISOs, for reference.
- [Balena Etcher](https://www.balena.io/etcher) — the recommended USB-flashing tool.
