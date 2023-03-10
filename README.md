# RPG game

## Installation

```bash
# Installation des packages
yarn install # ou npm i
# Lancement du serveur de dev local
yarn dev # ou npm run dev
```

## Commandes utiles

```bash
# Lancer le vérificateur de code
yarn lint # ou npm run lint
```

Husky est également installé sur le projet

/!\ Pensez à vérifier que votre prettier de votre IDE soit correctement configuré pour la config prettier

## Le jeu

### Les règles

Le joueur doit créer son personnage. Pour cela, il doit choisir entre différentes classe
qui vont modifier ses statistiques de base ainsi que l'arme utilisée.

Après avoir créé son personnage, la partie commence. Le joueur passe de salle en salle en passant
divers évènements. Certaines salles contiennent des choix auquel le joueur sera
confronté et d'autres contiendront des combats contre des ennemis aléatoires. A la
fin de chaque évènement le joueur obtiendra des récompenses et pourra avancer à la salle suivante.

L'objectif est d'atteindre et de finir la dernière salle du donjon (normalement un boss).

### Les éléments indispensable

#### Le choix

Un choix minimum doit être fait sur le personnage, choix de perso, choix de classe,d’arme ou autres.
Ce choix doit affecter le personnage interprété par le joueur/la joueuse.

#### La boucle de gameplay

Le coeur du jeux, le personnage va répéter cette évènement tant qu’il n’est pas mort ou qu’il n’a pas gagner.
Vous êtes libre du déroulement d’une boucle, cependant au moins un click est demandé pour passer à la boucle suivante.

#### Conditions de fin de partie

A vous de les déterminer, mais un ou plusieurs évènements doivent entrainer la fin du jeux que cela soit une
victoire ou une défaite. Le game over doit être clair pour le joueur.

#### Obligation

- Ajouter du random (hasard) dans certaines logiques de jeu, une logique minimum
  (l’ordre des salles, du jets de dés, pile/face, dégâts...)
- Un scénario, dialogues, évènements, personnages... de bon goût et respectueux.
  Pas d’harcèlement à travers le scénario, on garde la décence habituelle,
  dans le respect des règles de l’école. On est entre adulte respectable.
- Respecter les 3 parties du jeu : choix de départ (peu importe lequel),
  traverser des salles (boucle de gameplay), fin du jeu (game over).
- Chaque membre du groupe doit créer une classe.

#### N'est pas noté

- l’esthétique et l’inté : le html5 sans css est accepté,
  une UI uniquement utilitaire estok, vous pourrez toujours revenir
  sur le projet plus tard pour créer un universcomplet.
- Vos capacités à imaginer un univers et le contenu,
  si c’est logique et sympathiquetant mieux, mais ça ne sera pas noté.

## Règles de développement

### Les branches

- master (La branche pour le rendu final)
- develop (où l'on mergera tout nos codes et effecturons les tests)
- release (Quand on développe une fonctionnalité)
- feat (Quand on développe une partie de fonctionnalité)
- fix (Quand on corrige une partie de fonctionnalité)

/!\ N'oubliez pas de nommer vos commit en fonction de ce que vous faite avec les préfix `feat:`, `fix:` (et faites en régulièrement)

### Les environnements

Vous avez accès à 3 environnements :

- Local (via ViteJs)
- Preprod (dès qu'une PR est mergée sur develop): [https://develop--dreamy-youtiao-3d2f75.netlify.app/](https://develop--dreamy-youtiao-3d2f75.netlify.app/)
- Prod (dès qu'une PR est mergée sur master):[https://dreamy-youtiao-3d2f75.netlify.app](https://dreamy-youtiao-3d2f75.netlify.app)

## Documentation

### Character

#### Attributes

#### Methods

### Event

#### Attributes

#### Methods

### Choice

#### Attributes

#### Methods