import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getAllUsers} from '../../redux/UserSlice';

const GetAllUsers = () => {

    // redux variables 
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.user.allUsersState);
    
    const submitGetAllUser = (evt) => {
        console.log("submitGetAllUser");
        axios.get('http://localhost:8086/weather/admin/getAllUsers')
            .then((response) => {
                dispatch(getAllUsers(response.data));
            }).catch(error => {
                console.log(error.message)
                alert("Empty user records found");
            });
        evt.preventDefault();
    }

    return (
        <div className="admin_container">
            <h2 className="bg-light">Get All User's Data</h2>
            
            <div className="border border-primary pt-3 pb-3 px-3 py-3 mt-3 mb-3 jumbotron">
                <h4 className="bg-light">Click here to get all user's data</h4>
                <div className="form form-group form-dark row mt-3 span font-weight-bold font-italic  d-flex justify-content-center border border-success">
                    <input
                        type="submit"
                        id="submit"
                        data-testid="submit7"
                        name="submit"
                        className="btn btn-primary mb-3"
                        value="View All Users"
                        onClick={submitGetAllUser}
                    />
                </div>
                <div className="Container text-left bg-light">
                    <div>
                        <p className="row font-italic">
                            
                            <div className="col-sm"><u>RID</u>
                                </div> 
                                <div className="col-sm"><u>USERNAME</u>
                                    </div>
                                </p>
                    </div>
                    {userList.map((r, k) => {
                        console.log(r);
                        return (
                            <div k={k} className="row">
                               <div className="col-sm"> {r.rid}
                                </div>
                                <div className="col-sm">
                                 {r.userName} 
                                 </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
export default GetAllUsers;