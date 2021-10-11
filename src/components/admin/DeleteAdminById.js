import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAdminById } from '../../redux/AdminSlice';
import '../common/common.css';
const DeleteAdminById = () => {

    const dispatch = useDispatch();
    const adminData = useSelector((state) => state.admin.adminState);

    const [deleteOneAdmin, setDeleteOneAdmin] = useState('Enter Admin Id to delete the Admin');
    const [oneAdmin, setOneAdmin] = useState({});


    const handleOneAdminData = (evt) => {
        setOneAdmin({
            ...oneAdmin,
            [evt.target.name]: evt.target.value
        });
    }

    const submitDeleteAdminById = (evt) => {
        console.log("submitDeleteAdminById");
        axios.delete(`http://localhost:8086/weather/admin/delAdmin/${oneAdmin.adminId}`)
            .then(async (response) => {
                await dispatch(deleteAdminById(response.data));
                setDeleteOneAdmin(`Admin account deleted successfully`);
            }).catch(async (error) => {
                // more custom error handling is required 
                await setDeleteOneAdmin(`${error.message}: Admin with the id ${oneAdmin.adminId} is not found.`);
            });
        evt.preventDefault();
    }

    return (
        <div className="admin_container" >
            <h1 className="display-4 p-3 mb-2 d-flex font-weight-bold justify-content-center">Delete Admin By Id</h1>
             <div className="border border-primary pt-3 pb-3 px-3 py-3 mt-3 mb-3 jumbotron justify-content-center">
                <p className="border border-primary pt-3 pb-3 px-3 py-3 mt-3 mb-3 span bg-light justify-content-center ">Delete Admin By Id</p>
                <form className="form form-group row pt-3 pb-3 px-3 py-3 span jumbotron justify-content-center" data-testid="invalid-form">
                    <input
                        type="number"
                        id="adminId"
                        //adding test-jest
                        data-testid="adminId"
                        data-testid="required-input" required
                        name="adminId"
                        className="form-control mb-3 justify-content-center"
                        value={oneAdmin.adminId}
                        placeholder="Admin Id"
                        onChange={handleOneAdminData}
                    />
                    <input
                        type="submit"
                        id="submit"
                        data-testid="submit"
                        name="submit"
                        className="btn btn-primary mb-3 submit2"
                        value="Delete Admin Account"
                        onClick={submitDeleteAdminById}
                    />
                </form>
                {/* conditional rendering with displayOneEmp and setDisplayOneEmp */}
                <p>{deleteOneAdmin}</p>
            </div>
        </div>
    );
}
export default DeleteAdminById;