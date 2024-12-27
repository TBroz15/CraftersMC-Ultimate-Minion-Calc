export class Item {
  constructor(public name: string, public defaultPrice: number) {}
}

export class ItemBuilder {
  private _name!: string;
  private _defaultPrice!: number;

  constructor() {}

  public name(name: string) {
    this._name = name;
    return this;
  }

  public defaultPrice(defaultPrice: number) {
    this._defaultPrice = defaultPrice;
    return this;
  }

  public toItem() {
    return new Item(this._name, this._defaultPrice);
  }
}
