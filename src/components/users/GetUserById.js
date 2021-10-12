import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserById} from '../../redux/UserSlice';
import '../../components/common/common.css';
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
        axios.get(`http://localhost:8086/weather/getUserById/${oneUser.rid}`)
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
        <div className="user_container" >
            <h1 className="display-4 p-3 mb-2 bg-gradient-danger d-flex font-weight-bold justify-content-center">Get User By Id</h1>
            
            <div className="border border-danger pt-3 pb-3 px-3 py-3 mt-3 mb-3 jumbotron">
                <h5 >Enter the user Id to get details</h5>
                <div>
                <form className="form form-group form-dark row mt-3 font-weight-bold font-italic jumbotron d-flex justify-content-center border" data-testid="invalid-form">
                    <input
                        type="number"
                        id="rid"
                        //adding test-jest
                        data-testid="rid"
                        name="rid"
                        className="form-control mb-3"
                        value={oneUser.rid}
                        placeholder="User Id"
                        onChange={handleOneUserData}
                    />
                    <input
                        type="submit"
                        id="submit"
                        data-testid="submit"
                        name="submit"
                        className="btn btn-primary mb-3 submit3"
                        value="Get User Details"
                        onClick={submitGetUserById}
                    />
                </form>
                {/* conditional rendering with displayOneEmp and setDisplayOneEmp */}
                </div>
                <span>
                <p >{displayOneUser}</p>
                </span>
            </div>
        </div>
    );
}
export default GetUserById;