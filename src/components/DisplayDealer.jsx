import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useAtom } from "jotai";
import BubbleDealer from "./BubbleDealer";
import { drawCard } from "../utils/api";
import { updateScore } from "../utils/helpers";
import { dealerAtom } from "../utils/atoms";

function DisplayDealer() {
  const { deckId } = useLoaderData();
  const [dealer, setDealer] = useAtom(dealerAtom);

  const handleDealerDraw = async () => {
    const res = await drawCard(deckId, 1);
    const card = res.cards[0];

    setDealer((prevState) => {
      const newCards = [...prevState.cards, card];

      const newScore = updateScore(newCards);
      return {
        ...prevState,
        cards: newCards,
        score: newScore,
      };
    });

    return card;
  };

  useEffect(() => {
    const newScore = updateScore(dealer.cards);
    setDealer((prevState) => ({ ...prevState, score: newScore }));
  }, [dealer.cards]);

  return (
    <div className="md:w-1/3 md:py-20 md:rounded-3xl md:shadow-lg bg-zinc-200">
      <BubbleDealer />
      <div className="flex justify-center py-10">
        <ul className="flex flex-row gap-2 mx-2">
          <li className="shadow-sm">
            <img
              src="https://deckofcardsapi.com/static/img/back.png"
              width={100}
            />
          </li>
          <li className="shadow-sm">
            <img
              src="https://deckofcardsapi.com/static/img/back.png"
              width={100}
            />
          </li>
        </ul>
      </div>

      <div className="flex justify-center gap-4 pb-5"></div>
    </div>
  );
}

export default DisplayDealer;
