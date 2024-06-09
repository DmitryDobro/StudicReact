import {createSlice} from '@reduxjs/toolkit';

const visableSlice = createSlice({
  name: 'visable',
  initialState: {
    modalCitiesVisable: false,
    modalUniversVisable: false,
    modalMenuVisable: false,
  },
  reducers: {
    ToggleCities(state) {
      state.modalCitiesVisable = !state.modalCitiesVisable;
    },
    ToggleUnivers(state, action) {
      state.modalUniversVisable = action.payload;
    },
    ToggleMobileMenu(state) {
      state.modalMenuVisable = !state.modalMenuVisable;
    },
  },
});

export default visableSlice.reducer;
export const {ToggleCities, ToggleUnivers, ToggleMobileMenu} = visableSlice.actions;
