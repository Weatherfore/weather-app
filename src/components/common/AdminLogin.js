import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import validation2 from '../../service/AdminLoginService';
import '../common/common.css';
const AdminLogin = (props) => {

    const history = useHistory();

    const [admin, setAdmin] = useState({
        adminId: '',
        adminName: '',
        adminPassword: ''

    });

    useEffect(
        () => {
            setAdmin({
                adminId: '',
                adminName: '',
                adminPassword: ''
            }
            );
        }, []);

    const [errors, setErrors] = useState({});

    const handleAdmin = (event) => {
        console.log(event.target.value);
        setAdmin({
            ...admin,
            [event.target.name]: event.target.value
        });
    };

    const submitAdmin = (event) => {
        console.log(admin.adminId);
        console.log(admin.adminPassword);
        console.log(admin.adminName);
        axios.post(`http://localhost:8086/weather/admin/-/login`, admin)
            .then((response) => {
                console.log(response.data);
                history.push('/adminDashboard');
            }).catch((error) => {
                setErrors(validation2(admin))
                console.log(error.message)
                alert("Admin login credentials are incorrect! Enter correct credentials.");
            });
        event.preventDefault();
    }
    return (
        <div className="body_container">
            <h1 className="display-4 p-3 mb-2 bg-gradient-danger d-flex font-weight-bold justify-content-center"><b><strong>Admin Login</strong></b></h1>
            <div>
                <form className="form form-group form-dark row mt-3 font-weight-bold font-italic jumbotron d-flex justify-content-center" onSubmit={submitAdmin}>
                    <div className="mb-3">
                        <input
                            type="number"
                            className="form-control"
                            name="adminId"
                            id="adminId"
                            //data test case
                            data-testid="adminId"
                            className="form-control mb-3"
                            placeholder="Admin Id"
                            value={admin.adminId}
                            onChange={handleAdmin}
                        />
                        {errors.adminId && <p classname="error">{errors.adminId}</p>}

                        <input
                            type="text"
                            className="form-control"
                            name="adminName"
                            id="adminName"
                            //for test-case
                            data-testid="adminName"
                            className="form-control mb-3"
                            placeholder="Admin Name"
                            value={admin.adminName}
                            onChange={handleAdmin} />
                        {errors.adminName && <p classname="error">{errors.adminName}</p>}


                        <input
                            type="password"
                            className="form-control"
                            name="adminPassword"
                            id="adminPassword"
                            //for test case
                            data-testid="adminPassword"
                            className="form-control mb-3"
                            placeholder="Password"
                            value={admin.adminPassword}
                            onChange={handleAdmin} />
                        {errors.adminPassword && <p classname="error">{errors.adminPassword}</p>}


                        <input
                            type="submit"
                            id="submit"
                            //for test case
                            data-testid="submit1"
                            name="submit"
                            className="form-control btn btn-primary mb-3 submit"
                            value="Login"
                            onClick={submitAdmin}
                        />
                    </div>
                </form>
            </div>
        </div >
    )
}
export default AdminLogin;