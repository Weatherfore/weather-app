import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserSlice';
import adminReducer from './AdminSlice';
import weatherReducer from './WeatherSlice';
console.log('0 store');

const store = configureStore({
    reducer: {
        user: userReducer,
        admin: adminReducer,
        weather:weatherReducer
    },
})
export default store;
