import RoomEvent from "../class/RoomEvent/RoomEvent";
import { dataChoices } from "./choices";
import EnigmaEvent from "../class/RoomEvent/EnigmaEvent";
import MainEvent from "../class/RoomEvent/MainEvent";

export const dataEvents: { mainEvents: MainEvent[]; available: RoomEvent[] } = {
  mainEvents: [
    new MainEvent("Aller à la salle suivante ?", "", [
      dataChoices.MainEvent[0],
    ]),
  ],
  available: [
    new EnigmaEvent(
      "Vous arrivez dans une salle et vous voyez plusieurs coffre",
      ""
    ),
    new EnigmaEvent(
      "Vous trouvez plusieurs malles en bois au centre de la pièce. Laquelle voulez-vous ouvrir ?",
      ""
    ),
    new EnigmaEvent(
      "Vous entrez dans une salle dont le sol est couvert de sable fin. Plusieurs urnes attirent votre attention. Quelle urne ouvrez-vous ?",
      ""
    ),
    new EnigmaEvent(
      "Vous entrez dans une salle dont le sol est couvert de poudre noire. Plusieurs urnes attirent votre attention. Quelle urne ouvrez-vous ?",
      ""
    ),
    new EnigmaEvent(
      "Vous entrez dans une salle dont le plafond est couvert de lait. Plusieurs urnes attirent votre attention. Quelle urne ouvrez-vous ?",
      ""
    ),
    new EnigmaEvent(
      "Vous êtes dans une pièce remplie d'armes anciennes et mystérieuses. Vous trouvez plusieurs boîtes sur une étagère en hauteur. Laquelle ouvrez-vous ?",
      ""
    ),
    new EnigmaEvent(
      "Vous entrez dans une grande salle avec un coffre doré au milieu. À côté, plusieurs coffres plus petits se trouvent. Lequel ouvrez-vous ?",
      ""
    ),
    new EnigmaEvent(
      "Vous arrivez dans une salle remplie de champignons étranges. Plusieurs coffres se trouvent dans la pièce. Lequel ouvrez-vous ?",
      ""
    ),
    new EnigmaEvent(
      "Vous arrivez dans une salle remplie de nains étranges. Plusieurs coffres se trouvent dans la pièce. Lequel ouvrez-vous ?",
      ""
    ),
    new EnigmaEvent(
      "Vous arrivez dans une salle remplie d'escargots. Plusieurs coffres se trouvent dans la pièce. Lequel ouvrez-vous ?",
      ""
    ),
    new EnigmaEvent(
      "Vous arrivez dans une salle remplie de lapins bleus. Plusieurs coffres se trouvent dans la pièce. Lequel ouvrez-vous ?",
      ""
    ),
    new EnigmaEvent(
      "Vous entrez dans une salle obscure. Vous discernez à peine un coffre sur votre gauche et une boîte en métal rouillé à votre droite. Que choisissez-vous ?",
      ""
    ),
    new EnigmaEvent(
      "Au détour d'un couloir, vous apercevez une lumière scintillante dans un coin de la pièce, quelques coffres sont entassés.",
      ""
    ),
  ],
};
