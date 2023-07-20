import Display from "./Display";
import Modal from "./Modal";
import { fetchDeck } from "../utils/api";

export async function mainLoader() {
  const deck = await fetchDeck();
  const deckId = deck.deck_id;
  return { deck, deckId };
}

function Main() {
  return (
    <main className="flex flex-col md:flex-row md:justify-center md:gap-8">
      <Display name={"Player"} active={true} />
      <Display name={"Dealer"} active={false} />
      <Modal />
    </main>
  );
}

export default Main;
