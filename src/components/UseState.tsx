import { useState } from "react";

function UseState() {
  const [kolor, setKolor] = useState<string>("white");
  return (
    <>
      <div style={{ backgroundColor: kolor, height: "800px", width: "100%" }}>
        hi
        <button onClick={() => setKolor("grey")} className="border-2">
          change color
        </button>
        <button onClick={() => setKolor("blue")} className="border-2">
          change to blue
        </button>
      </div>
    </>
  );
}

export default UseState;
