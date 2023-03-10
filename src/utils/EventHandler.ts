import { getRandomEvent } from "./EventGenerator";
import RoomEvent from "../class/RoomEvent/RoomEvent";

export const baseScenario: string = "Base";

export const changeEvent = (event?: RoomEvent) => {
  if (!event) {
    event = getRandomEvent();
  }

  event.outputContext = event.outputContext ?? "";

  document.querySelector<HTMLDivElement>(".prompt__error")!.innerHTML = "";

  document.querySelector<HTMLDivElement>(".prompt__description")!.innerHTML =
    event.outputContext +
    "\n \n" +
    event.inputContext +
    "\n \n" +
    event.displayAllChoices();
    
  if (event.image)
    document.querySelector<HTMLImageElement>(".context img")!.src = event.image;

  return event;
};
