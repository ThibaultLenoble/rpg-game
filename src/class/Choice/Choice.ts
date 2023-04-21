class Choice {
  label: string;
  action: string;
  item?: string;

  constructor(label: string, action: string, item?: string) {
    this.label = label;
    this.action = action;
    this.item = item ?? undefined;
  }
}

export default Choice;
