import { render, screen } from '@testing-library/react';
import App from './App';
import Login from './components/common/Login';
import { Provider } from 'react-redux';
import store from './redux/store';
import { getByTestId, getByText } from '@testing-library/dom';
import AdminLogin from './components/common/AdminLogin';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
// sample
test('test 10 == 10', () => {
  expect(10).toBe(10);
});

// test case for rid in login
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