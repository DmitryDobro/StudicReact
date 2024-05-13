import {useState} from 'react';
import './/Header.scss';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import logo from '../../img/logoHeader.svg';
import arrow from '../../img/arrow.svg';
import Modal from '../Modal/Modal';
import ModalInput from '../ModalInput/ModalInput';
import {api} from '../../utils/Api.js';
function Header({cities}) {
  const [modalVisable, setModalVisable] = useState(false);
  const [modalInputVisable, setModalInputVisable] = useState(false);
  const [universities, setUniversities] = useState([]);
  function handleModal() {
    console.log(modalVisable);
    setModalVisable(!modalVisable);
  }
  function handleInput(evt) {
    let params = evt.target.value;
    if (params.length >= 3) {
      setModalInputVisable(true);
      api.getUniversity(params).then(res => setUniversities(res.items));
    } else {
      setModalInputVisable(false);
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
            <Modal isVisable={modalVisable} cities={cities} />
          </div>
          <div className="header__item header__item_type_input">
            <div className="header__input">
              <input type="text" placeholder="Учебное заведение, специальность или профессия" onChange={handleInput}  />
              <ModalInput isVisable={modalInputVisable} universities={universities}/>
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
