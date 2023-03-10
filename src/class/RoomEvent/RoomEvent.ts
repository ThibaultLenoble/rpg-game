import Choice from "../Choice/Choice";

export default class RoomEvent {
  type: string = 'Room';
  inputContext: string;
  outputContext?: string;
  choices: Choice[] = [];

  constructor(
    inputContext: string,
    outputContext?: string,
    choices?: Choice[]
  ) {
    this.inputContext = inputContext;

    if (outputContext) {
      this.outputContext = outputContext;
    }

    if (choices) {
      this.choices = choices
    }
  }

  getInputContext(): string {
    return this.inputContext;
  }

  getOutputContext(): string|undefined {
    return this.outputContext ?? '';
  }

  getChoices(): Choice[] {
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

  setChoices(choices: Choice[]): void {
    this.choices = choices;
  }

  getChoice(index: number) {
    return this.choices[index]
  }

  isChoiceExist(index: number) {
    return this.choices[index] !== undefined
  }
}
