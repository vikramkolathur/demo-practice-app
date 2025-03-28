import React from "react";


interface CounterContextType {
    count: number;
    increase: () => void;
    decrease: () => void;
  }

const defaultValue: CounterContextType = {
    count: 0,
    increase: () => {},
    decrease: () => {},
  };

const CounterContext = React.createContext<CounterContextType>(defaultValue);

export default CounterContext;