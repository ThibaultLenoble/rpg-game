import Choice from "../class/Choice/Choice";
import ExchangeChoice from "../class/Choice/ExchangeChoice";
import SimpleChoice from "../class/Choice/SimpleChoice";

export const dataChoices: {
  MainEvent: Choice[];
  EnigmaEvent: SimpleChoice[];
  ExchangeEvent: ExchangeChoice[];
} = {
  MainEvent: [
    new Choice("Partir en direction de la salle suivante", "get-out"),
    new Choice(
      "Rester dans cette salle",
      "Vous avez choisi de rester dans cette salle"
    ),
    new Choice("ne rien faire", "nothing"),
  ],
  EnigmaEvent: [
    new SimpleChoice("Ouvrir le coffre", "chest-heal"),
    new SimpleChoice("Ouvrir le coffre", "chest-hit"),
    new SimpleChoice("Ouvrir le coffre", "chest-earn-money"),
    new SimpleChoice(
      "Ouvrir le coffre avec la clé posée au sol juste à côté",
      "chest-hit"
    ),
    new SimpleChoice(
      "Donner un coup de pied dans le coffre en espérant qu'il s'ouvre",
      "chest-earn-money"
    ),
  ],
  ExchangeEvent: [
    new ExchangeChoice(
      "Echanger avec un marchand",
      "exchange",
      {
        type: "hit",
        amount: 10,
      },
      {
        type: "get-coin",
        amount: 100,
      }
    ),
    new ExchangeChoice(
      "Echanger avec un marchand",
      "exchange",
      {
        type: "give-coin",
        amount: 200,
      },
      {
        type: "heal",
        amount: 30,
      }
    ),
  ],
};
