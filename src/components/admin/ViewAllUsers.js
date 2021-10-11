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
        <div className="container">
            <h2>Get All User's Data</h2>
            
            <div className="border border-primary pt-3 pb-3 px-3 py-3 mt-3 mb-3">
                <h4>Click here to get all user's data</h4>
                <div>
                    <input
                        type="submit"
                        id="submit"
                        name="submit"
                        className="btn btn-primary mb-3"
                        value="View All Users"
                        onClick={submitGetAllUser}
                    />
                </div>
                <div className="Container text-left">
                    <div>
                        <p>RID USERNAME</p>
                    </div>
                    {userList.map((r, k) => {
                        console.log(r);
                        return (
                            <div k={k}>
                                {r.rid}, {r.userName} 
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
export default GetAllUsers;