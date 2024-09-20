import {configureStore, combineReducers, miniSerializeError} from '@reduxjs/toolkit';
import visableSlicer from './visableSlicer';
import citiesListSlicer from './citiesListSlicer';
import universitiesListSlicer from './universitiesListSlicer';

const rootReducer = combineReducers({
  visable: visableSlicer,
  cities: citiesListSlicer,
  universities: universitiesListSlicer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
});

