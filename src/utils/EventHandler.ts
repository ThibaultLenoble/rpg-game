import Render from "../class/Render/Render";
import RoomEvent from "../class/RoomEvent/RoomEvent";

export const changeEvent = (event: RoomEvent, render: Render) => {
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
