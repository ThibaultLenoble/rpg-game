import PlayerInterface from "./PlayerInterface";

class Player implements PlayerInterface {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name
  }
}

export default Player;
