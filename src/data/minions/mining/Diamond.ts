import { Minion, MinionTier } from "~/interfaces/Minion";
import { Diamond } from "../../items/mining";

const DiamondTiers: MinionTier[] = [
  { tier: 1, dailyReturns: [1489] },
  { tier: 2, dailyReturns: [1489] },
  { tier: 3, dailyReturns: [1600] },
  { tier: 4, dailyReturns: [1600] },
  { tier: 5, dailyReturns: [1728] },
  { tier: 6, dailyReturns: [1728] },
  { tier: 7, dailyReturns: [1963] },
  { tier: 8, dailyReturns: [1963] },
  { tier: 9, dailyReturns: [2273] },
  { tier: 10, dailyReturns: [2273] },
  { tier: 11, dailyReturns: [2880] },
];

export const DiamondMinion: Minion = {
  name: "Diamond Minion",
  returns: [Diamond],
  tiers: DiamondTiers,
};
