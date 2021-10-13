import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUserById} from '../../redux/UserSlice';
import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router';
const DeleteUserById= () => {

    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.userState);
    const history = useHistory(); 
    const [deleteOneUser, setDeleteOneUser] = useState('Enter User Id to delete the user details');
    const [oneUser, setOneUser] = useState({});
   
    const handleOneUserData = (evt) => {
        setOneUser({
            ...oneUser,
            [evt.target.name]: evt.target.value
        });
    }

    const submitDeleteUserById = (evt) => {
        console.log("submitDeleteUserById");
        axios.delete(`http://localhost:8086/weather/deleteUserById/${oneUser.rid}`)
            .then(async (response) => {
                await dispatch(deleteUserById(response.data));
                setDeleteOneUser(`User account was successfully deleted`);
                history.push('/userDashboard');
            }).catch(async (error) => {
                await setDeleteOneUser(`${error.message}: User with the id ${oneUser.rid} is not found.`);
            });
        evt.preventDefault();
    }

    return (
        <div className="user_container" >
            <h1 className="display-4 p-3 mb-2 bg-gradient-danger d-flex font-weight-bold justify-content-center">Delete User By Id</h1>
            
            <div className="border border-danger pt-3 pb-3 px-3 py-3 mt-3 mb-3 jumbotron ">
                <h5 bg-light>Enter the user Id to delete its details</h5>
                <form className="form form-group form-dark row mt-3 font-weight-bold font-italic jumbotron d-flex justify-content-center border" data-testid="invalid-form">
                    <input
                        type="number"
                        id="rid"
                        //adding test-jest
                        data-testid="rid8"
                        name="rid"
                        className="form-control mb-3"
                        value={oneUser.rid}
                        placeholder="User Id"
                        onChange={handleOneUserData}
                    />
                    <input
                        type="submit"
                        id="submit"
                        data-testid="submit8"
                        name="submit"
                        className="btn btn-primary mb-3 submit3"
                        value="Delete User Account"
                        onClick={submitDeleteUserById}
                    />
                </form>
                {/* conditional rendering with displayOneEmp and setDisplayOneEmp */}
                <p>{deleteOneUser}</p>
            </div>
        </div>
    );
}
export default DeleteUserById;