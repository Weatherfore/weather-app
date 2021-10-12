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
        history.push('/getWeather');
    }
  

    return (
        <div class="container">

            <h3 class="display-2 text-info d-flex align-items-right ">Welcome to the WeForWeather!!!</h3>
           <div class="card card_container">
               <div class="card-body">
            <form className="form form-group form-dark row mt-3" onSubmit={onGetUserById}>
                <div><button onClick={onGetUserById} className="btn btn-primary button1">Get User by Id</button></div>
            </form>
            </div>
            </div>
            <form className="form form-group form-dark row mt-3" onSubmit={onDeleteUserById}>
                <div><button onClick={onDeleteUserById} className="btn btn-primary button1">Delete User By Id</button></div>
            </form>

            <form className="form form-group form-dark row mt-3" onSubmit={onUpdateUserById}>
                <div><button onClick={onUpdateUserById} className="btn btn-primary button1">Update User By Id</button></div>
            </form>

            <form className="form form-group form-dark row mt-3" onSubmit={onGetWeather}>
                <div><button onClick={onGetWeather} className="btn btn-primary button1">Get Weather</button></div>
            </form>
          
        </div>
    )
}
export default UserDashboard;