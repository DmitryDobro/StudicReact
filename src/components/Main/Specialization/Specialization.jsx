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

  function resort(parametr) {
    console.log(facultiesRender);
    setFacultiesRender([...facultiesRender].sort((a, b) => a[parametr] - b[parametr]));
  }

  return (
    <div className="specialization">
      <div className="specialization-header">
        <h2 className="specialization-title boldTxt">Специальности</h2>
        <span className="specialization-subtile smallTxtOS">{`${faculties.length} ${
          faculties.length > 4 ? 'специальностей' : 'специальности'
        } `}</span>
      </div>
      <div className="specialization-filter">
        <ul>
          <span>Сортировать:</span>
          <li>
            <button
              onClick={() => {
                resort('priсe');
              }}
              id="payment">
              по оплате в год
            </button>
          </li>
          <li>
            <button
              id="points"
              onClick={() => {
                resort('score');
              }}>
              по проходному баллу
            </button>
          </li>
          <li>
            <button
              id="places"
              onClick={() => {
                resort('places');
              }}>
              по количеству бюджетных мест
            </button>
          </li>
        </ul>
      </div>
      <div className="specialization-body">
        <div className="specialization-row">
          {facultiesRender.map(faculty => (
            <SpecializationCard faculty={faculty} key={faculty.id} />
          ))}
        </div>
        {facultiesRender.length < faculties.length && (
          <div className="specialization-link">
            <button onClick={addFacultiesRender} className="btn whiteBlue">
              Показать еще специальности
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Specialization;
