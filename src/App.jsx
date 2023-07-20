import Footer from "./components/Footer";
import GameBar from "./components/GameBar";
import Main from "./components/Main";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray-200">
      <GameBar />
      <Main />
      <Footer />
      <Modal />
    </div>
  );
}

export default App;
