import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import './/Header.scss';
import {logo, arrow} from '../../img/_img.js';
import ModalCitiesList from '../Modals/ModalCitiesList';
import ModaUniversitiesList from '../Modals/ModaUniversitiesList';
import {ToggleMobileMenu, ToggleUnivers, ToggleRegistration, ToggleIsLogin, ToggleModalUserInfo} from '../../store/visableSlicer.js';
import React from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {RootState} from '../../store';
import {findUniversitiesReducer} from '../../store/universitiesListSlicer';
interface HeaderProps {
  findUniversities: (arg: string) => void;
}

function Header({findUniversities}: HeaderProps) {
  const [burgerIsActive, setBurgerIsActive] = useState(false);
  const [valueInputUnivers, setValueInputUnivers] = useState('');
  const modalUniversVisable = useAppSelector(state => state.visable.modalUniversVisable);
  const userInfo = useAppSelector(state => state.userInfo);
  const isLogin = useAppSelector(state => state.visable.isLogin);
  const dispatch = useAppDispatch();
  const findTest = findUniversitiesReducer;

  // const cities = useSelector((state:RootState) => state.cities.cities);
  const cities = useAppSelector(state => state.cities.cities);
  let cityFromLocalStorage = JSON.parse(localStorage.getItem('city')!);
  const [citiesToRender, setCitiesToRender] = useState(cities);

  // const modalCitiesVisable = useSelector(state => state.visable.modalCitiesVisable);
  const [modalCitiesVisable, setModalCitiesVisable] = useState(false);

  function handleFilteredCities(param: string) {
    let findCities = cities.filter((item: {name: string}) => item.name.toLowerCase().includes(param.toLowerCase()));
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
    return function (dispatch: (arg0: void) => void) {
      dispatch(findUniversities(params));
    };
  }
  function handleMobileMenu() {
    dispatch(ToggleMobileMenu());
    // setBurgerIsActive(!burgerIsActive);
  }
  function handleRegistration() {
    dispatch(ToggleRegistration());
  }
  function handleLogout() {
    dispatch(ToggleIsLogin(false));
    localStorage.removeItem('jwt');
    localStorage.setItem('isLogin', 'false');
    console.log(userInfo);
    
  }
function handleOpenUserInfo(){
  dispatch(ToggleModalUserInfo())
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
                  dispatch(handleInput(evt));
                }}
              />
              <button className={`btn header__btn noneColor   ${modalUniversVisable && 'header__btn_visable'}`} onClick={closeModalUnivers}>
                X
              </button>
              <ModaUniversitiesList isVisable={modalUniversVisable} closeModalUnivers={closeModalUnivers} />
            </div>
          </div>

          <div className="header__item">
            {isLogin ? (
              <div className='header__item_type_profile' onClick={handleOpenUserInfo}>
                <img src={userInfo.imgUrl} className="header__profile-avatar"></img>
                <span>{userInfo.name}</span>
              </div>
            ) : (
              <Link className="header__profile-name" onClick={handleRegistration} to={'/signup'}>
                Войти
              </Link>
            )}
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
