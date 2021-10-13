import { render, screen } from '@testing-library/react';
import App from './App';
import Login from './components/common/Login';
import { Provider } from 'react-redux';
import store from './redux/store';
import { getByTestId, getByText } from '@testing-library/dom';
test('test 10 == 10', () => {
  expect(10).toBe(10);
});