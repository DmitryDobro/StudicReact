import {useState, useEffect} from 'react';
import {Route, Routes, Navigate, useNavigate} from 'react-router-dom';
import './App.css';
import Header from '../Header/Header.jsx';

import {api} from '../../utils/Api.js';
import Region from '../Region/Region.jsx';
function App() {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    api.getCities().then(res => {
      setCities(res[0].areas);
    });
  }, []);

  return (
    <>
      <Header cities={cities} />
      <Routes>
        <Route path="/" element={'asd'} />
        <Route path="/:id" element={<Region cities={cities} />} />
      </Routes>
    </>
  );
}

export default App;
