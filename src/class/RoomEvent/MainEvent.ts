import RoomEvent from "./RoomEvent";
import Choice from "../Choice/Choice";

export default class MainEvent extends RoomEvent {

  type: string = 'MainEvent';
  image?: string = "https://i.postimg.cc/85FpQzq1/douglas-archeologue.png";

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
