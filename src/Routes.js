import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import News from './components/News';
import WeatherService from './service/WeatherService';
const Routes =()=>{
    return(
        <div>
            <Router>
                <div>
                    <Header />
                    <div>
                        <Switch>
                            <Route exact path="/"><Home/></Route>
                            {/* <Route path="/"><WeatherService/></Route> */}
                            <Route path="/"><News/></Route> 
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        </div>
    )
}
export default Routes;