import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useAtom } from "jotai";
import BubbleDealer from "./BubbleDealer";
import { cardBack, drawCard } from "../utils/api";
import { updateScore } from "../utils/helpers";
import { dealerAtom, playDealerAtom, startAtom } from "../utils/atoms";
import Card from "./Card";

function DisplayDealer() {
  const { deckId } = useLoaderData();
  const [dealer, setDealer] = useAtom(dealerAtom);
  const [playDealer] = useAtom(playDealerAtom);
  const [start, setStart] = useAtom(startAtom);

  const handleDealerDraw = async (num = 1) => {
    const res = await drawCard(deckId, num);
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
    if (start && dealer.cards.length === 0) {
      handleDealerDraw(2);
    }
  }, [start, dealer.cards]);

  useEffect(() => {
    const newScore = updateScore(dealer.cards);
    setDealer((prevState) => ({ ...prevState, score: newScore }));
  }, [dealer.cards]);

  useEffect(() => {
    if (playDealer && dealer.score < 17 && dealer.cards.length > 0) {
      handleDealerDraw();
    }
  }, [playDealer, dealer.score]);

  return (
    <div className="md:w-1/3 md:py-20 md:rounded-3xl md:shadow-lg bg-gradient-to-r from-[#308834] to-[#1A4A1C]">
      <BubbleDealer />
      <div className="flex justify-center py-10">
        <ul className="flex flex-row gap-2 mx-2">
          {!start && (
            <>
              <Card image={cardBack} />
              <Card image={cardBack} />
            </>
          )}

          {start && !playDealer && (
            <>
              <Card image={cardBack} />
              {dealer?.cards?.length > 0 && (
                <Card key={0} image={dealer?.cards[0]?.image} />
              )}
            </>
          )}

          {playDealer &&
            dealer?.cards?.map((card, index) => (
              <Card key={index} image={card.image} />
            ))}
        </ul>
      </div>

      <div className="flex justify-center gap-4 pb-5"></div>
    </div>
  );
}

export default DisplayDealer;
