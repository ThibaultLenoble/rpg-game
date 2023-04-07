import { getRandomEvent } from "./EventGenerator";
import RoomEvent from "../class/RoomEvent/RoomEvent";

export const baseScenario: string = "Base";

export const changeEvent = (event?: RoomEvent, render?: Render) => {
  if (!event) {
    event = getRandomEvent();
  }

  event.outputContext = event.outputContext ?? "";

  render.displayMessage(".prompt__error", "");
  render.displayMessage(
    ".prompt__description",
    event.outputContext +
      "\n \n" +
      event.inputContext +
      "\n \n" +
      event.displayAllChoices()
  );

  if (event.image) render.displayMessage(".context img", event.image);

  return event;
};
