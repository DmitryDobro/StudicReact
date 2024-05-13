import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
function Region({cities}) {
  let cityFromLocalStorage = JSON.parse(localStorage.getItem('city'));
  let {id} = useParams();
  const [city, setCity] = useState({});
  useEffect(() => {
    if (cityFromLocalStorage) {
      return setCity(cityFromLocalStorage);
    } else {
      return setCity(cities.find(f => f.id === id));
    }
  }, [id]);
  //   const city = React.useMemo(() => {
  //     if (cityFromLocalStorage) {
  //       return cityFromLocalStorage;
  //     } else {
  //       return cities.find(f => f.id === id);
  //     }
  //   });

  return (
    <span>
      <p>{city.name}</p>
    </span>
  );
}
export default Region;
