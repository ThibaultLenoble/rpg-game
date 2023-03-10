import RoomEvent from "../class/RoomEvent/RoomEvent";
import {dataChoices} from "./choices";
import EnigmaEvent from "../class/RoomEvent/EnigmaEvent";
import MainEvent from "../class/RoomEvent/MainEvent";

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
    )
  ]
};