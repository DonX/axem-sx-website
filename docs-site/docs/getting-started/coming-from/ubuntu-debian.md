---
title: Coming from Ubuntu or Debian
description: >-
  A translation guide for users arriving from the apt world.
  Same anatomy, different bearing.
---

# Coming from Ubuntu or Debian

Welcome. If you've been on Ubuntu, Debian, Mint, Pop!_OS, or any
other apt-based distribution, almost everything you already know
transfers. The kernel is Linux, the shell is bash (or zsh), the
desktop is familiar, the files live where you expect them.

What changes is a small vocabulary. This page gives you the
translation table, the gotchas, and the new habits — without
pretending the move is harder than it is.

**Time to read:** about 10 minutes.
**Where to go after this:** [The Zypper Universe](../../software/zypper-universe.md)
for the deeper picture.

---

## The mental map

| Concept | Ubuntu / Debian | AXEM-SX (openSUSE Leap) |
|---|---|---|
| Package format | `.deb` | `.rpm` |
| Package manager | `apt`, `apt-get`, `dpkg` | `zypper`, `rpm` |
| Package library underneath | `libapt`, `dpkg` | `libzypp` |
| Graphical installer | Synaptic, Software Center | **YaST**, Discover, Soft Depot |
| Snapshot tool | Timeshift (third-party) | **Snapper** (built-in, Btrfs-native) |
| Filesystem default | ext4 | **Btrfs** for `/`, XFS for `/home` |
| Init system | systemd | systemd (identical) |
| Default firewall | `ufw` | `firewalld` |
| Default security framework | AppArmor | AppArmor (also SELinux available) |
| Repository community | PPAs (Launchpad) | **OBS** (openSUSE Build Service) |
| Third-party app store | Snap (default) + Flatpak | **Flatpak** (Snap is not used) |

Nothing on this table should alarm you. Btrfs and Snapper, in
particular, are an upgrade — they're the reason you can recover from
a bad update in under two minutes. See
[Recovering from a Bad Update](../../snapshots/bad-update.md).

---

## The command-line translation

You'll use most of these every week. Bookmark or print this table.

| What you want | apt | zypper |
|---|---|---|
| Update package lists | `sudo apt update` | `sudo zypper refresh` |
| Install a package | `sudo apt install foo` | `sudo zypper install foo` |
| Remove a package | `sudo apt remove foo` | `sudo zypper remove foo` |
| Remove + clean orphans | `sudo apt autoremove foo` | `sudo zypper remove --clean-deps foo` |
| List orphan packages | `apt autoremove --dry-run` | `zypper packages --unneeded` |
| Upgrade installed packages | `sudo apt upgrade` | `sudo zypper update` |
| Full system upgrade | `sudo apt full-upgrade` | `sudo zypper dist-upgrade` |
| Search | `apt search foo` | `zypper search foo` |
| Show package info | `apt show foo` | `zypper info foo` |
| List installed packages | `apt list --installed` | `zypper search -i` |
| Show package origin | `apt policy foo` | `zypper info foo` (look at *Repository*) |
| Install build tools | `sudo apt install build-essential` | `sudo zypper install -t pattern devel_basis` |
| Add a third-party repo | `add-apt-repository ppa:...` | `sudo zypper addrepo URL alias` |
| List configured repos | `apt policy` | `zypper repos` |

Two short habits to learn:

- **`zypper remove --clean-deps`** is the closest thing to
  `apt autoremove foo` — it removes the package *and* any
  dependencies it brought in that nothing else uses. There is no
  single `zypper autoremove` command yet. See
  [The Zypper Universe](../../software/zypper-universe.md#side-by-side-with-apt-and-dnf)
  for why.
- **`-t pattern`** is the zypper way to install meta-packages.
  Patterns are how openSUSE groups related software (development
  tools, KDE, GNOME, server roles…). They're more powerful than apt's
  meta-packages once you get used to them.

---

## Package name differences

Most package names are identical or close. The pattern that catches
people most often:

| Debian / Ubuntu | openSUSE / AXEM-SX | Note |
|---|---|---|
| `libssl-dev` | `libopenssl-devel` | **`-dev`** becomes **`-devel`** |
| `python3-dev` | `python3-devel` | Same `-devel` rule |
| `build-essential` | `pattern:devel_basis` | Install with `-t pattern` |
| `apt-transport-https` | (built-in) | Not needed; zypper does HTTPS natively |
| `software-properties-common` | (built-in) | Repo management is in zypper |
| `ufw` | `firewalld` | Different firewall front-end |
| `chromium-browser` | `chromium` | Slightly shorter |
| `nodejs` + `npm` | `nodejs22` + `npm22` | Versioned names; choose your version |
| `docker.io` | `docker` | From the Containers module |

When in doubt, search:

```bash
zypper search keyword
zypper info package-name
```

`zypper search` looks at both names and descriptions, so a fuzzy
guess usually works.

---

## What replaces PPAs

On Ubuntu you'd add a PPA — a Launchpad-hosted personal repo — for
software not in the main archive. On AXEM-SX, the equivalent is the
**openSUSE Build Service (OBS)**: a much larger build farm, more
distros, the same purpose.

Two paths:

1. **The graphical way** — open [software.opensuse.org][sw-opensuse],
   search, click "Show experimental packages" if needed, then
   "1 Click Install". YaST handles the rest.
2. **The command line way** — `sudo zypper addrepo <URL> <alias>`,
   then `sudo zypper refresh`, then install normally.

A practical example — adding the Packman repository for codecs:

```bash
sudo zypper addrepo -cfp 90 \
  'https://ftp.gwdg.de/pub/linux/misc/packman/suse/openSUSE_Leap_$releasever/' \
  packman
sudo zypper refresh
```

[sw-opensuse]: https://software.opensuse.org/

The `$releasever` variable is expanded by zypper to your installed
openSUSE Leap version — leave it literal. Full walkthrough in
[Third-Party Repositories](../../software/third-party-repos.md) and
[Codecs & Multimedia](../../software/codecs.md).

---

## What replaces Snap

Ubuntu ships with Snap pre-installed and uses it for several core
applications. **AXEM-SX does not use Snap.** We use **Flatpak**
exclusively for sandboxed third-party applications.

Flatpak is straightforward and shipped in the openSUSE Leap
repositories:

```bash
sudo zypper install flatpak
flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
```

After adding Flathub, log out and back in (or reboot) to pick up the
new desktop integration paths. See [Flatpak on AXEM](../../software/flatpak.md).

If you have a `.snap` package you depended on, the same software is
almost always available as a Flatpak on [flathub.org][flathub] — and
it sandboxes more aggressively than Snap does.

[flathub]: https://flathub.org/

---

## The firewall, briefly

If you reached for `ufw` on Ubuntu, the equivalent on AXEM-SX is
`firewalld`. It's been the openSUSE default since Leap 15.0 and is
already running by default.

Three commands cover most situations:

```bash
# Check status
sudo firewall-cmd --state

# See active zones and what's open
sudo firewall-cmd --list-all

# Open a port (e.g. for a development server)
sudo firewall-cmd --add-port=8080/tcp --permanent
sudo firewall-cmd --reload
```

YaST has a graphical front-end too — search for "Firewall" in the
Application Launcher. The full reference is the
[openSUSE Firewalld page][firewalld].

[firewalld]: https://en.opensuse.org/Firewalld

---

## Snapshots — the new safety net

This is the biggest *gain* coming from Ubuntu. AXEM-SX uses **Btrfs**
on the root filesystem, with **Snapper** taking automatic snapshots
before and after every `zypper` operation.

In practice this means:

- A bad update can be rolled back from the GRUB boot menu in one
  reboot.
- You can browse old configurations as a regular filesystem under
  `/.snapshots/`.
- You can compare any two snapshots with `snapper diff`.

You don't have to install Timeshift. You don't have to remember to
take snapshots. They happen quietly. See
[Snapshots & Recovery](../../snapshots/index.md) for the full story.

---

## A few habits to drop, a few to pick up

**Drop:**

- `sudo apt update && sudo apt upgrade` → use
  `sudo zypper refresh && sudo zypper update`.
- `add-apt-repository` → use `sudo zypper addrepo`.
- `apt-get install build-essential` → use
  `sudo zypper install -t pattern devel_basis`.
- Reaching for Timeshift after a bad update → reach for the GRUB
  menu and pick a snapshot.

**Pick up:**

- Reading what `zypper` prints. It will tell you about vendor
  changes, recommended packages, and conflicts. Each prompt has a
  reason.
- Using `zypper info` before installing — it shows the repository,
  vendor, and full description. Worth the half-second.
- Trusting Snapper. The first time you roll back from a botched
  update, you'll wonder why every distribution doesn't do this.

---

> The motor stays. The dress changes. Your muscle memory is mostly
> still good — just learn a few new verbs, and zypper will start to
> feel like home.

---

## See also

- **[The Zypper Universe](../../software/zypper-universe.md)** — the deeper conceptual page.
- **[Daily Commands](../../software/daily-commands.md)** — the dozen zypper invocations you'll actually type.
- **[Your First Hour](../first-hour.md)** — the curated walkthrough for any new AXEM-SX user.
- **[Make it Yours](../../make-it-yours/index.md)** — make AXEM look like the system you came from, if you want.
- **[Recovering from a Bad Update](../../snapshots/bad-update.md)** — the snapshot safety net you didn't have on Ubuntu.
- [SDB:Zypper manual](https://en.opensuse.org/SDB:Zypper_manual) — the upstream authoritative reference.
- [openSUSE Firewalld page](https://en.opensuse.org/Firewalld) — the `ufw` replacement, in depth.
- [Flathub openSUSE setup](https://flathub.org/setup/openSUSE) — Flatpak as a Snap replacement, official guide.
