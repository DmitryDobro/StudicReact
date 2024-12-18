import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IUserInfo {
  name: string;
  email: string;
  imgUrl: string;
  id: number;
  likedUniversities: string[];
}
const initialState: IUserInfo = {
  name: '',
  email: '',
  imgUrl: '',
  id: 0,
  likedUniversities: [],
};

const userInfoSlicer = createSlice({
  name: 'UserInfo',
  initialState,
  reducers: {
    setUserInfo(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.imgUrl = action.payload.img;
      state.id = action.payload._id;
    },
  },
});

export default userInfoSlicer.reducer;
export const {setUserInfo} = userInfoSlicer.actions;
