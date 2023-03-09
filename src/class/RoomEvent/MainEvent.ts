import RoomEvent from "./RoomEvent";
import ChoiceInterface from "../Choice/ChoiceInterface";

export default class MainEvent extends RoomEvent {
  type: string;

  constructor(
    inputContext: string,
    outputContext: string,
    choices?: ChoiceInterface[]
  ) {
    super(inputContext, outputContext, choices);
    this.type = "Main";
  }
}
