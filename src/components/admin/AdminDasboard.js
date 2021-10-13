import React from 'react';
// import GetAdminById from './GetAdminById';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from 'react-router';
import '../common/common.css';
import asset21 from '../../asset/asset21.jpg';
import asset18 from '../../asset/asset18.jpg';
import asset19 from '../../asset/asset19.jpg';
import asset20 from '../../asset/asset20.png';
import asset22 from '../../asset/asset22.png';
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

    const onLogout=()=>{
        console.log('clicked');
        history.push('/home');
    }


    return (
        <div class=" dashboard-admin">
            <div></div>
            <h3 class="display-2 text-info d-flex align-items-right text-light bg-info "><u>Welcome to the WeForWeather!!!</u></h3>
           
            <div class="row">
            <div class="col-md-5">
            <div class="thumbnail">
                <a href={asset18}>
                    <img src={asset18} alt="people"/>
            <div class="caption">
            <form className="form form-group form-dark row mt-3 col-sm" onSubmit={onGetAdminById}>
                <div><button onClick={onGetAdminById} className="btn btn-dark ">Get Your Collegue's Details</button></div>
            </form>
            </div>
            </a>
            </div>
            </div>
            
            
            <div class="col-md-5">
            <div class="thumbnail">
                <a href={asset19}>
                    <img src={asset19} alt="people"/>
                    <div class="caption">
            <form className="form form-group form-dark row mt-3 col-sm" onSubmit={onGetAllAdmins}>
                <div><button onClick={onGetAllAdmins} className="btn btn-dark  ">Get Details of All Your Collegue</button></div>
            </form>
            </div>
            </a>
            </div>
            </div>

            
            <div class="col-md-4">
            <div class="thumbnail">
                <a href={asset20}>
                    <img src={asset20} alt="people"/>
                    <div class="caption">
            <form className="form form-group form-dark row mt-3 col-sm " onSubmit={onDeleteAdminById}>
                <div><button onClick={onDeleteAdminById} className="btn btn-dark ">Delete Your Profile</button></div>
            </form>
            </div>
            </a>
            </div>
            </div>
            

            <div class="col-md-4">
            <div class="thumbnail">
                <a href={asset21}>
                    <img src={asset21} alt="people"/>
                    <div class="caption">
            <form className="form form-group form-dark row mt-3 col-sm" onSubmit={onUpdateAdminById}>
                <div><button onClick={onUpdateAdminById} className="btn btn-dark">Update Your Profile</button></div>
            </form>
            </div>
            </a>
            </div>
            </div>
            
            <div class="col-md-4">
            <div class="thumbnail">
                <a href={asset22}>
                    <img src={asset22} alt="people"/>
                    <div class="caption">
            <form className="form form-group form-dark row mt-3 col-sm" onSubmit={onAddAdmin}>
                <div><button onClick={onAddAdmin} className="btn btn-dark">Add Admin</button></div>
            </form>
            </div>
            </a>
            </div>
            </div>
            </div>
            
            
            
            
                <h4 class=" bg-info text-light">Control User methods</h4>
                <div class="row">
                <div class="col-md-4">
            <div class="thumbnail">
                <a href={asset18}>
                    <img src={asset18} alt="people"/>
                    <div class="caption">
            <form className="form form-group form-dark row mt-3 col" onSubmit={onGetUserByIdFromAdmin}>
                <div><button onClick={onGetUserByIdFromAdmin} className="btn btn-dark  ">One User Data</button></div>
            </form>
            </div>
            </a>
            </div>
            </div>

            <div class="col-md-4">
            <div class="thumbnail">
                <a href={asset19}>
                    <img src={asset19} alt="people"/>
                    <div class="caption">
            <form className="form form-group form-dark row mt-3 col" onSubmit={onGetAllUsers}>
                <div><button onClick={onGetAllUsers} className="btn btn-dark  ">Get All user Data</button></div>
            </form>
            </div>
            </a>
            </div>
            </div>

            <div class="col-md-4">
            <div class="thumbnail">
                <a href={asset20}>
                    <img src={asset20} alt="people"/>
                    <div class="caption">
            <form className="form form-group form-dark row mt-3 col" onSubmit={onDeleteUserByIdFromAdmin}>
                <div><button onClick={onDeleteUserByIdFromAdmin} className="btn btn-dark ">Delete User Data</button></div>
            </form>
            </div>
            </a>
            </div>
            </div>
        </div> 
        <button className="btn btn-dark" onClick={onLogout}>Logout</button>
            </div>
        
    )
}
export default AdminDashboard;