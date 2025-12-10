import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ParentReactMemo from "./components/ParentReactMemo";
import Mine1 from "./components/Mine1Axios";
import Mine2 from "./components/Mine2Fetch";
import Mine3 from "./components/Mine3ApiSearch";
import Mine4 from "./components/Mine4Debounce";

function App() {
  return (
    <>

      <BrowserRouter>
        <nav>
          <Link to="/mine1" className="border-2 rounded-3xl p-2 m-4">
            Mine1 Axios
          </Link>
          <Link to="/optimise" className="border-2 rounded-3xl p-2 m-4">
            optimise
          </Link>
          <Link to="/mine2" className="border-2 rounded-3xl p-2 m-4">
            Mine2 fetch
          </Link>
          <Link to="/mine3" className="border-2 rounded-3xl p-2 m-4">
            Mine3 api search
          </Link>
          <Link to="/mine4" className="border-2 rounded-3xl p-2 m-4">
            Mine4 debounce
          </Link>
         
        </nav>

        <Routes>
          <Route path="/mine1" element={<Mine1 />} />
          <Route path="/optimise" element={<ParentReactMemo />} />
          <Route path="/mine2" element={<Mine2 />} />
          <Route path="/mine3" element={<Mine3 />} />
          <Route path="/mine4" element={<Mine4 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
