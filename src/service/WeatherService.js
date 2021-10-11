import React from "react";
import Titles from "../components/common/Titles";
import Weather from "../components/common/Weather";
import Form from "../components/common/Form";
import '../App.css';

const API_KEY = "98a24aa90de6f048c7934a584433a02d";

class WeatherService extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    //var cityPattern=new RegExp(/[A-Za-z]+$/);
    //var countryPattern=new RegExp(/[A-Za-z]+$/);
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
     } //else if(!cityPattern.test(this.state.city.city)&&!countryPattern.test(this.state.country.country) ) {
    //  this.setState({
    //     error: "Values are incorrect"
    //  });
     //}
    else{
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please Enter the value"
      });

    }

  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default WeatherService;