import { createContext } from "react";

interface UserInterface{
    userName : string
}

const initUserInterfaceData={
    userName : ""
}

const UserContext = createContext<UserInterface>(initUserInterfaceData);

export default UserContext;