class Choice {
  label: string;
  action: string;
  id: number;
  item?: number;

  constructor(id: number, label: string, action: string, item?: number) {
    this.label = label;
    this.action = action;
    this.id = id;
    if (item) {
      this.item = item;
    }
  }
}

export default Choice;
