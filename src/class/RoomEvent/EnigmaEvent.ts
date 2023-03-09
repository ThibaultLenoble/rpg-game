import RoomEvent from "./RoomEvent";
import ChoiceInterface from "../Choice/ChoiceInterface";

export default class EnigmaEvent extends RoomEvent {
  constructor(inputContext: string, outputContext: string, choices?: ChoiceInterface[]) {
    super(inputContext, outputContext, choices);
  }
}