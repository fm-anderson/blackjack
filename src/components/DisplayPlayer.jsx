import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useAtom } from "jotai";
import BubblePlayer from "./BubblePlayer";
import Card from "./Card";
import { cardBack, drawCard } from "../utils/api";
import { calculateWinner, randomKey, updateScore } from "../utils/helpers";
import {
  bettingAtom,
  dealerAtom,
  playDealerAtom,
  playerAtom,
  resultAtom,
  startAtom,
} from "../utils/atoms";
import PlayButton from "./PlayButton";
import PlayingButtons from "./PlayingButtons";

function DisplayPlayer() {
  const { deckId } = useLoaderData();
  const [start, setStart] = useAtom(startAtom);
  const [player, setPlayer] = useAtom(playerAtom);
  const [dealer, setDealer] = useAtom(dealerAtom);
  const [betting, setBetting] = useAtom(bettingAtom);
  const [playDealer, setPlayDealer] = useAtom(playDealerAtom);
  const [result, setResult] = useAtom(resultAtom);

  const firstDraw = async () => {
    const res = await drawCard(deckId, 2);

    res.cards.forEach((item) => {
      setPlayer((prevState) => ({
        ...prevState,
        cards: [...prevState.cards, item],
      }));
    });
    const newScore = updateScore(res.cards);
    setPlayer((prevState) => ({ ...prevState, score: newScore }));
    setStart(true);

    return res.cards;
  };

  const handleHit = async () => {
    const res = await drawCard(deckId, 1);
    const card = res.cards[0];
    setPlayer((prevState) => {
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
    const newScore = updateScore(player.cards);
    setPlayer((prevState) => ({ ...prevState, score: newScore }));
  }, [player.cards]);

  return (
    <div className="md:w-1/3 md:py-20 md:rounded-3xl md:shadow-lg bg-gradient-to-r from-[#1A4A1C] to-[#308834]">
      <BubblePlayer />
      <div className="flex justify-center py-10">
        <ul className="flex flex-row gap-2 mx-2">
          {!start && (
            <>
              <Card image={cardBack} />
              <Card image={cardBack} />
            </>
          )}

          {player?.cards?.map((item) => (
            <Card key={randomKey(8)} image={item?.image} />
          ))}
        </ul>
      </div>

      <div className="flex justify-center gap-4 pb-5">
        {start ? (
          <PlayingButtons
            handleHit={handleHit}
            score={player.score}
            setPlayDealer={setPlayDealer}
            setResult={setResult}
          />
        ) : (
          <PlayButton firstDraw={firstDraw} betting={betting} />
        )}
      </div>
    </div>
  );
}

export default DisplayPlayer;
