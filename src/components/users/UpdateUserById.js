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
        userId: '',
        userName: '',
        userPassword: ''
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
        axios.put('http://localhost:8082/swagger-ui.html#/registration-controller/updateUserUsingPUT', userData3)
            .then((response) => {
                dispatch(updateUserById(response.data));
                console.log(response.data);
                console.log(response.headers);
            }).catch((error) => {
                setErrors(validation(userData3))
                console.log(error.message)
                alert("Entered details are incorrect! Enter correct details");
            })
        evt.preventDefault();
    }

    return (
        <div className="container" >
            <h3>Update user</h3>

            <div className="border border-primary pt-3 pb-3 px-3 py-3 mt-3 mb-3">
                <h4>Update user By Id</h4>
                <form className="form form-group row pt-3 pb-3 px-3 py-3" onSubmit={submitUpdateUser} >
                    <div>
                            <input
                                type="number"
                                id="userId"
                                name="userId"
                                className="form-control mb-3"
                                value={userData3.userId}
                                placeholder = "User Id"
                                onChange={handleUserChange}
                            />
                           {errors.userId && <p classname="error">{errors.userId}</p>}
                            <input
                                type="text"
                                id="userName"
                                name="userName"
                                className="form-control mb-3"
                                value={userData3.userName}
                                placeholder = "User Name"
                                onChange={handleUserChange}
                            />
                            {errors.userName && <p classname="error">{errors.userName}</p>}

                            <input
                                type="text"
                                id="userPassword"
                                name="userPassword"
                                className="form-control mb-3"
                                value={userData3.userPassword}
                                placeholder = "User Password"
                                onChange={handleUserChange}
                            />
                            {errors.userPassword && <p classname="error">{errors.userPassword}</p>}
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
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