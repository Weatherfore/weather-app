import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import axios from "axios";
import validation from '../../service/UserRegistrationService';
import '../common/common.css';
const Register = (props) => {
    const history = useHistory();
    const [user, setUser] = useState({});

    useEffect(
        () => {
            setUser({
                rid: 0,
                userName: '',
                password: '',
                reEnterpassword: ''
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
        console.log(user.userName);
        console.log(user.password);
        axios.post(`http://localhost:8086/weather/registration/addUser`, user)
            .then(async (response) => {
                console.log(response.data);
                history.push('/login');
            }).catch((error) => {
                setErrors(validation(user))
                console.log(error.message)
                alert("Entered details are incorrect! Enter correct details");
            });
        event.preventDefault();
    }


    return (
        <div className="title_container">
            <h1 className="display-4 p-3 mb-2 bg-gradient-danger d-flex font-weight-bold justify-content-center"><b><strong>User Registeration</strong></b></h1>
            <div>
                <form className="form form-group form-dark row mt-3 font-weight-bold font-italic jumbotron d-flex justify-content-center border" onSubmit={submitUser}>
                    <div className="mb-3">
                        <input
                            type="rid"
                            name="rid"
                            id="rid"
                            data-testid="rid5"
                            className="form-control mb-3"
                            placeholder="rid"
                            value={user.rid}
                            onChange={handleUser}
                        />
                         {errors.rid && <p classname="error">{errors.rid}</p>}

                        <input
                            type="userName"
                            name="userName"
                            id="userName"
                            data-testid="userName5"
                            className="form-control mb-3"
                            placeholder="userName"
                            value={user.userName}
                            onChange={handleUser} required />
                        {errors.userName && <p classname="error">{errors.userName}</p>}

                        <input
                            type="password"
                            name="password"
                            id="password"
                            data-testid="password5"
                            className="form-control mb-3"
                            placeholder="password"
                            value={user.password}
                            onChange={handleUser} required />
                         {errors.password && <p classname="error">{errors.password}</p>}

                        <input
                            type="password"
                            name="reEnterPassword"
                            id="reEnterPassword"
                            className="form-control mb-3"
                            data-testid="reEnterPassword5"
                            placeholder="reEnterPassword"
                            value={user.reEnterPassword}
                            onChange={handleUser} required />
                        {errors.reEnterPassword && <p classname="error">{errors.reEnterPassword}</p>}


                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            data-testid="submit5"
                            className="form-control btn btn-primary mb-3 bg-danger text-light"
                            value="Register"
                            onClick={submitUser}
                        />
                    </div>
                </form>
            </div>
        </div >
    )
}
export default Register;