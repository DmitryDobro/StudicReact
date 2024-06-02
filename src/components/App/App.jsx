import {useState, useEffect} from 'react';
import './App.css';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import {api} from '../../utils/Api.js';
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
      console.log(universities);
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
      <Main></Main>
      {/* <section class="mobile-menu">
        <div class="mobile-menu_conteiner">
          <div class="mobile-menu_content">

          </div>
          <span class="close">&#10006;</span>
        </div>
      </section> */}
      <Footer></Footer>
    </>
  );
}

export default App;
