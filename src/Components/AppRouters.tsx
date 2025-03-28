import { Route, Routes } from "react-router-dom";
import HomePage from "../screens/HomePage";
import AboutUs from "../screens/AboutUs";
import Contacts from "../screens/Contacts";
import LoginPage from "../screens/LoginPage";
import PracticeState from "../screens/PracticeUseState";
import { MainComponent } from "../screens/MainComponent";
import NotFound from "../screens/NotFound";
import PracticeHooks from "../screens/PracticeHooks";

//use <BrowserRouter> in main.tsx
function AppRouters() {
return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/aboutUs" element={<AboutUs/>}/>
        <Route path="/contactDetails" element={<Contacts/>}/>
        <Route path="/practiceHooks" element={<PracticeHooks/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/practiceState" element={<PracticeState/>}/>
        <Route path="/mainComponent" element={<MainComponent/>}/>
        <Route path="/notFound" element={<NotFound/>}/>
    </Routes>
);
}
export default AppRouters;
