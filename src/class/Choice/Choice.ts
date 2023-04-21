class Choice {
  label: string;
  action: string;
  item?: number;

  constructor(label: string, action: string, item?: number) {
    this.label = label;
    this.action = action;
    this.item = item ?? undefined;
  }
}

export default Choice;
