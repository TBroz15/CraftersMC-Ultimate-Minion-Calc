import { Minion, MinionTier } from "~/interfaces/Minion";
import { WheatSeeds, Wheat } from "../../items/farming/crops/Wheat";

const WheatTiers: MinionTier[] = [
  { tier: 1, dailyReturns: [2880, 4320] },
  { tier: 2, dailyReturns: [2880, 4320] },
  { tier: 3, dailyReturns: [3323, 4985] },
  { tier: 4, dailyReturns: [3323, 4985] },
  { tier: 5, dailyReturns: [3927, 5891] },
  { tier: 6, dailyReturns: [3927, 5891] },
  { tier: 7, dailyReturns: [4320, 6480] },
  { tier: 8, dailyReturns: [4320, 6480] },
  { tier: 9, dailyReturns: [4800, 7200] },
  { tier: 10, dailyReturns: [4800, 7200] },
  { tier: 11, dailyReturns: [5400, 8100] },
];

export const WheatMinion: Minion = {
  name: "Wheat Minion",
  returns: [Wheat, WheatSeeds],
  tiers: WheatTiers,
};
