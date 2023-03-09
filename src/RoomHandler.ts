import ChoiceInterface from "./class/Choice/ChoiceInterface";
import RoomEvent from "./class/RoomEvent/RoomEvent";
import { dataChoices } from "./datas/choices";

export const changeRoom = (choices?: ChoiceInterface[]) => {
  if (choices) {
    const actualRoom = new RoomEvent(
      "enigma",
      "Vous êtes dans une salle, vous pouvez choisir de partir en direction de la salle suivante ou de rester dans cette salle",
      "Vous avez choisi de partir en direction de la salle suivante",
      choices
    );

    document.querySelector<HTMLDivElement>("#app")!.innerHTML =
      actualRoom.displayAllChoices();
  } else {
    const actualRoom = new RoomEvent(
      "enigma",
      "Vous êtes dans une salle, vous pouvez choisir de partir en direction de la salle suivante ou de rester dans cette salle",
      "Vous avez choisi de partir en direction de la salle suivante",
      dataChoices
    );
    document.querySelector<HTMLDivElement>("#app")!.innerHTML =
      actualRoom.displayAllChoices();
  }
};
