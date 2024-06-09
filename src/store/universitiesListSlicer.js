import {createSlice} from '@reduxjs/toolkit';

const universitiesListSlicer = createSlice({
  name: 'universitiesList',
  initialState: {
    universities: [],
  },
  reducers: {
    findUniversitiesReducer(state, action) {
      state.universities = action.payload;
    },
  },
});

export default universitiesListSlicer.reducer;
export const {findUniversitiesReducer} = universitiesListSlicer.actions;
