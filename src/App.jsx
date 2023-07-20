import Footer from "./components/Footer";
import GameBar from "./components/GameBar";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <GameBar />
      <div>Main</div>
      <Footer />
    </div>
  );
}

export default App;
