import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

interface ProductResponse {
  products: Product[];
}
interface Product {
  [key:string]:any
}
function Mine1() {
 
  const [display, setDisplay] = useState<Product[]>([]);
  const [query, setQuery] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const res = await axios.get<ProductResponse>(
          "https://dummyjson.com/products"
        );
        console.log(res.data.products);
        setLoader(false);
        setDisplay(res.data.products);
      } catch (err) {
        setLoader(false);
        setError(true);
        console.log(err);
      } finally {
        console.log("done");
      }
    };
    fetchData();
  }, []);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    e.target.value || setSearch("");
  }
  function searchBtn() {
    setSearch(query);
  }
  return (
    <>
    <NavLink to="/" className="bg-amber-700 text-3xl text-white font-bold p-2">APP</NavLink>
    <h1 className="text-3xl w-max m-auto">axios</h1>
      <input
        type="text"
        className="m-5 w-50 h-10 rounded-3xl border-b-cyan-900 border-2 p-4 sm:mx-21 lg:mx-14"
        placeholder="search here......"
        onChange={handleSearch}
      />
      <button
        className="border-2 rounded-2xl bg-amber-100 w-20 h-8"
        disabled={!query}
        onClick={searchBtn}
      >
        Search
      </button>

      {loader ? (
        <img
          src="https://media1.tenor.com/m/FawYo00tBekAAAAC/loading-thinking.gif"
          alt="loading"
          className="m-auto"
        />
      ) : error ? (
        <img
          src="https://media.tenor.com/VmVUyOH2Ir4AAAAi/error-bug.gif"
          alt="404 error"
          className="m-auto"
        />
      ) : (
        <div className=" p-5 flex flex-wrap mx-auto border-amber-600 border-2 items-center justify-around">
          {display.filter((item) =>
            Object.values(item)
              .flat(Infinity)
              .map(v=>String(v))
              .join("")
              .toLowerCase()
              .includes(search.toLowerCase())
          ).length === 0 ? (
            <img
              src="https://media1.tenor.com/m/8BWKHstz5bEAAAAd/i-cant-find-it-someone-took-it-shelly-marsh.gif"
              alt="item not found"
              className="m-auto"
            />
          ) : (
            display
              .filter((item) =>
                Object.values(item)
                  .flat(Infinity)
                  .map(v=>String(v))
                  .join("")
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )

              .map((item) => (
               <Link to ={`/product/${item.id}`} className="hover:cursor-pointer">
                <article className="group max-w-sm rounded p-4 border-2 border-b-cyan-950 m-3 h-80 w-60 flex flex-col">
                  <div className="truncate group-hover:overflow-visible w-50 text-2xl text-cyan-700 h-18">
                    {item.title}
                  </div>
                  <hr />
                  <img
                    className="w-4/5 self-center"
                    src={item.thumbnail}
                    alt={item.title}
                  />
                  <hr />
                  <span className="text-2xl">$:{item.price}</span>
                </article></Link>
              ))
          )}
        </div>
      )}
    </>
  );
}

export default Mine1;
