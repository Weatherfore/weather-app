import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({

  name: 'weather',
  initialState: {
    weatherState: {
      cityName: '',
    }

  },
  reducers: {
    getWeatherByCityName: (state, action) => {
      state.weatherState = action.payload;
    }

  }
})

export const { getWeatherByCityName} = weatherSlice.actions;

export default weatherSlice.reducer;