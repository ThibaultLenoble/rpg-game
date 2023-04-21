class Choice {
  label: string;
  action: string;
  id: number;
  item?: string;

  constructor(id: number, label: string, action: string, item?: string) {
    this.label = label;
    this.action = action;
    this.id = id;
    this.item = item ?? undefined;
  }
}

export default Choice;
