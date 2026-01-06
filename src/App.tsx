import { Link, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <nav className="flex m-3 flex-wrap gap-3">
        <NavLink
          to="/mine1"
          className={({ isActive }) =>
            `border-2 rounded-3xl p-2 m-auto ${
              isActive ? "bg-emerald-700 text-amber-50 font-bold" : ""
            }`
          }
        >
          Mine1 Axios
        </NavLink>
        <Link to="/parentReactMemo" className="border-2 rounded-3xl p-2 m-auto">
          optimise
        </Link>
        <Link to="/mine2" className="border-2 rounded-3xl p-2 m-auto">
          Mine2 fetch
        </Link>
        <Link to="/mine3" className="border-2 rounded-3xl p-2 m-auto">
          Mine3 api search
        </Link>
        <Link to="/mine4" className="border-2 rounded-3xl p-2 m-auto">
          Mine4 throttle
        </Link>
        <Link to="/protected" className="border-2 rounded-3xl p-2 m-auto">
          secret
        </Link>
        <Link to="/login" className="border-2 rounded-3xl p-2 m-auto">
          Login
        </Link>
        <Link to="/usestate" className="border-2 rounded-3xl p-2 m-auto">
          usestate
        </Link>
        <Link to="/reduxCounter" className="border-2 rounded-3xl p-2 m-auto">
          rtk
        </Link>
        <Link to="/paramsCart" className="border-2 rounded-3xl p-2 m-auto">
          ParamsCart
        </Link>
        <Link to="/mine5Crud" className="border-2 rounded-3xl p-2 m-auto">
          Mine5Crud
        </Link>
      </nav>
    </>
  );
}

export default App;
