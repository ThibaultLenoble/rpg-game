import RoomEvent from "./RoomEvent";
import Choice from "../Choice/Choice";
import AppImages from "../../assets/image";

export default class MainEvent extends RoomEvent {

  type: string = 'MainEvent';
  image?: string = AppImages.archeologue;

  constructor(
    id: number,
    inputContext: string,
    outputContext?: string,
    choices?: Choice[],
    image?: string,
  ) {
    super(id, inputContext, 'MainEvent', outputContext, choices, image);

    if (outputContext) {
      this.outputContext = outputContext;
    } else {
      this.outputContext = ''
    }
  }
}
