import ChoiceInterface from "../Choice/ChoiceInterface";

export default interface RoomEventInterface {
  inputContext: string;
  outputContext: string;
  choices?: ChoiceInterface[];
}
