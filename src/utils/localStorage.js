import { CAPITAL, FLAG } from "./game";

const STREAK_KEYS = { [FLAG]: "flags-streak", [CAPITAL]: "capitals-streak" };

const getStreak = (game) =>
  Number(localStorage.getItem(STREAK_KEYS[game])) || 0;

const setStreak = (game, streak) =>
  localStorage.setItem(STREAK_KEYS[game], streak);

export { getStreak, setStreak };
