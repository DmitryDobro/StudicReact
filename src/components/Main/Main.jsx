import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './Main.scss';
import Banner from './Banner/Banner';
import Aside from './Aside/Aside';
import MainInformation from './MainInformation/MainInformation';
import Specialization from './Specialization/Specialization';
import {api} from '../../utils/Api';
function Main({universities}) {
  let universityFromLocalStorage = JSON.parse(localStorage.getItem('university'));
  let {id} = useParams();
  const [university, setUniversity] = useState(universityFromLocalStorage);
  const [faculties, setFaculties] = useState([]);
  useEffect(() => {
    if (universityFromLocalStorage) {
      setUniversity(universityFromLocalStorage);
      api.getUniversityFaculties(university.id).then(res => setFaculties(res));
      console.log(universities.find(f => f.id === id));
    } else {
      console.log(universities.find(f => f.id === id));
      return setUniversity(universities.find(f => f.id === id));
    }
  }, [id]);

  return (
    <main className="main">
      <Banner university={university} />
      <section class="main__body container">
        <Aside />
        <div class="main__content">
          <MainInformation />
          <Specialization faculties={faculties} />
        </div>
      </section>
    </main>
  );
}
export default Main;
