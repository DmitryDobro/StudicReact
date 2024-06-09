import {useState, useEffect} from 'react';
import './App.css';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import {api} from '../../utils/Api.js';
import Footer from '../Footer/Footer.jsx';
import {useDispatch, useSelector} from 'react-redux';
import {ToggleUnivers} from '../../store/visableSlicer.js';
import {addCities} from '../../store/citiesListSlicer.js';
import {findUniversitiesReducer} from '../../store/universitiesListSlicer.js';
import { ModalMobileMenu } from '../Modals/ModalMobileMenu.jsx';

function App() {
  const dispatch = useDispatch();
  const modalUniversVisable = useSelector(state => state.visable.modalUniversVisable);
  const universities = useSelector(state => state.universities.universities);
  const cities = useSelector(state => state.cities.cities);
  useEffect(() => {
    api.getCities().then(res => dispatch(addCities(res[0].areas)));
  }, []);
  function findUniversities(params) {
    return function (dispatch) {
      if (params.length >= 3) {
        dispatch(ToggleUnivers(true));
        api.getUniversity(params).then(res => dispatch(findUniversitiesReducer(res.items)));
      } else {
        dispatch(ToggleUnivers(false));
      }
    };
  }
  function closeModal() {
    dispatch({type: 'TOGGLE_UNIVERS', payload: false});
  }
  return (
    <>
      <Header
        cities={cities}
        findUniversities={findUniversities}
        modalUniversVisable={modalUniversVisable}
        universities={universities}
        closeModal={closeModal}
      />
      <Main cities={cities}></Main>

      <Footer></Footer>
      <ModalMobileMenu ></ModalMobileMenu>
    </>
  );
}

export default App;
