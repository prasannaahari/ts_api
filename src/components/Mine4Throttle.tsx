import { useEffect, useState } from "react";
interface Response {
  products: ProductRes[];
}
interface ProductRes {
  [key: string]: any;
}
let timer: number | undefined;
function Mine4() {
  const [display, setDisplay] = useState<ProductRes[]>([]);
  const [query, setQuery] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    if (timer) return;
    const fetchData = async () => {
      try {
        setLoader(true);
        const fetched = await fetch(
          `https://dummyjson.com/products/search?q=${query}`
        );
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

    timer = window.setTimeout(() => {
      timer = undefined;
    }, 1000);

    return () => {
      if (timer) clearTimeout(timer);
      timer = undefined;
    };
  }, [query]);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
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
          {display.map((item) => (
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
          ))}
        </div>
      )}
    </>
  );
}

export default Mine4;
