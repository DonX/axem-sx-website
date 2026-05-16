---
title: Le Guide d'essai
description: >-
  Cinq étapes pour passer de « je veux essayer AXEM-SX » à un système
  live qui tourne. Aucune installation requise.
---

# Le Guide d'essai

Cinq étapes pour passer de curieux à connecté. Vous ne changerez rien
sur votre machine actuelle — c'est une session **live** qui tourne
entièrement depuis une clé USB.

**Temps requis :** environ 15 minutes.
**Il vous faut :** une clé USB (8 Go ou plus) et un ordinateur capable
de démarrer depuis un USB.

---

## Étape 1 — Téléchargez une ISO

Allez sur **[axem-sx.com/downloads](https://axem-sx.com/downloads)** et
choisissez une édition :

| Édition | Choisissez celle-ci si... |
|---|---|
| **Pro** | Vous voulez un poste de travail moderne. KDE Plasma, pile créative complète. |
| **Light** | Votre machine est ancienne ou vous voulez quelque chose de plus calme. LXQt, plus léger. |
| **Gold** | Vous voulez le build de référence — ce que nous utilisons sur nos propres bureaux. |

Chaque téléchargement est une **ISO légère** (~1,6 à ~2,6 Go).
L'ensemble logiciel curé complet est tiré *après* l'installation par
une commande unique. La session live que vous allez démarrer paraîtra
déjà complète.

!!! tip "Vérifiez le téléchargement"

    Chaque ISO est publiée avec une somme de contrôle SHA-256. Nous
    recommandons fortement de vérifier avant de flasher. La page
    Téléchargements affiche le hash attendu à côté de chaque fichier.

    ```bash
    sha256sum axem-sx-pro-1.0.1.iso
    ```

---

## Étape 2 — Écrivez l'ISO sur une clé USB

L'outil de flashage dépend du système d'exploitation sur lequel vous
êtes en ce moment.

=== "Linux"

    Utilisez **GNOME Disks** (`gnome-disks`), **KDE ISO Image Writer**,
    ou la ligne de commande :

    ```bash
    # Remplacez /dev/sdX par le chemin du périphérique de votre clé USB.
    # Vérifiez trois fois avec `lsblk` d'abord. Le mauvais chemin
    # effacera le mauvais disque.
    sudo dd if=axem-sx-pro-1.0.1.iso of=/dev/sdX bs=4M status=progress conv=fsync
    ```

=== "macOS"

    Utilisez **balenaEtcher** ([balena.io/etcher](https://www.balena.io/etcher/))
    — c'est le chemin le plus doux. Glissez l'ISO, choisissez la clé
    USB, confirmez.

=== "Windows"

    Utilisez **Rufus** ([rufus.ie](https://rufus.ie/)) ou
    **balenaEtcher**. Pour Rufus, choisissez le mode **DD Image**
    quand on vous le demande.

!!! warning "Cela efface la clé USB"

    Tout ce qui se trouvait sur la clé USB avant aura disparu.
    Déplacez d'abord ce qui compte ailleurs.

---

## Étape 3 — Démarrez depuis la clé USB

Redémarrez votre ordinateur avec la clé USB branchée, puis entrez dans
le **menu de démarrage**. La touche dépend du fabricant :

| Fabricant | Touche menu de démarrage |
|---|---|
| Dell | F12 |
| HP | F9 ou Échap |
| Lenovo | F12 (ou Fn+F12) |
| ASUS | F8 ou Échap |
| Acer | F12 |
| MSI | F11 |
| Apple (Mac Intel) | maintenir Option/Alt au son |
| Générique / inconnu | F2 / F10 / Suppr → BIOS, mettre USB en premier |

Choisissez la clé USB dans la liste. AXEM-SX démarre dans un menu —
choisissez **« Boot AXEM-SX live »** (le défaut).

!!! note "Secure Boot"

    AXEM-SX est signée et fonctionne avec Secure Boot sur la plupart
    des machines récentes. Si votre système refuse de démarrer
    depuis l'USB, essayez de désactiver Secure Boot dans le BIOS comme
    test rapide. Nous vous aiderons à le réactiver après l'installation.

---

## Étape 4 — Connectez-vous

Le système live démarre directement à l'écran de connexion.

| Champ | Valeur |
|---|---|
| Nom d'utilisateur | `axem` |
| Mot de passe | `axem` |

Voilà. Vous êtes dedans.

---

## Étape 5 — Faites le tour

Prenez vingt minutes. Essayez ceci :

- :material-application: Ouvrez le **Lanceur d'applications** (coin
  inférieur gauche) et parcourez le menu. Notez ce qui s'y trouve —
  et ce qui n'y est pas.
- :material-tune: Ouvrez le **AXEM-SX Control Hub** depuis le lanceur.
  C'est votre surface d'administration quotidienne.
- :material-folder-open: Ouvrez **Fichiers** et regardez la
  disposition du dossier personnel.
- :material-web: Ouvrez **Firefox** et confirmez que l'internet
  fonctionne.
- :material-terminal: Ouvrez **Konsole** et lancez `neofetch` pour
  voir sur quoi vous tournez.

Rien de ce que vous ferez en session live ne persistera après un
redémarrage. Vous pouvez explorer, cliquer, et casser des choses sans
risque.

---

## La suite

Si AXEM-SX vous convient, **installez-la** :

- [Guide d'installation](../installation/index.md) — partitionnement,
  double démarrage, disque entier, chiffrement.
- [Votre première heure](first-hour.md) — quoi faire une fois sur le
  système installé.

Si AXEM-SX n'est pas pour vous — c'est très bien aussi. Éjectez l'USB
et nous vous souhaitons bonne route. L'écosystème Linux est large, et
le choix est précisément le sujet.

---

## Voir aussi

- **[Bienvenue sur AXEM-SX](welcome.md)** — ce qu'est et n'est pas AXEM-SX.
- **[La Charte civique](../civic/charter.md)** — pourquoi nous l'avons construit.
- **[Éditions](../editions/index.md)** — Pro, Light et Gold comparées.
- **[Votre première heure](first-hour.md)** — les 60 minutes après l'installation.
- [Téléchargements openSUSE Leap](https://get.opensuse.org/leap/) — les ISO Leap amont, pour référence.
- [Balena Etcher](https://www.balena.io/etcher) — l'outil de flash USB recommandé.
