import RoomEvent from "./RoomEvent";
import ChoiceInterface from "../Choice/ChoiceInterface";

export default class AddCoinsEvent extends RoomEvent {
  coinsToAdd: number;

  constructor(
    inputContext: string,
    outputContext: string,
    coinsToAdd: number,
    choices?: ChoiceInterface[]
  ) {
    super(inputContext, outputContext, choices);
    this.coinsToAdd = coinsToAdd;
  }
}
