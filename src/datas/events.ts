import RoomEvent from "../class/RoomEvent/RoomEvent";
import {dataChoices} from "./choices";
import EnigmaEvent from "../class/RoomEvent/EnigmaEvent";
import MainEvent from "../class/RoomEvent/MainEvent";

export const dataEvents: { mainEvents: MainEvent[], available: RoomEvent[] } = {
  mainEvents: [
    new MainEvent(
      "EnigmaEvent",
      "Aller à la salle suivante ?",
      "",
      [dataChoices.MainEvent[0]]
    ),
  ],
  available: [
    new EnigmaEvent(
      'EnigmaEvent',
      'Vous arrivez dans une salle et vous voyez plusieurs coffre',
      ''
    )
  ]
};