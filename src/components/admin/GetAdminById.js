import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAdminById} from '../../redux/AdminSlice';
import '../common/common.css';
const GetAdminById = () => {

    const dispatch = useDispatch();
    const adminData = useSelector((state) => state.admin.adminState);
    
    const [displayOneAdmin, setDisplayOneAdmin] = useState('Enter Admin Id to view the Admin details.');
    const [oneAdmin, setOneAdmin] = useState({});


    const handleOneAdminData = (evt) => {
        setOneAdmin({
            ...oneAdmin,
            [evt.target.name]: evt.target.value
        });
    }

    const submitGetAdminById = (evt) => {
        console.log("submitGetAdminById");
        axios.get(`http://localhost:8086/weather/admin/getAdmin/${oneAdmin.adminId}`)
            .then(async (response) => {
                await dispatch(getAdminById(response.data));
                setDisplayOneAdmin(`AdminId: ${response.data.adminId}, Name: ${response.data.adminName}`);
            }).catch(async (error) => {
                // more custom error handling is required 
                await setDisplayOneAdmin(`${error.message}: Admin with the id ${oneAdmin.adminId} is not found.`);
            });
        evt.preventDefault();
    }

    return (
        <div className="admin_container" >
            <h1 className="display-4 p-3 mb-2  d-flex font-weight-bold justify-content-center ">Get Admin By Id</h1>
            
            <div className="container">
                <span className="bg-light span">Get Admin By Id</span>
                <form className="form form-group form-dark row mt-3 span font-weight-bold font-italic jumbotron d-flex justify-content-center border border-success" data-testid="invalid-form">
                    <input
                        type="number"
                        id="adminId"
                        //adding test-jest
                        data-testid="adminId3"
                        name="adminId"
                        className="form-control mb-3"
                        value={oneAdmin.adminId}
                        placeholder="Admin Id"
                        onChange={handleOneAdminData}
                    />
                    <input
                        type="submit"
                        id="submit"
                        data-testid="submit3"
                        name="submit"
                        className="btn btn-primary mb-3 submit2 border border-success"
                        value="Get Admin Details"
                        onClick={submitGetAdminById}
                    />
                </form>
                {/* conditional rendering with displayOneEmp and setDisplayOneEmp */}
                <p className="bg-light border border-success span bg-light">{displayOneAdmin}</p>
            </div>
        </div>
    );
}
export default GetAdminById;