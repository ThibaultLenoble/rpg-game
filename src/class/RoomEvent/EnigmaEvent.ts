import RoomEvent from "./RoomEvent";
import Choice from "../Choice/Choice";

export default class EnigmaEvent extends RoomEvent {
  type: string = "EnigmaEvent";
  image?: string = "https://i.postimg.cc/hPb06HNY/golden-chest.webp";

  constructor(
    inputContext: string,
    outputContext?: string,
    choices?: Choice[],
    image?: string
  ) {
    super(inputContext, outputContext, choices, image);

    if (outputContext) {
      this.outputContext = outputContext;
    } else {
      this.outputContext = "";
    }
  }
}
