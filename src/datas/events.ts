import RoomEvent from "../class/RoomEvent/RoomEvent";
import { dataChoices } from "./choices";
import EnigmaEvent from "../class/RoomEvent/EnigmaEvent";

export const dataEvents: RoomEvent[] = [
  new EnigmaEvent(
    "Vous êtes dans une salle, vous pouvez choisir de partir en direction de la salle suivante ou de rester dans cette salle",
    "Vous vous déplacez",
    [dataChoices[0], dataChoices[1]]
  ),
  new EnigmaEvent("Je suis un énigme", "Vous vous creusez la tête", [
    dataChoices[0],
    dataChoices[1],
  ]),
  new EnigmaEvent(
    "Je suis un énigme super stylée",
    "Vous vous creusez la tête",
    [dataChoices[0], dataChoices[1]]
  ),
  new EnigmaEvent(
    "Je suis un énigme méga stylée",
    "Vous vous creusez la tête",
    [dataChoices[0], dataChoices[1]]
  ),
  new EnigmaEvent(
    "Je suis un énigme assez stylée",
    "Vous vous creusez la tête",
    [dataChoices[0], dataChoices[1]]
  ),
  new EnigmaEvent(
    "Je suis un énigme plutot stylée",
    "Vous vous creusez la tête",
    [dataChoices[0], dataChoices[1]]
  ),
  new EnigmaEvent(
    "Je suis un énigme pas du tout stylée",
    "Vous vous creusez la tête",
    [dataChoices[0], dataChoices[1]]
  ),
  new EnigmaEvent(
    "Je suis un énigme un peu stylée",
    "Vous vous creusez la tête",
    [dataChoices[0], dataChoices[1]]
  ),
];
