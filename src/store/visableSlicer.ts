import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const visableSlice = createSlice({
  name: 'visable',
  initialState: {
    modalCitiesVisable: false,
    modalUniversVisable: false,
    modalMenuVisable: false,
    modalRegistration: false,
    modalUserInfo: true,
    isLogin: JSON.parse(localStorage.getItem('isLoggin')!),
  },
  reducers: {
    ToggleCities(state, action: PayloadAction<boolean>) {
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
    ToggleIsLogin(state, action) {
      state.isLogin = action.payload;
    },
    ToggleModalUserInfo(state) {
      state.modalUserInfo = !state.modalUserInfo;
    },
  },
});

export default visableSlice.reducer;
export const {ToggleCities, ToggleUnivers, ToggleMobileMenu, ToggleRegistration, ToggleIsLogin, ToggleModalUserInfo} = visableSlice.actions;
