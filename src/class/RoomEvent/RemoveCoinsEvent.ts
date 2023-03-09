import RoomEvent from "./RoomEvent";
import ChoiceInterface from "../Choice/ChoiceInterface";

export default class RemoveCoinsEvent extends RoomEvent {
  coinsToRemove: number;

  constructor(
    inputContext: string,
    outputContext: string,
    coinsToRemove: number,
    choices?: ChoiceInterface[]
  ) {
    super(inputContext, outputContext, choices);
    this.coinsToRemove = coinsToRemove;
  }
}
