import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Modal.scss';

function Modal({isVisable, cities}) {
  const [citiesToRender, setCitiesToRender] = useState(cities);
  useEffect(() => {
    return setCitiesToRender(cities);
  }, [cities]);

  function handleFilteredCities(param) {
    let findCities = cities.filter(item => item.name.toLowerCase().includes(param.toLowerCase()));
    setCitiesToRender(findCities);
  }
  function handleInput(evt) {
    handleFilteredCities(evt.target.value);
  }
  function test(city) {
    localStorage.setItem('city', JSON.stringify(city));
  }
  return (
    <section className={`modal ${isVisable && 'modal_type_isVisable'}`}>
      <input className="modal__search" id="inputHeader" type="text" placeholder="Регион" onChange={handleInput} />
      <div className="modal__city-list">
        {citiesToRender.length > 0 ? (
          citiesToRender.map(city => (
            <Link key={city.id} to={`${city.id}`}>
              <span
                onClick={() => {
                  test(city);
                }}
                key={city.id}>
                {city.name}
              </span>
            </Link>
          ))
        ) : (
          <span>Ничего не найдено</span>
        )}
      </div>
    </section>
  );
}
export default Modal;
