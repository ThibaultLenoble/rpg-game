import GameInstance from "../class/GameInstance/GameInstance";

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

  async load(file: Blob) {
    this.reader.readAsText(file)

    await new Promise<void>(resolve => this.reader.onload = () => resolve());
    return JSON.parse(<string>this.reader.result)
  }
}