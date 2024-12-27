import { Minion, MinionTier } from "~/interfaces/Minion";
import { Emerald } from "../../items/mining";

const EmeraldTiers: MinionTier[] = [
  { tier: 1, dailyReturns: [1542] },
  { tier: 2, dailyReturns: [1542] },
  { tier: 3, dailyReturns: [1661] },
  { tier: 4, dailyReturns: [1661] },
  { tier: 5, dailyReturns: [1800] },
  { tier: 6, dailyReturns: [1800] },
  { tier: 7, dailyReturns: [2057] },
  { tier: 8, dailyReturns: [2057] },
  { tier: 9, dailyReturns: [2400] },
  { tier: 10, dailyReturns: [2400] },
  { tier: 11, dailyReturns: [3085] },
];

export const EmeraldMinion: Minion = {
  name: "Emerald Minion",
  returns: [Emerald],
  tiers: EmeraldTiers,
};
