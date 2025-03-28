import { createContext } from "react";
interface DropdownInterface{
    value : string;
    setValue : React.Dispatch<React.SetStateAction<string>>
}
const drodownInterfaceVal = {
    value:"",
    setValue: ()=>{}
}

const DropdownContext = createContext<DropdownInterface>(drodownInterfaceVal);

export default DropdownContext;