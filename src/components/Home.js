import React from 'react';
import '../App.css';

const Home=()=>{
    return(
        <div class="container pt-17">
  <h1 class="display-3 font-italic font-weight-bolder text-success">Welcome to WeForWeather !</h1>
  <dl>
  <dt class="text-info font-size:13;">"Sunshine is delicious, rain is refreshing, wind braces us up, snow is exhilarating; there is really no such thing as bad weather, only different kinds of good weather."</dt>
  <dd class="text-muted ">- John Ruskin</dd>
  </dl>
  <div class="row">
  <div class="col-sm-4 jumbotron jumbotron-fluid bg-muted border border-danger rounded-right">.col</div>
  <div class="col-sm-4 jumbotron jumbotron-fluid bg-light border border-sucess rounded-right">.col</div>
  <div class="col-sm-4 jumbotron jumbotron-fluid bg-muted border border-danger rounded-right">.col</div>
  </div>
  </div>
  
        
    );
}
export default Home;