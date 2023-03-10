import RoomEvent from "./RoomEvent";
import Choice from "../Choice/Choice";

export default class MainEvent extends RoomEvent {

  type: string = 'MainEvent';

  constructor(
    inputContext: string,
    outputContext: string,
    choices?: Choice[]
  ) {
    super(inputContext, outputContext, choices);
  }
}
