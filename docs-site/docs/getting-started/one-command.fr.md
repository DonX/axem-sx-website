---
title: L'expérience complète en une commande
description: >-
  Comment une installation légère d'AXEM-SX devient une station de
  travail entièrement curée en une seule commande zypper — et ce que
  cette commande tire vraiment.
---

# L'expérience complète en une commande

Chaque ISO AXEM-SX est livrée **légère** — uniquement l'essentiel
nécessaire pour démarrer, installer et atteindre le réseau.
L'expérience complète curée est à une commande de distance après
l'installation.

**Temps de lecture :** ~4 minutes.

## La commande

Choisissez le méta-paquet correspondant à votre édition :

```bash
sudo zypper install axem-sx-pro-full     # Pro    — poste de travail, créateur, développeur
sudo zypper install axem-sx-light-full   # Light  — matériel ancien, travail concentré
sudo zypper install axem-sx-gold-full    # Gold   — build de référence, pile curée complète
```

C'est tout. zypper résout le graphe de dépendances et tire l'ensemble
curé — applications, codecs, polices, thèmes et modules du Control
Hub — pour cette édition.

!!! tip "Lancez ceci une fois, puis oubliez-le"

    Le méta-paquet s'installe une seule fois. Les mises à jour
    futures passent normalement par `sudo zypper update`. Pas besoin
    de relancer l'installation `-full` à moins d'avoir retiré le
    méta-paquet.

## Ce que chaque méta-paquet apporte

!!! note "En cours de rédaction"

    Le manifeste complet par édition vivra ici, ventilé par catégorie
    — productivité, création, développement, codecs, polices. En
    attendant, voyez les [notes de version
    1.0.1](https://axem-sx.org/release-notes) sur le site web pour le
    résumé général.

## Pourquoi des ISO légères, au juste ?

Trois raisons :

1. **Téléchargements plus rapides.** Une ISO de 2,4 Go est plus
   amicale qu'une de 6 Go, surtout sur des connexions modestes.
2. **Logiciels plus frais.** Ce que `-full` tire, c'est ce que
   contiennent les dépôts *aujourd'hui*, pas ce qui était à jour
   quand l'ISO a été construite.
3. **Choix de niveau.** Vous pouvez installer l'ISO Pro et tirer le
   méta-paquet Light si vous changez d'avis, ou vice versa.

---

## Voir aussi

- **[Éditions](../editions/index.md)** — ce que Pro, Light et Gold incluent chacune.
- **[Votre première heure](first-hour.md)** — où cette commande s'inscrit dans le flux post-installation.
- **[L'univers Zypper](../software/zypper-universe.md)** — comment `zypper install` fonctionne vraiment.
- **[Commandes quotidiennes](../software/daily-commands.md)** — les one-liners zypper que vous taperez plus tard.
- [openSUSE Build Service](https://build.opensuse.org/) — où les méta-paquets AXEM-SX sont construits et hébergés.
