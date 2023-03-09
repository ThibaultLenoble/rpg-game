import Choice from "../class/Choice/Choice";
import ChoiceInterface from "../class/Choice/ChoiceInterface";
import ExchangeChoice from "../class/Choice/ExchangeChoice";
import SimpleChoice from "../class/Choice/SimpleChoice";

export const dataChoices: ChoiceInterface[] = [
  new Choice("Partir en direction de la salle suivante", "get-out"),
  new Choice(
    "Rester dans cette salle",
    "Vous avez choisi de rester dans cette salle"
  ),
  new ExchangeChoice("Echanger avec un autre joueur", "exchange"),
  new ExchangeChoice("Echanger avec un autre vendeur", "exchange"),
  new ExchangeChoice("Echanger avec un autre marchand", "exchange"),
  new ExchangeChoice("Echanger avec un autre magasinier", "exchange"),
  new SimpleChoice("Chier sur le sol", "simple"),
  new SimpleChoice("Dormir sur le lit", "simple"),
];
