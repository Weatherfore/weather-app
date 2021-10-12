import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({

  name: 'user',
  initialState: {
    userState: {
      rid: '',
      userName: '',
      password: ''
    },
    allUsersState: [],

  },
  reducers: {
    getUserById: (state, action) => {
      state.userState = action.payload;
    },
    getAllUsers: (state, action) => {
      state.allUsersState = action.payload;
    },
    addUsers: (state, action) => {
      state.userState = action.payload;
    },
    deleteUserById: (state, action) => {
      state.userState = action.payload;
    },
    updateUserById:(state,action)=>{
      state.userState=action.payload;
    }

  }
})

export const { getUserById, getAllUsers, addUser, deleteUserById ,updateUserById} = userSlice.actions;

export default userSlice.reducer;