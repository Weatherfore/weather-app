import React from 'react';
// import GetAdminById from './GetAdminById';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from 'react-router';
import '../common/common.css';

const AdminDashboard = (props) => {
    const history = useHistory();

    const onGetAdminById = () => {
        console.log('clicked');
        history.push('/getAdminById');

    }

    const onGetAllAdmins = () => {
        console.log('clicked');
        history.push('/viewAllAdmins');
    }

    const onDeleteAdminById = () => {
        console.log('clicked');
        history.push('/deleteAdminById');
    }

    const onUpdateAdminById = () => {
        console.log('clicked');
        history.push('/updateAdminById');
    }

    const onAddAdmin = () => {
        console.log('clicked');
        history.push('/adminRegister');
    }

    const onGetUserByIdFromAdmin = () => {
        console.log('clicked');
        history.push('/getUserByIdFromAdmin');
    }

    const onGetAllUsers = () => {
        console.log('clicked');
        history.push('/viewAllUsers');
    }

    const onDeleteUserByIdFromAdmin = () => {
        console.log('clicked');
        history.push('/deleteUserByIdFromAdmin');
    }


    return (
        <div class=" dashboard-admin">
            <div></div>
            <h3 class="display-2 text-info d-flex align-items-right text-light bg-info "><u>Welcome to the WeForWeather!!!</u></h3>
            <div class="container"> 
            <div class="row">
            <form className="form form-group form-dark row mt-3 col-sm" onSubmit={onGetAdminById}>
                <div><button onClick={onGetAdminById} className="btn btn-dark button2 ">Get Admin by Id</button></div>
            </form>
            
            <form className="form form-group form-dark row mt-3 col-sm" onSubmit={onGetAllAdmins}>
                <div><button onClick={onGetAllAdmins} className="btn btn-dark button2 ">Get All Admins</button></div>
            </form>

            <form className="form form-group form-dark row mt-3 col-sm " onSubmit={onDeleteAdminById}>
                <div><button onClick={onDeleteAdminById} className="btn btn-dark button2 ">Delete Admin By Id</button></div>
            </form>
            </div>
            </div>

            <div class="container"> 
            <div class="row">
            <form className="form form-group form-dark row mt-3 col-sm" onSubmit={onUpdateAdminById}>
                <div><button onClick={onUpdateAdminById} className="btn btn-dark button2  ">Update Admin By Id</button></div>
            </form>

            <form className="form form-group form-dark row mt-3 col-sm" onSubmit={onAddAdmin}>
                <div><button onClick={onAddAdmin} className="btn btn-dark button2 ">Add Admin</button></div>
            </form>
            </div>
            </div>
            <p class="display-4 bg-info text-light">Control User methods</p>
            <div class="container">
            <div class="row">
            <form className="form form-group form-dark row mt-3 col" onSubmit={onGetUserByIdFromAdmin}>
                <div><button onClick={onGetUserByIdFromAdmin} className="btn btn-dark button2 ">Get user by Id from Admin</button></div>
            </form>

            <form className="form form-group form-dark row mt-3 col" onSubmit={onGetAllUsers}>
                <div><button onClick={onGetAllUsers} className="btn btn-dark button2  ">Get All Users</button></div>
            </form>

            <form className="form form-group form-dark row mt-3 col" onSubmit={onDeleteUserByIdFromAdmin}>
                <div><button onClick={onDeleteUserByIdFromAdmin} className="btn btn-dark button2  ">Delete user by Id</button></div>
            </form>
            </div>
            </div>
        </div>
    )
}
export default AdminDashboard;