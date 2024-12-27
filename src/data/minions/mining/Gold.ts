import { Minion, MinionTier } from "~/interfaces/Minion";
import { GoldIngot } from "../../items/mining";

const GoldTiers: MinionTier[] = [
  { tier: 1, dailyReturns: [1963] },
  { tier: 2, dailyReturns: [1963] },
  { tier: 3, dailyReturns: [2160] },
  { tier: 4, dailyReturns: [2160] },
  { tier: 5, dailyReturns: [2400] },
  { tier: 6, dailyReturns: [2400] },
  { tier: 7, dailyReturns: [2700] },
  { tier: 8, dailyReturns: [2700] },
  { tier: 9, dailyReturns: [3085] },
  { tier: 10, dailyReturns: [3085] },
  { tier: 11, dailyReturns: [3927] },
];

export const GoldMinion: Minion = {
  name: "Gold Minion",
  returns: [GoldIngot],
  tiers: GoldTiers,
};
