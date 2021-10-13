import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllAdmins } from '../../redux/AdminSlice';
import '../common/common.css';
const GetAllAdmins = () => {

    const dispatch = useDispatch();
    const adminList = useSelector((state) => state.admin.allAdminsState);

    const submitGetAllAdmin = (evt) => {
        console.log("submitGetAllAdmin");
        axios.get('http://localhost:8086/weather/admin/getAllAdmin')
            .then((response) => {
                dispatch(getAllAdmins(response.data));
            }).catch(error => {
                console.log(error.message)
            });
        evt.preventDefault();
    }

    return (
        <div className="admin_container">
            <h2 className="display-4 p-3 mb-2 bg-gradient-danger d-flex font-weight-bold justify-content-center jumbotron border border-success">Get All Admin's Data</h2>
            <div className="border border-success pt-3 pb-3 px-3 py-3 mt-3 mb-3 jumbotron justify-content-center">
                <h4 className="justify-content-center">Click here to get all admin's data</h4>
                <div>
                    <input
                        type="submit"
                        id="submit"
                        name="submit"
                        data-testid="submit4"
                        className="btn btn-primary mb-3 justify-content-center submit2"
                        value="View All Admins"
                        onClick={submitGetAllAdmin}
                    />
                </div>
                <div className="Container text-left justify-content-center table-striped table-dark table-bordered">
                    <div>
                        <p className="row font-italic">
                            <div className="col-sm"><u>ADMINID</u>
                                </div> 
                                <div className="col-sm"><u>
                                    NAME
                                </u></div>
                            </p>
                    </div>
                    {adminList.map((r, k) => {
                        console.log(r);
                        return (
                            <div k={k} className="row">
                                <div className="col-sm">
                                    {r.adminId}
                                </div>
                                    <div className="col-sm">
                                        {r.adminName}
                                </div>        
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
export default GetAllAdmins;
