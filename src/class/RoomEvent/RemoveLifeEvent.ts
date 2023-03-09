import RoomEvent from "./RoomEvent";
import ChoiceInterface from "../Choice/ChoiceInterface";

export default class RemoveLifeEvent extends RoomEvent {
  pvToRemove: number;

  constructor(
    inputContext: string,
    outputContext: string,
    pvToRemove: number,
    choices?: ChoiceInterface[]
  ) {
    super(inputContext, outputContext, choices);
    this.pvToRemove = pvToRemove;
  }
}
