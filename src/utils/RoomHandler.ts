import ChoiceInterface from "../class/Choice/ChoiceInterface";
import EnigmaEvent from "../class/RoomEvent/EnigmaEvent";
import {getRandomEvent} from "./EventGenerator";
import RoomEvent from "../class/RoomEvent/RoomEvent";

export const changeEvent = (event?: RoomEvent, choices?: ChoiceInterface[]) => {
  if (choices) {
    const actualRoom = new EnigmaEvent(
      "EnigmaEvent",
      "Vous êtes dans une salle, vous pouvez choisir de partir en direction de la salle suivante ou de rester dans cette salle",
      "Vous avez choisi de partir en direction de la salle suivante",
      choices
    );

    document.querySelector<HTMLDivElement>(".prompt__description")!.innerHTML =
      actualRoom.outputContext + '\n' + actualRoom.inputContext + '\n' + actualRoom.displayAllChoices();

    return actualRoom
  }

  if (event) {
    document.querySelector<HTMLDivElement>(".prompt__description")!.innerHTML =
      event.outputContext + '\n' + event.inputContext + '\n' + event.displayAllChoices();

    return event;
  }

  const actualRoom = getRandomEvent();
  document.querySelector<HTMLDivElement>(".prompt__description")!.innerHTML =
    actualRoom.outputContext + '\n' + actualRoom.inputContext + '\n' + actualRoom.displayAllChoices();

  return actualRoom

};
