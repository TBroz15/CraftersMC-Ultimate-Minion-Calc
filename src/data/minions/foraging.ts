import { Item } from "~/interfaces/Item";
import { Minion, MinionTier } from "~/interfaces/Minion";
import { Acacia, Birch, DarkOak, Jungle, Oak, Spruce } from "../items/foraging";

const ForagingMinionTiers: MinionTier[] = [
  { tier: 1, dailyReturns: [3600] },
  { tier: 2, dailyReturns: [3600] },
  { tier: 3, dailyReturns: [3840] },
  { tier: 4, dailyReturns: [3840] },
  { tier: 5, dailyReturns: [4114] },
  { tier: 6, dailyReturns: [4114] },
  { tier: 7, dailyReturns: [4547] },
  { tier: 8, dailyReturns: [4547] },
  { tier: 9, dailyReturns: [5236] },
  { tier: 10, dailyReturns: [5236] },
  { tier: 11, dailyReturns: [6400] },
];

class ForagingMinion implements Minion {
  tiers = ForagingMinionTiers;
  constructor(public name: string, public returns: Item[]) {}
}

class ForagingMinionBuilder {
  private _name!: string;
  private _dailyReturns!: Item[];
  constructor() {}

  public name(name: string): ForagingMinionBuilder {
    this._name = name;
    return this;
  }

  public returns(dailyReturns: Item[]): ForagingMinionBuilder {
    this._dailyReturns = dailyReturns;
    return this;
  }

  public toMinion(): ForagingMinion {
    return new ForagingMinion(this._name, this._dailyReturns);
  }
}

export const OakLogMinion = new ForagingMinionBuilder()
  .name("Oak Log Minion")
  .returns([Oak])
  .toMinion();

export const DarkOakLogMinion = new ForagingMinionBuilder()
  .name("Dark Oak Log Minion")
  .returns([DarkOak])
  .toMinion();

export const SpruceLogMinion = new ForagingMinionBuilder()
  .name("Spruce Log Minion")
  .returns([Spruce])
  .toMinion();

export const BirchLogMinion = new ForagingMinionBuilder()
  .name("Birch Log Minion")
  .returns([Birch])
  .toMinion();

export const AcaciaLogMinion = new ForagingMinionBuilder()
  .name("Acacia Log Minion")
  .returns([Acacia])
  .toMinion();

export const JungleLogMinion = new ForagingMinionBuilder()
  .name("Jungle Log Minion")
  .returns([Jungle])
  .toMinion();
