import GameInstance from "../class/GameInstance/GameInstance";
import Player from "../class/Player/Player";
import RoomEvent from "../class/RoomEvent/RoomEvent";
import Choice from "../class/Choice/Choice";
import MainEvent from "../class/RoomEvent/MainEvent";
import Render from "../class/Render/Render";

export default class SaveManager {
  reader: FileReader = new FileReader();

  save(gameInstance: GameInstance) {
    let savedGameInstance = {
      "actualRoom" : gameInstance.actualRoom,
      "player" : gameInstance.player,
      "rooms" : gameInstance.rooms,
      "roomCount" : gameInstance.roomCount
    }

    const dataStr: string = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(savedGameInstance));
    let downloadLink: HTMLElement|null = document.getElementById('downloadLink');
    let date: Date = new Date();

    if (downloadLink) {
      downloadLink.setAttribute("href", dataStr);
      downloadLink.setAttribute("download", date.toLocaleDateString() + '-' + date.toLocaleTimeString().split(' ')[0] + ".json");
      downloadLink.click();
    }
  }

  // @ts-ignore
  async load(file: Blob, render: Render) {
    this.reader.readAsText(file)

    await new Promise<void>(resolve => this.reader.onload = () => resolve());
    let savedDatas = JSON.parse(<string>this.reader.result)

    let savedPlayer = new Player(savedDatas.player.name, render);
    savedPlayer.loadFromDatas(savedDatas.player)
    let player = savedPlayer

    if (player) {

      let gameInstance = new GameInstance(player, render);
      gameInstance.roomCount = savedDatas.roomCount

      let rooms: RoomEvent[] = []

      savedDatas.rooms.forEach((savedRoom: {
        choices: { label: string; action: string; }[];
        inputContext: string;
        outputContext: string | undefined;
        image: string | undefined;
      }) => {
        let choices: Choice[] = []
        savedRoom.choices.forEach((choice: { label: string; action: string; }) => {
          choices.push(new Choice(choice.label, choice.action))
        })
        let room = new MainEvent(savedRoom.inputContext, savedRoom.outputContext, choices, savedRoom.image)

        rooms.push(room)
      })

      gameInstance.rooms = rooms

      let choices: Choice[] = []
      savedDatas.actualRoom.choices.forEach((choice: { label: string; action: string; }) => {
        choices.push(new Choice(choice.label, choice.action))
      })

      gameInstance.actualRoom = new MainEvent(savedDatas.actualRoom.inputContext, savedDatas.actualRoom.outputContext, choices, savedDatas.actualRoom.image)

      return gameInstance
    }
  }
}