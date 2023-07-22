import { useAtom } from "jotai";
import { betAtom, dealerAtom, playerAtom, resultAtom } from "../utils/atoms";
import { calculateWinner } from "../utils/helpers";

function PlayingButtons({ handleHit, score, setPlayDealer }) {
  const [dealer, setDealer] = useAtom(dealerAtom);
  const [player, setPlayer] = useAtom(playerAtom);
  const [bet, setBet] = useAtom(betAtom);
  const [, setResult] = useAtom(resultAtom);

  function handleGameEnd(bet, playerScore, dealerScore) {
    const winner = calculateWinner(playerScore, dealerScore);
    let newWalletValue;

    switch (winner) {
      case "Player wins!":
        newWalletValue = player.wallet + bet;
        alert(`${winner} You've won $${bet}`);
        break;
      case "Dealer wins!":
        newWalletValue = player.wallet - bet;
        alert(`${winner} You've lost $${bet}`);
        break;
      default:
        newWalletValue = player.wallet;
        alert(winner);
    }

    setPlayer((prevState) => ({
      ...prevState,
      wallet: newWalletValue,
    }));

    setBet(0);
  }

  const handleStand = () => {
    handleGameEnd(bet, player.score, dealer.score);
    const result = calculateWinner(score, dealer.score);
    setResult(result);
    setPlayDealer(true);
  };

  return (
    <>
      {score < 21 && (
        <>
          <button className="btn shadow-md w-1/3" onClick={handleHit}>
            Hit
          </button>
          <button className="btn shadow-md w-1/3" onClick={handleStand}>
            Stand
          </button>
        </>
      )}
      {score > 21 && (
        <button className="btn shadow-md w-1/3">Play Again</button>
      )}
    </>
  );
}

export default PlayingButtons;
