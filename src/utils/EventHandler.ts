import RoomEvent from "../class/RoomEvent/RoomEvent";

export const changeEvent = (event: RoomEvent) => {

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
