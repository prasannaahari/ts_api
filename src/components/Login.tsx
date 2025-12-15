import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [fallback,setFallback]=useState<string|null>(null)
  
  function handleClick() :any{
    if (password == "123456789") {
      navigate("/successLog");
    } else {
      setFallback("wrong password")
    }
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-1">
        <h1 className="text-5xl text-amber-900 font-mono ">Login</h1>
        <input
          type="text"
          className="border-2 rounded-2xl mt-10 text-center "
          placeholder="enter password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <p className="1xl">123456789</p>
        <button
          className="rounded-2xl p-1 border-2 cursor-pointer hover:bg-amber-400 font-bold"
          onClick={()=>handleClick()}
        >
          Login
        </button>
        <p className="text-red-800 text-3xl">{fallback}</p>
      </div>
    </>
  );
}

export default Login;
