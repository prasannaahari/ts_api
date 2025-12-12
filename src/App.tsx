import { BrowserRouter, Link, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      
        <nav className="flex mt-2">
          <NavLink
            to="/mine1"
            className={({ isActive }) =>
              `border-2 rounded-3xl p-2 m-auto ${isActive ? "bg-emerald-700 text-amber-50 font-bold" : ""}`
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
        </nav>

        
      </>
    
  );
}

export default App;
