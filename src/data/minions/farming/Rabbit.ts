import { Minion, MinionTier } from "~/interfaces/Minion";
import {
  RawRabbit,
  RabbitFoot,
  RabbitHide,
} from "../../items/farming/mobs/Rabbit";

const RabbitTiers: MinionTier[] = [
  { tier: 1, dailyReturns: [1661, 581, 581] },
  { tier: 2, dailyReturns: [1661, 581, 581] },
  { tier: 3, dailyReturns: [1800, 630, 630] },
  { tier: 4, dailyReturns: [1800, 630, 630] },
  { tier: 5, dailyReturns: [1963, 687, 687] },
  { tier: 6, dailyReturns: [1963, 687, 687] },
  { tier: 7, dailyReturns: [2160, 755, 755] },
  { tier: 8, dailyReturns: [2160, 755, 755] },
  { tier: 9, dailyReturns: [2541, 889, 889] },
  { tier: 10, dailyReturns: [2541, 889, 889] },
  { tier: 11, dailyReturns: [3323, 1163, 1163] },
];

export const RabbitMinion: Minion = {
  name: "Rabbit Minion",
  returns: [RawRabbit, RabbitFoot, RabbitHide],
  tiers: RabbitTiers,
};
