import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './Main.scss';
import Banner from './Banner/Banner';
import Aside from './Aside/Aside';
import MainInformation from './MainInformation/MainInformation';
import Specialization from './Specialization/Specialization';
import {api} from '../../utils/Api';
import AboutUnivers from './AboutUnivers/AboutUnivers';

function Main({universities}) {
  let {id} = useParams();
  
  const university = JSON.parse(localStorage.getItem('university'));
  const [faculties, setFaculties] = useState([]);
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  useEffect(() => {
    if (university) {
      api.getUniversityFaculties(university.id).then(data => {
        data.map(item => {
          let price = Math.round(getRandom(50000, 150000) / 1000) * 1000;
          let score = getRandom(100, 200);
          let place = getRandom(20, 70);
          item.priсe = price;
          item.score = score;
          item.place = place;
        });
        console.log(data);
        setFaculties(data);
      });
    } else {
      console.log(universities.find(f => f.id === id));
      return setUniversity(universities.find(f => f.id === id));
    }
  }, [id]);


  return (
    <main className="main">
      <Banner university={university} />
      <section className="main__body container">
        <Aside />
        <div className="main__content">
          <MainInformation />
          <Specialization faculties={faculties} />
          <AboutUnivers />
        </div>
      </section>
    </main>
  );
}
export default Main;
