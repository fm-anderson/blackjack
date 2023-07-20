import React from "react";

function GameBar() {
  return (
    <header className="grid grid-cols-1 bg-base-100">
      <div className="navbar bg-base-100 justify-center">
        <h3 className="btn-ghost text-2xl font-semibold">wallet: {"$200"}</h3>
      </div>

      <div className="bg-base-100 navbar flex flex-row justify-center gap-3">
        <input
          type="number"
          min="1"
          max="200"
          placeholder="BET"
          className="input input-bordered w-2/5 md:w-2/12 placeholder:text-center"
        />
        <button className="btn w-1/5 md:w-1/12 text-lg">$10</button>
        <button className="btn w-1/5 md:w-1/12 text-lg">$20</button>
        <button className="btn w-1/5 md:w-1/12 text-lg">$60</button>
      </div>
    </header>
  );
}

export default GameBar;
