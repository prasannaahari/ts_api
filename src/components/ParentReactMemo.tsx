import { useState } from "react"
import ChildReactMemo from "./ChildReactMemo"

function ParentReactMemo() {
    const [count,setCount]=useState<number>(0)
    const [theme,setTheme]=useState<string>("light")
  return (
    <>
      <h1>parent component</h1>
      <button className="border" onClick={()=>setCount(count+1)}>increrment</button> <br />
      <button className="border" onClick={()=>setTheme(theme==="light"?"dark":"light")}>theme toggle</button>
      <h1 className="text-3xl text-red-700">{theme}</h1>

      <ChildReactMemo count={count}/>
    </>
  )
}

export default ParentReactMemo
