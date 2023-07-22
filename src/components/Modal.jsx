import { useLoaderData } from "react-router-dom";
import { reshuffleDeck } from "../utils/api";
import { playerAtom, dealerAtom, betAtom, resultAtom } from "../utils/atoms";
import { useAtom } from "jotai";

function Modal() {
  const { deckId } = useLoaderData();
  const [result, setResult] = useAtom(resultAtom);
  const [, setPlayer] = useAtom(playerAtom);
  const [, setDealer] = useAtom(dealerAtom);
  const [, setBet] = useAtom(betAtom);

  const handleRestart = async () => {
    const reshuffled = await reshuffleDeck(deckId);
    setPlayer({ cards: [], score: 0 });
    setDealer({ cards: [], score: 0 });
    setBet(0);
    setResult(null);
    console.log(reshuffled);
    return reshuffled;
  };

  return (
    <>
      {/* The button to open modal */}
      {/* <label htmlFor="my_modal_6" className="btn">
        open modal
      </label> */}

      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id="my_modal_6"
        className="modal-toggle"
        // checked={result}
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">This modal works with a hidden checkbox!</p>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn">
              Close!
            </label>
            <label htmlFor="my_modal_6" className="btn" onClick={handleRestart}>
              Restart Game
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
