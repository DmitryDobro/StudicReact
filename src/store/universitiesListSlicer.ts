import {createSlice, PayloadAction} from '@reduxjs/toolkit';
interface universities {
  id:number,
  name:string
}
const initialState:{universities:universities[]} = {
  universities: []
}
const universitiesListSlicer = createSlice({
  name: 'universitiesList',
  initialState,
  reducers: {
    findUniversitiesReducer(state, action:PayloadAction<universities[]>) {
      state.universities = action.payload;
    },
  },
});

export default universitiesListSlicer.reducer;
export const {findUniversitiesReducer} = universitiesListSlicer.actions;
