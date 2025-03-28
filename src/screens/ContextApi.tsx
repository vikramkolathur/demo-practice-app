import Component1 from "./contextAPI/examples/example1/Component1";
import Buttons from "./contextAPI/examples/example2/Buttons";
import CounterContextProvider from "./contextAPI/examples/example2/CounterContextProvider";
import DropdownContextProvider from "./contextAPI/examples/example3/DropdownContextProvider";
import DropdownElement from "./contextAPI/examples/example3/DropdownElement";

function ContextApi() {
  return (
    <div className="mt-4">
        <Component1/>
        <CounterContextProvider>
           <Buttons/>
        </CounterContextProvider>
        <DropdownContextProvider>
          <DropdownElement/>
        </DropdownContextProvider>
    </div>  
    )
}

export default ContextApi;