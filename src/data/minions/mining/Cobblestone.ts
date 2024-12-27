import { Minion, MinionTier } from "~/interfaces/Minion";
import { Cobblestone } from "../../items/mining";

const CobblestoneTiers: MinionTier[] = [
  { tier: 1, dailyReturns: [3086] },
  { tier: 2, dailyReturns: [3086] },
  { tier: 3, dailyReturns: [3600] },
  { tier: 4, dailyReturns: [3600] },
  { tier: 5, dailyReturns: [4320] },
  { tier: 6, dailyReturns: [4320] },
  { tier: 7, dailyReturns: [4800] },
  { tier: 8, dailyReturns: [4800] },
  { tier: 9, dailyReturns: [5400] },
  { tier: 10, dailyReturns: [5400] },
  { tier: 11, dailyReturns: [6171] },
];

export const CobblestoneMinion: Minion = {
  name: "Cobblestone Minion",
  returns: [Cobblestone],
  tiers: CobblestoneTiers,
};
