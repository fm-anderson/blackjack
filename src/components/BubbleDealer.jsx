function BubbleDealer() {
  return (
    <div className="flex justify-end pt-3 mr-4">
      <div className="chat chat-end w-1/3">
        <div className="chat-bubble shadow-md text-xl w-24 bg-base-200 text-neutral text-center">
          Dealer
        </div>
      </div>
      <div className="btn btn-circle pointer-events-none shadow-md">
        <p className="text-3xl">0</p>
      </div>
    </div>
  );
}

export default BubbleDealer;
