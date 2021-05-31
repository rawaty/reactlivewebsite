import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from "react-router-dom";
import logo from '../logo.jpg';

const Navbar=()=>{
    return(
        <>
         <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg p-3 mb-5 bg-body rounded main_nav">
  <NavLink className="navbar-brand" to="#"><img className="nav_logo" src={logo} alt="logo"/></NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/College">College</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Search">Search</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/About">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Contact">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Signup">Signup</NavLink>
      </li>
     
      
    </ul>
    
  </div>
</nav>   
           
        </>
    );
}
export default Navbar;