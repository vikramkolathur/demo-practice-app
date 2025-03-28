import React, { useEffect, useRef, useState } from 'react';

const PracticeuseStateHook:React.FC=()=> {
const [count,setCount] = useState(0); 
const [textColor,setTextColor] = useState(""); 

const  inputRef1=useRef<HTMLInputElement>(null);
const inputRef2= useRef<HTMLInputElement>(null);


const onBtnClickCount = ()=>{
    setCount(count+1);
}

useEffect(()=>{
  if(count == 0){
    setTextColor("green");
  }
  else if(count >= 1 && count <= 5){
    setTextColor("yellow");
  }
  else if(count <= 10){
    setTextColor("orange");
  }
  else if(count > 10){
    setTextColor("Red");
  }
},[count]);

const onRefChangeForInput1 = ()=>{
  if(inputRef2.current){
    inputRef2.current.focus();
  }
}

const onRefChangeForInput2 = ()=>{
  if(inputRef1.current){
    inputRef1.current.focus();
  }
}

return (
    <>
        <h1 className='bold text-[20px]' style={{color:textColor}}>count is: {count}</h1>
        <button onClick={onBtnClickCount}>counter</button>
        <input type="text" ref={inputRef1}  onChange={onRefChangeForInput1}/>
        <input type="text" ref={inputRef2} onChange={onRefChangeForInput2}/>
    </>
  )
}

export default PracticeuseStateHook;

