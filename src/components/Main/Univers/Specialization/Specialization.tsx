import './Specialization.scss';
import {useState, useEffect} from 'react';
import SpecializationCard from './SpecializationCard';
import React from 'react';
interface SpecializationProps {
  faculties: [{name: string; place: number; score: number; priсe: number}];
}
function Specialization({faculties}: SpecializationProps) {
  const [facultiesRender, setFacultiesRender] = useState([{}]);
  const [addMore, setAddMore] = useState(5);
  useEffect(() => {
    setFacultiesRender(faculties.slice(0, addMore));
  }, [faculties, addMore]);

  function addFacultiesRender() {
    setAddMore(addMore + 5);
    setFacultiesRender(faculties.slice(0, addMore));
  }

  function resort(parametr: string) {
    setFacultiesRender(
      [...facultiesRender].sort((a: {[index: string]: number}, b: {[index: string]: number}) => a[parametr] - b[parametr])
    );
  }

  return (
    <div className="specialization">
      <div className="specialization-header">
        <h2 className="specialization-title boldTxt">Специальности</h2>
        <span className="specialization-subtile smallTxtOS">{`${faculties.length} ${
          faculties.length == 1 ? 'специальность' : faculties.length > 4 || faculties.length == 0 ? 'специальностей' : 'специальности'
        } `}</span>
      </div>
      <div className="specialization-filter">
        {Number(faculties) == 0 ? (
          ''
        ) : (
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
                  resort('place');
                }}>
                по количеству бюджетных мест
              </button>
            </li>
          </ul>
        )}
      </div>
      <div className="specialization-body">
        <div className="specialization-row">
          {facultiesRender.map((faculty, index) => (
            <SpecializationCard key={index} faculty={faculty} />
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
