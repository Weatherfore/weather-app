import { render, screen } from '@testing-library/react';
import App from './App';
import Login from './components/common/Login';
import { Provider } from 'react-redux';
import store from './redux/store';
import GetUserById from './components/users/GetUserById';
import DeleteUserById from './components/users/DeleteUserById';
import Registration from './components/users/UserRegistration';
import UpdateUserById from './components/users/UpdateUserById';
import { getByTestId, getByText } from '@testing-library/dom';
import { deleteUserById } from './redux/UserSlice';





//test case for AdminRegistration adminId2
 test('find rid10 in DeleteAdminById ', () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'rid10')).toBeInTheDocument();
  });

  //test case for AdminRegistration adminId2
 test('find userName10in DeleteAdminById ', () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'userName10')).toBeInTheDocument();
  });

  //test case for AdminRegistration adminId2
 test('find password10 in DeleteAdminById ', () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'password10')).toBeInTheDocument();
  });

  test('find reEnterpassword10 in DeleteAdminById ', () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'reEnterPassword10')).toBeInTheDocument();
  });

  test('find submit10 in DeleteAdminById ', () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'submit10')).toBeInTheDocument();
  });

  

  test('find submit11 in userRegistration', () => {
    render(
      <Provider store={store}>
        <Registration/>
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'submit11')).toBeInTheDocument();
  });

  test('find rid11 in userRegistration', () => {
    render(
      <Provider store={store}>
        <Registration/>
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'rid11')).toBeInTheDocument();
  });

  test('find userName11 in userRegistration', () => {
    render(
      <Provider store={store}>
        <Registration/>
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'userName11')).toBeInTheDocument();
  });

  test('find password11 in userRegistration', () => {
    render(
      <Provider store={store}>
        <Registration/>
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'password11')).toBeInTheDocument();
  });

  test('find reEnterPassword11 in userRegistration', () => {
    render(
      <Provider store={store}>
        <Registration/>
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'reEnterPassword11')).toBeInTheDocument();
  });

  //deleteuserByID
  test('find rid8 in userRegistration', () => {
    render(
      <Provider store={store}>
        <DeleteUserById/>
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'rid8')).toBeInTheDocument();
  });

  test('find submit8 in userRegistration', () => {
    render(
      <Provider store={store}>
        <DeleteUserById/>
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'submit8')).toBeInTheDocument();
  });
 
  test('find reEnterPassword11 in userRegistration', () => {
    render(
      <Provider store={store}>
        <GetUserById/>
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'rid12')).toBeInTheDocument();
  });

  
  test('find submit12 in userRegistration', () => {
    render(
      <Provider store={store}>
        <GetUserById/>
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'submit12')).toBeInTheDocument();
  });

  //update user by id
  test('find rid9 in userRegistration', () => {
    render(
      <Provider store={store}>
        <UpdateUserById/>
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'rid9')).toBeInTheDocument();
  });

  test('find userName in userRegistration', () => {
    render(
      <Provider store={store}>
        <UpdateUserById/>
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'userName9')).toBeInTheDocument();
  });

  test('find password9 in userRegistration', () => {
    render(
      <Provider store={store}>
        <UpdateUserById/>
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'password9')).toBeInTheDocument();
  });

  test('find reEnterPassword9 in userRegistration', () => {
    render(
      <Provider store={store}>
        <UpdateUserById/>
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'reEnterPassword9')).toBeInTheDocument();
  });

  test('find submit9 in userRegistration', () => {
    render(
      <Provider store={store}>
        <UpdateUserById/>
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'submit9')).toBeInTheDocument();
  });
  
 


