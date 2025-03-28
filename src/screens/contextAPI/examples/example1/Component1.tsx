    import { ChangeEvent, useState } from "react"
    import UserContext from "./UserContext";
    import Component2 from "./Component2";

    function Component1() 
    {
    const [userName,setUserName] = useState("Vikram");

    const onTextChanged = (e: ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        setUserName(e.target.value);
    }

    return (
        <div className="bg-gray-200 p-4 mx-16 space-y-4">
            <UserContext.Provider value={{userName}}>
                <br/><br/>
                <h1>Component1 :User name is {userName}</h1>
                <input type="text" placeholder="username" 
                className="shadow appearance-none border rounded w-[30%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={onTextChanged}></input>
                <Component2/>
            </UserContext.Provider>
        </div>
    )
    }

    export default Component1;