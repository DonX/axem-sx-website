---
title: Vous arrivez d'Ubuntu ou Debian
description: >-
  Un guide de traduction pour les utilisateurs venant du monde apt.
  Même anatomie, autre tenue.
---

# Vous arrivez d'Ubuntu ou Debian

Bienvenue. Si vous étiez sur Ubuntu, Debian, Mint, Pop!_OS ou toute
autre distribution basée sur apt, presque tout ce que vous savez
déjà se transpose. Le noyau est Linux, le shell est bash (ou zsh),
le bureau est familier, les fichiers vivent là où vous vous y
attendez.

Ce qui change, c'est un petit vocabulaire. Cette page vous donne le
tableau de traduction, les pièges et les nouvelles habitudes — sans
prétendre que la transition soit plus difficile qu'elle ne l'est.

**Temps de lecture :** environ 10 minutes.
**Où aller ensuite :** [L'univers Zypper](../../software/zypper-universe.md)
pour la vue d'ensemble.

---

## La carte mentale

| Concept | Ubuntu / Debian | AXEM-SX (openSUSE Leap) |
|---|---|---|
| Format de paquet | `.deb` | `.rpm` |
| Gestionnaire de paquets | `apt`, `apt-get`, `dpkg` | `zypper`, `rpm` |
| Bibliothèque sous-jacente | `libapt`, `dpkg` | `libzypp` |
| Installateur graphique | Synaptic, Software Center | **YaST**, Discover, Soft Depot |
| Outil d'instantanés | Timeshift (tiers) | **Snapper** (intégré, natif Btrfs) |
| Système de fichiers par défaut | ext4 | **Btrfs** pour `/`, XFS pour `/home` |
| Système d'init | systemd | systemd (identique) |
| Pare-feu par défaut | `ufw` | `firewalld` |
| Cadre de sécurité par défaut | AppArmor | AppArmor (SELinux aussi disponible) |
| Communauté de dépôts | PPA (Launchpad) | **OBS** (openSUSE Build Service) |
| Magasin d'apps tiers | Snap (par défaut) + Flatpak | **Flatpak** (Snap n'est pas utilisé) |

Rien dans ce tableau ne devrait vous inquiéter. Btrfs et Snapper, en
particulier, sont une amélioration — ce sont eux qui vous permettent
de récupérer d'une mauvaise mise à jour en moins de deux minutes.
Voir [Récupérer d'une mauvaise mise à jour](../../snapshots/bad-update.md).

---

## La traduction en ligne de commande

Vous utiliserez la plupart de ces commandes chaque semaine. Mettez
ce tableau en favori ou imprimez-le.

| Ce que vous voulez | apt | zypper |
|---|---|---|
| Mettre à jour les listes | `sudo apt update` | `sudo zypper refresh` |
| Installer un paquet | `sudo apt install foo` | `sudo zypper install foo` |
| Retirer un paquet | `sudo apt remove foo` | `sudo zypper remove foo` |
| Retirer + nettoyer les orphelins | `sudo apt autoremove foo` | `sudo zypper remove --clean-deps foo` |
| Lister les paquets orphelins | `apt autoremove --dry-run` | `zypper packages --unneeded` |
| Mettre à jour les paquets installés | `sudo apt upgrade` | `sudo zypper update` |
| Mise à niveau complète | `sudo apt full-upgrade` | `sudo zypper dist-upgrade` |
| Rechercher | `apt search foo` | `zypper search foo` |
| Afficher les détails d'un paquet | `apt show foo` | `zypper info foo` |
| Lister les paquets installés | `apt list --installed` | `zypper search -i` |
| Voir l'origine d'un paquet | `apt policy foo` | `zypper info foo` (champ *Repository*) |
| Installer les outils de compilation | `sudo apt install build-essential` | `sudo zypper install -t pattern devel_basis` |
| Ajouter un dépôt tiers | `add-apt-repository ppa:...` | `sudo zypper addrepo URL alias` |
| Lister les dépôts configurés | `apt policy` | `zypper repos` |

Deux courtes habitudes à acquérir :

- **`zypper remove --clean-deps`** est ce qui se rapproche le plus de
  `apt autoremove foo` — il retire le paquet *et* les dépendances
  qu'il a apportées et que rien d'autre n'utilise. Il n'existe pas
  encore de commande `zypper autoremove` unique. Voir
  [L'univers Zypper](../../software/zypper-universe.md#cote-a-cote-avec-apt-et-dnf)
  pour le pourquoi.
- **`-t pattern`** est la manière zypper d'installer des
  méta-paquets. Les patterns sont la façon dont openSUSE regroupe
  les logiciels apparentés (outils de développement, KDE, GNOME,
  rôles serveur…). Ils sont plus puissants que les méta-paquets apt
  une fois qu'on s'y habitue.

---

## Les différences de noms de paquets

La plupart des noms de paquets sont identiques ou proches. Le motif
qui surprend le plus souvent :

| Debian / Ubuntu | openSUSE / AXEM-SX | Note |
|---|---|---|
| `libssl-dev` | `libopenssl-devel` | **`-dev`** devient **`-devel`** |
| `python3-dev` | `python3-devel` | Même règle `-devel` |
| `build-essential` | `pattern:devel_basis` | À installer avec `-t pattern` |
| `apt-transport-https` | (intégré) | Inutile ; zypper gère HTTPS nativement |
| `software-properties-common` | (intégré) | La gestion des dépôts est dans zypper |
| `ufw` | `firewalld` | Front-end de pare-feu différent |
| `chromium-browser` | `chromium` | Légèrement plus court |
| `nodejs` + `npm` | `nodejs22` + `npm22` | Noms versionnés ; choisissez votre version |
| `docker.io` | `docker` | Depuis le module Containers |

En cas de doute, cherchez :

```bash
zypper search mot-clé
zypper info nom-du-paquet
```

`zypper search` regarde à la fois les noms et les descriptions, donc
une approximation suffit en général.

---

## Ce qui remplace les PPA

Sur Ubuntu, vous ajoutiez un PPA — un dépôt personnel hébergé sur
Launchpad — pour les logiciels absents de l'archive principale. Sur
AXEM-SX, l'équivalent est l'**openSUSE Build Service (OBS)** : une
ferme de compilation bien plus vaste, plus de distributions, le
même but.

Deux chemins :

1. **La voie graphique** — ouvrir [software.opensuse.org][sw-opensuse],
   chercher, cliquer sur « Show experimental packages » au besoin,
   puis « 1 Click Install ». YaST s'occupe du reste.
2. **La voie en ligne de commande** — `sudo zypper addrepo <URL>
   <alias>`, puis `sudo zypper refresh`, puis installer normalement.

Un exemple concret — ajouter le dépôt Packman pour les codecs :

```bash
sudo zypper addrepo -cfp 90 \
  'https://ftp.gwdg.de/pub/linux/misc/packman/suse/openSUSE_Leap_$releasever/' \
  packman
sudo zypper refresh
```

[sw-opensuse]: https://software.opensuse.org/

La variable `$releasever` est étendue par zypper à votre version
d'openSUSE Leap installée — laissez-la littérale. Procédure
complète dans [Dépôts tiers](../../software/third-party-repos.md) et
[Codecs et multimédia](../../software/codecs.md).

---

## Ce qui remplace Snap

Ubuntu livre Snap pré-installé et l'utilise pour plusieurs
applications fondamentales. **AXEM-SX n'utilise pas Snap.** Nous
utilisons exclusivement **Flatpak** pour les applications tierces
en bac à sable.

Flatpak est simple et livré dans les dépôts openSUSE Leap :

```bash
sudo zypper install flatpak
flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
```

Après avoir ajouté Flathub, déconnectez-vous puis reconnectez-vous
(ou redémarrez) pour que les chemins d'intégration de bureau soient
pris en compte. Voir [Flatpak sur AXEM](../../software/flatpak.md).

Si vous dépendiez d'un paquet `.snap`, le même logiciel est presque
toujours disponible en Flatpak sur [flathub.org][flathub] — et le
bac à sable y est plus strict que celui de Snap.

[flathub]: https://flathub.org/

---

## Le pare-feu, brièvement

Si vous utilisiez `ufw` sur Ubuntu, l'équivalent sur AXEM-SX est
`firewalld`. C'est la valeur par défaut d'openSUSE depuis Leap 15.0
et il est déjà en cours d'exécution par défaut.

Trois commandes couvrent la plupart des situations :

```bash
# Vérifier l'état
sudo firewall-cmd --state

# Voir les zones actives et ce qui est ouvert
sudo firewall-cmd --list-all

# Ouvrir un port (par exemple pour un serveur de développement)
sudo firewall-cmd --add-port=8080/tcp --permanent
sudo firewall-cmd --reload
```

YaST fournit aussi un front-end graphique — cherchez « Pare-feu »
dans le lanceur d'applications. La référence complète est la
[page Firewalld d'openSUSE][firewalld].

[firewalld]: https://en.opensuse.org/Firewalld

---

## Les instantanés — le nouveau filet de sécurité

C'est le plus grand *gain* en venant d'Ubuntu. AXEM-SX utilise
**Btrfs** sur le système de fichiers racine, avec **Snapper** qui
prend des instantanés automatiques avant et après chaque opération
`zypper`.

En pratique, cela signifie :

- Une mauvaise mise à jour peut être annulée depuis le menu de
  démarrage GRUB en un seul redémarrage.
- Vous pouvez parcourir d'anciennes configurations comme un système
  de fichiers normal sous `/.snapshots/`.
- Vous pouvez comparer deux instantanés avec `snapper diff`.

Vous n'avez pas à installer Timeshift. Vous n'avez pas à penser à
prendre des instantanés. Ils se font discrètement. Voir
[Instantanés et récupération](../../snapshots/index.md) pour le
récit complet.

---

## Quelques habitudes à perdre, quelques à acquérir

**Perdre :**

- `sudo apt update && sudo apt upgrade` → utiliser
  `sudo zypper refresh && sudo zypper update`.
- `add-apt-repository` → utiliser `sudo zypper addrepo`.
- `apt-get install build-essential` → utiliser
  `sudo zypper install -t pattern devel_basis`.
- Aller chercher Timeshift après une mauvaise mise à jour → aller
  au menu GRUB et choisir un instantané.

**Acquérir :**

- Lire ce que `zypper` affiche. Il vous parlera des changements de
  fournisseur, des paquets recommandés et des conflits. Chaque
  invite a une raison.
- Utiliser `zypper info` avant d'installer — il montre le dépôt, le
  fournisseur et la description complète. Cela vaut la demi-seconde.
- Faire confiance à Snapper. La première fois que vous récupérerez
  d'une mise à jour ratée, vous vous demanderez pourquoi toutes les
  distributions ne font pas pareil.

---

> Le moteur reste. La tenue change. Votre mémoire musculaire est
> en grande partie encore valable — apprenez juste quelques
> nouveaux verbes, et zypper commencera à se sentir comme à la
> maison.

---

## Voir aussi

- **[L'univers Zypper](../../software/zypper-universe.md)** — la page conceptuelle plus profonde.
- **[Commandes du quotidien](../../software/daily-commands.md)** — la dizaine d'invocations zypper que vous taperez vraiment.
- **[Votre première heure](../first-hour.md)** — la visite guidée pour tout nouvel utilisateur d'AXEM-SX.
- **[À votre image](../../make-it-yours/index.md)** — donner à AXEM l'allure du système d'où vous venez, si vous le souhaitez.
- **[Récupération après une mise à jour ratée](../../snapshots/bad-update.md)** — le filet de sécurité par instantanés que vous n'aviez pas sur Ubuntu.
- [SDB:Zypper manual](https://en.opensuse.org/SDB:Zypper_manual) — la référence amont faisant autorité.
- [Page openSUSE Firewalld](https://en.opensuse.org/Firewalld) — le remplaçant d'`ufw`, en détail.
- [Configuration Flathub openSUSE](https://flathub.org/setup/openSUSE) — Flatpak comme remplaçant de Snap, guide officiel.
