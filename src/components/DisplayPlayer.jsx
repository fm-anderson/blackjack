import { useLoaderData } from "react-router-dom";
import BubblePlayer from "./BubblePlayer";
import { drawCard } from "../utils/api";
import { randomKey, updateScore } from "../utils/helpers";
import { useAtom } from "jotai";
import { bettingAtom, playerAtom } from "../App";
import { useEffect, useState } from "react";

function Display() {
  const { deckId } = useLoaderData();
  const [start, setStart] = useState(false);
  const [player, setPlayer] = useAtom(playerAtom);
  const [betting, setBetting] = useAtom(bettingAtom);

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
    <div className="md:w-1/3 md:py-20 md:rounded-3xl md:shadow-lg bg-zinc-300">
      <BubblePlayer />
      <div className="flex justify-center py-10">
        <ul className="flex flex-row gap-2 mx-2">
          {!start && (
            <>
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
            </>
          )}

          {player?.cards?.map((item) => (
            <li key={randomKey(8)} className="shadow-sm">
              <img src={item?.image} width={100} />
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center gap-4 pb-5">
        {start ? (
          <>
            <button className="btn shadow-md w-1/3" onClick={handleHit}>
              HIT
            </button>
            <button className="btn shadow-md w-1/3">STAND</button>
          </>
        ) : (
          <button
            className="btn shadow-md w-1/3"
            onClick={firstDraw}
            disabled={!betting}
          >
            Play
          </button>
        )}
      </div>
    </div>
  );
}

export default Display;
