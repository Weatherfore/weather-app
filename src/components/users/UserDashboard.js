import React from 'react';
import { useHistory } from 'react-router';
import '../common/common.css';

const UserDashboard = (props) => {
    const history = useHistory();

    const onGetUserById = () => {
        console.log('clicked');
        history.push('/getUserById');

    }

    const onDeleteUserById = () => {
        console.log('clicked');
        history.push('/deleteUserById');
    }

    const onUpdateUserById = () => {
        console.log('clicked');
        history.push('/updateUserById');
    }

    const onGetWeather = () => {
        console.log('clicked');
        history.push('/getWeatherByCityName');
    }
     
    const onLogout=()=>{
        console.log('clicked');
        history.push('/home');
    }

    return (
        <div class="dashboard_weather">
            <div class="container">
                <div class="row">
                    </div><h3 class="display-2 text-info d-flex align-items-right col-sm "><u><b>Welcome to the WeForWeather!!!</b></u></h3>
                </div>


           <div class="container">
               <div class="row"> 

           
                    <form className="form form-group form-dark  " onSubmit={onGetUserById}><div>
                        <button onClick={onGetUserById} className="btn btn-dark button1">Get User Details</button></div>
                    </form>
                
            <form className="form form-group form-dark" onSubmit={onDeleteUserById}><div>
                <button onClick={onDeleteUserById} className="btn btn-dark button1">Delete Your Account</button></div>
            </form>
            
            
            <form className="form form-group form-dark  " onSubmit={onUpdateUserById}>
                <div><button onClick={onUpdateUserById} className="btn btn-dark button1">Update Your Details</button></div>
            </form>
            
           
            <form className="form form-group form-dark " onSubmit={onGetWeather}>
                <div><button onClick={onGetWeather} className="btn btn-dark button1">Get Weather</button></div>
            </form>
            <button className="btn btn-dark" onClick={onLogout}>Logout</button>
            </div>
        
            </div> 
            </div>  
        
    )
}
export default UserDashboard;