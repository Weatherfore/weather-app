import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../common/common.css';
const GetWeather = () => {

    const dispatch = useDispatch();
    // const weatherData = useSelector((state) => state.weather.weatherState);

    const [displayOneWeather, setDisplayOneWeather] = useState([]);

    // {
    //     date: '',
    //     minTemp: 0.0,
    //     maxTemp: 0.0,
    //     message: ''
    // }

    const [oneWeather, setOneWeather] = useState({
        cityName: ''
    });


    const handleOneWeatherData = (evt) => {
        setOneWeather({
            ...oneWeather,
            [evt.target.name]: evt.target.value
        });
    }

    const submitGetWeatherByCityName = (evt) => {
        console.log(oneWeather);
        axios.get(`http://localhost:8086/weather/getForcast?cityName=${oneWeather.cityName}`)
            .then(async (response) => {
                //await dispatch(getWeatherByCityName(response.data));
                setDisplayOneWeather(response.data);
                console.log(response.data);
            }).catch(async (error) => {
               console.log(error.message);
               alert('Invalid city name ! Enter a valid city name.')
            });
        evt.preventDefault();
    }

    return (
        <div className="weather_container" >
            <h1 className="display-1 text-primary p-3 mb-2 font-weight-bold justify-content-center "><u>Get Weather</u></h1>

            <div >
                
                <form className="form form-group form-dark row mt-3 span font-weight-bold font-italic jumbotron d-flex justify-content-center border border-success" data-testid="invalid-form">
                    <p class="text-info">Enter the valid city name</p>
                    <input
                        type="text"
                        id="cityName"
                        //adding test-jest
                        data-testid="cityname"
                        name="cityName"
                        className="form-control mb-3"
                        value={oneWeather.cityName}
                        placeholder="City Name"
                        onChange={handleOneWeatherData}
                    />
                    <input
                        type="submit"
                        id="submit"
                        data-testid="submitCity"
                        name="submit"
                        className="btn btn-primary mb-3 submit2 border border-success submit_button"
                        value="Get Weather Details"
                        onClick={submitGetWeatherByCityName}
                    />
                </form>
                {/* conditional rendering with displayOneEmp and setDisplayOneEmp */}
                <div className="container p-2">
                <table class="table table-hover table-light table-responsive jumbotron" cell padding="0" cell spacing="0">
                    <thead>
                    <tr>
                        <th class="col-sm-2"><u>Date</u></th>
                        <th class="col-sm-2"><u> minTemp</u></th>
                        <th class="col-sm-2"><u>maxTemp</u></th>
                        <th class="col-sm-1"><u>Message</u></th>
                    </tr>
                    </thead>
                    {displayOneWeather.map((d, k) => {
                            return (
                                <div k={k}>
                                    
                                    <tbody>
                                        <tr>
                                       <td class="col-sm-2" >{d.date} </td>
                                       <td class="col-sm-2" >{d.minTemp}</td> 
                                       <td class="col-sm-2">{d.maxTemp}</td>
                                       <td class="col-sm-2">{d.message}</td>
                                         </tr>
                                    </tbody>
                                </div>
                            )
                        })}
                    </table>
                    
                        
                    </div>
                </div>
                
            </div>
            
        
    );
}
export default GetWeather;