import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import GameBar from "./components/GameBar";
import Main, { mainLoader } from "./components/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      loader: mainLoader,
    },
  ]);

  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray-200">
      <GameBar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
