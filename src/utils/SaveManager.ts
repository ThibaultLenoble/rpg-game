import GameInstance from "../class/GameInstance/GameInstance";
import Player from "../class/Player/Player";
import RoomEvent from "../class/RoomEvent/RoomEvent";
import Choice from "../class/Choice/Choice";
import Render from "../class/Render/Render";
import ChoiceBuilder from "../class/Builder/ChoiceBuilder";
import EventBuilder from "../class/Builder/EventBuilder";

export default class SaveManager {
  reader: FileReader = new FileReader();
  eventBuilder: EventBuilder = new EventBuilder();
  choiceBuilder: ChoiceBuilder = new ChoiceBuilder();

  save(gameInstance: GameInstance) {
    let savedGameInstance = {
      "actualRoom" : {},
      "player" : gameInstance.player,
      "roomCount" : gameInstance.roomCount,
      "rooms": []
    }

    let actualRoomChoices: number[] = [];

    gameInstance.actualRoom?.choices.forEach(choice => {
      actualRoomChoices.push(choice.id)
    })

    savedGameInstance.actualRoom = {
      'id' : gameInstance.actualRoom?.id,
      'type': gameInstance.actualRoom?.type,
      'choices' : actualRoomChoices
    }

    gameInstance.rooms.forEach(room => {
      let roomChoices: number[] = [];

      room.choices.forEach(choice => {
        roomChoices.push(choice.id)
      })

      let tempRoom = {
        'id' : room.id,
        'type': room.type,
        'choices': roomChoices
      }

      // @ts-ignore
      savedGameInstance.rooms.push(tempRoom)
    })

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

      console.log(savedDatas)

      savedDatas.rooms.forEach((savedRoom: {
        id: number,
        type: string,
        choices: [];
      }) => {
        let choices: Choice[] = []
        savedRoom.choices.forEach((choiceId) => {

          let choice = this.choiceBuilder.getChoice(choiceId, savedRoom.type);
          if (choice === undefined) {
            choice = this.choiceBuilder.getChoice(choiceId,'MainEvent');
          }

          choices.push(choice)
        })

        let room = this.eventBuilder.build(this.eventBuilder.getEvent(savedRoom.id, savedRoom.type), choices)

        rooms.push(room)
      })

      gameInstance.rooms = rooms

      let choices: Choice[] = []
      savedDatas.actualRoom.choices.forEach((choiceId: number) => {
        let choice = this.choiceBuilder.getChoice(choiceId, savedDatas.actualRoom.type);
        if (choice === undefined) {
          choice = this.choiceBuilder.getChoice(choiceId,'MainEvent');
        }

        choices.push(choice)
      })

      gameInstance.actualRoom = this.eventBuilder.build(this.eventBuilder.getEvent(savedDatas.actualRoom.id, savedDatas.actualRoom.type), choices)

      return gameInstance
    }
  }
}