function GameBar() {
  return (
    <header className="grid grid-cols-1 bg-gray-200">
      <div className="navbar justify-center">
        <h3 className="btn btn-block normal-case md:btn-wide shadow-md text-2xl font-semibold pointer-events-none">
          Wallet: {"$200"}
        </h3>
      </div>

      <div className="navbar flex flex-row justify-center gap-3">
        <input
          type="number"
          min="1"
          max="200"
          placeholder="BET"
          className="input input-bordered shadow-md w-2/5 md:w-2/12 placeholder:text-center"
        />
        <button className="btn shadow-md w-1/5 md:w-1/12 text-lg">$10</button>
        <button className="btn shadow-md w-1/5 md:w-1/12 text-lg">$20</button>
        <button className="btn shadow-md w-1/5 md:w-1/12 text-lg">$50</button>
      </div>
      <div className="navbar flex flex-row justify-center gap-3">
        <h3 className="btn btn-block md:btn-wide shadow-md text-xl normal-case font-semibold pointer-events-none">
          Betting: {"$20"}
        </h3>
      </div>
    </header>
  );
}

export default GameBar;
