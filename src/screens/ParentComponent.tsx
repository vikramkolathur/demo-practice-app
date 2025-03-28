import { FC, useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent:FC=()=> 
{
    const [getChildData,setChildData]=useState(0);
    const [getChildDataBack,setgetChildDataBack]=useState("");
    const childName: string = "child 1"; 
    const tokenNumber: number = 1234;
    const userDetails: {userId: string; userName: string} = {
    userId: "SE123", userName: "Vikram"
 }

const funcData = (childName:string):void=>{
  console.log(childName);
  setgetChildDataBack(childName);
}

const getDataFromChild = (countNum:number):void=>{
    console.log("Data from child "+countNum);
    setChildData(countNum);
}

return (
    <>
    <div className='w-1/2 min-h-screen float-left text-center bg-slate-500 items-center justify-center'><br/><br/>
    <p>ParentComponent</p>   
    <p>data from child as count {getChildData}</p> 
    <p>data sent from child and back to parent{getChildDataBack}</p>
    </div>
    <ChildComponent childName={childName} userDetails={userDetails} tokenNumber={tokenNumber} funcData ={funcData} getDataFromChild={getDataFromChild}/>
    </>
  )
}

export default ParentComponent;