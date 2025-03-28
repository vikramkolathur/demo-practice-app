import { useContext } from "react";
import Component4 from "./Component4";
import UserContext from "./UserContext";

function Component3() {

const userData = useContext(UserContext);
  return (
    <>
    <h1>Component3 : data from component1 : {userData.userName}</h1>
    <Component4/>
    </>
  )
}

export default Component3;