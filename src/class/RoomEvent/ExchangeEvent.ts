import RoomEvent from "./RoomEvent";
import Choice from "../Choice/Choice";

export default class ExchangeEvent extends RoomEvent {

  type: string = 'ExchangeEvent';
  image: string = "https://i.postimg.cc/YCFJQmQK/alexis-bezos.png";
  constructor(
    inputContext: string,
    outputContext?: string,
    choices?: Choice[],
    image?: string,
  ) {
    super(inputContext, outputContext, choices, image);

    if (outputContext) {
      this.outputContext = outputContext;
    } else {
      this.outputContext = ''
    }
  }
}
