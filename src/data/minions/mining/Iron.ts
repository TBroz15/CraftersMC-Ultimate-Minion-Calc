import { Minion, MinionTier } from "~/interfaces/Minion";
import { IronIngot } from "../../items/mining";

const IronTiers: MinionTier[] = [
  { tier: 1, dailyReturns: [2541] },
  { tier: 2, dailyReturns: [2541] },
  { tier: 3, dailyReturns: [2880] },
  { tier: 4, dailyReturns: [2880] },
  { tier: 5, dailyReturns: [3085] },
  { tier: 6, dailyReturns: [3085] },
  { tier: 7, dailyReturns: [3600] },
  { tier: 8, dailyReturns: [3600] },
  { tier: 9, dailyReturns: [4320] },
  { tier: 10, dailyReturns: [4320] },
  { tier: 11, dailyReturns: [5400] },
];

export const IronMinion: Minion = {
  name: "Iron Minion",
  returns: [IronIngot],
  tiers: IronTiers,
};
