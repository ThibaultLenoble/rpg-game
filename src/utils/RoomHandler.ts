import ChoiceInterface from "../class/Choice/ChoiceInterface";
import { dataEvents } from "../datas/events";
import EnigmaEvent from "../class/RoomEvent/EnigmaEvent";

export const changeRoom = (choices?: ChoiceInterface[]) => {
  if (choices) {
    const actualRoom = new EnigmaEvent(
      "Vous êtes dans une salle, vous pouvez choisir de partir en direction de la salle suivante ou de rester dans cette salle",
      "Vous avez choisi de partir en direction de la salle suivante",
      choices
    );

    document.querySelector<HTMLDivElement>(".prompt__description")!.innerHTML =
      actualRoom.displayAllChoices();

    return actualRoom
  } else {
    const actualRoom = dataEvents[0];
    document.querySelector<HTMLDivElement>(".prompt__description")!.innerHTML =
      actualRoom.displayAllChoices();

    return actualRoom
  }
};
