import { useDispatch, useSelector } from "react-redux"
import { increment } from "../../features/counterSlice"
import type { Rootstate } from "../../store/Store"

function CounterRtk() {
    const count=useSelector((state:Rootstate)=>state.counter)
    const dispatch=useDispatch()

  return (
    <>
      <h1 className="text-5xl">{count}</h1>
      <button onClick={()=>dispatch(increment())} className="border-2 p-2 text-3xl font-bold mt-5">+</button>
    </>
  )
}

export default CounterRtk
