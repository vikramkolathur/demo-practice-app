import { ChangeEvent, useContext } from "react"
import DropdownContext from "./DropdownContext";

function DropdownElement() {

  const {value,setValue} = useContext(DropdownContext);

  const onDropdownValSelected = (e:ChangeEvent<HTMLSelectElement>)=>{
    e.preventDefault();
    setValue(e.target.value);
  }
  return (
    <div>
        <select onChange={onDropdownValSelected}  className="shadow appearance-none border rounded w-[30%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option>test 1</option>
            <option>test 2</option>
            <option>test 3</option>
            <option>test 4</option>
            <option>test 5</option>
            <option>test 6</option>
            <option>test 7</option>
            <option>test 8</option>
        </select>
        <p>Selected Value is : {value}</p>
    </div>
  )
}

export default DropdownElement;