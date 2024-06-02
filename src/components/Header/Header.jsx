import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import './/Header.scss';
import logo from '../../img/logoHeader.svg';
import arrow from '../../img/arrow.svg';
import ModalCitiesList from '../Modals/ModalCitiesList.jsx';
import ModaUniversitiesList from '../Modals/ModaUniversitiesList.jsx';
function Header({cities, universities, modaUniversitiesListVisable, findUniversities, closeModal}) {
  const [modalCitiesListVisable, setModalCitiesListVisable] = useState(false);
  const [burgerIsActive, setBurgerIsActive] = useState(false);
  const [valueInput, setValueInput] = useState('');
  let cityFromLocalStorage = JSON.parse(localStorage.getItem('city'));
  const [citiesToRender, setCitiesToRender] = useState(cities);
  const [chooseCity, setChooseCity] = useState('');

  useEffect(() => {
    setCitiesToRender(cities);
    cityFromLocalStorage = JSON.parse(localStorage.getItem('city'));
  }, [cities]);
  function handleFilteredCities(param) {
    let findCities = cities.filter(item => item.name.toLowerCase().includes(param.toLowerCase()));
    setCitiesToRender(findCities);
    console.log(findCities);
  }
function closeModalSities(){
  setModalCitiesListVisable(false)
}
  function handleModalCities() {
    setModalCitiesListVisable(!modalCitiesListVisable);
  }
  function handleModal() {
    console.log(123);
    closeModal();
    setValueInput('');
  }
  function handleInput(evt) {
    let params = evt.target.value;
    setValueInput(params);
    findUniversities(params);
  }
  function handleMobileMenu() {
    setBurgerIsActive(!burgerIsActive);
  }
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div class={`header__burger ${burgerIsActive && 'header__burger_active'}`} onClick={handleMobileMenu}>
            <span></span>
          </div>
          <div className="header__item">
            <Link className="header__logo" to="/">
              <img src={logo} alt="Логотип" />
            </Link>
            <div className="header__city-box">
              <span className="header__city-arrow icon border">
                <img src={arrow} alt="" onClick={handleModalCities} />
              </span>
              <span className="header__city-name">{cityFromLocalStorage ? cityFromLocalStorage.name : ''}</span>
            </div>
            <ModalCitiesList
              isVisable={modalCitiesListVisable}
              cities={cities}
              closeModalSities={closeModalSities}
              citiesToRender={citiesToRender}
              handleFilteredCities={handleFilteredCities}
              setChooseCity={setChooseCity}
            />
          </div>
          <div className="header__item header__item_type_input">
            <div className="header__input">
              <input type="text" placeholder="Учебное заведение" value={valueInput} onChange={handleInput} />
              <button
                className={`btn header__btn noneColor   ${modaUniversitiesListVisable && 'header__btn_visable'}`}
                onClick={handleModal}>
                X
              </button>
              <ModaUniversitiesList isVisable={modaUniversitiesListVisable} universities={universities} />
            </div>
          </div>

          <div class="header__item header__item_type_profile">
            <div class="header__profile-avatar"></div>
            <div class="header__profile-name">Авторизация</div>
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
