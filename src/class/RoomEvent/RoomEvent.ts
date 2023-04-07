import Choice from "../Choice/Choice";

export default class RoomEvent {
  type: string = 'Room';
  inputContext: string;
  outputContext?: string;
  choices: Choice[] = [];
  image?: string;

  constructor(
    inputContext: string,
    outputContext?: string,
    choices?: Choice[],
    image?: string,
  ) {
    this.inputContext = inputContext;

    if (outputContext) {
      this.outputContext = outputContext;
    }

    if (choices) {
      this.choices = choices
    }

    if (image) {
      this.image = image
    }
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
}
