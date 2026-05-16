---
title: L'univers Zypper
description: >-
  Ce qu'est zypper, pourquoi il existe et comment il se compare à apt
  et dnf — le gestionnaire de paquets au cœur d'AXEM-SX.
---

# L'univers Zypper

Si vous avez déjà utilisé Linux, vous connaissez un gestionnaire de
paquets. Vous avez tapé `apt install quelquechose` sur Ubuntu, ou
`dnf install quelquechose` sur Fedora, et vu se dérouler une
chorégraphie familière : téléchargement, résolution, installation,
terminé.

Sur AXEM-SX, la même chorégraphie se déroule — mais le chef
d'orchestre s'appelle **zypper**. Même anatomie, autre tenue.

**Temps de lecture :** ~12 minutes.

Cette page est la porte d'entrée. Elle explique ce qu'est zypper,
d'où il vient, et en quoi il diffère de ce que vous connaissez peut-
être déjà — sans prétendre que les différences soient plus grandes
qu'elles ne le sont.

---

## Ce qu'est zypper

`zypper` est le gestionnaire de paquets en ligne de commande
d'openSUSE Leap, de SUSE Linux Enterprise et — par filiation directe
— d'AXEM-SX. Il parle le **RPM** (le même format de paquet que
Fedora et Red Hat) et repose sur une bibliothèque C++ appelée
**libzypp**, qui pilote également l'installateur graphique YaST.

Un gestionnaire de paquets a trois rôles :

1. **Trouver** des logiciels dans des dépôts de confiance.
2. **Installer ou retirer** des logiciels en gardant le système cohérent.
3. **Mettre à jour** ce qui est déjà là sans casser le reste.

Zypper remplit ces trois rôles. apt aussi. dnf aussi. Les
différences sont dans le vocabulaire, les valeurs par défaut et la
posture.

---

## La forme d'une commande zypper

Chaque commande zypper suit le même schéma calme :

```
sudo zypper <verbe> [options] <cible>
```

Une poignée de verbes couvre la plupart des usages quotidiens.
Chacun a un alias court pour éviter de trop taper :

| Verbe | Alias | Ce qu'il fait |
|---|---|---|
| `install` | `in` | Installer un ou plusieurs paquets |
| `remove` | `rm` | Retirer un ou plusieurs paquets |
| `search` | `se` | Rechercher un paquet par nom ou description |
| `info` | `if` | Afficher les détails d'un paquet |
| `refresh` | `ref` | Rafraîchir les métadonnées des dépôts |
| `update` | `up` | Mettre à jour les paquets installés dans la même version |
| `dist-upgrade` | `dup` | Monter de version majeure ou changer de fournisseur |
| `patch` | — | Appliquer les correctifs de sécurité et de bogues |
| `packages` | `pa` | Lister les paquets (installés, disponibles, inutiles…) |
| `repos` | `lr` | Lister les dépôts configurés |
| `addrepo` | `ar` | Ajouter un dépôt |
| `removerepo` | `rr` | Retirer un dépôt |

C'est l'essentiel de zypper. Le manuel complet se lit avec
`man zypper`, ou en consultant la [page d'usage Zypper d'openSUSE][zypper-usage].

[zypper-usage]: https://en.opensuse.org/SDB:Zypper_usage

---

## Côte à côte avec apt et dnf

Voici le tableau de correspondance que vous voudrez sans doute
mettre en favori. Chaque ligne a été vérifiée dans la documentation
amont — aucune supposition.

| Ce que vous voulez faire | Debian / Ubuntu (apt) | Fedora / RHEL (dnf) | AXEM-SX (zypper) |
|---|---|---|---|
| Rafraîchir les métadonnées | `sudo apt update` | `sudo dnf check-update` | `sudo zypper refresh` |
| Installer un paquet | `sudo apt install foo` | `sudo dnf install foo` | `sudo zypper install foo` |
| Retirer un paquet | `sudo apt remove foo` | `sudo dnf remove foo` | `sudo zypper remove foo` |
| Retirer + nettoyer les dépendances | `sudo apt autoremove foo` | `sudo dnf remove foo` (s'en charge) | `sudo zypper remove --clean-deps foo` |
| Lister les paquets orphelins | `apt autoremove --dry-run` | `dnf repoquery --unneeded` | `zypper packages --unneeded` |
| Mettre à jour les paquets installés | `sudo apt upgrade` | `sudo dnf upgrade` | `sudo zypper update` |
| Monter de version majeure | `sudo apt full-upgrade` | `sudo dnf system-upgrade` | `sudo zypper dist-upgrade` |
| Rechercher un paquet | `apt search foo` | `dnf search foo` | `zypper search foo` |
| Afficher les détails d'un paquet | `apt show foo` | `dnf info foo` | `zypper info foo` |
| Lister les paquets installés | `apt list --installed` | `dnf list --installed` | `zypper search -i` |
| Ajouter un dépôt tiers | `add-apt-repository …` | `dnf config-manager --add-repo …` | `sudo zypper addrepo URL alias` |
| Lister les dépôts configurés | `apt policy` | `dnf repolist` | `zypper repos` |
| Installer un méta-groupe | `sudo apt install build-essential` | `sudo dnf groupinstall "Development Tools"` | `sudo zypper install -t pattern devel_basis` |

Deux notes à garder sous la main :

- **Zypper n'a pas d'`autoremove` en une seule commande.** Il a
  `--clean-deps` (retirer les orphelins *au moment* de la
  désinstallation) et `zypper packages --unneeded` (lister les
  orphelins déjà présents). C'est délibéré : zypper préfère que vous
  voyiez la liste avant d'agir. Une [demande de fonctionnalité][autoremove-issue]
  existe pour ajouter une commande unique — suivez-la si elle vous
  intéresse.
- **`sudo zypper refresh` est implicite avant la plupart des
  opérations** — mais l'exécuter manuellement est sans risque et
  donne une base propre.

[autoremove-issue]: https://github.com/openSUSE/zypper/issues/116

---

## Les patterns — la fonctionnalité la plus sous-estimée de zypper

Dans le monde Debian, on installe `build-essential` et un ensemble
soigné de compilateurs et d'en-têtes arrive avec lui. Dans le monde
SUSE, la même idée s'appelle un **pattern**, et on l'installe avec
`-t pattern` :

```bash
sudo zypper install -t pattern devel_basis
```

Cette seule commande installe `gcc`, `gcc-c++`, `make`, `cmake`,
`autoconf`, `git` et les en-têtes de développement associés. Autres
patterns utiles :

```bash
zypper search -t pattern        # lister tous les patterns disponibles
zypper info -t pattern devel_basis   # voir ce que contient un pattern
```

Il existe des patterns pour KDE, GNOME, des rôles serveur, la
virtualisation, le multimédia — des dizaines. C'est ainsi que SUSE
garde des installations complexes cohérentes. AXEM-SX utilise son
propre pattern, `axem-sx`, pour déclarer l'ensemble logiciel curaté
installé par l'[Expérience Complète en Une Commande](../getting-started/one-command.md).

---

## Les changements de fournisseur, et pourquoi ils comptent

Parfois, le paquet que vous voulez vit dans un dépôt tiers —
**Packman** (pour les codecs multimédias), **NVIDIA**, ou l'un des
nombreux dépôts communautaires de l'**openSUSE Build Service (OBS)**.
Quand vous installez depuis l'un d'eux, vous pourrez voir une
invite comme :

```
The following package is going to change vendor:
  ffmpeg  openSUSE  ->  Packman
Continue? [y/n/...]:
```

C'est la franchise de zypper. Il vous dit que le paquet ne viendra
plus du dépôt officiel openSUSE, et que les mises à jour futures
suivront la cadence du fournisseur tiers — pas celle d'openSUSE.
**Un changement de fournisseur n'est pas dangereux, mais il est
délibéré.** Dites oui quand c'est la version voulue ; dites non si
vous ne l'attendiez pas.

Une fois un paquet déplacé volontairement vers Packman, vous pouvez
garder les paquets liés sur le même fournisseur avec :

```bash
sudo zypper dist-upgrade --from packman --allow-vendor-change
```

C'est le schéma standard pour installer la pile complète de codecs
Packman sur openSUSE, [documenté en amont][codecs-doc].

[codecs-doc]: https://en.opensuse.org/SDB:Installing_codecs_from_Packman_repositories

---

## `update` vs `dist-upgrade` vs `patch`

Trois verbes de mise à jour, trois rôles différents. Savoir lequel
choisir, c'est la moitié du métier.

| Verbe | À utiliser quand... | Ce qu'il fait |
|---|---|---|
| `zypper patch` | Vous voulez uniquement les correctifs de sécurité et de bogues | Applique les correctifs annoncés par les dépôts ; conservateur |
| `zypper update` | Vous voulez la dernière version des paquets installés, même version d'openSUSE | Mise à jour standard hebdomadaire |
| `zypper dist-upgrade` | Vous passez à une nouvelle version d'openSUSE, ou vous avez ajouté un dépôt qui demande des changements de fournisseur | Résout les changements de fournisseur ; peut rétrograder des paquets pour s'aligner sur la cible |

Sur AXEM-SX, notre cadence recommandée est `sudo zypper refresh &&
sudo zypper update` une fois par semaine. N'utilisez `dist-upgrade`
que si vous le voulez vraiment — typiquement lors d'une transition
de version majeure.

---

## Là où zypper s'arrête, et ce qui prend le relais

Zypper gère les logiciels qui vivent dans des **dépôts RPM**. Cela
couvre tout l'archive openSUSE, le dépôt officiel NVIDIA, Packman,
et les milliers de paquets communautaires d'OBS. Il n'est
délibérément *pas* responsable :

- **des applications Flatpak** — gérées par la commande `flatpak`.
  Voir [Flatpak sur AXEM](flatpak.md).
- **des AppImages** — exécutables autonomes ; aucun gestionnaire impliqué.
- **des conteneurs** — gérés par `podman` ou `docker`.
- **des installations par utilisateur** — `pipx`, `npm -g
  --prefix=…`, chaînes d'outils par langage.

La discipline est : **les logiciels système par zypper, les
applications en bac à sable par Flatpak, ce qui est jetable dans
des conteneurs.** Cette séparation est ce qui garde un système
AXEM-SX propre un an plus tard.

Pour aller plus loin sur l'outil à choisir, voir
[Quand utiliser quoi](when-to-use-what.md).

---

## Quelques différences honnêtes avec apt

Si vous arrivez d'une distribution de la famille Debian, quatre
petites surprises méritent d'être nommées dès le départ, pour
qu'elles ne vous fassent pas trébucher :

1. **Les noms de paquets utilisent `-devel`, pas `-dev`.** Les
   en-têtes pour la bibliothèque openSSL sont dans
   `libopenssl-devel`, pas `libssl-dev`.
2. **Les noms de services sont parfois différents.** Ce qu'Ubuntu
   appelle `apache2`, openSUSE l'appelle `apache2` *et* la
   configuration vit dans `/etc/apache2/` avec un agencement
   légèrement différent. Vérifiez avant de supposer.
3. **Le pare-feu est `firewalld`, pas `ufw`.** C'est la valeur par
   défaut d'openSUSE depuis Leap 15.0, et il utilise un moteur
   `nftables` avec un modèle par zones. Voir la
   [page Firewalld d'openSUSE][firewalld].
4. **`zypper` est plus bavard par défaut qu'apt.** Il vous parlera
   des paquets recommandés, des changements de fournisseur, et des
   conflits avant de valider. Lisez ce qu'il dit. Il essaie d'aider.

[firewalld]: https://en.opensuse.org/Firewalld

---

> Zypper n'est pas une autre langue. C'est la même conversation,
> menée avec une cadence un peu différente. Une fois les verbes et
> les patterns appris, le reste est du rythme.

---

## Voir aussi

- **[Commandes du quotidien](daily-commands.md)** — la dizaine de zypper que vous taperez vraiment.
- **[Dépôts tiers](third-party-repos.md)** — ajouter Packman, NVIDIA, et les dépôts communautaires d'OBS proprement.
- **[Flatpak sur AXEM](flatpak.md)** — pour les applications tierces en bac à sable.
- **[Vous arrivez d'Ubuntu ou Debian](../getting-started/coming-from/ubuntu-debian.md)** — guide de traduction pour les arrivants du monde apt.
- **[Quoi utiliser quand](when-to-use-what.md)** — zypper vs Flatpak vs conteneurs vs rien.
- [SDB:Zypper manual](https://en.opensuse.org/SDB:Zypper_manual) — long, sec, faisant autorité. Mettez-le en favori.
- [SDB:Zypper usage](https://en.opensuse.org/SDB:Zypper_usage) — recettes pratiques du wiki amont.
- [openSUSE Build Service](https://build.opensuse.org/) — la plateforme communautaire de packaging.
