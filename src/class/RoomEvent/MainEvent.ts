import RoomEvent from "./RoomEvent";
import Choice from "../Choice/Choice";
import AppImages from "../../assets/image";

export default class MainEvent extends RoomEvent {
  type = "MainEvent";
  image?: string = AppImages.archeologue;

  constructor(
    inputContext: string,
    outputContext?: string,
    choices?: Choice[],
    image?: string
  ) {
    super(inputContext, 'MainEvent', outputContext, choices, image);

    if (outputContext) {
      this.outputContext = outputContext;
    } else {
      this.outputContext = "";
    }
  }
}
