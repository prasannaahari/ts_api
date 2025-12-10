import React from "react"

type Props={
    count:number
}
function ChildReactMemo({count}:Props) {
    console.log("child re-renders")
  return (
    <>
      <h1 className="text-5xl text-blue-700">{count} </h1>
    </>
  )
}

export default React.memo(ChildReactMemo)