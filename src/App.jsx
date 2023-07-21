import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main, { mainLoader } from "./components/Main";
import Footer from "./components/Footer";
import { atom } from "jotai";

export const playerAtom = atom({ cards: [], score: 0, wallet: 200 });
export const dealerAtom = atom({ cards: [], score: 0 });
export const betAtom = atom(0);
export const bettingAtom = atom(false);

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
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
