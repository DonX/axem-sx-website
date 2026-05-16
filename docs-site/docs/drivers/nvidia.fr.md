---
title: Configuration NVIDIA
description: >-
  Installer le pilote propriétaire NVIDIA sur AXEM-SX, proprement et
  sans surprises. Wayland et X11 couverts.
---

# Configuration NVIDIA

Le pilote propriétaire NVIDIA est nécessaire pour l'accélération
matérielle sur la plupart des GPU NVIDIA. AXEM-SX rend cela direct.

**Temps nécessaire :** environ 10 minutes (plus un redémarrage).
**Il vous faudra :** une connexion internet et un accès root.

!!! note "En cours de rédaction"

    La procédure complète est en cours de rédaction et de test sur
    des cartes GeForce, Quadro et RTX récentes. La version courte
    ci-dessous couvre le chemin openSUSE Leap standard, qui fonctionne
    sur AXEM-SX sans modification.

## La version courte (dépôt fourni par NVIDIA)

```bash
# Ajouter le dépôt openSUSE de NVIDIA
sudo zypper addrepo --refresh \
  https://download.nvidia.com/opensuse/leap/16.0 NVIDIA

# Rafraîchir les dépôts (accepter la clé GPG si demandée)
sudo zypper refresh

# Installer le bundle recommandé pour votre génération de GPU
sudo zypper install-new-recommends --repo NVIDIA
```

Redémarrez. Vérifiez avec :

```bash
nvidia-smi
```

Vous devriez voir votre GPU listé. Si oui, c'est terminé.

## Wayland vs X11

Sur Plasma 6 avec un pilote NVIDIA récent, **Wayland fonctionne**.
Sur du matériel plus ancien ou des pilotes plus anciens, la session
X11 est plus fiable. Les deux sessions sont disponibles à l'écran de
connexion SDDM — choisissez celle qui marche pour vous et tenez-vous-y.

## Ce que la version longue couvrira

- Choisir entre les branches G06, G05 et G04 selon la génération du GPU
- Portables hybrides (Intel + NVIDIA) et PRIME render offload
- Désactiver proprement le pilote libre `nouveau`
- Récupérer d'un écran noir après l'installation
- Désinstaller la pile NVIDIA et revenir à nouveau

---

## Voir aussi

- **[Pilotes et matériel](index.md)** — index de la section pilotes.
- **[Récupération après une mise à jour ratée](../snapshots/bad-update.md)** — votre filet de sécurité si l'installation tourne mal.
- **[Dépôts tiers](../software/third-party-repos.md)** — comment le dépôt NVIDIA s'inscrit avec Packman et OBS.
- [openSUSE : SDB:NVIDIA drivers](https://en.opensuse.org/SDB:NVIDIA_drivers) — la référence amont, plus approfondie que cette page.
- [Dépôt openSUSE de NVIDIA](https://download.nvidia.com/opensuse/leap/) — la source que nous ajoutons directement.
