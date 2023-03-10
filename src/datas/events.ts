import RoomEvent from "../class/RoomEvent/RoomEvent";
import {dataChoices} from "./choices";
import EnigmaEvent from "../class/RoomEvent/EnigmaEvent";
import MainEvent from "../class/RoomEvent/MainEvent";
import ExchangeEvent from "../class/RoomEvent/ExchangeEvent";

export const dataEvents: { mainEvents: MainEvent[], available: RoomEvent[] } = {
  mainEvents: [
    new MainEvent(
      "Aller à la salle suivante ?",
      "",
      [dataChoices.MainEvent[0]]
    ),
    new MainEvent(
      "Scénario de base",
      "",
      [dataChoices.MainEvent[0]]
    ),
  ],
  available: [
    new EnigmaEvent(
      'Vous arrivez dans une salle et vous voyez plusieurs coffre',
      ''
    ),
    new ExchangeEvent(
      'Vous arrivez dans une salle et un marchand vous accueille.',
      ''
    )
  ]
};