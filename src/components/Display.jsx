import { useLoaderData } from "react-router-dom";
import BubblePlayer from "./BubblePlayer";
import BubbleDealer from "./BubbleDealer";
import { drawCard } from "../utils/api";

function Display({ name }) {
  const { deckId } = useLoaderData();

  const handleHit = async () => {
    const res = await drawCard(deckId, 1);
    return res.cards;
  };

  const isPlayer = () => {
    return name === "Player";
  };

  return (
    <div
      className={`md:w-1/3 md:py-20 md:rounded-3xl md:shadow-lg ${
        isPlayer() ? "bg-zinc-300" : "bg-zinc-200"
      }`}
    >
      {isPlayer() ? <BubblePlayer /> : <BubbleDealer />}
      <div className="flex justify-center py-10">
        <ul className="flex flex-row gap-2">
          <li className="shadow-sm">
            <img
              src="https://deckofcardsapi.com/static/img/6H.png"
              width={100}
            />
          </li>
        </ul>
      </div>

      <div className="flex justify-center gap-4 pb-5">
        {isPlayer() && (
          <>
            <button className="btn shadow-md w-1/3" onClick={handleHit}>
              HIT
            </button>
            <button className="btn shadow-md w-1/3">STAND</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Display;
