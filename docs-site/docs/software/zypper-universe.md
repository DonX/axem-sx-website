---
title: The Zypper Universe
description: >-
  What zypper is, why it exists, and how it compares to apt and dnf —
  the package manager that sits at the heart of AXEM-SX.
---

# The Zypper Universe

If you've used Linux before, you know a package manager. You've typed
`apt install something` on Ubuntu, or `dnf install something` on
Fedora, and watched a familiar dance play out: download, resolve,
install, done.

On AXEM-SX, the same dance happens — but the conductor is named
**zypper**. Same anatomy, different bearing.

**Read time:** ~12 minutes.

This page is the door. It explains what zypper is, where it comes
from, and how it differs from what you may already know — without
pretending the differences are larger than they are.

---

## What zypper is

`zypper` is the command-line package manager for openSUSE Leap, SUSE
Linux Enterprise, and — by direct lineage — AXEM-SX. It speaks **RPM**
(the same package format used by Fedora and Red Hat) and is powered
underneath by a C++ library called **libzypp**, which is also what
drives the graphical YaST installer.

A package manager has three jobs:

1. **Find** software in trusted repositories.
2. **Install or remove** software while keeping the system consistent.
3. **Update** what's already there without breaking anything else.

Zypper does these three jobs. So does apt. So does dnf. The
differences are in vocabulary, defaults, and posture.

---

## The shape of a zypper command

Every zypper command follows the same calm pattern:

```
sudo zypper <verb> [options] <target>
```

A handful of verbs cover most of daily life. Each has a short alias
to save typing:

| Verb | Alias | What it does |
|---|---|---|
| `install` | `in` | Install one or more packages |
| `remove` | `rm` | Remove one or more packages |
| `search` | `se` | Search for a package by name or description |
| `info` | `if` | Show details about a package |
| `refresh` | `ref` | Refresh repository metadata |
| `update` | `up` | Update installed packages within the same release |
| `dist-upgrade` | `dup` | Upgrade across major versions or vendor changes |
| `patch` | — | Apply security and bugfix patches |
| `packages` | `pa` | List packages (installed, available, unneeded…) |
| `repos` | `lr` | List configured repositories |
| `addrepo` | `ar` | Add a repository |
| `removerepo` | `rr` | Remove a repository |

That's most of zypper. You can read the full manual with `man zypper`
or browse the [openSUSE Zypper usage page][zypper-usage].

[zypper-usage]: https://en.opensuse.org/SDB:Zypper_usage

---

## Side-by-side with apt and dnf

Here is the conversion table you'll probably want to bookmark. Every
row has been verified against the upstream documentation — no
guesses.

| What you want to do | Debian / Ubuntu (apt) | Fedora / RHEL (dnf) | AXEM-SX (zypper) |
|---|---|---|---|
| Refresh repo metadata | `sudo apt update` | `sudo dnf check-update` | `sudo zypper refresh` |
| Install a package | `sudo apt install foo` | `sudo dnf install foo` | `sudo zypper install foo` |
| Remove a package | `sudo apt remove foo` | `sudo dnf remove foo` | `sudo zypper remove foo` |
| Remove + clean orphan deps | `sudo apt autoremove foo` | `sudo dnf remove foo` (handles it) | `sudo zypper remove --clean-deps foo` |
| List orphan packages | `apt autoremove --dry-run` | `dnf repoquery --unneeded` | `zypper packages --unneeded` |
| Update installed packages | `sudo apt upgrade` | `sudo dnf upgrade` | `sudo zypper update` |
| Cross-version system upgrade | `sudo apt full-upgrade` | `sudo dnf system-upgrade` | `sudo zypper dist-upgrade` |
| Search for a package | `apt search foo` | `dnf search foo` | `zypper search foo` |
| Show package details | `apt show foo` | `dnf info foo` | `zypper info foo` |
| List installed packages | `apt list --installed` | `dnf list --installed` | `zypper search -i` |
| Add a third-party repo | `add-apt-repository …` | `dnf config-manager --add-repo …` | `sudo zypper addrepo URL alias` |
| List configured repos | `apt policy` | `dnf repolist` | `zypper repos` |
| Install a meta-group | `sudo apt install build-essential` | `sudo dnf groupinstall "Development Tools"` | `sudo zypper install -t pattern devel_basis` |

Two notes worth pinning to your wall:

- **Zypper does not have a one-shot `autoremove`.** It has
  `--clean-deps` (remove orphans *as you uninstall*) and
  `zypper packages --unneeded` (list orphans you already have). This
  is deliberate: zypper prefers you see the list before it acts. There
  is an open [feature request][autoremove-issue] to add a single
  command — track it if you care.
- **`sudo zypper refresh` is implicit before most operations** — but
  running it manually is harmless and gives you a clean baseline.

[autoremove-issue]: https://github.com/openSUSE/zypper/issues/116

---

## Patterns — zypper's most under-loved feature

In the Debian world, you install `build-essential` and a curated set
of compilers and headers comes with it. In the SUSE world, the same
idea is called a **pattern**, and you install it with `-t pattern`:

```bash
sudo zypper install -t pattern devel_basis
```

This single command brings in `gcc`, `gcc-c++`, `make`, `cmake`,
`autoconf`, `git`, and the related development headers. Other useful
patterns:

```bash
zypper search -t pattern        # list every available pattern
zypper info -t pattern devel_basis   # see what's in a pattern
```

There are patterns for KDE, GNOME, server roles, virtualization,
multimedia — dozens of them. They are how SUSE keeps complex
installations coherent. AXEM-SX uses its own pattern, `axem-sx`, to
declare the curated software set installed by the
[One-Command Full Experience](../getting-started/one-command.md).

---

## Vendor changes, and why they matter

Sometimes the package you want lives in a third-party repository —
**Packman** (for multimedia codecs), **NVIDIA**, or one of the many
**openSUSE Build Service (OBS)** community repos. When you install
from one of those, you may see a prompt like:

```
The following package is going to change vendor:
  ffmpeg  openSUSE  ->  Packman
Continue? [y/n/...]:
```

This is zypper being honest. It's telling you that the package will
no longer come from the official openSUSE repository, and that future
updates will follow the third-party vendor's release cadence — not
openSUSE's. **Vendor changes are not dangerous, but they are
deliberate.** Say yes when it's the version you want; say no if you
were not expecting it.

Once you've intentionally moved a package to Packman, you can keep
related packages on the same vendor with:

```bash
sudo zypper dist-upgrade --from packman --allow-vendor-change
```

This is the standard pattern for installing the full Packman codec
stack on openSUSE, [documented upstream][codecs-doc].

[codecs-doc]: https://en.opensuse.org/SDB:Installing_codecs_from_Packman_repositories

---

## `update` vs `dist-upgrade` vs `patch`

Three update verbs, three different jobs. Knowing which one to reach
for is most of the skill.

| Verb | Use it when... | What it does |
|---|---|---|
| `zypper patch` | You want only security and bugfix patches | Applies the patches your repos advertise; conservative |
| `zypper update` | You want the latest version of installed packages, same release | Standard daily/weekly update |
| `zypper dist-upgrade` | You're moving to a new openSUSE release, or you've added a repo that requires vendor changes | Will resolve vendor changes; can downgrade packages to match the target |

On AXEM-SX, our recommended cadence is `sudo zypper refresh && sudo
zypper update` once a week. Use `dist-upgrade` only when you mean it
— typically at a major release transition.

---

## Where zypper stops, and what comes next

Zypper handles software that lives in **RPM repositories**. That
covers everything in the openSUSE archive, NVIDIA's official repo,
Packman, and the thousands of community packages on OBS. It is
deliberately *not* responsible for:

- **Flatpak applications** — managed by the `flatpak` command. See
  [Flatpak on AXEM](flatpak.md).
- **AppImages** — standalone executables; no manager involved.
- **Containers** — managed by `podman` or `docker`.
- **Per-user installs** — `pipx`, `npm -g --prefix=…`, language
  toolchains.

The discipline is: **system software through zypper, sandboxed apps
through Flatpak, throwaway things in containers.** That separation
is what keeps an AXEM-SX system clean a year in.

For a longer take on which tool to reach for, see
[When to Use What](when-to-use-what.md).

---

## A few honest differences from apt

If you're arriving from a Debian-family distribution, four small
surprises are worth naming up front, so they don't trip you:

1. **Package names use `-devel`, not `-dev`.** Headers for the openSSL
   library are in `libopenssl-devel`, not `libssl-dev`.
2. **Service names are sometimes different.** What Ubuntu calls
   `apache2`, openSUSE calls `apache2` *and* `httpd`-flavored configs
   live in `/etc/apache2/`. Just check before you assume.
3. **The firewall is `firewalld`, not `ufw`.** It's been the openSUSE
   default since Leap 15.0, and it uses an `nftables` backend with a
   zone-based model. See the [openSUSE Firewalld page][firewalld].
4. **`zypper` is more verbose by default than apt.** It will tell you
   about recommended packages, vendor changes, and conflicts before
   committing. Read what it says. It's trying to help.

[firewalld]: https://en.opensuse.org/Firewalld

---

> Zypper is not a different language. It's the same conversation,
> conducted with a slightly different cadence. Once you learn the
> verbs and the patterns, the rest is rhythm.

---

## See also

- **[Daily Commands](daily-commands.md)** — the dozen zypper one-liners you'll actually type.
- **[Third-Party Repositories](third-party-repos.md)** — adding Packman, NVIDIA, and OBS community repos cleanly.
- **[Flatpak on AXEM](flatpak.md)** — for sandboxed third-party applications.
- **[Coming from Ubuntu or Debian](../getting-started/coming-from/ubuntu-debian.md)** — translation guide for arrivals from apt-land.
- **[When to Use What](when-to-use-what.md)** — zypper vs Flatpak vs containers vs nothing.
- [SDB:Zypper manual](https://en.opensuse.org/SDB:Zypper_manual) — long, dry, authoritative. Bookmark it.
- [SDB:Zypper usage](https://en.opensuse.org/SDB:Zypper_usage) — practical recipes from the upstream wiki.
- [openSUSE Build Service](https://build.opensuse.org/) — the community packaging platform.
