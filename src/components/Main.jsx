function Main() {
  return (
    <main className="flex flex-col md:flex-row md:justify-center bg-base-100">
      <div className="bg-green-300 md:w-1/3">
        <div className="flex justify-start pt-3 ml-4">
          <div className="btn btn-circle pointer-events-none">
            <p className="text-3xl">0</p>
          </div>
          <div className="chat chat-start w-1/3">
            <div className="chat-bubble text-xl w-24 bg-base-200 text-neutral">
              Player
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-10">
          <img src="https://deckofcardsapi.com/static/img/6H.png" width={100} />
        </div>
        <div className="flex justify-center gap-4 py-5">
          <button className="btn w-1/3">HIT</button>
          <button className="btn w-1/3">STAND</button>
        </div>
      </div>

      <div className="bg-blue-300 md:w-1/3">
        <div className="flex justify-end pt-3 mr-4">
          <div className="chat chat-end w-1/3">
            <div className="chat-bubble text-xl w-24 bg-base-200 text-neutral">
              Dealer
            </div>
          </div>
          <div className="btn btn-circle pointer-events-none">
            <p className="text-3xl">0</p>
          </div>
        </div>
        <div className="flex justify-center py-10">
          <img src="https://deckofcardsapi.com/static/img/6H.png" width={100} />
        </div>
      </div>
    </main>
  );
}

export default Main;
