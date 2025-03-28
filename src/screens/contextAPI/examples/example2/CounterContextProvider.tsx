import React, { ReactNode, useState } from 'react';
import CounterContext from './CounterContext';

interface CounterContextProviderProps {
    children: ReactNode;
}

const CounterContextProvider:React.FC<CounterContextProviderProps> = ({children})=> {
const [count,setCount] = useState<number>(0);

const increase = ()=>{
    console.log("on Increase");
    setCount(count+1);
}

const decrease = ()=>{
    console.log("on decrease");
    setCount(count-1);
}

return (
    <CounterContext.Provider value={{count,increase,decrease}}>
        {children}
    </CounterContext.Provider>
  )
}

export default CounterContextProvider;