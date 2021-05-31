import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import College from './components/College';
import Search from './components/Search';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


const App=()=>{
return(
  <>
<Navbar/>
<Route exact path="/">
  <Home/>
</Route>

<Route path="/College">
  <College/>
</Route>

<Route path="/Search">
  <Search/>
</Route>

<Route path="/About">
  <About/>
</Route>

<Route path="/Contact">
  <Contact/>
</Route>

<Route path="/Login">
  <Login/>
</Route>
<Route path="/Signup">
  <Signup/>
</Route>


  </>
);
}

export default App;
