import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Post = {
  id: number;
  title: string;
  body: string;
};

function ParamsCart() {
  const [display, setDisplay] = useState<Post[]>([]);
  const navigate=useNavigate()
  useEffect(() => {
    const fetchFn = async () => {
      const res = await axios.get<Post[]>(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setDisplay(res.data);
    };
    fetchFn();
  }, []);

  function click(id:number){
            navigate(`/posts/${id}`)
  }
  return (
    <div className="container border border-black">
      {display.map((item) => (
        <article key={item.id} className="m-5 w-3/4 border-3 mx-auto">
          <h1 className="text-xl text-center">{item.title}</h1>
          <hr className="w-1/2 m-auto"/>
          <p>{item.body}</p>
          <button className="border w-1/4" onClick={()=>click(item.id)}>add</button>
        </article>
        
      ))}
    </div>
  );
}

export default ParamsCart;
