import { Minion, MinionTier } from "~/interfaces/Minion";
import { Feather, RawChicken } from "../../../items/farming/mobs/Chicken";

const ChickenTiers: MinionTier[] = [
  { tier: 1, dailyReturns: [1661, 1661] },
  { tier: 2, dailyReturns: [1661, 1661] },
  { tier: 3, dailyReturns: [1800, 1800] },
  { tier: 4, dailyReturns: [1800, 1800] },
  { tier: 5, dailyReturns: [1963, 1963] },
  { tier: 6, dailyReturns: [1963, 1963] },
  { tier: 7, dailyReturns: [2160, 2160] },
  { tier: 8, dailyReturns: [2160, 2160] },
  { tier: 9, dailyReturns: [2400, 2400] },
  { tier: 10, dailyReturns: [2400, 2400] },
  { tier: 11, dailyReturns: [2880, 2880] },
];

export const ChickenMinion: Minion = {
  name: "Chicken Minion",
  returns: [RawChicken, Feather],
  tiers: ChickenTiers,
};
