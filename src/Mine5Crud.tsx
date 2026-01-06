import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Api = {
  products: Products[];
};

type Products = {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
};

type NewProduct={
    title:string;
    thumbnail:string;
    price:number
}

function Mine5Crud() {
  const [display, setDisplay] = useState<Products[]>([]);
  const [newProduct, setNewProduct]=useState<NewProduct>({title:"", thumbnail:"", price:0})
  const navigate=useNavigate()

  useEffect(() => {
    const fetchFn = async () => {
      const res = await axios.get<Api>("https://dummyjson.com/products");
      console.log(res.data);
      setDisplay(res.data.products);
    };
    fetchFn();
  }, []);

  function handleClick(id:number){
    navigate(`/products/${id}`)

  }

async  function Add(e:React.FormEvent){
    e.preventDefault()
    const addingNew=await axios.post("https://dummyjson.com/products/add",newProduct)
    setDisplay(prev=>[...prev,addingNew.data])

    setNewProduct({title:"", thumbnail:"", price:0})

  }
  return (

 <>
 {/* inputform to post a new product */}
 <form className="border p-4 my-4" onSubmit={Add}>
    <input type="text" placeholder="title" className="border p-1 m-1" onChange={e=>setNewProduct(prev=>({...prev,title:e.target.value}))} value={newProduct.title}/>

    <input type="text" placeholder="image link" className="border p-1 m-1" onChange={e=>setNewProduct(prev=>({...prev,thumbnail:e.target.value}))} value={newProduct.thumbnail}/>

    <input type="number" placeholder="price" className="border p-1 m-1" onChange={e=>setNewProduct(prev=>({...prev, price:+e.target.value}))} value={newProduct.price}/>
    <button className="p-1 bg-green-400 cursor-pointer">add</button>
 </form>

 {/* display them */}
    <div className="w-9/10 border-red-950 flex flex-wrap text-center m-auto">
      {display.map((item) => (
        <article key={item.id} className="w-1/4 border border-red-500 m-2">
          <h2>{item.title}</h2>
          <hr className="w-3/4 m-auto" />
          <img src={item.thumbnail} alt={item.title} />
          <hr className="w-3/4 m-auto" />
          <p>{item.price}</p>
          <button className=" p-1 rounded m-4 bg-blue-300 cursor-pointer" onClick={()=>handleClick(item.id)}>view</button>
        </article>
      ))}
    </div></>
  );
}

export default Mine5Crud;
