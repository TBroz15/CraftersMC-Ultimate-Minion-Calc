import { Minion, MinionTier } from "~/interfaces/Minion";
import { Slimeball } from "../../items/combat/Slime";

const SlimeTiers: MinionTier[] = [
  { tier: 1, dailyReturns: [2991] },
  { tier: 2, dailyReturns: [2991] },
  { tier: 3, dailyReturns: [3240] },
  { tier: 4, dailyReturns: [3240] },
  { tier: 5, dailyReturns: [3535] },
  { tier: 6, dailyReturns: [3535] },
  { tier: 7, dailyReturns: [4096] },
  { tier: 8, dailyReturns: [4096] },
  { tier: 9, dailyReturns: [4860] },
  { tier: 10, dailyReturns: [4860] },
  { tier: 11, dailyReturns: [6480] },
];

export const SlimeMinion: Minion = {
  name: "Slime Minion",
  returns: [Slimeball],
  tiers: SlimeTiers,
};
