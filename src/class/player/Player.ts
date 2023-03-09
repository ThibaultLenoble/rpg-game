import PlayerInterface from "./PlayerInterface";

class Player implements PlayerInterface {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(name: string) {
    return (this.name = name);
  }
}

export default Player;
