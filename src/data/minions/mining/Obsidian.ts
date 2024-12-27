import { Minion, MinionTier } from "~/interfaces/Minion";
import { Obsidian } from "../../items/mining";

const ObsidianTiers: MinionTier[] = [
  { tier: 1, dailyReturns: [960] },
  { tier: 2, dailyReturns: [960] },
  { tier: 3, dailyReturns: [1028] },
  { tier: 4, dailyReturns: [1028] },
  { tier: 5, dailyReturns: [1107] },
  { tier: 6, dailyReturns: [1107] },
  { tier: 7, dailyReturns: [1234] },
  { tier: 8, dailyReturns: [1234] },
  { tier: 9, dailyReturns: [1440] },
  { tier: 10, dailyReturns: [1440] },
  { tier: 11, dailyReturns: [1880] },
];

export const ObsidianMinion: Minion = {
  name: "Obsidian Minion",
  returns: [Obsidian],
  tiers: ObsidianTiers,
};
