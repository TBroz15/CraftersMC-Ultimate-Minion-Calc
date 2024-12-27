import { Minion, MinionTier } from "~/interfaces/Minion";
import { RawMutton, Wool } from "../../items/farming/mobs/Sheep";

const SheepTiers: MinionTier[] = [
  { tier: 1, dailyReturns: [1800, 1800] },
  { tier: 2, dailyReturns: [1800, 1800] },
  { tier: 3, dailyReturns: [1963, 1963] },
  { tier: 4, dailyReturns: [1963, 1963] },
  { tier: 5, dailyReturns: [2160, 2160] },
  { tier: 6, dailyReturns: [2160, 2160] },
  { tier: 7, dailyReturns: [2400, 2400] },
  { tier: 8, dailyReturns: [2400, 2400] },
  { tier: 9, dailyReturns: [2700, 2700] },
  { tier: 10, dailyReturns: [2700, 2700] },
  { tier: 11, dailyReturns: [3600, 3600] },
];

export const SheepMinion: Minion = {
  name: "Sheep Minion",
  returns: [RawMutton, Wool],
  tiers: SheepTiers,
};
