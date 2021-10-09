import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import WeatherService from '../service/WeatherService';
import News from './News';

const Header =() =>{
    return (
      <header class="header sticky-top">
      <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div class="container">
              <Link className="navbar-brand" to="/home">
                  <img src="https://i.pinimg.com/originals/d9/d2/82/d9d282bfd1842ef06e706a12679e7e49.jpg"
                      height="40px" alt="WeForWeather" />
                   <span class="font-italic">  WeforWeather</span>   
              </Link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                  <ul class="navbar-nav ml-auto">

                      <li className="nav-item">
                          <Link className="nav-link" to="/News" >Current News</Link>
                      </li>
                      {/* <li className="nav-item">
                          <Link className="nav-link" to="/WeatherService" >Current Weather</Link>
                      </li> */}
                      
                  </ul>
              </div>
          </div>
      </nav>
  </header>
);
}
export default Header;