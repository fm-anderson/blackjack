import GameBar from "./GameBar";
import DisplayPlayer from "./DisplayPlayer";
import DisplayDealer from "./DisplayDealer";
import Modal from "./Modal";
import { fetchDeck } from "../utils/api";

export async function mainLoader() {
  const deck = await fetchDeck();
  const deckId = deck.deck_id;
  return { deck, deckId };
}

function Main() {
  return (
    <>
      <GameBar />
      <main className="flex flex-col md:flex-row md:justify-center md:gap-8">
        <DisplayPlayer />
        <DisplayDealer />
        <Modal />
      </main>
    </>
  );
}

export default Main;
