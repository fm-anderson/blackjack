import { useAtom } from "jotai";
import { useState } from "react";
import { betAtom, bettingAtom, playerAtom } from "../App";

function GameBar() {
  const [bet, setBet] = useAtom(betAtom);
  const [betting, setBetting] = useAtom(bettingAtom);
  // const [betting, setBetting] = useState(false);
  const [player, setPlayer] = useAtom(playerAtom);

  const handleBetIncrease = (amount) => {
    if (player.wallet <= 0) {
      return;
    } else {
      const value = player.wallet - amount;
      setBet((prevState) => prevState + amount);
      setPlayer((prevState) => ({ ...prevState, wallet: value }));
    }
  };

  return (
    <header className="grid grid-cols-1 bg-gray-200">
      <div className="navbar justify-center">
        <h3 className="btn btn-block normal-case md:btn-wide shadow-md text-2xl font-semibold pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 22c3.976 0 8-1.374 8-4V6c0-2.626-4.024-4-8-4S4 3.374 4 6v12c0 2.626 4.024 4 8 4zm0-2c-3.722 0-6-1.295-6-2v-1.268C7.541 17.57 9.777 18 12 18s4.459-.43 6-1.268V18c0 .705-2.278 2-6 2zm0-16c3.722 0 6 1.295 6 2s-2.278 2-6 2-6-1.295-6-2 2.278-2 6-2zM6 8.732C7.541 9.57 9.777 10 12 10s4.459-.43 6-1.268V10c0 .705-2.278 2-6 2s-6-1.295-6-2V8.732zm0 4C7.541 13.57 9.777 14 12 14s4.459-.43 6-1.268V14c0 .705-2.278 2-6 2s-6-1.295-6-2v-1.268z"></path>
          </svg>{" "}
          ${player.wallet}
        </h3>
      </div>

      {!betting ? (
        <div className="navbar flex flex-row justify-center gap-3">
          <button
            className="btn btn-outline hover:btn-success shadow-md text-lg"
            onClick={() => setBetting(true)}
            disabled={bet === 0}
          >
            Bet ${bet}
          </button>
          <button
            className="btn shadow-md w-1/5 md:w-1/12 text-lg"
            onClick={() => handleBetIncrease(10)}
          >
            $10
          </button>
          <button
            className="btn shadow-md w-1/5 md:w-1/12 text-lg"
            onClick={() => handleBetIncrease(20)}
          >
            $20
          </button>
          <button
            className="btn shadow-md w-1/5 md:w-1/12 text-lg"
            onClick={() => handleBetIncrease(50)}
          >
            $50
          </button>
        </div>
      ) : (
        <div className="navbar flex flex-row justify-center gap-3">
          <button
            className="btn btn-block md:btn-wide shadow-md text-xl normal-case font-semibold"
            onClick={() => setBetting(false)}
          >
            Betting: ${bet}
          </button>
        </div>
      )}
    </header>
  );
}

export default GameBar;
