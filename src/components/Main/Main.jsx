import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Route, Routes, Navigate, useNavigate} from 'react-router-dom';
import './Main.scss';
import Univers from './Univers/Univers.jsx';
import Lead from './Lead/Lead.jsx';
import Region from './Region/Region.jsx';

import {api} from '../../utils/Api.js';

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
        setFaculties(data);
      });
    } else {
      return setUniversity(universities.find(f => f.id === id));
    }
  }, [id]);

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Lead />} />
        <Route path="/univers/:id/*" element={<Univers university={university} faculties={faculties} />} />
        <Route path="/region/:Regionid" element={<Region />} />
      </Routes>
    </main>
  );
}
export default Main;
