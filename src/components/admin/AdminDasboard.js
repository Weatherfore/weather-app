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
        <div class="container container-fluid position-relative admin_dashboard">

            <h3 class="display-2 text-info d-flex align-items-right ">Welcome to the WeForWeather!!!</h3>
            <nav class="nav flex-column nav-pill ">
            <form className="form form-group form-dark row mt-3" onSubmit={onGetAdminById}>
                <div><button onClick={onGetAdminById} className="btn btn-primary button1">Get Admin by Id</button></div>
            </form>

            <form className="form form-group form-dark row mt-3" onSubmit={onGetAllAdmins}>
                <div><button onClick={onGetAllAdmins} className="btn btn-primary button1">Get All Admins</button></div>
            </form>

            <form className="form form-group form-dark row mt-3" onSubmit={onDeleteAdminById}>
                <div><button onClick={onDeleteAdminById} className="btn btn-primary button1">Delete Admin By Id</button></div>
            </form>

            <form className="form form-group form-dark row mt-3" onSubmit={onUpdateAdminById}>
                <div><button onClick={onUpdateAdminById} className="btn btn-primary button1">Update Admin By Id</button></div>
            </form>

            <form className="form form-group form-dark row mt-3" onSubmit={onAddAdmin}>
                <div><button onClick={onAddAdmin} className="btn btn-primary button1">Add Admin</button></div>
            </form>

            <span class="display-4 bg-info text-light">Control User methods</span>
            <form className="form form-group form-dark row mt-3" onSubmit={onGetUserByIdFromAdmin}>
                <div><button onClick={onGetUserByIdFromAdmin} className="btn btn-primary button1">Get user by Id from Admin</button></div>
            </form>

            <form className="form form-group form-dark row mt-3" onSubmit={onGetAllUsers}>
                <div><button onClick={onGetAllUsers} className="btn btn-primary button1">Get All Users</button></div>
            </form>

            <form className="form form-group form-dark row mt-3" onSubmit={onDeleteUserByIdFromAdmin}>
                <div><button onClick={onDeleteUserByIdFromAdmin} className="btn btn-primary button1">Delete user by Id</button></div>
            </form>
          </nav>
        </div>
    )
}
export default AdminDashboard;