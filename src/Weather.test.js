import { render, screen } from '@testing-library/react';
import App from './App';
import Login from './components/common/Login';
import { Provider } from 'react-redux';
import store from './redux/store';
import { getByTestId, getByText } from '@testing-library/dom';
import GetWeatherByCity from './components/weather/GetWeatherByCityName';



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