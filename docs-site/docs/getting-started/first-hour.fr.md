---
title: Votre première heure
description: >-
  Que faire pendant la première heure après avoir installé AXEM-SX —
  connexion, bureau, Control Hub, et la commande unique qui remplit tout.
---

# Votre première heure

Vous venez d'installer AXEM-SX. Le système a redémarré. Vous vous êtes
connecté. Et maintenant ?

Cette page, c'est les soixante prochaines minutes — opinionées,
délibérées, et courtes en philosophie.

**Temps nécessaire :** environ 60 minutes (15 minutes de lecture, 45 de pratique).
**Il vous faudra :** un système AXEM-SX installé et une connexion internet.

!!! note "En cours de rédaction"

    Le guide détaillé est en cours d'écriture. En attendant, la
    version courte ci-dessous couvre les étapes essentielles. Lisez
    [Bienvenue sur AXEM-SX](welcome.md) et [L'expérience complète en
    une commande](one-command.md) pour le contexte.

## La version courte

1. **Connectez-vous** avec les identifiants que vous avez définis
   pendant l'installation.
2. **Ouvrez le AXEM-SX Control Hub** depuis le lanceur d'applications.
   C'est votre surface d'administration quotidienne — confirmez votre
   nom d'hôte, fuseau horaire, et Wi-Fi.
3. **Vérifiez les mises à jour :**

    ```bash
    sudo zypper refresh && sudo zypper update
    ```

4. **Tirez l'ensemble curé complet :**

    ```bash
    sudo zypper install axem-sx-pro-full
    ```

    Remplacez `pro` par `light` ou `gold` selon votre édition. Voir
    [L'expérience complète en une commande](one-command.md) pour ce
    que chaque méta-paquet apporte.

5. **Redémarrez une fois** pour stabiliser le noyau et tout firmware
   nouveau.
6. **Ouvrez la [Charte civique](../civic/charter.md)** et lisez-la.
   Une page. Elle vous dit ce en quoi croit le système que vous venez
   d'installer.

## La version longue

*Bientôt disponible. Elle couvrira la visite du Control Hub, le premier
lancement du Soft Depot, l'introduction au Gestionnaire d'instantanés,
et une explication calme de ce qui est épinglé au panneau et pourquoi.*

---

## Voir aussi

- **[Le Guide d'essai](try-guide.md)** — démarrer depuis une clé USB avant d'installer.
- **[L'expérience complète en une commande](one-command.md)** — ce que `axem-sx-*-full` apporte.
- **[La Charte civique](../civic/charter.md)** — ce en quoi croit le système que vous venez d'installer.
- **[Utilisation quotidienne](../daily-use/index.md)** — le AXEM-SX Dock, le Control Hub, et le Soft Depot.
- **[Récupération après une mise à jour ratée](../snapshots/bad-update.md)** — le filet de sécurité, avant d'en avoir besoin.
