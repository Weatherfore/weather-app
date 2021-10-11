import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import './common.css';
import validation from '../../service/LoginService';
const Login = (props) => {

    const history = useHistory();

    const [user, setUser] = useState({
        rid: '',
        password: '',
        userName: '',
        reEnterPassword: ''
    });

    useEffect(
        () => {
            setUser({
                rid: '',
                password: '',
                userName: '',
                reEnterPassword: ''
            }
            );
        }, []);

    const [errors, setErrors] = useState({});

    const handleUser = (event) => {
        console.log(event.target.value);
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };

    const submitUser = (event) => {
        console.log(user.rid);
        console.log(user.password);
        axios.post(`http://localhost:8086/weather/user/-/login`, user)
            .then((response) => {
                console.log(response.data);
                history.push('/home');
                // alert("You logged in successfully");
            }).catch((error) => {
                setErrors(validation(user))
                console.log(error.message)
                alert("User login credentials are incorrect");
            });
        event.preventDefault();
        setErrors(validation(user));
    }
    return (
        <div className="title_container">
            <h1 className="display-4 p-3 mb-2 bg-gradient-danger d-flex font-weight-bold justify-content-center"><b><strong>User Login</strong></b></h1>
            <div>
                <form className="form form-group form-dark row mt-3 font-weight-bold font-italic jumbotron d-flex justify-content-center" onSubmit={submitUser}>
                    <div className="mb-3">
                        <input
                            type="number"
                            className="form-control"
                            name="rid"
                            id="rid"
                            className="form-control mb-3"
                            placeholder="rid"
                            value={user.rid}
                            onChange={handleUser}
                        />
                        {errors.rid && <p classname="error">{errors.rid}</p>}
                        <input
                            type="userName"
                            className="form-control"
                            name="userName"
                            id="userName"
                            className="form-control mb-3"
                            placeholder="username"
                            value={user.userName}
                            onChange={handleUser} />
                        {errors.userName && <p classname="error">{errors.userName}</p>}
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            className="form-control mb-3"
                            placeholder="Password"
                            value={user.password}
                            onChange={handleUser} />
                        {errors.password && <p classname="error">{errors.password}</p>}

                        <input
                            type="password"
                            className="form-control"
                            name="reEnterPassword"
                            id="reEnterPassword"
                            className="form-control mb-3"
                            placeholder="reEnterPassword"
                            value={user.reEnterPassword}
                            onChange={handleUser} />
                        {errors.reEnterPassword && <p classname="error">{errors.reEnterPassword}</p>}
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="form-control btn btn-primary mb-3 bg-danger text-light"
                            value="Login"
                            onClick={submitUser}
                        />
                        {/* <p>{this.state.alert_message}</p> */}
                    </div>
                </form>
            </div>
        </div >
    )
}
export default Login;