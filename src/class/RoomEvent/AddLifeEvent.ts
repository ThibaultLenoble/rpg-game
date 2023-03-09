import RoomEvent from "./RoomEvent";
import ChoiceInterface from "../Choice/ChoiceInterface";

export default class AddLifeEvent extends RoomEvent {
  pvToAdd: number;

  constructor(
    inputContext: string,
    outputContext: string,
    pvToAdd: number,
    choices?: ChoiceInterface[]
  ) {
    super(inputContext, outputContext, choices);
    this.pvToAdd = pvToAdd;
  }
}
