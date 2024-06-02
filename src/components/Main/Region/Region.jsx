import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Aside from '../Univers/Aside/Aside';
import './Region.scss';
function Region({cities}) {
  const cityFromLocalStorage = JSON.parse(localStorage.getItem('city'));
  let {Regionid} = useParams();
  const [city, setCity] = useState({});
  useEffect(() => {
    if (cityFromLocalStorage) {
      return setCity(cityFromLocalStorage);
    } else {
      return setCity(cities.find(f => f.id === id));
    }
  }, [Regionid]);
  //   const city = React.useMemo(() => {
  //     if (cityFromLocalStorage) {
  //       return cityFromLocalStorage;
  //     } else {
  //       return cities.find(f => f.id === id);
  //     }
  //   });

  return (
    <section className="region container">
      <div className="region__body">
        <Aside />
        <div className="region__card-list">
          <div className="region__card">
            <h2 className="region__title">Список институтов в {city.name}</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Region;
