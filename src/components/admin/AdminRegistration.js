import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import axios from "axios";
import validation2 from '../../service/AdminRegistrationService';
import '../common/common.css';

const AdminRegister = (props) => {
    const history = useHistory();

    const [admin, setAdmin] = useState({});

    useEffect(
        () => {
            setAdmin({
                adminId: '',
                adminName: '',
                adminpassword: ''
            }
            );
        }, []);

    const [errors, setErrors] = useState({});
    const handleUser = (event) => {
        console.log(event.target.value);
        setAdmin({
            ...admin,
            [event.target.name]: event.target.value
        });
    };

    const submitAdmin = (event) => {
        console.log(admin.adminId);
        console.log(admin.adminName);
        console.log(admin.adminpassword);
        axios.post(`http://localhost:8086/weather/admin/addAdmin`, admin)
            .then((response) => {
                console.log(response.data);
                history.push('/adminDashboard');
                alert("Registered Successfully!");
            }).catch((error) => {
                setErrors(validation2(admin))
                console.log(error.message)
                alert("Enter correct details for registration");

            });
        event.preventDefault();
    }

    return (
        <div className="body_container">
            {/* style={{backgroundImage: `url(${Slide5})`}} */}
            <h1 className="display-4 p-3 mb-2 bg-gradient-danger d-flex font-weight-bold justify-content-center">Admin Registeration</h1>
            <div>
                <form className="form form-group form-dark row mt-3 font-weight-bold font-italic jumbotron d-flex justify-content-center" onSubmit={submitAdmin}>
                    <div className="mb-3">
                        <input
                            type="number"
                            name="adminId"
                            id="adminId"
                            //for test case
                            data-testid="adminId2"
                            className="form-control mb-3"
                            placeholder="Admin Id"
                            value={admin.adminId}
                            onChange={handleUser}
                        />
                        {errors.adminId && <p classname="error">{errors.adminId}</p>}

                        <input
                            type="adminName"
                            name="adminName"
                            id="adminName"
                            //for test case
                            data-testId="adminName2"
                            className="form-control mb-3"
                            placeholder="adminName"
                            value={admin.adminName}
                            onChange={handleUser} />
                        {errors.adminName && <p classname="error">{errors.adminName}</p>}


                        <input
                            type="password"
                            name="adminPassword"
                            id="adminPassword"
                            //for test case
                            data-testid="adminPassword2"
                            className="form-control mb-3"
                            placeholder="Password"
                            value={admin.adminPassword}
                            onChange={handleUser} />
                        {errors.adminPassword && <p classname="error">{errors.adminPassword}</p>}

                        <input
                            type="submit"
                            id="submit"
                            //for test case
                            data-testid="submit2"
                            name="submit"
                            className="form-control btn btn-primary mb-3 submit"
                            value="AdminRegister"
                            onClick={submitAdmin}
                        />
                    </div>
                </form>
            </div>
        </div >
    )
}
export default AdminRegister;