import React from 'react';
import {Outlet} from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { findUniversitiesReducer } from '../../store/universitiesListSlicer';
import { ToggleUnivers } from '../../store/visableSlicer';
import { api } from '../../utils/Api';
import { useAppDispatch } from '../../hooks/redux';
import ModalUserInfo from '../Modals/ModalUserInfo';

export const Layout = () => {
  const dispatch = useAppDispatch();
  function findUniversities(params: string ) {
    return function () {
      if (params.length >= 3) {
        dispatch(ToggleUnivers(true));
        api.getUniversity(params).then(res => dispatch(findUniversitiesReducer(res.items)));
      } else {
        dispatch(ToggleUnivers(false));
      }
    };
  }
  return (
    <div className="mainContainer">
      <Header findUniversities={findUniversities}></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <ModalUserInfo></ModalUserInfo>
    </div>
  );
};
