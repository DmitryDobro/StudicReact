import {createSlice} from '@reduxjs/toolkit';

const citiesListSlicer = createSlice({
  name: 'citiesList',
  initialState: {
    cities: [],
  },
  reducers: {
    addCities(state, action) {
      state.cities = action.payload;
    },
  },
});

export default citiesListSlicer.reducer;
export const {addCities} = citiesListSlicer.actions;
