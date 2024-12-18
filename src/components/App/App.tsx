import {useEffect, useState} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import './App.css';
import {api} from '../../utils/Api.js';
import {addCities} from '../../store/citiesListSlicer.js';
import Login from '../Login/Login.js';
import Registration from '../Registration/Registration';
import Lead from '../Main/Lead/Lead';
import Univers from '../Main/Univers/Univers';
import Region from '../Main/Region/Region.jsx';
import {Layout} from '../Layout/Layout.js';
import {useAppDispatch, useAppSelector} from '../../hooks/redux.js';
import React from 'react';
import {authApi} from '../../utils/Auth';
import {setUserInfo} from '../../store/userInfoSlicer';
import {ToggleIsLogin} from '../../store/visableSlicer';
function App() {
  const dispatch = useAppDispatch();
  const cities = useAppSelector(state => state.cities.cities);
  const navigate = useNavigate();
  const isLogin = useAppSelector(state => state.visable.isLogin);
  useEffect(() => {
    api.getCities().then(res => dispatch(addCities(res[0].areas)));
  }, []);
  useEffect(() => {
    checkToken();
  }, [isLogin]);

  function handleLogin(email: string, password: string) {
    console.log(password);
    authApi
      .login(email, password)
      .then(res => {
        console.log(res);
        localStorage.setItem('jwt', res.token);
        localStorage.setItem('isLogin', 'true');
        dispatch(ToggleIsLogin(true));
        navigate('/');
      })
      .catch(err => {
        console.log(err);
      });
  }
  function hanleRegistration(name: string, password: string, email: string, img: string) {
    authApi
      .register(name, password, email, img)
      .then(() => {
        handleLogin(email, password);
        navigate('/');
      })
      .catch(err => {
        console.log(err);
      });
  }
  function checkToken() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      authApi
        .getDataUser(jwt)
        .then(res => {
          dispatch(setUserInfo(res));
          dispatch(ToggleIsLogin(true));
        })
        .catch(err => console.log(err));
    }
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Lead />} />
          <Route path="/univers/:id" element={<Univers />} />
          <Route path="/region/:Regionid" element={<Region cities={cities} />} />
          <Route path="/signin" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Registration onRegister={hanleRegistration} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
