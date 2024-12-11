import './Modal.scss';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {avatar, arrow, logo} from '../../img/_img.js';
import ModalCitiesList from './ModalCitiesList';
import {ToggleMobileMenu} from '../../store/visableSlicer';
import {Link} from 'react-router-dom';
import {useAppSelector} from '../../hooks/redux';
import React from 'react';
export function ModalMobileMenu() {
  const dispatch = useDispatch();
  let cityFromLocalStorage = JSON.parse(localStorage.getItem('city')!);
  const isVisable = useAppSelector(state => state.visable.modalMenuVisable);
  const [modalCitiesVisable, setModalCitiesVisable] = useState(false);
  const cities = useAppSelector(state => state.cities.cities);
  const [citiesToRender, setCitiesToRender] = useState(cities);
  function handleModalCities() {
    setModalCitiesVisable(!modalCitiesVisable);
    setCitiesToRender(cities);
  }
  function handleFilteredCities(param: string) {
    let findCities = cities.filter((item: {name: string}) => item.name.toLowerCase().includes(param.toLowerCase()));
    setCitiesToRender(findCities);
  }
  function handleClose() {
    dispatch(ToggleMobileMenu());
  }
  return (
    <section className={`modal modal_type_mobileMenu mobileMenu ${isVisable && 'modal_isVisable'}`}>
      <span className="modal__closeIcon" onClick={handleClose}>
        &times;
      </span>
      <div className="mobile-menu_conteiner">
        <div className="mobileMenu__profile">
          <Link className="mobileMenu__logo" to="/">
            <img src={logo} alt="Логотип" />
          </Link>
          <div className="mobileMenu__profile_avatar">
            <img src={avatar} alt="Фото пользователя" />
          </div>
          <div className="mobileMenu__profile_name">Имя пользователя</div>
        </div>
        <div className="mobileMenu__city-box">
          <span className="mobileMenu__city-arrow icon border">
            <img src={arrow} alt="" onClick={handleModalCities} />
          </span>
          <span className="mobileMenu__city-name">{cityFromLocalStorage ? cityFromLocalStorage.name : ''}</span>
          <ModalCitiesList
            isVisable={modalCitiesVisable}
            setIsVisable={setModalCitiesVisable}
            citiesToRender={citiesToRender}
            handleFilteredCities={handleFilteredCities}
          />
        </div>
      </div>
    </section>
  );
}
