---
title: Récupération après une mise à jour ratée
description: >-
  Comment ramener AXEM-SX à un état connu et bon après une mise à jour
  qui a cassé quelque chose — avec snapper depuis une session en cours
  ou depuis GRUB.
---

# Récupération après une mise à jour ratée

AXEM-SX utilise **Btrfs** avec **snapper** configuré à l'installation.
Chaque transaction `zypper` crée automatiquement un instantané *pré* et
*post*. Ce qui signifie : **presque aucune mise à jour système n'est
vraiment fatale.** Vous pouvez revenir en arrière.

**Temps de lecture :** ~5 minutes.

Cette page est l'article de réassurance calme. Lisez-la avant d'en
avoir besoin.

## Si le système démarre encore

Ouvrez un terminal :

```bash
# Lister les instantanés récents
sudo snapper list

# Revenir au dernier instantané connu et bon (remplacez N par son numéro)
sudo snapper rollback N

# Redémarrer
sudo reboot
```

Après le redémarrage, le système est exactement comme à l'instantané
N. La transaction cassée est annulée.

## Si le système ne démarre plus

Au menu GRUB, choisissez **« Démarrer le chargeur depuis un instantané
en lecture seule »**. GRUB liste chaque instantané disponible.
Choisissez-en un d'avant la mauvaise mise à jour — généralement le
plus récent avec une date antérieure à votre dernier appel à `zypper`.

Le système démarre dans cet instantané. Une fois dedans :

```bash
sudo snapper rollback
sudo reboot
```

Cela promeut l'instantané que vous venez de démarrer comme nouveau
système courant.

!!! note "En cours de rédaction"

    Une version plus complète de cette page couvrira : les
    instantanés par `/home`, la création manuelle avant des
    changements risqués, l'élagage des instantanés GRUB, et la
    différence entre `snapper rollback` et `zypper rollback`.

## Ce que les instantanés couvrent, et ce qu'ils ne couvrent pas

| Couvert | Pas couvert |
|---|---|
| `/` (le système de fichiers racine) | `/home` (par défaut — config séparée) |
| Paquets installés | Disques externes |
| Configuration système dans `/etc` | Profils navigateur synchronisés vers un cloud |
| Changements de noyau et de chargeur de démarrage | Fichiers hors des sous-volumes Btrfs |

Pour les documents et données personnelles, il vous faut toujours une
vraie sauvegarde. Snapper est pour le *système*, pas votre travail.

---

## Voir aussi

- **[Instantanés et récupération](index.md)** — index de la section instantanés.
- **[L'univers Zypper](../software/zypper-universe.md)** — pourquoi `zypper` et snapper sont conçus pour travailler ensemble.
- **[Votre première heure](../getting-started/first-hour.md)** — à lire *avant* votre première grosse mise à jour.
- [openSUSE : Snapper](https://en.opensuse.org/Portal:Snapper) — le portail amont pour snapper.
- [Page de manuel snapper(8)](https://manpages.opensuse.org/Tumbleweed/snapper/snapper.8.en.html) — la référence complète des commandes.
