import React, { FC} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage';
import AboutUs from '../AboutUs';
import Contacts from '../Contacts';
import NavBar from '../../Components/NavBar';
import LoginPage from '../LoginPage';
import PracticeState from '../PracticeUseState';
import { MainComponent } from '../MainComponent';
import UseNavigateRouter from '../UseNavigateRouter';
import NotFound from '../NotFound';
import ProtectedRoute from '../ProtectedRoute';
import ContextApi from '../ContextApi';
import PracticeuseStateHook from '../hooks/PracticeuseStateHook';



const SignUp = React.lazy(()=>import('../signup/SignUp'));


const ClientSideRouting:FC=()=> {

 /**************************Browser Router********************************/
  return(
    <BrowserRouter>
        <NavBar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/aboutUs" element={<AboutUs/>}/>
                <Route path="/contactDetails" element={<Contacts/>}/>
                <Route path="/practiceHooks" element={<PracticeuseStateHook/>}/>
                <Route path="/practiceState" element={<PracticeState/>}/>
                <Route path="/mainComponent" element={<MainComponent/>}/>
                <Route path='/clientSideRouter' element={<UseNavigateRouter/>}/>
                <Route path='*' element={<NotFound/>}/>
                <Route path='/contextApi' element={<ContextApi/>}/>
                <Route path="/signUp" element={<SignUp/>}/>
                <Route path="/login" element={<ProtectedRoute isAuthenticated={true}><LoginPage/></ProtectedRoute>}/>
            </Routes>
    </BrowserRouter>
  );

/*****************MemoryRouter*********************************************/

// return(
//     <MemoryRouter>
//         <NavBar/>
//             <Routes>
//                 <Route path="/" element={<HomePage/>}/>
//                 <Route path="/aboutUs" element={<AboutUs/>}/>
//                 <Route path="/contactDetails" element={<Contacts/>}/>
//                 <Route path="/ourProducts" element={<OurProducts/>}/>
//                 <Route path="/login" element={<ProtectedRoute isAuthenticated={false}><LoginPage/></ProtectedRoute>}/>
//                 <Route path="/practiceState" element={<PracticeState/>}/>
//                 <Route path="/mainComponent" element={<MainComponent/>}/>
//                 <Route path='/clientSideRouter' element={<UseNavigateRouter/>}/>
//                 <Route path='*' element={<NotFound/>}/>
//             </Routes>
//     </MemoryRouter>
//   );

/************************************* HashRouter************************************/
// return(
//     <HashRouter>
//         <NavBar/>
//             <Routes>
//                 <Route path="/" element={<HomePage/>}/>
//                 <Route path="/aboutUs" element={<AboutUs/>}/>
//                 <Route path="/contactDetails" element={<Contacts/>}/>
//                 <Route path="/ourProducts" element={<OurProducts/>}/>
//                 <Route path="/login" element={<ProtectedRoute isAuthenticated={false}><LoginPage/></ProtectedRoute>}/>
//                 <Route path="/practiceState" element={<PracticeState/>}/>
//                 <Route path="/mainComponent" element={<MainComponent/>}/>
//                 <Route path='/clientSideRouter' element={<UseNavigateRouter/>}/>
//                 <Route path='*' element={<NotFound/>}/>
//             </Routes>
//     </HashRouter>
// );
}

export default ClientSideRouting;