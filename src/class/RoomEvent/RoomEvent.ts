import ChoiceInterface from "../Choice/ChoiceInterface";

class RoomEvent {
  type: string = 'Room';
  inputContext: string;
  outputContext: string;
  choices: ChoiceInterface[] = [];

  constructor(
    inputContext: string,
    outputContext: string,
    choices?: ChoiceInterface[]
  ) {
    this.inputContext = inputContext;
    this.outputContext = outputContext;

    if (choices) {
      this.choices = choices
    }
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
      if (choice !== undefined) {
        labels += `${index + 1} - ${choice.label} \n`;
      }
    });
    return labels;
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

  getChoice(index: number) {
    return this.choices[index]
  }

  isChoiceExist(index: number) {
    return this.choices[index] !== undefined
  }
}

export default RoomEvent;
