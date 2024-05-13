import {useState, useEffect} from 'react';
import {Route, Routes, Navigate, useNavigate} from 'react-router-dom';
import './App.css';
import Header from '../Header/Header.jsx';

import {api} from '../../utils/Api.js';
import Region from '../Region/Region.jsx';
function App() {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    api.getCities().then(res => {
      setCities(res[0].areas);
    });
  }, []);

  return (
    <>
      <Header cities={cities} />
      <Routes>
        <Route path="/" element={'asd'} />
        <Route path="/:id" element={<Region cities={cities} />} />
      </Routes>
      {/* <header className="header">
        <div className="conteiner">
          <div className="header-body">
            <div className="header-top">
              <div className="header-burger">
                <span></span>
              </div>
              <div className="header-column" id="colomnCity">
                <div className="header-logo">
                  <a href="#">
                    <img src="" alt="" />
                  </a>
                </div>
                <div className="header-city">
                  <div className="header-city_choose">
                    <span className="header-city_arrow icon border">
                      <img src="" alt="" />
                    </span>
                    <div className="header-city_name">
                      <span>Москва</span>
                    </div>
                  </div>
                  <div className="city-box">
                    <div className="city-box_conteiner loading">
                      <div className="city-main">
                        <div className="city-search">
                          <input id="inputHeader" type="text" placeholder="Регион" />
                        </div>
                        <div className="city-selected"></div>
                        <div className="allCity"></div>
                      </div>
                      <div className="city-footer">
                        <button className="btn btnCity">Сохранить</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-column _input">
                <div className="header-input">
                  <input type="text" placeholder="Учебное заведение, специальность или профессия" />
                </div>
              </div>
              <div className="header-column" id="colomnProfile">
                <div className="header-likes">
                  <img src="" alt="" />
                  <span className="header-likes_count">1</span>
                </div>
                <div className="header-profile">
                  <div className="header-profile_avatar">
                    <picture>
                      <source srcset="./images/header/avatarMobile.png" media="(max-width: 1000px)" />
                      <img src="./images/avatar.svg" alt="" />
                    </picture>
                  </div>
                  <div className="header-profile_name">Екатерина</div>
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
        </div>
      </header> */}
    </>
  );
}

export default App;
