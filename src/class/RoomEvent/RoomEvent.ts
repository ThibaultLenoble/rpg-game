import ChoiceInterface from "../Choice/ChoiceInterface";
import RoomEventInterface from "./RoomEventInterface";

class RoomEvent implements RoomEventInterface {
  type: string;
  inputContext: string;
  outputContext: string;
  choices: ChoiceInterface[];

  constructor(
    type: string,
    inputContext: string,
    outputContext: string,
    choices: ChoiceInterface[]
  ) {
    this.type = type;
    this.inputContext = inputContext;
    this.outputContext = outputContext;
    this.choices = choices;
  }

  getType(): string {
    return this.type;
  }

  getInputContext(): string {
    return this.inputContext;
  }

  getOutputContext(): string {
    return this.outputContext;
  }

  getChoices(): ChoiceInterface[] {
    return this.choices;
  }

  displayAllChoices(): string {
    let labels = "";
    this.choices.forEach((choice, index) => {
      labels += `${index + 1} - ${choice.label} \n`;
    });
    return labels;
  }

  setType(type: string): void {
    this.type = type;
  }

  setInputContext(inputContext: string): void {
    this.inputContext = inputContext;
  }

  setOutputContext(outputContext: string): void {
    this.outputContext = outputContext;
  }

  setChoices(choices: ChoiceInterface[]): void {
    this.choices = choices;
  }
}

export default RoomEvent;
