import { FC, useState } from "react"

interface ChildProps {
  childName: string;
  tokenNumber: number;
  userDetails: { userId: string; userName: string };
  funcData:(childName : string)=>void;
  getDataFromChild :(countNum:number) =>void;
}

const ChildComponent:FC<ChildProps> = ({childName, tokenNumber, userDetails,funcData,getDataFromChild}) => {
    console.log("childName "+childName)
    const [countNum,setCountNum] = useState(0);

    function setDataCountToParent(){
       setCountNum(countNum+1);
       getDataFromChild(countNum);
    }
  return (
    <>
    <div className='w-1/2 min-h-screen float-left text-center bg-[#DBDADA]  items-center justify-center'>
    <p>Data from partent : {childName}</p>
    <p>Token Number: {tokenNumber}</p>
    <br/>
<p>UserId:  {userDetails.userId} - User Name: {userDetails.userName}</p> <br/>
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>funcData(childName)}>sendDataBackToParent</button><br/><br/>
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={setDataCountToParent}>sendDataBackToParent2</button>
    </div>
    </>
  )
}

export default ChildComponent