class Choice {
  label: string;
  action: string;
  id: number;

  constructor(id: number, label: string, action: string) {
    this.label = label;
    this.action = action;
    this.id = id;
  }
}

export default Choice;
