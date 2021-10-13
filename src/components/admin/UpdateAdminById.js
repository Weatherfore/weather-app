import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {updateAdminById} from '../../redux/AdminSlice';
import validation2 from '../../service/AdminUpdateService';
import '../common/common.css';
const UpdateAdminById = () => {
    const dispatch = useDispatch();
    const adminData = useSelector((state) => state.admin.adminState);
    const [adminData2, setAdminData2] = useState({
        adminId: '',
        adminName: '',
        adminPassword: ''
    });


    const [errors, setErrors] = useState({});
    const handleAdminChange = (evt) => {
        setAdminData2({
            ...adminData2,
            [evt.target.name]: evt.target.value
        });
    }


    const submitUpdateAdmin = (evt) => {
        console.log("submitUpdateAdmin");
        axios.put('http://localhost:8086/weather/admin/updateAdmin', adminData2)
            .then((response) => {
                dispatch(updateAdminById(response.data));
                console.log(response.data);
                console.log(response.headers);
                alert("Admin details are updated successfully");
            }).catch((error) => {
                setErrors(validation2(adminData2))
                console.log(error.message)
                alert("Entered details are incorrect! Enter correct details");
            })
        evt.preventDefault();
    }

    return (
        <div className="admin_container" >
            <h3 className="display-4 p-3 mb-2 bg-gradient-danger d-flex font-weight-bold justify-content-center jumbotron border border-success">Update Admin</h3>

            <div className="jumbotron">
                <p>Update Admin By Id</p>
                
                <form className="form form-group row pt-3 pb-3 px-3 py-3 jumbotron" onSubmit={submitUpdateAdmin} >
                    <div>
                            <input
                                type="number"
                                id="adminId"
                                name="adminId"
                                data-testid="adminId5"
                                className="form-control mb-3"
                                value={adminData2.adminId}
                                placeholder = "Admin Id"
                                onChange={handleAdminChange}
                            />
                           {errors.adminId && <p classname="error">{errors.adminId}</p>}
                            <input
                                type="text"
                                id="adminName"
                                name="adminName"
                                data-testid="adminName5"
                                className="form-control mb-3"
                                value={adminData2.adminName}
                                placeholder = "Admin Name"
                                onChange={handleAdminChange}
                            />
                            {errors.adminName && <p classname="error">{errors.adminName}</p>}

                            <input
                                type="text"
                                id="adminPassword"
                                name="adminPassword"
                                data-testid="adminPassword5"
                                className="form-control mb-3"
                                value={adminData2.adminPassword}
                                placeholder = "Admin Password"
                                onChange={handleAdminChange}
                            />
                            {errors.adminPassword && <p classname="error">{errors.adminPassword}</p>}
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            data-testid="submit5"
                            className="btn btn-primary mb-3 submit2"
                            value="submit"
                        />
                    </div>
                </form>
                {/* <p> {adminData2.adminId} {adminData2.adminName} {adminData2.adminPassword} </p> */}
            </div>

        </div>
    );
}
export default UpdateAdminById;