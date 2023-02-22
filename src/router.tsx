import { createBrowserRouter } from "react-router-dom";
import Characters from "./components/characters/Characters";
import CharactersDetail from "./components/characters/CharactersDetail";
import Comics from "./components/comics/Comics";
import ComicsDetail from "./components/comics/ComicsDetail";
import Root from "./components/Root";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "comics",
        element: <Comics />,
      },
      {
        path: "comics/:id",
        element: <ComicsDetail />,
      },
      {
        path: "characters",
        element: <Characters />,
      },
      {
        path: "characters/:id",
        element: <CharactersDetail />,
      },
    ],
  },
]);

export default router;
