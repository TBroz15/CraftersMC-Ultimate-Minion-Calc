import { Minion, MinionTier } from "~/interfaces/Minion";
import { RawPorkchop } from "../../items/farming/mobs/Pig";

const PigTiers: MinionTier[] = [
  { tier: 1, dailyReturns: [1661] },
  { tier: 2, dailyReturns: [1661] },
  { tier: 3, dailyReturns: [1800] },
  { tier: 4, dailyReturns: [1800] },
  { tier: 5, dailyReturns: [1963] },
  { tier: 6, dailyReturns: [1963] },
  { tier: 7, dailyReturns: [2160] },
  { tier: 8, dailyReturns: [2160] },
  { tier: 9, dailyReturns: [2400] },
  { tier: 10, dailyReturns: [2400] },
  { tier: 11, dailyReturns: [2880] },
];

export const PigMinion: Minion = {
  name: "Pig Minion",
  returns: [RawPorkchop],
  tiers: PigTiers,
};
