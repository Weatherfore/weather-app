import { render, screen } from '@testing-library/react';
import App from './App';
import Login from './components/common/Login';
import { Provider } from 'react-redux';
import store from './redux/store';
import { getByTestId, getByText } from '@testing-library/dom';
import DeleteAdminById from './components/admin/DeleteAdminById';
import AdminRegister from './components/admin/AdminRegistration';
import DeleteUserByIdFromAdmin from './components/admin/DeleteUserByIdFromAdmin';
import AdminLogin from './components/common/AdminLogin';
import UpdateAdminById from './components/admin/UpdateAdminById';
import GetAllAdmins from './components/admin/GetAllAdmin';
import GetUserById from './components/admin/GetUserById';
import GetAllUsers from './components/admin/ViewAllUsers';
import GetAdminById from './components/admin/GetAdminById';


 //test case for AdminRegistration adminId2
 test('find adminId2 in DeleteAdminById ', () => {
  render(
    <Provider store={store}>
      <AdminRegister />
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'adminId2')).toBeInTheDocument();
});

//test case for AdminRegistration adminName2
test('find adminName2 in DeleteAdminById ', () => {
  render(
    <Provider store={store}>
      <AdminRegister />
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'adminName2')).toBeInTheDocument();
});

//test case for AdminRegestration adminPassword2
test('find adminName2 in DeleteAdminById ', () => {
  render(
    <Provider store={store}>
      <AdminRegister/>
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'adminPassword2')).toBeInTheDocument();
});

//test case for AdminRegestration submit2
test('find adminName2 in DeleteAdminById ', () => {
  render(
    <Provider store={store}>
      <AdminRegister/>
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'submit2')).toBeInTheDocument();
});
//test case for Delete User By Id rid1
test('find rid1 in DeleteUserById ', () => {
  render(
    <Provider store={store}>
      <DeleteUserByIdFromAdmin/>
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'rid1')).toBeInTheDocument();
});
//test case for Delete User By Id submit1
test('find adminName2 in DeleteUserById ', () => {
  render(
    <Provider store={store}>
      <DeleteUserByIdFromAdmin/>
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'submit1')).toBeInTheDocument();
});
 //getAdminById adminId3
 test('find adminId3 in getAdminById ', () => {
  render(
    <Provider store={store}>
      <GetAdminById/>
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'adminId3')).toBeInTheDocument();
});

//getAdminById submit3
test('find adminId3 in getAdminById ', () => {
  render(
    <Provider store={store}>
      <GetAdminById/>
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'submit3')).toBeInTheDocument();
});

//getUserById submit4
test('find adminId3 in getUserById ', () => {
  render(
    <Provider store={store}>
      <GetUserById/>
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'submit4')).toBeInTheDocument();
});

//getUserById rid4
test('find adminId3 in getUserById ', () => {
  render(
    <Provider store={store}>
      <GetUserById/>
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'rid4')).toBeInTheDocument();
});
 // updateAdmin adminId5
 test('find adminId3 in UpdateAdminById  ', () => {
  render(
    <Provider store={store}>
      <UpdateAdminById/>
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'adminId5')).toBeInTheDocument();
});

// updateAdmin adminNmae5
test('find adminName5 in UpdateAdminById  ', () => {
  render(
    <Provider store={store}>
      <UpdateAdminById/>
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'adminName5')).toBeInTheDocument();
});

// updateAdmin AdminPassword5
test('find adminName5 in UpdateAdminById  ', () => {
  render(
    <Provider store={store}>
      <UpdateAdminById/>
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'adminPassword5')).toBeInTheDocument();
});

// updateAdmin adminId5
test('find submit5 in UpdateAdminById  ', () => {
  render(
    <Provider store={store}>
      <UpdateAdminById/>
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'submit5')).toBeInTheDocument();
});

//viewAllAdmin submit7
test('find submit5 in UpdateAdminById  ', () => {
  render(
    <Provider store={store}>
      <GetAllUsers/>
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'submit7')).toBeInTheDocument();
});
