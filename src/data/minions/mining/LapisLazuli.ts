import { Minion, MinionTier } from "~/interfaces/Minion";
import { LapisLazuli } from "../../items/mining";

const LapisLazuliTiers: MinionTier[] = [
  { tier: 1, dailyReturns: [8937] },
  { tier: 2, dailyReturns: [8937] },
  { tier: 3, dailyReturns: [9600] },
  { tier: 4, dailyReturns: [9600] },
  { tier: 5, dailyReturns: [10367] },
  { tier: 6, dailyReturns: [10367] },
  { tier: 7, dailyReturns: [11269] },
  { tier: 8, dailyReturns: [11269] },
  { tier: 9, dailyReturns: [12342] },
  { tier: 10, dailyReturns: [12342] },
  { tier: 11, dailyReturns: [14400] },
];

export const LapisLazuliMinion: Minion = {
  name: "Lapis Lazuli Minion",
  returns: [LapisLazuli],
  tiers: LapisLazuliTiers,
};
