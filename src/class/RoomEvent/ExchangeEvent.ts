import RoomEvent from "./RoomEvent";
import Choice from "../Choice/Choice";
import AppImages from "../../assets/image";

export default class ExchangeEvent extends RoomEvent {

  type: string = 'ExchangeEvent';
  image: string = AppImages.marchant;
  constructor(
    id: number,
    inputContext: string,
    outputContext?: string,
    choices?: Choice[],
    image?: string,
  ) {
    super(id, inputContext, 'ExchangeEvent', outputContext, choices, image);

    if (outputContext) {
      this.outputContext = outputContext;
    } else {
      this.outputContext = ''
    }
  }
}
