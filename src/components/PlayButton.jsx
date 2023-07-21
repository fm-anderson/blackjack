import React from "react";

function PlayButton({ firstDraw, betting }) {
  return (
    <button
      className="btn shadow-md w-1/3"
      onClick={firstDraw}
      disabled={!betting}
    >
      Play
    </button>
  );
}

export default PlayButton;
