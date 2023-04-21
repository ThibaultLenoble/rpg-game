export default class Item {
  name: string;
  action: string;
  amount: number;
  image: string;
  useCount: number;
  id: number;

  constructor(
    name: string,
    action: string,
    id: number,
    amount?: number,
    image?: string,
    useCount?: number
  ) {
    this.name = name;
    this.action = action;
    this.amount = amount ?? 0;
    this.image =
      image ??
      "https://static.vecteezy.com/system/resources/previews/001/208/666/original/banana-png.png";
    this.useCount = useCount ?? 1;
    this.id = id;
  }
}
