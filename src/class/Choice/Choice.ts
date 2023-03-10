class Choice {
  label: string;
  action: string;

  constructor(label: string, action: string) {
    this.label = label;
    this.action = action;
  }

  getLabel(): string {
    return this.label;
  }

  getAction(): string {
    return this.action;
  }

  setLabel(label: string): void {
    this.label = label;
  }

  setAction(action: string): void {
    this.action = action;
  }
}

export default Choice;
