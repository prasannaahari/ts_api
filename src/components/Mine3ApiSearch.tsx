import { useEffect, useState } from "react";

interface Response {
  products: ProductRes[];
}
interface ProductRes {
  [key: string]: any;
}

function Mine3() {
    const [display, setDisplay] = useState<ProductRes[]>([]);
      const [query, setQuery] = useState<string>("");
      const [search, setSearch] = useState<string>("");
      const [loader, setLoader] = useState<boolean>(true);
      const [error, setError] = useState<boolean>(false);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            setLoader(true);
            const fetched = await fetch(`https://dummyjson.com/products/search?q=${query}`);
            if (!fetched.ok) throw new Error("something wrong");
            const res: Response = await fetched.json();
            console.log(res.products);
            setDisplay(res.products);
            setLoader(false);
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
       <h1 className="text-3xl w-max m-auto">api search</h1>
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
              .map((v) => String(v))
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
                  .map((v) => String(v))
                  .join("")
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )

              .map((item) => (
                <article className="group max-w-sm rounded p-4 border-2 border-b-cyan-950 m-3 h-80 w-60 flex flex-col">
                  <div className="truncate group-hover:overflow-visible w-50 text-2xl text-cyan-700 h-18">
                    {item.title}
                  </div>
                  <hr />
                  <img
                    className="w-40 h-80 self-center"
                    src={item.thumbnail}
                    alt={item.title}
                  />
                  <hr />
                  <span className="text-2xl">$:{item.price}</span>
                </article>
              ))
          )}
        </div>
      )}
    </>
  )
}

export default Mine3
