'use client';
import './/Header.scss';
import {useState, useEffect, useMemo} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {logo, arrow} from '../../img/_img.js';
import ModalCitiesList from '../Modals/ModalCitiesList.jsx';
import ModaUniversitiesList from '../Modals/ModaUniversitiesList.jsx';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
export default function Header({univers, cities, findUniversities}) {
  const [modalCitiesVisable, setModalCitiesVisable] = useState(false);
  const [citiesToRender, setCitiesToRender] = useState(cities);
  const [burgerIsActive, setBurgerIsActive] = useState(false);
  const [modalUniversVisable, setModalUniversVisable] = useState(false);
  const [valueInputUnivers, setValueInputUnivers] = useState('');
  const [findingUniversities, setFindingUniversities] = useState([]);
  const [cityName, setCityName] = useState('');

  useEffect(() => {
    setCityName(JSON.parse(localStorage.getItem('city')));
  }, []);

  function handleFilteredCities(param) {
    let findCities = cities.filter(item => item.name.toLowerCase().includes(param.toLowerCase()));
    setCitiesToRender(findCities);
  }
  function handleModalCities() {
    setModalCitiesVisable(!modalCitiesVisable);
    setCitiesToRender(cities);
  }
  function closeModalUnivers() {
    setModalUniversVisable(false);
    setValueInputUnivers('');
  }
  async function handleInput(evt) {
    let params = evt.target.value;
    setValueInputUnivers(params);
    if (params.length >= 3) {
      setModalUniversVisable(true);
      let universities = await findUniversities(params);
      setFindingUniversities(universities);
    } else {
      setModalUniversVisable(false);
    }
  }
  function handleMobileMenu() {
    dispatch(ToggleMobileMenu());
    setBurgerIsActive(!burgerIsActive);
  }
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className={`header__burger ${burgerIsActive && 'header__burger_active'}`} onClick={handleMobileMenu}>
            <span></span>
          </div>
          <div className="header__item">
            <Link className="header__logo" href="/">
              <Image src={logo} alt="Логотип" />
            </Link>
            <div className="header__city-box">
              <span className="header__city-arrow icon border">
                <Image src={arrow} alt="" onClick={handleModalCities} />
              </span>
              <span className="header__city-name">
                {cityName ? cityName.name : 'Выберите город'}
              </span>
              <ModalCitiesList
                isVisable={modalCitiesVisable}
                citiesToRender={citiesToRender}
                handleFilteredCities={handleFilteredCities}
                setModalCitiesVisable={setModalCitiesVisable}
                setCityName={setCityName}
              />
            </div>
          </div>
          <div className="header__item header__item_type_input">
            <div className="header__input">
              <input type="text" placeholder="Учебное заведение" value={valueInputUnivers} onChange={evt => handleInput(evt)} />
              <button className={`btn header__btn noneColor ${modalUniversVisable && 'header__btn_visable'}`} onClick={closeModalUnivers}>
                X
              </button>
              <ModaUniversitiesList
                isVisable={modalUniversVisable}
                closeModalUnivers={closeModalUnivers}
                universities={findingUniversities}
              />
            </div>
          </div>

          {/* <div className="header__item header__item_type_profile">
            <div className="header__profile-avatar"></div>
            <div className="header__profile-name">Авторизация</div>
          </div> */}
        </div>
        <div className="header-navbar">
          <div className="header-navbar-conteiner swiper">
            <Swiper
              className="header-navbar_list  swiper-wrapper"
              modules={[Navigation]}
              loop={false}
              slidesPerView={'auto'}
              slidesPerGroup={2}
              spaceBetween={50}
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
