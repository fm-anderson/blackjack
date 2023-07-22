import { atom } from "jotai";

export const playerAtom = atom({ cards: [], score: 0, wallet: 200 });
export const dealerAtom = atom({ cards: [], score: 0 });
export const betAtom = atom(0);
export const bettingAtom = atom(false);
export const playDealerAtom = atom(false);
export const startAtom = atom(false);
