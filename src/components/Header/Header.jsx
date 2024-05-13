import {useState} from 'react';

import './/Header.scss';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import logo from '../../img/logoHeader.svg';
import arrow from '../../img/arrow.svg';
import ModalCitiesList from '../Modals/ModalCitiesList.jsx';
import ModaUniversitiesList from '../Modals/ModaUniversitiesList.jsx';
import {api} from '../../utils/Api.js';
function Header({cities}) {
  const [modalCitiesListVisable, setModalCitiesListVisable] = useState(false);
  const [modaUniversitiesListVisable, setModalUniversitiesListVisable] = useState(false);
  const [universities, setUniversities] = useState([]);
  const [valueInput, setValueInput] = useState('');
  function handleModal() {
    console.log(modalVisable);
    setModalCitiesListVisable(!modalVisable);
  }
  function handleModal() {
    setModalUniversitiesListVisable(false);
    setValueInput('');
  }
  function handleInput(evt) {
    let params = evt.target.value;
    setValueInput(params);
    if (params.length >= 3) {
      setModalUniversitiesListVisable(true);

      api.getUniversity(params).then(res => setUniversities(res.items));
    } else {
      setModalUniversitiesListVisable(false);
    }
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__item">
            <a className="header__logo" href="#">
              <img src={logo} alt="Логотип" />
            </a>
            <span className="header__city-arrow icon border">
              <img src={arrow} alt="" onClick={handleModal} />
            </span>
            <span className="header__city-name">Москва</span>
            <ModalCitiesList isVisable={modalCitiesListVisable} cities={cities} />
          </div>
          <div className="header__item header__item_type_input">
            <div className="header__input">
              <input type="text" placeholder="Учебное заведение, специальность или профессия" value={valueInput} onChange={handleInput} />
              <button className={`btn header__btn   ${modaUniversitiesListVisable && 'header__btn_visable'}`} onClick={handleModal}>
                Закрыть
              </button>
              <ModaUniversitiesList isVisable={modaUniversitiesListVisable} universities={universities} />
            </div>
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
