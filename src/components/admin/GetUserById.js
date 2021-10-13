import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserById} from '../../redux/UserSlice';

const GetUserById = () => {

    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.userState);
    
    const [displayOneUser, setDisplayOneUser] = useState('Enter User Id to view the User details.');
    const [oneUser, setOneUser] = useState({});
   
    const handleOneUserData = (evt) => {
        setOneUser({
            ...oneUser,
            [evt.target.name]: evt.target.value
        });
    }

    const submitGetUserById = (evt) => {
        console.log("submitGetuserById");
        axios.get(`http://localhost:8086/weather/admin/getUserByIdFromAdmin/${oneUser.rid}`)
            .then(async (response) => {
                await dispatch(getUserById(response.data));
                setDisplayOneUser(`User Id: ${response.data.rid}, Name: ${response.data.userName}`);
            }).catch(async (error) => {
                // more custom error handling is required 
                await setDisplayOneUser(`${error.message}: User with the id ${oneUser.rid} is not found.`);
            });
        evt.preventDefault();
    }

    return (
        <div className="admin_container" >
            <h1 className="display-4 p-3 mb-2 bg-gradient-danger d-flex font-weight-bold justify-content-center jumbotron border border-success">Get User By Id</h1>
            
            <div className="border border-success pt-3 pb-3 px-3 py-3 mt-3 mb-3 jumbotron justify-content-center">
                <p>Enter the user Id to get details</p>
                <form className="form form-group row pt-3 pb-3 px-3 py-3 table-striped" data-testid="invalid-form">
                    <input
                        type="number"
                        id="rid"
                        //adding test-jest
                        data-testid="rid4"
                        
                        name="rid"
                        className="form-control mb-3"
                        value={oneUser.rid}
                        placeholder="User Id"
                        onChange={handleOneUserData}
                    />
                    <input
                        type="submit"
                        id="submit"
                        data-testid="submit4"
                        name="submit"
                        className="btn btn-primary mb-3 submit2"
                        value="Get User Details"
                        onClick={submitGetUserById}
                    />
                </form>
                {/* conditional rendering with displayOneEmp and setDisplayOneEmp */}
                <p>{displayOneUser}</p>
            </div>
        </div>
    );
}
export default GetUserById;
