import RoomEvent from "../class/RoomEvent/RoomEvent";
import { dataChoices } from "./choices";
import EnigmaEvent from "../class/RoomEvent/EnigmaEvent";
import MainEvent from "../class/RoomEvent/MainEvent";
import ExchangeEvent from "../class/RoomEvent/ExchangeEvent";

export const dataEvents: { mainEvents: MainEvent[]; available: RoomEvent[] } = {
  mainEvents: [
    new MainEvent("Aller à la salle suivante ?", "", [
      dataChoices.MainEvent[0],
    ]),
    new MainEvent(
      "Douglas Ancelin, un archéologue intrépide, a découvert l'entrée d'un ancien château abandonné dans les sous-terrains de la ville. Il s'est mis en tête de découvrir les trésors cachés dans le château, mais il n'est jamais revenu de son exploration. Inquiète pour son ami, la Jambonneuse Justicière a décidé de partir à sa recherche. Elle s'est rapidement rendue compte que le château était infesté de créatures étranges et dangereuses, qui avaient sans doute été libérées par les fouilles de Douglas. Pour sauver son ami, la Jambonneuse Justicière doit parcourir les sombres couloirs du château, affronter des ennemis redoutables et résoudre des énigmes complexes. Heureusement, elle peut compter sur le Voleur de Moutons, qui s'est joint à sa quête.",
      "",
      [dataChoices.MainEvent[0]]
    ),
  ],
  available: [
    new EnigmaEvent(
      "Vous arrivez dans une salle et vous voyez plusieurs coffre",
      ""
    ),
    new ExchangeEvent(
      "Vous arrivez dans une salle et un marchand vous accueille.",
      ""
    ),
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
