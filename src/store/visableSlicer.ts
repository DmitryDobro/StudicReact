import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const visableSlice = createSlice({
  name: 'visable',
  initialState: {
    modalCitiesVisable: false,
    modalUniversVisable: false,
    modalMenuVisable: false,
    modalRegistration: false,
  },
  reducers: {
    ToggleCities(state, action:PayloadAction<boolean>) {
      state.modalCitiesVisable = !state.modalCitiesVisable;
    },
    ToggleUnivers(state, action) {
      state.modalUniversVisable = action.payload;
    },
    ToggleMobileMenu(state) {
      state.modalMenuVisable = !state.modalMenuVisable;
    },
    ToggleRegistration(state) {
      state.modalRegistration = !state.modalRegistration;
    },
  },
});

export default visableSlice.reducer;
export const {ToggleCities, ToggleUnivers, ToggleMobileMenu,ToggleRegistration} = visableSlice.actions;
