import {useState} from 'react';
import './SpecializationCard.scss';
import cardPhoto from '../../../../img/Tech.jpg';
import icon__bank from '../../../../img/icon__bank.svg';
import icon__flag from '../../../../img/icon__flag.svg';
import icon__bed from '../../../../img/icon__bed.svg';
function SpecializationCard({faculty}) {

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
        <div className="specialization__icons">
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
        <div className="specialization__card-stats">
          <span className="specialization__card-stats-name smallTxtOS">Бюджетных мест</span>
          <span className="specialization__card-stats-number  mediumTxtFormular places">{faculty.place}</span>
        </div>
        <div className="specialization__card-stats">
          <span className="specialization__card-stats-name smallTxtOS">Проходной балл</span>
          <span className="specialization__card-stats-number points mediumTxtFormular">{faculty.score}</span>
        </div>
        <div className="specialization__card-stats">
          <span className="specialization__card-stats-name smallTxtOS">Оплата в год</span>
          <span className="specialization__card-stats-number mediumTxtFormular payment">от {faculty.priсe} &#8381;</span>
        </div>
      </div>
    </div>
  );
}
export default SpecializationCard;
