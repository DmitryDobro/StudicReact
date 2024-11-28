import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import './/Header.scss';
import {logo, arrow} from '../../img/_img.js';
import ModalCitiesList from '../Modals/ModalCitiesList.jsx';
import ModaUniversitiesList from '../Modals/ModaUniversitiesList.jsx';
import {ToggleMobileMenu, ToggleUnivers, ToggleRegistration} from '../../store/visableSlicer.js';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { RootState } from '../../store';
import { findUniversitiesReducer } from '../../store/universitiesListSlicer';
interface HeaderProps{
  findUniversities: (arg:string) => void;
  }

function Header({findUniversities}:HeaderProps) {
  const [burgerIsActive, setBurgerIsActive] = useState(false);
  const [valueInputUnivers, setValueInputUnivers] = useState('');
  const modalUniversVisable = useAppSelector(state => state.visable.modalUniversVisable);

const dispatch2 = useAppDispatch()
const findTest = findUniversitiesReducer

  // const cities = useSelector((state:RootState) => state.cities.cities);
  const cities = useAppSelector(state => state.cities.cities)
  let cityFromLocalStorage = JSON.parse(localStorage.getItem('city')!);
  const [citiesToRender, setCitiesToRender] = useState(cities);
  const dispatch = useDispatch();
  // const modalCitiesVisable = useSelector(state => state.visable.modalCitiesVisable);
  const [modalCitiesVisable, setModalCitiesVisable] = useState(false);

  function handleFilteredCities(param: string) {
    let findCities = cities.filter((item: { name: string; }) => item.name.toLowerCase().includes(param.toLowerCase()));
    setCitiesToRender(findCities);
  }

  function handleModalCities() {
    setModalCitiesVisable(!modalCitiesVisable);
    setCitiesToRender(cities);
  }
  function closeModalUnivers() {
    dispatch(ToggleUnivers(false));
    setValueInputUnivers('');
  }
  function handleInput(evt: React.ChangeEvent<HTMLInputElement>) {
    let params = evt.target.value;
    setValueInputUnivers(params);
    return function (dispatch2: (arg0: void) => void) {
      dispatch2(findUniversities(params));
    };
  }
  function handleMobileMenu() {
    dispatch(ToggleMobileMenu());
    // setBurgerIsActive(!burgerIsActive);
  }
  function handleRegistration(){
    dispatch(ToggleRegistration());
  }
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          
          <div className="header__item">
            <Link className="header__logo" to="/">
              <img src={logo} alt="Логотип" />
            </Link>
            <div className="header__city-box">
              <span className="header__city-arrow icon border">
                <img src={arrow} alt="" onClick={handleModalCities} />
              </span>
              <span className="header__city-name">{cityFromLocalStorage ? cityFromLocalStorage.name : ''}</span>
              <ModalCitiesList
                isVisable={modalCitiesVisable}
                setIsVisable={setModalCitiesVisable}
                cities={cities}
                citiesToRender={citiesToRender}
                handleFilteredCities={handleFilteredCities}
              />
            </div>
          </div>
          <div className="header__item header__item_type_input">
            <div className="header__input">
              <input
                type="text"
                placeholder="Учебное заведение"
                value={valueInputUnivers}
                onChange={evt => {
                  dispatch2(handleInput(evt));
                }}
              />
              <button className={`btn header__btn noneColor   ${modalUniversVisable && 'header__btn_visable'}`} onClick={closeModalUnivers}>
                X
              </button>
              <ModaUniversitiesList isVisable={modalUniversVisable} closeModalUnivers={closeModalUnivers} />
            </div>
          </div>

          <div className="header__item header__item_type_profile">
            <div className="header__profile-avatar"></div>
            <p className="header__profile-name" onClick={handleRegistration}>Войти</p>
          </div>
          <div className={`header__burger ${burgerIsActive && 'header__burger_active'}`} onClick={handleMobileMenu}>
            <span></span>
          </div>
        </div>
        <div className="header-navbar">
          <div className="header-navbar-conteiner swiper">
            <Swiper
              className="header-navbar_list  swiper-wrapper"
              modules={[Navigation]}
              loop={false}
              slidesPerView={'auto'}
              slidesPerGroup={2}
              spaceBetween={25}
              simulateTouch={false}
              watchOverflow={true}
              keyboard={{
                enabled: true,
                onlyInViewport: true,
                pageUpDown: true,
              }}
              navigation={{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}}>
              <SwiperSlide className="header-navbar_slide SwiperSlide">
                <a href="#">Вузы</a>
              </SwiperSlide>
              <SwiperSlide className="header-navbar_slide  SwiperSlide">
                <a href="#">Колледжи</a>
              </SwiperSlide>
              <SwiperSlide className="header-navbar_slide  SwiperSlide">
                <a href="#">Техникумы</a>
              </SwiperSlide>
              <SwiperSlide className="header-navbar_slide  SwiperSlide">
                <a href="#">Училища</a>
              </SwiperSlide>
              <SwiperSlide className="header-navbar_slide  SwiperSlide">
                <a href="#">Специальности</a>
              </SwiperSlide>
              <SwiperSlide className="header-navbar_slide  SwiperSlide">
                <a href="#">Профессии</a>
              </SwiperSlide>
              <SwiperSlide className="header-navbar_slide  SwiperSlide">
                <a href="#">Отзывы</a>
              </SwiperSlide>
              <SwiperSlide className="header-navbar_slide  SwiperSlide">
                <a href="#">Учебным заведениям</a>{' '}
              </SwiperSlide>
              <SwiperSlide className="header-navbar_slide SwiperSlide">
                <a href="#">Тест на профориентацию</a>
              </SwiperSlide>
              <SwiperSlide className="header-navbar_slide SwiperSlide">
                <a href="#">Тест на профориентацию</a>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
