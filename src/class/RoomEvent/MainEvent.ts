import RoomEvent from "./RoomEvent";
import ChoiceInterface from "../Choice/ChoiceInterface";

export default class MainEvent extends RoomEvent {

  constructor(
    type: string,
    inputContext: string,
    outputContext: string,
    choices?: ChoiceInterface[]
  ) {
    super(type, inputContext, outputContext, choices);
  }
}
