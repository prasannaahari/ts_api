import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "./Login";
import Mine1 from "./Mine1Axios";
import Mine2 from "./Mine2Fetch";
import Mine3 from "./Mine3ApiSearch";
import Mine4 from "./Mine4Throttle";
import ParentReactMemo from "./ParentReactMemo";
import Protected from "./Protected";
import ProtectedWrapper from "./ProtectedWrapper";
import SuccessLog from "./SuccessLog";
import UseState from "./UseState";
import CounterRtk from "./CounterRtk";
import ParamsCart from "./ParamsCart";
import ParamsAlone from "./ParamsALone";
import Mine5Crud from "../Mine5Crud";
import Mine5Params from "../Mine5Params";

const Detail = lazy(() => import("./Detail"));
export const routes = createBrowserRouter([
  {
    path: "/product/:ids",
    element: (
      <Suspense
        fallback={
          <h1 className="text-5xl text-green-800 w-1/2 m-auto">loading</h1>
        }
      >
        <Detail />
      </Suspense>
    ),
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
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/successLog",
    element: <SuccessLog />,
  },
  {
    path: "usestate",
    element: <UseState />,
  },
  {
    path:"reduxCounter",
    element:<CounterRtk/>
  },
  {
    path:"paramsCart",
    element:<ParamsCart/>
  },
  {
    path:"/posts/:id",
    element:<ParamsAlone/>
  },
  {
    path:"/mine5Crud",
    element:<Mine5Crud/>
  },
  {
    path:"/products/:id",
    element:<Mine5Params/>
  }
]);
