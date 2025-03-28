import { useContext } from "react"
import UserContext from "./UserContext";

function Component5() {
const userContext = useContext(UserContext);
console.log(useContext);
  return (
    <div>
        <h1>Component5 : data from component1  {userContext.userName}</h1>
    </div>
  )
}

export default Component5