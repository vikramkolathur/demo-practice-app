import { useContext } from "react";
import CounterContext from "./CounterContext";

function Buttons() {
    const {count,increase, decrease} = useContext(CounterContext);

  return (
    <div className="bg-gray-200 p-4 mx-16 space-y-4">
      <button onClick={decrease} type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-10">-</button>
      <span>count is {count}</span>
      <button onClick={increase} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-10">+</button>
    </div>
  )
}

export default Buttons;