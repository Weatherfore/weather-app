import { createSlice } from '@reduxjs/toolkit';

export const adminSlice = createSlice({

  name: 'admin',
  initialState: {
    adminState: {
      adminId: '',
      adminName: '',
      adminPassword: ''
    },
    allAdminsState: [],

  },
  reducers: {
      getAdminById: (state, action) => {
       state.adminState = action.payload;
      },
      getAllAdmins: (state, action) => {
      state.allAdminsState = action.payload;
      },
      addAdmin: (state, action) => {
          state.adminState = action.payload;
      },
      deleteAdminById: (state, action) => {
          state.adminState = action.payload;
      },
      updateAdminById:(state,action) =>{
        state.adminState=action.payload;
      }
      
    
  }
})

export const { getAdminById, getAllAdmins, addAdmin, deleteAdminById, updateAdminById} = adminSlice.actions;

export default adminSlice.reducer;