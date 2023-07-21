function BetButton({ amount, handleBetIncrease }) {
  return (
    <button
      className="btn shadow-md w-1/5 md:w-1/12 text-lg"
      onClick={() => handleBetIncrease(amount)}
    >
      ${amount}
    </button>
  );
}

export default BetButton;
