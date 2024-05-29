import {useState} from 'react';
import './SpecializationCard.scss';
import cardPhoto from '../../../img/Tech.jpg';
import icon__bank from '../../../img/icon__bank.svg';
import icon__flag from '../../../img/icon__flag.svg';
import icon__bed from '../../../img/icon__bed.svg';
function SpecializationCard({faculty}) {
  // console.log(faculty);
  // function getRandom(min, max) {
  //   return Math.floor(Math.random() * (max - min)) + min;
  // }
  // const [price, setPrice] = useState(Math.round(getRandom(50000, 150000) / 1000) * 1000);
  // const [score, setScore] = useState(getRandom(100, 200));
  // const [place, setPlace] = useState(getRandom(20, 50));
  return (
    <div className="specialization__card">
      <div className="specialization__card-section">
        <img className="specialization__card-photo" src={cardPhoto} alt="" />
      </div>
      <div className="specialization__card-section">
        <div className="specialization-code">бакалавриат · 01.03.00</div>
        <div className="specialization-name">{faculty.name}</div>
        <div className="specialization-format">
          <span>Очно</span>
          <span>Заочно</span>
          <span>Очно-заочно</span>
          <span>Дистанционно</span>
        </div>
        <div className="specialization-description">
          Перечень специализаций институтата/факультета · Перечень направлений/специализаций институтата/факультета · Перечень
          направлений/специализаций институтата/факультета
        </div>
      </div>
      <div className="specialization__card-section">
        <div className="specialization-icons">
          <div className="icon grey">
            <img src={icon__bank} alt="" />
          </div>
          <div className="icon grey">
            <img src={icon__flag} alt="" />
          </div>
          <div className="icon grey">
            <img src={icon__bed} alt="" />
          </div>
        </div>

        <div className="specialization-line">
          <span className="line-text specialization-line_text  smallTxtOS">Бюджетных мест</span>
          <span className="line-text specialization-line_text mediumTxtFormular places">{faculty.place}</span>
        </div>
        <div className="specialization-line">
          <span className="line-text specialization-line_text  smallTxtOS">Проходной балл</span>
          <span className="line-text specialization-line_text points mediumTxtFormular">{faculty.score}</span>
        </div>
        <div className="specialization-line">
          <span className="line-text specialization-line_text  smallTxtOS">Оплата в год</span>
          <span className="line-text specialization-line_text mediumTxtFormular payment">от {faculty.priсe} &#8381;</span>
        </div>
      </div>
    </div>
  );
}
export default SpecializationCard;
