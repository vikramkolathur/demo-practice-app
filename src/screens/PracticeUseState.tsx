import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';

interface UserData{
    name:string;
    age:number;
}

export interface UserListData {
    id: string
    firstName: string
    lastName: string
    age: number
    gender: string
    email: string
  }

 const PracticeState:FC= () => {
 const [initialVal, setInitialVal] = useState<number>(0);
 const [text, setText] = useState<string>("");
 const [userData,setUserData] = useState<UserData>({name:"",age: 0});
 const [arrInitData, setarrInitData] = useState<string[]>([]);
 const [lazyInitValue,setLazyInitValue] = useState<number>(LazyInitilization);
 const [boolInitVal,setBoolInitVal] = useState<boolean>(false);
 const [userId,setUserId] = useState<string>("");
 const [userIdList, setuserIdList] = useState<UserListData[]>([]);


useEffect(()=>{
    getUserDataObj();
    getUserDataObjBasedOnId();
    return()=>{
        console.log("unmounting using useeffect");
    }
 },[userId]);

 const getUserDataObj =async ()=>{
    try {
        const userData1 = await axios.get("http://localhost:3000/userData");
        console.log(userData1.data);
        setuserIdList(userData1.data);
    } catch (error) {
        console.log(error);
    }
 }

 const getUserDataObjBasedOnId =async ()=>{
    try {
        const userData = await axios.get("http://localhost:3000/userData/"+userId);
        console.log(userData);
    } catch (error) {
        console.log(error);
    }
 }

 function btnOnclick()
 {
    setInitialVal(initialVal => initialVal+1);
 }

 function inputSetTextData(e:React.ChangeEvent<HTMLInputElement>){
       setText(e.target.value);
 }

 function onChangeHandleObj(e:React.ChangeEvent<HTMLInputElement>){
    setUserData({
        ...userData, [e.target.name]:e.target.value
    })
 }

 function addarrInitData(){
    setarrInitData([...arrInitData,"Task "+(arrInitData.length+1)])
    //setarrInitData([...arrInitData].push());
}

function removearrInitData(index:number){
    setarrInitData(arrInitData.filter((_, i)=> !(i === index)));
    //setarrInitData([...arrInitData].push());
}

function LazyInitilization(){
    return 20;
}

function lazyBtnOnclick()
 {
    setLazyInitValue(lazyInitValue => lazyInitValue+1);
 }

 function onBtnTurnedOnAndOff()
 {
    if(boolInitVal === false){
        setBoolInitVal(true)
    }else{
        setBoolInitVal(false);
    }
 }

 function selectUserNameFromList(e:React.ChangeEvent<HTMLSelectElement>){
    setUserId(e.target.value);
 }

return (
    <div>
        <div className="bg-gray-200 p-4 mx-16 space-y-4">
            <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={()=>btnOnclick()}>practice state</button><br/>
            <h1>{initialVal}</h1>
        </div>
  
        <div className="bg-gray-200 p-4 mx-16 space-y-4">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">text example</label>
            <input type='text' value={text} onChange={inputSetTextData} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
            <h1>{text}</h1>
        </div>
   
        <div className="bg-gray-200 p-4 mx-16 space-y-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name: </label>
            <input type='text' value={userData.name} name="name" onChange={onChangeHandleObj} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input><br/>
            <h1>{userData.name}</h1>

            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age : </label>
            <input type='text' value={userData.age} name="age" onChange={onChangeHandleObj} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
            <h1>{userData.age}</h1>
        </div><br/>
        <div>
        <button type='button' onClick={addarrInitData} className="bg-blue-500 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4">
            Add
        </button>
      
        <ul>
          {
            arrInitData.map((prevData, index)=>{
                return(
                    <li key={index}>{prevData} <button  type='button' onClick={()=> removearrInitData(index)} >
                    X
                </button></li>
                )
            })
          }
        </ul>
        </div>

        <div className="bg-gray-200 p-4 mx-16 space-y-4">
            <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={lazyBtnOnclick}>Lazy state</button><br/>
            <h1>{lazyInitValue}</h1>
        </div>

        <div className="bg-gray-200 p-4 mx-16 space-y-4">
            <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={onBtnTurnedOnAndOff}>Switch</button><br/>
            <h1>Button is : {boolInitVal == true ? "ON" : "Off"}</h1>
        </div>

        <div className="bg-gray-200 p-4 mx-16 space-y-4">
          <select value={userId} onChange={selectUserNameFromList} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          <option key="" value="">Choose</option>
            {
                userIdList.map((user)=>{
                    return(
                        <option key={user.id} value={user.id}>{user.firstName}</option>
                    );
                })
            }
          </select>
          <h1>{`User is is ${userId}`}</h1>
        </div>
    </div>
  )
}

export default PracticeState;