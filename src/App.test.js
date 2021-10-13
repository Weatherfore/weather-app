import { render, screen } from '@testing-library/react';
import App from './App';
import Login from './components/common/Login';
import { Provider } from 'react-redux';
import store from './redux/store';
import { getByTestId, getByText } from '@testing-library/dom';
import GetWeatherByCity from './components/weather/GetWeatherByCityName';
import DeleteAdminById from './components/admin/DeleteAdminById';
import AdminRegister from './components/admin/AdminRegistration';
import UpdateAdminById from './components/admin/UpdateAdminById';
import Register from './components/users/UserRegistration';
import AdminLogin from './components/common/AdminLogin';

test('find rid in Login', () => {
  render(
    <Provider store={store}>
      <Login />
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'rid')).toBeInTheDocument();
});

// test case for username in login

test('find userName in Login', () => {
  render(
    <Provider store={store}>
      <Login />
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'userName')).toBeInTheDocument();
});

//test case for password in login

test('find password in Login', () => {
  render(
    <Provider store={store}>
      <Login />
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'password')).toBeInTheDocument();
});


//for reEnterpassword in login

test('find reEnterPassword in Login', () => {
  render(
    <Provider store={store}>
      <Login />
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'reEnterPassword')).toBeInTheDocument();
});

// test case for submit from login

test('find submit in Login', () => {
  render(
    <Provider store={store}>
      <Login />
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'submit')).toBeInTheDocument();
});


// test case for adminId in adminlogin

test('find adminId in AdminLogin', () => {
  render(
    <Provider store={store}>
      <AdminLogin />
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'adminId')).toBeInTheDocument();
});

// test case for dminname in adminLogin

test('find adminName in AdminLogin', () => {
  render(
    <Provider store={store}>
      <AdminLogin />
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'adminName')).toBeInTheDocument();
});

// test for adminPassword in adminLogin

test('find adminPassword in AdminLogin', () => {
  render(
    <Provider store={store}>
      <AdminLogin />
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'adminPassword')).toBeInTheDocument();
});



//test case for submin in adminLogin
test('find submit1 in AdminLogin', () => {
  render(
    <Provider store={store}>
      <AdminLogin />
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'submit1')).toBeInTheDocument();
});

//test case for adminId in AdminRegistration

test('find adminId2 in AdminRegistration', () => {
  render(
    <Provider store={store}>
      <AdminRegister />
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'adminId2')).toBeInTheDocument();
});

//test case for adminName in AdminRegistration

test('find adminName2 in AdminRegistration', () => {
  render(
    <Provider store={store}>
      <AdminRegister />
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'adminName2')).toBeInTheDocument();
});

//test case for pssword adminregistration

test('find adminPassword in AdminRegistration', () => {
  render(
    <Provider store={store}>
      <AdminRegister />
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'adminPassword2')).toBeInTheDocument();
});

//test case for submit adminregistration

test('find submit in AdminRegistration', () => {
  render(
    <Provider store={store}>
      <AdminRegister />
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'submit2')).toBeInTheDocument();
});

//test case for adminID1 DeleteAdminById 

test('find adminId1 in DeleteAdminById ', () => {
  render(
    <Provider store={store}>
      <DeleteAdminById />
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'adminId3')).toBeInTheDocument();
});

//test case for submit DeleteAdminById 

test('find submit3 in DeleteAdminById ', () => {
  render(
    <Provider store={store}>
      <DeleteAdminById />
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'submit3')).toBeInTheDocument();
});

//test case for adminId4 in updateAdminById

test('find adminId2 in DeleteAdminById ', () => {
  render(
    <Provider store={store}>
      <UpdateAdminById />
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'adminId4')).toBeInTheDocument();
});

//test case for rid in Register

test('find rid5 in Register ', () => {
  render(
    <Provider store={store}>
      <Register />
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'rid5')).toBeInTheDocument();
});

//test case for userName5 in Register

test('find userName5 in Register ', () => {
  render(
    <Provider store={store}>
      <Register />
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'userName5')).toBeInTheDocument();
});
//test case for user password in registration
test('find  password5 in Register ', () => {
  render(
    <Provider store={store}>
      <Register />
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'password5')).toBeInTheDocument();
});

//test case for reEnter password in user Registration
test('find  reEnterPassword5 in Register ', () => {
  render(
    <Provider store={store}>
      <Register />
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'reEnterPassword5')).toBeInTheDocument();
});

// test case for submit in submit Registration
test('find  submit5 in Register ', () => {
  render(
    <Provider store={store}>
      <Register />
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'submit5')).toBeInTheDocument();
});

// test case for weather in city
test('find cityname in Weather ', () => {
  render(
    <Provider store={store}>
      <GetWeatherByCity />
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'cityname')).toBeInTheDocument();
});

//test case for weather submit
test('find submitCity in Weather ', () => {
  render(
    <Provider store={store}>
      <GetWeatherByCity />
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'submitCity')).toBeInTheDocument();
});