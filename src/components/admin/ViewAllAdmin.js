import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllAdmins } from '../../redux/AdminSlice';

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
        <div className="container">
            <h2>Get All Admin's Data</h2>
            <div className="border border-primary pt-3 pb-3 px-3 py-3 mt-3 mb-3">
                <h4>Click here to get all admin's data</h4>
                <div>
                    <input
                        type="submit"
                        id="submit"
                        name="submit"
                        className="btn btn-primary mb-3"
                        value="View All Admins"
                        onClick={submitGetAllAdmin}
                    />
                </div>
                <div className="Container text-left">
                    <div>
                        <p>ADMINID NAME</p>
                    </div>
                    {adminList.map((r, k) => {
                        console.log(r);
                        return (
                            <div k={k} className="table-striped">
                                {r.adminId}, {r.adminName}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
export default GetAllAdmins;
