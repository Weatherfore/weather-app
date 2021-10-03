import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import News from './News';

const Header =() =>{
    return (
    <div>
        <header class ="header sticky-top  ">
            <h1 class="text-light bg-info font-italic font-weight-bolder">WeForWeather</h1>
            <nav class="navbar navbar-expand-sm bg-info navbar-dark text-light">
 
  <a class="navbar-brand" >
    <img src="https://www.kindpng.com/picc/m/14-144048_cute-sun-and-clouds-clipart-hd-png-download.png" height="40px" alt="Weather" />
  </a>

  <ul class="navbar-nav">
    <li class="nav-item">
    <Link className="nav-link" to=" /News" >News</Link>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link 2</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link 3</a>
    </li>
  </ul>
</nav>

<div class="container-fluid">
 
</div>
   

        </header>
    </div>
    );
}
export default Header;