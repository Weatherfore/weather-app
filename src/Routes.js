import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/common/Home';
import Login from './components/common/Login';
import Register from './components/users/UserRegistration';
import AdminLogin from './components/common/AdminLogin';
import AdminRegister from './components/admin/AdminRegistration';
import GetUserById from './components/admin/GetUserById';
import GetAllUsers from './components/admin/ViewAllUsers';
import GetAdminById from './components/admin/GetAdminById';
import GetAllAdmin from './components/admin/GetAllAdmin';
import DeleteAdminById from './components/admin/DeleteAdminById';
import DeleteUserByIdFromAdmin from './components/admin/DeleteUserByIdFromAdmin';
import DashboardAdmin from './components/admin/AdminDasboard';
import UpdateAdminById from './components/admin/UpdateAdminById'; 
import News from './components/common/News';
import UserDashboard from './components/users/UserDashboard';
import GetUserByIdFromUser from './components/users/GetUserById';
import DeleteUserById from './components/users/DeleteUserById';
import UpdateUserById from './components/users/UpdateUserById';
import GetWeatherByCityName from './components/weather/GetWeatherByCityName';
import PageNotFound from './components/common/PageNotFound';
import About from './components/common/About';
import Contact from './components/common/Contact';
const Routes =()=>{
    return(
        <div>
            <Router>
                <div>
                    <Header />
                    <div>
                        <Switch>
                            <Route exact path="/"><Home/></Route>
                            <Route path ="/Home"><Home/></Route>
                            <Route path="/login"><Login/></Route>
                            <Route path="/register"><Register/></Route>
                            <Route path="/adminLogin"><AdminLogin/></Route>
                            <Route path="/adminRegister"><AdminRegister/></Route>
                            <Route path="/viewAllUsers"><GetAllUsers/></Route>
                            <Route path="/getUserByIdFromAdmin"><GetUserById/></Route>
                            <Route path="/getAdminById"><GetAdminById/></Route>
                            <Route path="/viewAllAdmins"><GetAllAdmin/></Route>
                            <Route path="/deleteAdminById"><DeleteAdminById/></Route>
                            <Route path="/updateAdminById"><UpdateAdminById/></Route>
                            <Route path="/deleteUserByIdFromAdmin"><DeleteUserByIdFromAdmin/></Route>
                            <Route path="/adminDashboard"><DashboardAdmin/></Route>
                            <Route path="/news"><News/></Route>
                            <Route path="/getUserById"><GetUserByIdFromUser/></Route>
                            <Router path="/updateUserById"><UpdateUserById/></Router>
                            <Route path='/deleteUserById'><DeleteUserById/></Route>
                            <Route path= '/getWeatherByCityName'><GetWeatherByCityName/></Route>
                            <Route path='/userDashboard'><UserDashboard/></Route>
                            <Route path='/about'><About/></Route>
                            <Route path="/contact"><Contact/></Route>
                            <Route path="/*"> <PageNotFound /> </Route>
                            
                        </Switch>
                    </div>
                    <Footer/>
                </div>
            </Router>
        </div>
    )
}
export default Routes;