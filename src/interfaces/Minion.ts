import { Item } from "./Item";

export interface Minion {
  name: string;
  returns: Item[];
  tiers: MinionTier[];
}

export interface MinionTier {
  tier: number;
  dailyReturns: number[];
}
