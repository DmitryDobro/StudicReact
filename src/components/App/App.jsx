import {useState, useEffect} from 'react';
import {Route, Routes, Navigate, useNavigate} from 'react-router-dom';
import './App.css';
import Header from '../Header/Header.jsx';

import {api} from '../../utils/Api.js';
import Region from '../Region/Region.jsx';
import Main from '../Main/Main.jsx';
import Lead from '../Lead/Lead.jsx';
import Footer from '../Footer/Footer.jsx';
function App() {
  const [cities, setCities] = useState([]);
  const [modaUniversitiesListVisable, setModalUniversitiesListVisable] = useState(false);
  const [universities, setUniversities] = useState([]);
  useEffect(() => {
    api.getCities().then(res => {
      setCities(res[0].areas);
    });
  }, []);
  
  function findUniversities(params) {
    if (params.length >= 3) {
      setModalUniversitiesListVisable(true);
      api.getUniversity(params).then(res => setUniversities(res.items));
    } else {
      setModalUniversitiesListVisable(false);
    }
  }
  function closeModal() {
    setModalUniversitiesListVisable(false);
  }
  return (
    <>
      <Header
        cities={cities}
        findUniversities={findUniversities}
        modaUniversitiesListVisable={modaUniversitiesListVisable}
        universities={universities}
        closeModal={closeModal}
      />

      <Routes>
        <Route path="/" element={<Lead />} />
        <Route path="/univers/:id" element={<Main universities={universities} />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
