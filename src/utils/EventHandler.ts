import {getRandomEvent} from "./EventGenerator";
import RoomEvent from "../class/RoomEvent/RoomEvent";

export const baseScenario: string = 'Base';

export const changeEvent = (event?: RoomEvent) => {
  if (!event) {
    event = getRandomEvent();
  }

  event.outputContext = event.outputContext ?? '';

  document.querySelector<HTMLDivElement>(".prompt__error")!.innerHTML = ''

  document.querySelector<HTMLDivElement>(".prompt__description")!.innerHTML =
    event.outputContext  + '\n' + event.inputContext + '\n' + event.displayAllChoices();

  return event

};
