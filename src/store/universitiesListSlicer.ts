import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState:{universities:string[]} = {
  universities: []
}
const universitiesListSlicer = createSlice({
  name: 'universitiesList',
  initialState,
  reducers: {
    findUniversitiesReducer(state, action:PayloadAction<string[]>) {
      state.universities = action.payload;
    },
  },
});

export default universitiesListSlicer.reducer;
export const {findUniversitiesReducer} = universitiesListSlicer.actions;
