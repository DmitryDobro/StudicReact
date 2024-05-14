import './Banner.scss';
import UniversPhoto from '../../../img/UniversPhoto.jpeg';
import logoUnivers from '../../../img/logoUnivers.png';
import bell from '../../../img/bell.svg';
import heart from '../../../img/heart.svg';
import downold from '../../../img/downold.svg';
function Banner({university}) {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner__body">
          <div className="banner__img">
            <img className="banner__imgFon" src={UniversPhoto} alt="" />
            <div className="banner__logo">
              <img src={logoUnivers} alt="" />
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
                  <img src={heart} alt="" />
                  <span className="notMobile">В Избранное</span>
                </div>
                <div className="banner__links-items" id="bell">
                  <img src={bell} alt="" />
                </div>
                <div className="banner__links-items notMobile">
                  <img src={downold} alt="" />
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
