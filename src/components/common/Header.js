import React from 'react';
import {Link} from 'react-router-dom';
import Login from './Login';
import News from './News';
import AdminLogin from './AdminLogin';
import UserRegistration from '../users/UserRegistration';
import AdminRegistration from '../admin/AdminRegistration';
const Header =() =>{
    return (
      <header class="header sticky-top">
      <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-info">
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
                    <li className="nav-item">
                          <Link className="nav-link" to="/Login" >User Login</Link>
                      </li> 
                      <li className="nav-item">
                          <Link className="nav-link" to="/register" >User Registration</Link>
                      </li> 
                      <li className="nav-item">
                          <Link className="nav-link" to="/AdminLogin" >Admin Login</Link>
                      </li> 
                      
                  </ul>
              </div>
          </div>
      </nav>
  </header>
);
}
export default Header;