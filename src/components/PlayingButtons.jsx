import React from "react";

function PlayingButtons({ handleHit, score, setPlayDealer }) {
  return (
    <>
      {score < 21 && (
        <>
          <button className="btn shadow-md w-1/3" onClick={handleHit}>
            Hit
          </button>
          <button
            className="btn shadow-md w-1/3"
            onClick={() => setPlayDealer(true)}
          >
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
