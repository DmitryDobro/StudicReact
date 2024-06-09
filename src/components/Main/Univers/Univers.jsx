import Banner from './Banner/Banner';
import Aside from './Aside/Aside';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import MainInformation from './MainInformation/MainInformation';
import Specialization from './Specialization/Specialization';
import AboutUnivers from './AboutUnivers/AboutUnivers';
import { api } from '../../../utils/Api';
export default function Univers() {
  const {id} = useParams();
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
        setFaculties(data);
   
      });
    } else {
      return setUniversity(universities.find(f => f.id === id));
    }
  }, [id]);
  return (
    <>
      <Banner university={university} />
      <section className="main__body container">
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
