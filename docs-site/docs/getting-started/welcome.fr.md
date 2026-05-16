---
title: Bienvenue sur AXEM-SX
description: >-
  Une introduction à AXEM-SX — ce que c'est, à qui cela s'adresse, et
  ce qui la distingue des autres distributions Linux.
---

# Bienvenue sur AXEM-SX

AXEM-SX est une **distribution Linux axée sur la souveraineté** basée
sur [openSUSE Leap 16.0](https://get.opensuse.org/leap/). Elle est
construite et maintenue par [Golda-Global Inc.](https://golda.global),
une société de logiciels civiques.

**Temps de lecture :** ~5 minutes.

Cette page est la porte d'entrée. Si vous ne lisez rien d'autre, lisez
ceci.

---

## Ce qu'est AXEM-SX

Un système d'exploitation pour poste de travail conçu autour de trois
principes silencieux :

1. **Votre machine vous répond, à vous.** L'administration de votre
   ordinateur reste sur votre ordinateur. Le Control Hub, YaST et
   Cockpit fonctionnent tous localement — pas de compte cloud, pas de
   console distante, pas d'envoi à la maison.
2. **Délibéré plutôt que par défaut.** Chaque paquet, chaque entrée
   de menu, chaque réglage par défaut a été choisi exprès. Ce qui
   distrait a été retiré. Ce qui compte a été mis en avant.
3. **Calme, civique, durable.** AXEM-SX est faite pour durer. Le
   langage visuel est sobre (« Bois et Or »). Le rythme des sorties
   est patient. L'infrastructure est indépendante.

Ce n'est pas une curiosité de niche. Elle utilise le même noyau, le
même gestionnaire de paquets (`zypper`), et le même écosystème
`rpm` que tout autre système openSUSE Leap. Les connaissances SUSE
standards s'appliquent. Les paquets standards de l'openSUSE Build
Service (OBS) s'installent. Ce qui diffère, c'est ce que **nous avons
choisi** — et ce que nous avons choisi de laisser de côté.

---

## À qui cela s'adresse

| Vous êtes... | AXEM-SX vous convient parce que... |
|---|---|
| **Un utilisateur Linux fatigué du brassage** | La base est openSUSE Leap. Stable, lente, prévisible. Pas de mises à jour rolling surprises. |
| **Un opérateur de petite entreprise** | Administration locale. Pas de verrouillage SaaS. Vos données restent sur des disques que vous pouvez tenir en main. |
| **Un créateur, technique ou non** | Soft Depot met les outils curés en avant. L'installation en une commande (`axem-sx-pro-full`) vous donne une station de travail créative complète en une ligne. |
| **Un sauveteur de matériel ancien** | L'édition Light tourne correctement sur du matériel x86_64-v2 de la dernière décennie — sans vous harceler avec des abonnements. |
| **Soucieux de votre vie privée** | Pas de télémétrie. Pas de ping analytique. Pas de bascules « améliorer votre expérience » à chercher et désactiver. |
| **Bilingue (FR/EN)** | Prise en charge française de premier plan dans tout le système et cette documentation. |

Ce n'est **pas** pour vous si vous voulez :

- Une rolling release de pointe. Utilisez plutôt [openSUSE Tumbleweed](https://get.opensuse.org/tumbleweed/).
- Une expérience GNOME-only fortement personnalisée. AXEM-SX utilise KDE Plasma par défaut ; GNOME et LXQt sont disponibles, mais c'est sur Plasma que se trouve le poli.
- Un déploiement géré en entreprise avec politique centrale. AXEM-SX s'adresse à l'opérateur qui *est* la politique.

---

## Ce que vous obtenez d'emblée

La version actuelle est **AXEM-SX 1.0.1 (Nom de code : Gold)**,
disponible en trois éditions :

| Édition | Pour | Bureau par défaut | Taille ISO légère |
|---|---|---|---|
| **Pro** | Poste de travail, créateur, développeur | KDE Plasma | ~2,4 Go |
| **Light** | Matériel ancien, travail concentré | LXQt | ~1,6 Go |
| **Gold** | Build de référence, pile curée complète | KDE Plasma | ~2,6 Go |

Chaque ISO est livrée **légère**. Une fois installée, une commande
unique tire l'ensemble curé complet de l'édition :

```bash
sudo zypper install axem-sx-pro-full     # pour Pro
sudo zypper install axem-sx-light-full   # pour Light
sudo zypper install axem-sx-gold-full    # pour Gold
```

Lisez [L'expérience complète en une commande](one-command.md) pour
savoir ce que chaque méta-paquet apporte.

---

## Ce qui distingue AXEM-SX — trois choses

### 1. Le AXEM-SX Control Hub

Une application native d'administration en Qt6 qui fait le pont entre
votre environnement de bureau (KDE, LXQt, GNOME) et le système
sous-jacent. C'est la première surface que voit un nouvel utilisateur.
Il ne remplace ni YaST ni Cockpit ; il se place **au-dessus** d'eux,
mettant en avant les contrôles quotidiens et pointant vers les outils
plus profonds quand ils sont nécessaires. Lisez le [guide du Control
Hub](../daily-use/index.md) dans Au quotidien.

### 2. Gestionnaire d'instantanés de bureau *(v0.9 — précoce)*

Un module du Control Hub qui vous permet de **passer d'un environnement
de bureau à l'autre** sans perdre vos données, votre identité, ni vos
paquets installés. KDE aujourd'hui, GNOME demain, LXQt pour une session
rapide sur le vieux portable. Une seule AXEM-SX, plusieurs visages.

### 3. Boh-IO *(en attente, de retour)*

Un assistant IA local qui tourne sur votre machine, contre vos
sessions terminal, sans qu'aucune donnée ne quitte la boîte. Boh-IO
est actuellement une expérience TUI silencieuse pendant que nous
affinons le modèle et la documentation. Il reviendra au premier plan
quand il sera prêt à mener.

---

## Voir aussi

- **[Le Guide d'essai](try-guide.md)** — démarrer AXEM-SX depuis une clé USB en 15 minutes.
- **[Votre première heure](first-hour.md)** — quoi faire une fois installé.
- **[L'expérience complète en une commande](one-command.md)** — passer d'une installation légère à un poste complet.
- **[La Charte civique](../civic/charter.md)** — la philosophie, en une page.
- **[Éditions](../editions/index.md)** — Pro, Light et Gold comparées.
- [Page du projet openSUSE Leap](https://get.opensuse.org/leap/) — la base amont sur laquelle nous construisons.

---

Bienvenue à bord.
