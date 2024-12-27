import { Minion, MinionTier } from "~/interfaces/Minion";
import { MagmaCream } from "../../items/combat/MagmaCube";

const MagmaCubeTiers: MinionTier[] = [
  { tier: 1, dailyReturns: [2430] },
  { tier: 2, dailyReturns: [2430] },
  { tier: 3, dailyReturns: [2592] },
  { tier: 4, dailyReturns: [2592] },
  { tier: 5, dailyReturns: [2777] },
  { tier: 6, dailyReturns: [2777] },
  { tier: 7, dailyReturns: [3110] },
  { tier: 8, dailyReturns: [3110] },
  { tier: 9, dailyReturns: [3535] },
  { tier: 10, dailyReturns: [3535] },
  { tier: 11, dailyReturns: [4320] },
];

export const MagmaCubeMinion: Minion = {
  name: "Magma Cube Minion",
  returns: [MagmaCream],
  tiers: MagmaCubeTiers,
};
