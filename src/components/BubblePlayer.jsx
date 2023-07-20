function BubblePlayer() {
  return (
    <div className="flex justify-start pt-3 ml-4">
      <div className="btn btn-circle pointer-events-none shadow-md">
        <p className="text-3xl">0</p>
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
