import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


interface Product{
        id:number;
        title:string;
        thumbnail:string;
        description:string;
        price:number;
        returnPolicy:string
}

function Mine5Params() {
    const [display,setDisplay]=useState<Product|null>(null)
    const {id}=useParams<{id:string}>()

    useEffect(()=>{
       async function fetchFn(){
                const res=await axios.get<Product>(`https://dummyjson.com/products/${id}`)
                console.log(res.data)
                setDisplay(res.data)
        }
        fetchFn()
    },[id])

  return (
    <div>
      
        <article key={display?.id}>
            <h1>{display?.title}</h1>
            <hr />
            <img src={display?.thumbnail} alt={display?.title} />
            <hr />
            <p>{display?.description}</p>
            <hr />
            <p>{display?.price}</p>
            <p>return Policy:{display?.returnPolicy}</p>
        </article>
      
    </div>
  )
}

export default Mine5Params
