import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './Modal.scss';
import {avatar, arrow} from '../../img/_img.js';
import ModalCitiesList from './ModalCitiesList.jsx';
import {ToggleCities} from '../../store/visableSlicer.js';
export function ModalMobileMenu() {
  const dispatch = useDispatch();
  let cityFromLocalStorage = JSON.parse(localStorage.getItem('city'));
  const isVisable = useSelector(state => state.visable.modalMenuVisable);
  const [modalCitiesVisable, setModalCitiesVisable] = useState(false);
  const cities = useSelector(state => state.cities.cities);
  const [citiesToRender, setCitiesToRender] = useState(cities);
  function handleModalCities() {
    setModalCitiesVisable(!modalCitiesVisable);
    setCitiesToRender(cities);
  }
  function handleFilteredCities(param) {
    let findCities = cities.filter(item => item.name.toLowerCase().includes(param.toLowerCase()));
    setCitiesToRender(findCities);
  }
  return (
    <section className={`modal modal_type_mobileMenu mobileMenu ${isVisable && 'modal_isVisable'}`}>
      <div class="mobile-menu_conteiner">
        <div class="mobileMenu__profile">
          <div class="mobileMenu__profile_avatar">
            <img src={avatar} alt="Фото пользователя" />
          </div>
          <div class="mobileMenu__profile_name">Имя пользователя</div>
        </div>
        <div className="mobileMenu__city-box">
          <span className="mobileMenu__city-arrow icon border">
            <img src={arrow} alt="" onClick={handleModalCities} />
          </span>
          <span className="mobileMenu__city-name">{cityFromLocalStorage ? cityFromLocalStorage.name : ''}</span>
          <ModalCitiesList
            isVisable={modalCitiesVisable}
            setIsVisable={setModalCitiesVisable}
            cities={cities}
            citiesToRender={citiesToRender}
            handleFilteredCities={handleFilteredCities}
          />
        </div>
      </div>
    </section>
  );
}
