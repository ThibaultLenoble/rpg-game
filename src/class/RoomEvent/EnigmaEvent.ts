import RoomEvent from "./RoomEvent";
import Choice from "../Choice/Choice";
import AppImages from "../../assets/image";

export default class EnigmaEvent extends RoomEvent {
  type: string = "EnigmaEvent";
  image?: string = AppImages.goldenChest;

  constructor(
    id: number,
    inputContext: string,
    outputContext?: string,
    choices?: Choice[],
    image?: string,
  ) {
    super(id, inputContext, 'EnigmaEvent', outputContext, choices, image);

    if (outputContext) {
      this.outputContext = outputContext;
    } else {
      this.outputContext = "";
    }
  }
}
