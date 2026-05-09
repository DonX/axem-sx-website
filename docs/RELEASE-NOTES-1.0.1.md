# AXEM-SX 1.0.1 — Release Notes

**Release date:** May 2026
**Codename:** Gold
**Base:** 100% binary-compatible with openSUSE Leap 16.0

---

## Headline

AXEM-SX 1.0.1 introduces the **one-command full experience**.
The ISO stays slim. The full curated stack — apps, codecs, third-party
helpers — is one `zypper` line away, on your terms.

---

## What's new across the board

- **Repo plumbing fixed** — `${releasever}` now expands cleanly to `16.0`,
  so every repo on the system resolves on first boot. No more half-broken
  refresh cycles.
- **`axem-release` 1.0.1** — corrected `os-release` identity and zypper
  release-version override.
- **New meta-package family**: `axem-sx-repos`, `axem-sx-codecs`,
  `axem-sx-apps-common`, `axem-sx-thirdparty-helper`.
- **One-command edition wrappers**: `axem-sx-pro-full`,
  `axem-sx-light-full`, `axem-sx-gold-full`.
- **Updated branding pass** on Plymouth, SDDM, and wallpapers.

---

## AXEM-SX Pro 1.0.1 — *KDE Plasma 6 / Wayland*

The flagship. Plasma 6 with AXEM dark + gold identity, Wayland session,
Qt6 SDDM login, and the full AXEM component suite.

**To enable the full curated experience after install:**
```bash
sudo zypper refresh
sudo zypper install axem-sx-pro-full
```

Pulls LibreOffice, Inkscape, VLC, multimedia codecs, Flatpak, Discover's
Flatpak backend, and the guided third-party installer.

**Known cosmetic note** — Trash and Home icons may appear on the desktop
after first login (Plasma containment / pcmanfm-qt artifact). Right-click
and remove them; AXEM Pro routes Trash through the top panel by design.

---

## AXEM-SX Light 1.0.1 — *LXQt / Wayland*

Lean, fast, full-featured. LXQt 2 on Wayland with `axem-panel` as the
primary shell and `axem-sx-dock` enabled by default.

**To enable the full curated experience after install:**
```bash
sudo zypper refresh
sudo zypper install axem-sx-light-full
```

Same curated stack as Pro, sized for older or lower-power hardware.

---

## AXEM-SX Gold — *Teaser*

GNOME 48 on Wayland, AXEM dark + gold identity, the AXEM Control Hub,
Soft-Depot and Console — and **nothing else fighting GNOME**.
No custom dock, no custom panel. GNOME Shell IS the experience.

**Coming soon.** When the ISO ships:
```bash
sudo zypper install axem-sx-gold-full
```

---

## Going further — make it yours

The `*-full` package is just a starting set. From there, the system is
yours:

**Install proprietary apps via the guided menu**
```bash
axem-sx-install-thirdparty
```
Spotify, Discord, VS Code (via Flathub), Anti-Gravity (via OBS).

**Full multimedia codec coverage (H.265, AAC encode, etc.)**
```bash
sudo /usr/bin/axem-sx-codecs-upgrade-to-packman
```
One-time vendor swap to Packman. Optional.

**Browse and install anything from Flathub**
```bash
flatpak install flathub <app-id>
```
Flathub is pre-configured as a system remote on the full install.

**Standard system maintenance**
```bash
sudo zypper update
```
Always safe. Always Leap-compatible.

---

## Compatibility

- **Base**: openSUSE Leap 16.0
- **Architecture**: x86_64
- **Firmware**: UEFI (tested on HP Z640) and legacy BIOS
- **Filesystem**: Btrfs root with snapshots
- **Live user**: `axem` / password `axem`

Every package in the AXEM-SX repository is built against Leap 16.0 OSS
and resolves cleanly with `zypper update`. Your AXEM-SX install is a
real openSUSE Leap install with curated identity on top.

---

## Credits

Built on the shoulders of openSUSE Leap, KDE, LXQt, GNOME, the Open
Build Service, and the Packman team. AXEM-SX is what happens when you
take a great base and put a deliberate face on it.

— *The AXEM-SX team*
