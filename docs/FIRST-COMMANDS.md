# AXEM-SX 1.0.1 — First Commands After Install

Drop-in snippet for the website and the README.
The shipped ISO is intentionally slim. One command pulls the full curated experience.

---

## The one command

**Pro (KDE Plasma 6 / Wayland)**
```bash
sudo zypper refresh
sudo zypper install axem-sx-pro-full
```

**Light (LXQt / Wayland)**
```bash
sudo zypper refresh
sudo zypper install axem-sx-light-full
```

**Gold (GNOME 48 / Wayland)** — *coming soon*
```bash
sudo zypper refresh
sudo zypper install axem-sx-gold-full
```

That's it. You now have LibreOffice, Inkscape, VLC, multimedia codecs,
Flatpak with Flathub, and the guided third-party installer.

---

## Optional next steps

**Install proprietary apps (Spotify, Discord, VS Code, Anti-Gravity)**
```bash
axem-sx-install-thirdparty
```
Whiptail menu. Pick what you want. No surprises.

**Full multimedia codec coverage (Packman vendor swap)**
```bash
sudo /usr/bin/axem-sx-codecs-upgrade-to-packman
```
Enables H.265, AAC encode, and the rest. One-time switch.

**Routine system updates**
```bash
sudo zypper update
```
Standard openSUSE Leap 16.0 maintenance flow. Always safe.

---

## What you get

| Bundle              | Pulls                                                                     |
|---------------------|---------------------------------------------------------------------------|
| `axem-sx-repos`     | The AXEM-SX OBS repo (enabled) + Packman repo (disabled, opt-in)          |
| `axem-sx-codecs`    | gstreamer-{good,bad,ugly,libav}, ffmpeg-7, vlc                            |
| `axem-sx-apps-common` | LibreOffice, Inkscape, VLC, kcalc, Spectacle, KolourPaint, Flatpak, dev/archive utilities |
| `axem-sx-thirdparty-helper` | The `axem-sx-install-thirdparty` whiptail menu                    |

Each `*-full` package is a wrapper. Uninstalling it does not remove the apps.
You stay in control.
