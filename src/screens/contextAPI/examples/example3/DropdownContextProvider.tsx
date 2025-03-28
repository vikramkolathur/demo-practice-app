import React, { ReactNode, useState } from 'react';
import DropdownContext from './DropdownContext';

  const DropdownContextProvider : React.FC<{children:ReactNode}> =({children})=> {
  const [value,setValue] = useState<string>("");

  return (
   <DropdownContext.Provider value={{value,setValue}}>
    {children}
   </DropdownContext.Provider>
  )
}

export default DropdownContextProvider;