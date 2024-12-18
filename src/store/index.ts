import {configureStore, combineReducers, miniSerializeError} from '@reduxjs/toolkit';
import visableSlicer from './visableSlicer';
import citiesListSlicer from './citiesListSlicer';
import universitiesListSlicer from './universitiesListSlicer';
import userInfoSlicer from './userInfoSlicer';

const rootReducer = combineReducers({
  visable: visableSlicer,
  cities: citiesListSlicer,
  universities: universitiesListSlicer,
  userInfo: userInfoSlicer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof rootReducer>;
// export type AppStore = ReturnType<typeof store>;
// export type AppDispatch = AppStore['dispatch'];
