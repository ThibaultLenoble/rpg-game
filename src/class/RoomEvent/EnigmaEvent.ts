import RoomEvent from "./RoomEvent";
import Choice from "../Choice/Choice";

export default class EnigmaEvent extends RoomEvent {

  type: string = 'EnigmaEvent';

  constructor(
    inputContext: string,
    outputContext?: string,
    choices?: Choice[]
  ) {
    super(inputContext, outputContext, choices);

    if (outputContext) {
      this.outputContext = outputContext;
    } else {
      this.outputContext = ''
    }
  }
}
