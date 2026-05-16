---
title: Your First Hour
description: >-
  What to do during the first hour after installing AXEM-SX — login,
  the desktop, the Control Hub, and the one command that fills it all in.
---

# Your First Hour

You just installed AXEM-SX. The system rebooted. You logged in. Now what?

This page is the next sixty minutes — opinionated, deliberate, and
short on philosophy.

**Time required:** about 60 minutes (15 minutes of reading, 45 of doing).
**You'll need:** an installed AXEM-SX system and a working internet connection.

!!! note "Work in progress"

    The detailed walkthrough is being written. Until then, the
    short version below covers the essential first steps. Read
    [Welcome to AXEM-SX](welcome.md) and [The One-Command Full
    Experience](one-command.md) for the surrounding context.

## The short version

1. **Log in** with the credentials you set during installation.
2. **Open the AXEM-SX Control Hub** from the application launcher.
   This is your daily admin surface — confirm your hostname, time
   zone, and Wi-Fi.
3. **Check for updates:**

    ```bash
    sudo zypper refresh && sudo zypper update
    ```

4. **Pull in the full curated set:**

    ```bash
    sudo zypper install axem-sx-pro-full
    ```

    Replace `pro` with `light` or `gold` to match your edition. See
    [The One-Command Full Experience](one-command.md) for what each
    meta-package brings.

5. **Reboot once** to settle the kernel and any new firmware.
6. **Open the [Civic Charter](../civic/charter.md)** and read it. One
   page. It tells you what the system you just installed believes.

## The long version

*Coming soon. This will walk through the Control Hub tour, the Soft
Depot first run, the Snapshot Manager introduction, and a calm
explanation of what's pinned to the panel and why.*

---

## See also

- **[The Try Guide](try-guide.md)** — boot from a USB stick before installing.
- **[The One-Command Full Experience](one-command.md)** — what `axem-sx-*-full` brings in.
- **[The Civic Charter](../civic/charter.md)** — what the system you just installed believes.
- **[Daily Use](../daily-use/index.md)** — the AXEM-SX Dock, Control Hub, and Soft Depot.
- **[Recovering from a Bad Update](../snapshots/bad-update.md)** — the safety net, before you need it.
