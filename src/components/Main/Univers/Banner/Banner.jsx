"use client"
import './Banner.scss';
import Image from 'next/image';
import {UniversPhoto, logoUnivers, bell, heart, downold} from '../../../../img/_img';
function Banner({university}) {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner__body">
          <div className="banner__img">
            <Image className="banner__imgFon" src={UniversPhoto} alt="" />
            <div className="banner__logo">
              <Image src={logoUnivers} alt="" />
            </div>
            <div className="banner__img-links">
              <button className="btn notMobile">оставить отзыв</button>
              <button className="btn" id="chains">
                проверить шансы поступить
              </button>
            </div>
          </div>
          <div className="banner__content">
            <div className="banner__info">
              <div className="banner__info-title boldTxt">
                <h2>{university.text}</h2>
              </div>
              <ul className="banner__list mediumTxtOS">
                <li className="reviews">
                  <b>2.4</b>(75 отзывов)
                </li>
                <li>{university.area.name}</li>
                <li>Приемная комиссия: 7 (499) 181 21 33</li>
              </ul>
            </div>
            <div className="banner__links">
              <div className="banner__links-row ">
                <div className="banner__links-items fovorite icon border" id="fovorite">
                  <Image src={heart} alt="" />
                  <span className="notMobile">В Избранное</span>
                </div>
                <div className="banner__links-items" id="bell">
                  <Image src={bell} alt="" />
                </div>
                <div className="banner__links-items notMobile">
                  <Image src={downold} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="banner__footer"></div>
        </div>
      </div>
    </section>
  );
}
export default Banner;
