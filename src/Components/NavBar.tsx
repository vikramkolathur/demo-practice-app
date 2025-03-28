import React from "react";
import { Link } from "react-router-dom";

const NavBar:React.FC = ()=>{
return(
    <>
    <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/aboutUs">About</Link>
        {/* <a href="aboutUs">About</a> */}
      </li>
      <li> 
        <Link to="/contactDetails">Contact</Link>
      </li>
      <li>
        <Link to="/practiceHooks">Practice Hooks</Link>
      </li>
      <li>
        <Link to="/practiceState">Practice State</Link>
      </li>
      <li>
        <Link to="/mainComponent">Main Component</Link>
      </li>
      <li>
        <Link to="/clientSideRouter">Routing </Link>
      </li>
      <li>
        <Link to="/data">Data </Link>
      </li>
      <li>
        <Link to="/contextApi">Context API </Link>
      </li>
      <li className="ml-auto" >
        <Link to="/signUp">Signup</Link>
      </li>
      <li className="ml-auto" >
        <Link to="/login">Login</Link>
      </li>
    </ul>
  </nav>
  </>
)
}

export default NavBar;