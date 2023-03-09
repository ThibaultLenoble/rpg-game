import ChoiceInterface from "../Choice/ChoiceInterface";

interface RoomEventInterface {
  type: string;
  inputContext: string;
  outputContext: string;
  choices: ChoiceInterface[];
}

export default RoomEventInterface;
