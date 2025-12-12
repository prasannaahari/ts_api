import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

interface Product{
    [key:string]:any
}


function Detail() {
    const {ids}=useParams<{ids:string}>()
    const [data,setData]=useState<Product|null>(null)
    

    useEffect(()=>{
        const one=async()=>{
            try{
                const res=await axios.get(`https://dummyjson.com/products/${ids}`)
                setData(res.data)
                console.log(res.data)
            }catch(err){
                console.log(err)
            }finally{
                console.log("done")
            }
        }
        one()
    },[ids])
    
  return (
    <>
      <article className="m-auto p-5 border-3 rounded-sm w-100 shadow-2xl mt-20">
        <h1 className="text-3xl text-indigo-600 pb-5">{data?.title}</h1>
        <hr />
        <img src={data?.thumbnail} alt={data?.title} className="w-3/4 mx-auto" />
        <hr />
        <p className="text-s p-5">{data?.description}</p>
        <hr/>
        <p className="text-xl mx-auto w-1/2">Price: $ {data?.price}</p>
      </article>
    </>
  )
}

export default Detail
