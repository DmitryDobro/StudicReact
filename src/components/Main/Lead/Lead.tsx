import React from 'react';
import './Lead.scss';
import {fon} from '../../../img/_img';
import ModalUserInfo from '../../Modals/ModalUserInfo';
export default function Lead() {
  return (
    <section className="lead">
      <div className="lead__information">
        <h1 className="lead__title">Студика</h1>
        <h3 className="lead__subtitle">Сервис по подбору институтов, колледжей и других учебных заведений</h3>
      </div>
      <img className="lead__img" src={fon} alt="" />
     
    </section>
  );
}
