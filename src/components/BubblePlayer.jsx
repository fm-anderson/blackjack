import { useAtom } from "jotai";
import { playerAtom } from "../utils/atoms";

function BubblePlayer() {
  const [player, setPlayer] = useAtom(playerAtom);
  return (
    <div className="flex justify-start pt-3 ml-4">
      <div className="btn btn-circle pointer-events-none shadow-md">
        <p className="text-3xl">{player.score}</p>
      </div>
      <div className="chat chat-start w-1/3">
        <div className="chat-bubble bg-base-200 text-neutral shadow-md text-xl w-24 text-center">
          Player
        </div>
      </div>
    </div>
  );
}

export default BubblePlayer;
