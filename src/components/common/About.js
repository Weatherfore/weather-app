import React from 'react';


const About = () => {
    return (
        <div >
            <title>About Us</title>
            <p><br/><br/></p>
            <div class="card bg-dark text-white">
                <img src="https://bit.ly/2X58QUS" style={{height:'25rem'}} class="card-img"  />
                <div class ="card-img-overlay">
                <h1 class ="card-title">WeForWeather</h1>
                <h2 class = "card-subtitle mb-2 text muted">Happy Forecasting!</h2>
                <p class ="card-text">When it comes to weather forecasting, WeForWeather is one of the most popular weather sites we know. Searching for the weather report on this site is an easy task: you have to head to the website, and it will provide you with the atmospheric conditions as per your entered location. User Can easily register and login to see the weather details like Minimum temperature, Maximum temperature and rain level with the corresponding message. </p>
                <p class ="card-text"></p>
                <a href='http://localhost:3000/contact' class="btn btn-primary">Contact</a>
                </div>
            </div>

        </div>
    );
}

export default About;