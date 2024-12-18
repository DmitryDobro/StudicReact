import Banner from './Banner/Banner';
import Aside from './Aside/Aside';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import MainInformation from './MainInformation/MainInformation';
import Specialization from './Specialization/Specialization';
import AboutUnivers from './AboutUnivers/AboutUnivers';
import {api} from '../../../utils/Api';
import './Univers.scss';
import React from 'react';
export default function Univers() {
  const {id} = useParams();
  const university = JSON.parse(localStorage.getItem('university')!);
  // исправить!!!!!
  const [faculties, setFaculties] = useState<any>([]);
  function getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  useEffect(() => {
    api.getUniversityFaculties(university.id).then(data => {
      console.log(data);
      data.map((item: {priсe: number; score: number; place: number}) => {
        let price = Math.round(getRandom(50000, 150000) / 1000) * 1000;
        let score = getRandom(100, 200);
        let place = getRandom(20, 70);
        item.priсe = price;
        item.score = score;
        item.place = place;
      });
      setFaculties(data);
      console.log(faculties);
    });
  }, [id]);

  return (
    <>
      <Banner university={university} />
      <section className="main__body ">
        <Aside />
        <div className="main__content">
          <MainInformation />
          <Specialization faculties={faculties} />
          <AboutUnivers />
        </div>
      </section>
    </>
  );
}
