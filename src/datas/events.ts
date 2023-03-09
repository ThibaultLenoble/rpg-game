import RoomEvent from "../class/RoomEvent/RoomEvent";
import { dataChoices } from "./choices";

export const event1: RoomEvent = new RoomEvent(
  "choice",
  "Vous êtes dans une salle, vous pouvez choisir de partir en direction de la salle suivante ou de rester dans cette salle",
  "Vous vous déplacez",
  [dataChoices[0], dataChoices[0]]
);
