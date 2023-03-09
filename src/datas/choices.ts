import Choice from "../class/Choice/Choice";
import ExchangeChoice from "../class/Choice/ExchangeChoice";
import SimpleChoice from "../class/Choice/SimpleChoice";

export const dataChoices: {MainEvent: Choice[], EnigmaEvent: SimpleChoice[], ExchangeEvent: ExchangeChoice[]} = {
  MainEvent: [
    new Choice("Partir en direction de la salle suivante", "get-out"),
    new Choice(
      "Rester dans cette salle",
      "Vous avez choisi de rester dans cette salle"
    ),
  ],
  EnigmaEvent: [
    new SimpleChoice("Ouvrir le coffre", "chest-heal"),
    new SimpleChoice("Ouvrir le coffre", "chest-hit"),
    new SimpleChoice("Ouvrir le coffre", "chest-earn-money"),
  ],
  ExchangeEvent: [
    new ExchangeChoice("Echanger avec un autre joueur", "exchange"),
    new ExchangeChoice("Echanger avec un autre vendeur", "exchange"),
    new ExchangeChoice("Echanger avec un autre marchand", "exchange"),
    new ExchangeChoice("Echanger avec un autre magasinier", "exchange"),
  ]
};
