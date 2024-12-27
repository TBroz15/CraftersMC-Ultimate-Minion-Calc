import { Minion, MinionTier } from "~/interfaces/Minion";
import { RawDuck, DuckEgg } from "../../../items/farming/mobs/Duck";
import { Feather } from "~/data/items/farming/mobs/Chicken";

const DuckTiers: MinionTier[] = [
  { tier: 1, dailyReturns: [1542, 1542, 1542] },
  { tier: 2, dailyReturns: [1542, 1542, 1542] },
  { tier: 3, dailyReturns: [1661, 1661, 1661] },
  { tier: 4, dailyReturns: [1661, 1661, 1661] },
  { tier: 5, dailyReturns: [1800, 1800, 1800] },
  { tier: 6, dailyReturns: [1800, 1800, 1800] },
  { tier: 7, dailyReturns: [1963, 1963, 1963] },
  { tier: 8, dailyReturns: [1963, 1963, 1963] },
  { tier: 9, dailyReturns: [2160, 2160, 2160] },
  { tier: 10, dailyReturns: [2160, 2160, 2160] },
  { tier: 11, dailyReturns: [2400, 2400, 2400] },
];

export const DuckMinion: Minion = {
  name: "Duck Minion",
  returns: [RawDuck, Feather, DuckEgg],
  tiers: DuckTiers,
};
