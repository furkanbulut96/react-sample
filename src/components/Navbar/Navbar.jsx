import React from 'react'
import navStyle from "../Navbar/Navbar.scss"
import  {NavLink}  from "react-router-dom";
const Navbar = () => {



  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }) => ({ color: isActive && "#ff652f" })}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => ({ color: isActive && "#ff652f" })}
      >
        About
      </NavLink>
      <NavLink
        to="/projects"
        style={({ isActive }) => ({ color: isActive && "#ff652f" })}
      >
        My Projectcs
      </NavLink>
      <NavLink
        to="/contact"
        style={({ isActive }) => ({ color: isActive && "#ff652f" })}
      >
        Contact
      </NavLink>
      {/* <a href="#">about</a>
      <a href="#">my projects</a>
      <a href="#">contact</a> */}
    </nav>
  );
}

export default Navbar