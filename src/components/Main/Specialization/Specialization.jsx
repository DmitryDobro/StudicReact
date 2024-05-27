import './Specialization.scss';
import {useState, useEffect, useMemo} from 'react';
import SpecializationCard from './SpecializationCard';
function Specialization({faculties}) {
  const [facultiesRender, setFacultiesRender] = useState([]);
  const [addMore, setAddMore] = useState(5);

  useEffect(() => {
    setFacultiesRender(faculties.slice(0, addMore));
  }, [faculties, addMore]);

  function addFacultiesRender() {
    setAddMore(addMore + 5);
    setFacultiesRender(faculties.slice(0, addMore));
  }

  function resort(selector, parametr) {
    const nodeList = document.querySelectorAll(selector);
    const dict = {};
    const parent = nodeList[0].parentNode;
    nodeList.forEach(node => {
      const key = node.querySelector(parametr).innerText.trim().replace(/\D/g, '');
      dict[key] = node;
    });
    const keys = Object.keys(dict);
    // console.log(keys);
    // console.log(Object.keys(dict));
    keys.sort((a, b) => a - b).forEach(k => parent.appendChild(dict[k]));
  }

  return (
    <div class="specialization">
      <div class="specialization-header">
        <h2 class="specialization-title boldTxt">Специальности</h2>
        <span class="specialization-subtile smallTxtOS">{`${faculties.length} ${
          faculties.length > 4 ? 'специальностей' : 'специальности'
        } `}</span>
      </div>
      <div class="specialization-filter">
        <ul>
          <span>Сортировать:</span>
          <li>
            <button
              onClick={() => {
                resort('.specialization__card', '.payment');
              }}
              id="payment">
              по оплате в год
            </button>
          </li>
          <li>
            <button id="2">по отзывам</button>
          </li>
          <li>
            <button
              id="points"
              onClick={() => {
                resort('.specialization__card', '.points');
              }}>
              по проходному баллу
            </button>
          </li>
          <li>
            <button id="places">по количеству бюджетных мест</button>
          </li>
        </ul>
      </div>
      <div class="specialization-body">
        <div class="specialization-row">
          {facultiesRender.map(faculty => (
            <SpecializationCard faculty={faculty} key={faculty.id} />
          ))}
        </div>
        {facultiesRender.length < faculties.length && (
          <div class="specialization-link">
            <button onClick={addFacultiesRender} class="btn whiteBlue">
              Показать еще специальности
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Specialization;
