import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserSlice';
import adminReducer from './AdminSlice';

console.log('0 store');

const store = configureStore({
    reducer: {
        user: userReducer,
        admin: adminReducer
    },
})
export default store;
