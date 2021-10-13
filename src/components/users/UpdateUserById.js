import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserById } from '../../redux/UserSlice';
import validation from '../../service/UserUpdateService';

//this class it to update user by id

const UpdateUserById = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.userState);
    const [userData3, setUserData3] = useState({
        rid: '',
        userName: '',
        password: '',
        reEnterPassword: ''
    });


    const [errors, setErrors] = useState({});
    const handleUserChange = (evt) => {
        setUserData3({
            ...userData3,
            [evt.target.name]: evt.target.value
        });
    }


    const submitUpdateUser = (evt) => {
        console.log("submitUpdateUser");
        axios.put('http://localhost:8086/weather/updateUser', userData3)
            .then((response) => {
                dispatch(updateUserById(response.data));
                console.log(response.data);
                console.log(response.headers);
                alert("User details are updated successfully");
            }).catch((error) => {
                setErrors(validation(userData3))
                console.log(error.message)
                alert("Entered details are incorrect! Enter correct details");
            })
        evt.preventDefault();
    }

    return (
        <div className="user_container" >
            <h2 className="display-4 p-3 mb-2 bg-gradient-danger d-flex font-weight-bold justify-content-center">Update user</h2>

            <div className="order border-danger pt-3 pb-3 px-3 py-3 mt-3 mb-3 jumbotron">
                <h4>Update user By Id</h4>
                <form className="form form-group form-dark row mt-3 font-weight-bold font-italic jumbotron d-flex justify-content-center border" onSubmit={submitUpdateUser} >
                    <div>
                            <input
                                type="number"
                                id="rid"
                                name="rid"
                                data-testid="rid9"
                                className="form-control mb-3"
                                value={userData3.rid}
                                placeholder = "User Id"
                                onChange={handleUserChange}
                            />
                           {errors.rid && <p classname="error">{errors.rid}</p>}
                            <input
                                type="text"
                                id="userName"
                                name="userName"
                                data-testid="userName9"
                                className="form-control mb-3"
                                value={userData3.userName}
                                placeholder = "User Name"
                                onChange={handleUserChange}
                            />
                            {errors.userName && <p classname="error">{errors.userName}</p>}

                            <input
                                type="text"
                                id="password"
                                name="password"
                                data-testid="password9"
                                className="form-control mb-3"
                                value={userData3.password}
                                placeholder = "Password"
                                onChange={handleUserChange}
                            />
                            {errors.password && <p classname="error">{errors.password}</p>}

                            <input
                                type="text"
                                id="password"
                                name="reEnterPassword"
                                data-testid="reEnterPassword9"
                                className="form-control mb-3"
                                value={userData3.reEnterPassword}
                                placeholder = "reEnterPassword"
                                onChange={handleUserChange}
                            />
                            {errors.reEnterPassword && <p classname="error">{errors.reEnterPassword}</p>}

                        <input
                            type="submit"
                            id="submit"
                            data-testid="submit9"
                            name="submit"
                            className="btn btn-primary mb-3 submit3"
                            value="submit"
                        />
                    </div>
                </form>
                {/* <p> {userData3.userId} {userData3.userName} {userData3.userPassword} </p> */}
            </div>

        </div>
    );
}
export default UpdateUserById;