import GameBar from "./GameBar";
import Display from "./Display";
import Modal from "./Modal";
import { fetchDeck } from "../utils/api";
import { useState } from "react";

export async function mainLoader() {
  const deck = await fetchDeck();
  const deckId = deck.deck_id;
  return { deck, deckId };
}

function Main() {
  const [player, setPlayer] = useState({ cards: [], score: [], wallet: 200 });
  const [dealer, setDealer] = useState({ cards: [], score: [] });

  return (
    <>
      <GameBar player={player} setPlayer={setPlayer} />
      <main className="flex flex-col md:flex-row md:justify-center md:gap-8">
        <Display name={"Player"} />
        <Display name={"Dealer"} />
        <Modal />
      </main>
    </>
  );
}

export default Main;
