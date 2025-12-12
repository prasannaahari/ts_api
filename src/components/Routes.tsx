import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Detail from "./Detail";
import Mine1 from "./Mine1Axios";
import Mine2 from "./Mine2Fetch";
import Mine3 from "./Mine3ApiSearch";
import Mine4 from "./Mine4Throttle";
import ParentReactMemo from "./ParentReactMemo";
import ProtectedWrapper from "./ProtectedWrapper";
import Protected from "./Protected";

export const routes = createBrowserRouter([
  {
    path: "/product/:ids",
    element: <Detail />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/mine1",
    element: <Mine1 />,
  },
  {
    path: "/mine2",
    element: <Mine2 />,
  },
  {
    path: "/mine3",
    element: <Mine3 />,
  },
  {
    path: "/mine4",
    element: <Mine4 />,
  },
  {
    path: "/parentReactMemo",
    element: <ParentReactMemo />,
  },
  {
    path: "/protected",
    element: (
      <ProtectedWrapper>
        <Protected />
      </ProtectedWrapper>
    ),
  },
]);
